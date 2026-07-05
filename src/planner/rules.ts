// 备考规划器 · 纯规则引擎（无 LLM、无后端，全部确定性 if-then）
// 输入一张 form → 象限 / 配分表 / 缺口 / 预计周期 / 优先级 / 每周配方。
// 所有判定逻辑集中在此文件，UI 只负责渲染。诚实前提：这是「自评估算」，
// 真实分数以全真模考为准——见 explainer 文案。

export type Skill = 'listening' | 'reading' | 'writing' | 'speaking'
export const SKILLS: Skill[] = ['listening', 'reading', 'writing', 'speaking']
export const SKILL_ZH: Record<Skill, string> = {
  listening: '听力', reading: '阅读', writing: '写作', speaking: '口语',
}
export type Bands = Record<Skill, number>

export type Hours = 'low' | 'mid' | 'high' | 'sprint' // <5h / 5–10h / 10–25h / >25h 每周

export interface PlannerInput {
  target: number                 // 目标总分 5.5 ~ 7.5，步进 0.5
  weeksAvailable: number | null  // 距考试的周数；null = 还没定
  hours: Hours
  current: Bands                 // 四项现状（真实分 或 自评映射后的 band）
}

// —— 自评四档 → band 锚点（没考过雅思时用）——————————————————
export const SELF_LEVELS = [
  { key: 'a', label: '几乎零基础 / 很吃力', band: 4.5 },
  { key: 'b', label: '能应付日常、简单材料', band: 5.5 },
  { key: 'c', label: '能处理工作 / 学习内容', band: 6.5 },
  { key: 'd', label: '很轻松 / 接近母语', band: 7.5 },
] as const

// —— 目标总分 → 四项配分表（§04 的 +0.5 / −0.5 规律）———————————
const clampBand = (b: number) => Math.max(4, Math.min(9, b))
export function targetScorecard(target: number): Bands {
  const hi = clampBand(target + 0.5) // 听、读：确定性的分，顶高
  const lo = clampBand(target - 0.5) // 写、说：守住的分，兜底
  return { listening: hi, reading: hi, writing: lo, speaking: lo }
}

// —— 雅思总分取整：均分 .25 进半档、.75 进整档 ————————————————
export function overallRound(avg: number): number {
  const base = Math.floor(avg * 2) / 2 // 靠下的半档
  return avg - base < 0.25 ? base : base + 0.5
}
export function overall(b: Bands): number {
  return overallRound((b.listening + b.reading + b.writing + b.speaking) / 4)
}

// —— 象限：输入端(听读) × 输出端(说写)，相对目标判「强/弱」——————
export type QuadrantKey = 'ahead' | 'input' | 'reversal' | 'starter'
export interface Quadrant {
  key: QuadrantKey
  title: string
  strategy: string
  inputStrong: boolean
  outputStrong: boolean
}
export function quadrant(cur: Bands, target: number): Quadrant {
  const inputCur = (cur.listening + cur.reading) / 2
  const outputCur = (cur.speaking + cur.writing) / 2
  const inputStrong = inputCur >= target            // 听读已够到目标总分
  const outputStrong = outputCur >= target - 0.5     // 说写已够到说写目标线
  let key: QuadrantKey, title: string, strategy: string
  if (inputStrong && outputStrong) {
    key = 'ahead'; title = '领先型'
    strategy = '两端都在线。剩下的事不是补基础，而是把听读的确定性分吃满、把说写从「守住」再往上顶半档。你更需要的是限时模考和打磨，而非从头练。'
  } else if (inputStrong && !outputStrong) {
    key = 'input'; title = '技术输入型'
    strategy = '典型的「读得懂、说不出」。战术就是田忌赛马：靠听读拿分，说写早开工、稳稳守住下限。多数技术背景的考生都在这一象限。'
  } else if (!inputStrong && outputStrong) {
    key = 'reversal'; title = '反差型'
    strategy = '少见——输出还行，但听读拖了后腿。先补听读这块「确定性的分」，它回报最快、最线性，是性价比最高的提分位。'
  } else {
    key = 'starter'; title = '起步型'
    strategy = '四项地基都还薄，别急着冲高分。拉长周期：先用听读建立确定性分数，同时每天开口，别让说写彻底荒废。'
  }
  return { key, title, strategy, inputStrong, outputStrong }
}

// —— 缺口 —————————————————————————————————————————————
export function gaps(cur: Bands, tgt: Bands): Bands {
  return {
    listening: Math.max(0, tgt.listening - cur.listening),
    reading: Math.max(0, tgt.reading - cur.reading),
    writing: Math.max(0, tgt.writing - cur.writing),
    speaking: Math.max(0, tgt.speaking - cur.speaking),
  }
}

