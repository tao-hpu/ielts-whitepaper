import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  SKILLS, SKILL_ZH, SELF_LEVELS, analyze,
  type Skill, type Bands, type Hours, type PlannerResult, type Feasibility,
} from '../planner/rules'
import './planner.css'

const BAND_OPTIONS = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9]
const TARGET_OPTIONS = [5.5, 6, 6.5, 7, 7.5]
const TIMEFRAMES: { key: string; label: string; weeks: number | null }[] = [
  { key: 'm1', label: '不到 1 个月', weeks: 3 },
  { key: 'm12', label: '1–2 个月', weeks: 7 },
  { key: 'm23', label: '2–3 个月', weeks: 11 },
  { key: 'm3', label: '3 个月以上', weeks: 16 },
  { key: 'none', label: '还没定考期', weeks: null },
]
const HOURS_OPTIONS: { key: Hours; label: string }[] = [
  { key: 'low', label: '每周 < 5 小时' },
  { key: 'mid', label: '每周 5–10 小时' },
  { key: 'high', label: '每周 > 10 小时' },
]

type Mode = 'taken' | 'self'

export function Planner() {
  const [mode, setMode] = useState<Mode>('self')
  const [target, setTarget] = useState(6.5)
  const [timeframe, setTimeframe] = useState('m23')
  const [hours, setHours] = useState<Hours>('mid')
  // 考过：直接填 band；没考过：填自评档位 key
  const [taken, setTaken] = useState<Bands>({ listening: 6, reading: 6.5, writing: 5.5, speaking: 5.5 })
  const [self, setSelf] = useState<Record<Skill, string>>({
    listening: 'b', reading: 'c', writing: 'b', speaking: 'a',
  })
  const [result, setResult] = useState<PlannerResult | null>(null)

  const run = () => {
    const current: Bands = mode === 'taken'
      ? taken
      : SKILLS.reduce((acc, s) => {
          acc[s] = SELF_LEVELS.find((l) => l.key === self[s])!.band
          return acc
        }, {} as Bands)
    const weeksAvailable = TIMEFRAMES.find((t) => t.key === timeframe)!.weeks
    setResult(analyze({ target, weeksAvailable, hours, current }))
    // 结果区滚入视野
    requestAnimationFrame(() => {
      document.getElementById('planner-result')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <div className="page planner">
      <div className="masthead">
        <div className="kicker">Self-assessment · 备考规划器</div>
        <h1>你在什么象限，该练多久？</h1>
        <p className="lede">
          填五个问题，纯规则算出你的<b>四项象限</b>、<b>目标配分表</b>、<b>预计周期</b>和<b>每周配方</b>。
          没有模型、没有联网——所有判定都是明摆着的算术。
        </p>
      </div>

      <div className="note gold" style={{ marginTop: 18 }}>
        <span className="note-tag">✎ 先说清楚</span>
        这是<b>自评估算，不是测分</b>。一张 form 量不出真实 band，只能照你填的粗估方向。
        真实分数以<b>全真模考</b>为准——这份结果用来定方向、排周期，别拿它当成绩单。
      </div>

      {/* ── 表单 ─────────────────────────────────────────── */}
      <section className="pl-form">
        <h2><span className="h2-en">Your inputs</span>五个问题</h2>

        <div className="pl-field">
          <label>1 · 你的目标总分</label>
          <div className="pl-chips">
            {TARGET_OPTIONS.map((t) => (
              <button key={t} type="button"
                className={`pl-chip ${target === t ? 'on' : ''}`}
                onClick={() => setTarget(t)}>{t.toFixed(1)}</button>
            ))}
          </div>
        </div>

        <div className="pl-field">
          <label>2 · 距离考试还有多久</label>
          <div className="pl-chips">
            {TIMEFRAMES.map((t) => (
              <button key={t.key} type="button"
                className={`pl-chip ${timeframe === t.key ? 'on' : ''}`}
                onClick={() => setTimeframe(t.key)}>{t.label}</button>
            ))}
          </div>
        </div>

        <div className="pl-field">
          <label>3 · 每周能投入多少时间</label>
          <div className="pl-chips">
            {HOURS_OPTIONS.map((h) => (
              <button key={h.key} type="button"
                className={`pl-chip ${hours === h.key ? 'on' : ''}`}
                onClick={() => setHours(h.key)}>{h.label}</button>
            ))}
          </div>
        </div>

        <div className="pl-field">
          <label>4 · 现在的水平怎么估</label>
          <div className="pl-chips">
            <button type="button" className={`pl-chip ${mode === 'self' ? 'on' : ''}`}
              onClick={() => setMode('self')}>没考过，自评</button>
            <button type="button" className={`pl-chip ${mode === 'taken' ? 'on' : ''}`}
              onClick={() => setMode('taken')}>考过雅思，填分</button>
          </div>
        </div>

        <div className="pl-field">
          <label>5 · 四项现状</label>
          <div className="pl-skills">
            {SKILLS.map((s) => (
              <div className="pl-skill" key={s}>
                <span className="pl-skill-k">{SKILL_ZH[s]}</span>
                {mode === 'taken' ? (
                  <select value={taken[s]}
                    onChange={(e) => setTaken({ ...taken, [s]: Number(e.target.value) })}>
                    {BAND_OPTIONS.map((b) => <option key={b} value={b}>{b.toFixed(1)}</option>)}
                  </select>
                ) : (
                  <select value={self[s]}
                    onChange={(e) => setSelf({ ...self, [s]: e.target.value })}>
                    {SELF_LEVELS.map((l) => <option key={l.key} value={l.key}>{l.label}</option>)}
                  </select>
                )}
              </div>
            ))}
          </div>
        </div>

        <button type="button" className="pl-run" onClick={run}>
          算一算 <span className="arrow">→</span>
        </button>
      </section>

      {result && <Result r={result} target={target} />}
    </div>
  )
}

// ── 结果 ───────────────────────────────────────────────────
const FEAS: Record<Feasibility, { tone: string; label: string; note: string }> = {
  ample: { tone: 'ok', label: '时间充裕', note: '按这个周期走，还有余量做多轮模考。' },
  tight: { tone: 'warn', label: '有点紧', note: '可行，但每周别掉链子，弱项要早开工。' },
  over: { tone: 'bad', label: '偏紧张', note: '预计周期超过你剩的时间——要么加大每周投入，要么把考期往后挪（这也是为什么建议同时报一个备用场）。' },
  unknown: { tone: 'mut', label: '先定考期', note: '把考试日期定下来，才能算够不够——建议现在就报名。' },
}

function Result({ r, target }: { r: PlannerResult; target: number }) {
  const feas = FEAS[r.feasibility]
  // 象限图坐标：x=输入端(听读)，y=输出端(说写)，band 4→9 映射 0→100%
  const inputCur = (r.current.listening + r.current.reading) / 2
  const outputCur = (r.current.speaking + r.current.writing) / 2
  const x = ((inputCur - 4) / 5) * 100
  const y = (1 - (outputCur - 4) / 5) * 100

  return (
    <div id="planner-result" className="pl-result">
      <h2><span className="h2-en">Your read-out</span>算出来的分析</h2>
      <p className="pl-nowat">
        按你填的，现状约 <b>Overall {r.overallNow.toFixed(1)}</b>，目标 <b>{target.toFixed(1)}</b>。
      </p>

      {/* 象限 */}
      <div className="pl-block">
        <div className="pl-block-h">你的象限 · <span className="pl-quad-name">{r.quadrant.title}</span></div>
        <div className="pl-quad-wrap">
          <div className="pl-quad" role="img"
            aria-label={`象限图：输入端 ${inputCur.toFixed(1)}，输出端 ${outputCur.toFixed(1)}，${r.quadrant.title}`}>
            <span className="pl-axis pl-axis-y">输出端 · 说写</span>
            <span className="pl-axis pl-axis-x">输入端 · 听读</span>
            <div className={`pl-cell tl ${r.quadrant.key === 'reversal' ? 'active' : ''}`}><span>反差型</span></div>
            <div className={`pl-cell tr ${r.quadrant.key === 'ahead' ? 'active' : ''}`}><span>领先型</span></div>
            <div className={`pl-cell bl ${r.quadrant.key === 'starter' ? 'active' : ''}`}><span>起步型</span></div>
            <div className={`pl-cell br ${r.quadrant.key === 'input' ? 'active' : ''}`}><span>技术输入型</span></div>
            <span className="pl-dot" style={{ left: `${x}%`, top: `${y}%` }} />
          </div>
          <p className="pl-quad-strat">{r.quadrant.strategy}</p>
        </div>
      </div>

      {/* 配分表 + 缺口 */}
      <div className="pl-block">
        <div className="pl-block-h">目标配分表与缺口</div>
        <div className="table-x">
          <table className="ledger">
            <thead>
              <tr><th>项目</th><th className="num">现状</th><th className="num">目标</th><th className="num">缺口</th><th>怎么对待</th></tr>
            </thead>
            <tbody>
              {SKILLS.map((s) => {
                const g = r.gaps[s]
                const isInput = s === 'listening' || s === 'reading'
                return (
                  <tr key={s} className={g > 0 ? '' : 'total'}>
                    <td><strong>{SKILL_ZH[s]}</strong></td>
                    <td className="num">{r.current[s].toFixed(1)}</td>
                    <td className="num"><span className="score hi">{r.targetCard[s].toFixed(1)}</span></td>
                    <td className="num">{g > 0 ? <span className="pl-gap">+{g.toFixed(1)}</span> : '✓'}</td>
                    <td>{g > 0
                      ? (isInput ? '确定性分，回报快——先吃满' : '难涨项，越早开工越好')
                      : '已达标，维持手感即可'}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className="pl-fine">配分表来自 §04：听读 = 目标 + 0.5，说写 = 目标 − 0.5。四项平均正好落在目标分。</p>
      </div>

      {/* 周期 */}
      <div className="pl-block">
        <div className="pl-block-h">预计周期</div>
        <div className="pl-weeks">
          <div className="pl-weeks-big">{r.weeksNeeded}<span>周</span></div>
          <div className={`pl-feas ${feas.tone}`}>
            <span className="pl-feas-badge">{feas.label}</span>
            <span className="pl-feas-note">{feas.note}</span>
          </div>
        </div>
        <p className="pl-fine">按「各项并行训练、取最慢那项」估算，已计入你的每周投入。零缺口也至少留 4 周熟悉机考格式 + 模考。</p>
      </div>

      {/* 优先级 */}
      {(r.priority.fast.length > 0 || r.priority.slow.length > 0) && (
        <div className="pl-block">
          <div className="pl-block-h">先练什么（田忌赛马）</div>
          <div className="pl-prio">
            <div className="pl-prio-col">
              <div className="pl-prio-k fast">① 先冲 · 快回报</div>
              {r.priority.fast.length
                ? r.priority.fast.map((s) => <div key={s} className="pl-prio-item">{SKILL_ZH[s]} <span>听读，练透定位与同义替换直接拉分</span></div>)
                : <div className="pl-prio-none">听读已达标，维持即可</div>}
            </div>
            <div className="pl-prio-col">
              <div className="pl-prio-k slow">② 早开工 · 慢守住</div>
              {r.priority.slow.length
                ? r.priority.slow.map((s) => <div key={s} className="pl-prio-item">{SKILL_ZH[s]} <span>最难涨，runway 长，今天就开始积累</span></div>)
                : <div className="pl-prio-none">说写已达标，保持批改手感</div>}
            </div>
          </div>
        </div>
      )}

      {/* 每周配方 */}
      <div className="pl-block">
        <div className="pl-block-h">每周时间配方</div>
        <div className="pl-bars">
          {SKILLS.map((s) => (
            <div className="pl-bar-row" key={s}>
              <span className="pl-bar-k">{SKILL_ZH[s]}</span>
              <div className="pl-bar-track"><div className="pl-bar-fill" style={{ width: `${r.weeklySplit[s]}%` }} /></div>
              <span className="pl-bar-v">{r.weeklySplit[s]}%</span>
            </div>
          ))}
        </div>
        <p className="pl-fine">按缺口 × 难度加权分配，弱项留维持底座。口语无论占比多少，都建议<b>每天出声</b>——它是最容易被拖延的一项。</p>
      </div>

      {/* 下一步 */}
      <div className="pl-block">
        <div className="pl-block-h">照这个顺序开始读</div>
        <ul className="pl-links">
          {r.chapters.map((c) => (
            <li key={c.slug}><Link to={`/ch/${c.slug}`}>{c.label} <span className="arrow">→</span></Link></li>
          ))}
        </ul>
      </div>

      <div className="note" style={{ marginTop: 26 }}>
        <span className="note-tag">✎ 下一步</span>
        方向有了，就<b>报名把考期钉死</b>（顺手报一个备用场），然后做一次全真模考校准这里的估算。
        进步不在做新题，在改对旧错——见 <Link to="/ch/the-training-loop">§14 训练闭环</Link>。
      </div>
    </div>
  )
}
