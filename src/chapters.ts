// 全站唯一的章节清单 —— 首页大纲、顶栏、上一页/下一页、prerender 都从这里读。
// 加新章节 = 往这里加一条 + 写对应页面组件 + 在 App.tsx 挂一条路由。
//
// 整条线索：雅思不是一场英语考试，是一套可以被逆向工程的评分系统。
// 从「认识考试」→「分数的逆向工程」→「听读：确定性的分」→「说写：守住的分」→「怎么练」。

export type ChapterStatus = 'live' | 'planned'

export interface Chapter {
  slug: string        // 路由：/ch/<slug>
  num: string         // 节号，如 "08"
  title: string
  hook: string        // 这一节回答的问题
  bridge: string      // 「这一节帮你拿的分 / 对标哪条标准」
  status: ChapterStatus
  core?: boolean      // 是否在「过河最短主线」上（首页打 ★）
}

export interface Part {
  name: string
  blurb: string
  chapters: Chapter[]
}

export const parts: Part[] = [
  {
    name: '第一部分 · 认识这场考试',
    blurb: '先看清雅思到底是什么、分怎么给。',
    chapters: [
      { slug: 'what-is-ielts', num: '01', title: '什么是雅思', hook: 'IELTS 到底考什么？一张表看全四项', bridge: '四项 · 总时长约 2h45m', status: 'live', core: true },
      { slug: 'the-band-scale', num: '02', title: '九分制这把尺', hook: '0–9 分、每 0.5 一档，总分怎么算？', bridge: '总分 = 四项平均，进到半档', status: 'live', core: true },
      { slug: 'how-examiners-score', num: '03', title: '考官怎么打分', hook: '听读靠换算，说写靠四个维度——分数不是玄学', bridge: 'band descriptors 逐条勾选', status: 'live', core: true },
    ],
  },
  {
    name: '第二部分 · 分数的逆向工程',
    blurb: '总分是平均分，于是拿分有最优解。',
    chapters: [
      { slug: 'score-arithmetic', num: '04', title: '分数是凑出来的', hook: '目标分该怎么配分？田忌赛马，别平均发力', bridge: '6.0 / 6.5 / 7.0 三张配分表', status: 'live', core: true },
      { slug: 'the-paraphrase-chain', num: '05', title: '焊住四项的同义替换链', hook: '听说读写不是四门课，共享一条底层链', bridge: '输入识别 → 输出产出', status: 'live', core: true },
    ],
  },
  {
    name: '第三部分 · 听与读：确定性的分',
    blurb: '客观题、可短期拉分，先把这两项吃满。',
    chapters: [
      { slug: 'listening', num: '06', title: '听力：定位与同义替换', hook: '听懂了却丢分？问题在定位和拼写', bridge: '目标 Band 7', status: 'live' },
      { slug: 'reading-overview', num: '07', title: '阅读：题型地图与配速', hook: '60 分钟 3 篇 40 题，时间怎么分？', bridge: '目标 Band 7', status: 'live' },
      { slug: 'reading-tfng', num: '08', title: '阅读：T/F/NG 的分界线', hook: '把 Not Given 当 False，是丢分头号原因', bridge: '最区分水平的题型', status: 'live', core: true },
      { slug: 'reading-matching', num: '09', title: '阅读：Matching 与段落定位', hook: 'Matching Headings 的反向陷阱怎么破？', bridge: '目标 Band 7', status: 'live' },
    ],
  },
  {
    name: '第四部分 · 说与写：守住的分',
    blurb: '主观评分、最难涨，目标是稳稳守住 6。',
    chapters: [
      { slug: 'speaking', num: '10', title: '口语：框架与素材库', hook: '别背模板——考官一听一个准', bridge: '目标 Band 6', status: 'live' },
      { slug: 'writing-overview', num: '11', title: '写作：两个 Task 与四个维度', hook: 'Task 2 权重更高，时间和结构都要留够', bridge: '目标 Band 6', status: 'live' },
      { slug: 'writing-task1', num: '12', title: '写作 Task 1：图表语言库', hook: '趋势、比较、数据——描述图表的固定表达', bridge: '目标 Band 6', status: 'live' },
      { slug: 'writing-task2', num: '13', title: '写作 Task 2：论证结构范式', hook: '立场 → 论点 → 例证 → 让步的四段骨架', bridge: '目标 Band 6', status: 'live' },
    ],
  },
  {
    name: '第五部分 · 怎么练，怎么上考场',
    blurb: '方法只有一个闭环，外加一张日程表。',
    chapters: [
      { slug: 'the-training-loop', num: '14', title: '诊断 → 处方 → 复训', hook: '进步不在做新题，在改对旧错', bridge: '个人错题指纹', status: 'live', core: true },
      { slug: 'ten-week-plan', num: '15', title: '十周计划与每周配方', hook: '从搭框架到全真模考，十周怎么排', bridge: '每周训练清单', status: 'live' },
      { slug: 'exam-day-and-resources', num: '16', title: '考场策略与材料', hook: '时间分配、剑桥真题、题库更新与下一步', bridge: '只认官方剑桥真题', status: 'live' },
    ],
  },
]

export const allChapters: Chapter[] = parts.flatMap((p) => p.chapters)

export const chapterPath = (c: Chapter) => `/ch/${c.slug}`

export const firstLiveChapter = (): Chapter | undefined =>
  allChapters.find((c) => c.status === 'live')

export const findChapter = (slug: string): Chapter | undefined =>
  allChapters.find((c) => c.slug === slug)

/** 取某节的上一/下一节（用于章节底部导航）。 */
export function neighbors(slug: string): { prev?: Chapter; next?: Chapter } {
  const i = allChapters.findIndex((c) => c.slug === slug)
  return {
    prev: i > 0 ? allChapters[i - 1] : undefined,
    next: i >= 0 && i < allChapters.length - 1 ? allChapters[i + 1] : undefined,
  }
}