// —— 预计周期：各项并行训练，取「最慢那项」的耗时为约束 ————————
// 每提 0.5 档所需周数：听读快、说写慢（说写是最难涨项）。
const COST_PER_HALF: Record<Skill, number> = {
  listening: 2, reading: 2, writing: 4, speaking: 3.5,
}
// sprint 不按小时线性外推：说写受「写一批→复盘一批」的反馈节奏约束，
// 全职强度主要压缩听读周期，所以只比 high 再快两成。
const HOURS_FACTOR: Record<Hours, number> = { low: 1.4, mid: 1, high: 0.8, sprint: 0.6 }
const FLOOR_WEEKS = 4 // 即便零缺口，也需要熟悉机考格式 + 至少一轮模考

export function weeksNeeded(g: Bands, hours: Hours): number {
  const perSkill = SKILLS.map((s) => (g[s] / 0.5) * COST_PER_HALF[s])
  const raw = Math.max(FLOOR_WEEKS, ...perSkill) * HOURS_FACTOR[hours]
  return Math.ceil(raw)
}

export type Feasibility = 'unknown' | 'ample' | 'tight' | 'over'
export function feasibility(need: number, available: number | null): Feasibility {
  if (available == null) return 'unknown'
  const r = need / available
  if (r <= 0.85) return 'ample'
  if (r <= 1.15) return 'tight'
  return 'over'
}

// —— 优先级：分两桶。听读=快回报先冲；说写=慢、runway 长要早开工 ——
export interface Priority {
  fast: Skill[] // 输入端有缺口：快、线性回报，先吃满
  slow: Skill[] // 输出端有缺口：慢，越早开工越好
}
export function priority(g: Bands): Priority {
  const has = (s: Skill) => g[s] > 0
  const byGap = (a: Skill, b: Skill) => g[b] - g[a]
  return {
    fast: (['listening', 'reading'] as Skill[]).filter(has).sort(byGap),
    slow: (['writing', 'speaking'] as Skill[]).filter(has).sort(byGap),
  }
}

// —— 每周时间配方：按缺口 × 难度权重分配，弱项有维持底座 ————————
const DIFF_WEIGHT: Record<Skill, number> = {
  listening: 1, reading: 1, writing: 1.3, speaking: 1.3,
}
const MAINTAIN_BASE = 0.4
export function weeklySplit(g: Bands): Record<Skill, number> {
  const raw = SKILLS.reduce((acc, s) => {
    acc[s] = g[s] * DIFF_WEIGHT[s] + MAINTAIN_BASE
    return acc
  }, {} as Record<Skill, number>)
  const sum = SKILLS.reduce((t, s) => t + raw[s], 0)
  return SKILLS.reduce((acc, s) => {
    acc[s] = Math.round((raw[s] / sum) * 100)
    return acc
  }, {} as Record<Skill, number>)
}

// —— 缺口最大项 → 推荐先读的章节（深链）————————————————————
const SKILL_CHAPTER: Record<Skill, { slug: string; label: string }> = {
  listening: { slug: 'listening', label: '06 听力：定位与同义替换' },
  reading: { slug: 'reading-tfng', label: '08 阅读：T/F/NG 的分界线' },
  writing: { slug: 'writing-overview', label: '11 写作：两个 Task 与四个维度' },
  speaking: { slug: 'speaking', label: '10 口语：框架与素材库' },
}
export function recommendedChapters(g: Bands): { slug: string; label: string }[] {
  const gapped = SKILLS.filter((s) => g[s] > 0).sort((a, b) => g[b] - g[a])
  const picks = gapped.map((s) => SKILL_CHAPTER[s])
  // 缺口章节在前，永远兜上「配分表 / 训练闭环 / 十周计划」这三块方法论
  return [
    ...picks,
    { slug: 'score-arithmetic', label: '04 分数是凑出来的（配分逻辑）' },
    { slug: 'the-training-loop', label: '14 诊断 → 处方 → 复训' },
    { slug: 'ten-week-plan', label: '15 十周计划与每周配方' },
  ]
}

// —— 一次算完，交给 UI 渲染 ————————————————————————————
export interface PlannerResult {
  current: Bands
  overallNow: number
  targetCard: Bands
  quadrant: Quadrant
  gaps: Bands
  totalGap: number
  weeksNeeded: number
  feasibility: Feasibility
  priority: Priority
  weeklySplit: Record<Skill, number>
  chapters: { slug: string; label: string }[]
}

export function analyze(input: PlannerInput): PlannerResult {
  const targetCard = targetScorecard(input.target)
  const g = gaps(input.current, targetCard)
  const need = weeksNeeded(g, input.hours)
  return {
    current: input.current,
    overallNow: overall(input.current),
    targetCard,
    quadrant: quadrant(input.current, input.target),
    gaps: g,
    totalGap: SKILLS.reduce((t, s) => t + g[s], 0),
    weeksNeeded: need,
    feasibility: feasibility(need, input.weeksAvailable),
    priority: priority(g),
    weeklySplit: weeklySplit(g),
    chapters: recommendedChapters(g),
  }
}
