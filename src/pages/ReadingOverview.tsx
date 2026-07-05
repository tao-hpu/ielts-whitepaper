import { ChapterShell, Bridge } from '../components/ChapterShell'
import { Note } from '../components/kit'

export function ReadingOverview() {
  return (
    <ChapterShell
      slug="reading-overview"
      part="第三部分 · 听与读：确定性的分"
      lede={<>阅读和听力一样是客观题，但它多一个杀手：<b>时间</b>。60 分钟 3 篇 40 题，读不完是常态。破局靠<b>题型解法</b>和<b>配速</b>，不是把每个字读懂。</>}
    >
      <h2><span className="h2-en">The spec sheet</span>阅读规格卡</h2>
      <div className="spec">
        <div className="spec-row"><div className="spec-k">结构</div><div className="spec-v">3 篇学术文章，难度递增，共 40 题。<b>平均一篇 20 分钟</b>。</div></div>
        <div className="spec-row"><div className="spec-k">题型</div><div className="spec-v">判断题（T/F/NG）、Matching Headings、段落信息定位、选择、填空、句子完成。每题都是一次<span className="kw">同义改写</span>的识别。</div></div>
        <div className="spec-row"><div className="spec-k">评分</div><div className="spec-v">答对数 /40 换算，无主观分。约 30/40 → 7。</div></div>
        <div className="spec-row"><div className="spec-k">怎么练</div><div className="spec-v">先<b>按题型学解法</b>（尤其吃透 T/F/NG 和 Matching）+ 定位训练 + 掐表配速，别在生词上停留。</div></div>
        <div className="spec-row"><div className="spec-k trap">常见坑</div><div className="spec-v trap">把 <b>Not Given 当成 False</b>；一个生词卡住反复读；时间分配失衡，<b>第 3 篇没做完</b>。</div></div>
      </div>

      <h2><span className="h2-en">Two families</span>题型先分两族：顺序题 vs 乱序题</h2>
      <p>十几种题型，第一刀先切<b>顺序性</b>——它直接决定你的做题策略：</p>
      <div className="cardgrid">
        <div className="card">
          <span className="card-k">顺序题</span>
          <h4>题号顺序 ≈ 原文顺序</h4>
          <p>填空、Summary、T/F/NG、单选、句子完成。可用<b>夹逼定位</b>：第 2 题的答案必然在第 1、3 题答案之间——卡住就先跳过，用前后题把范围夹出来再回头。</p>
        </div>
        <div className="card">
          <span className="card-k">乱序题</span>
          <h4>题目顺序与原文无关</h4>
          <p>各种 Matching 和 Headings。定位成本最高，<b>放到同一篇的顺序题做完再做</b>——那时你对全文已经有了一张地图。</p>
        </div>
      </div>

      <h2><span className="h2-en">Pace budget</span>20 分钟一篇：时间怎么分</h2>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th>动作</th><th className="num">用时</th><th>要点</th></tr>
          </thead>
          <tbody>
            <tr><td>扫读全文抓结构</td><td className="num">2–3 min</td><td>看首末段、每段首句，建"文章地图"，不逐字读</td></tr>
            <tr><td>做题 + 回原文定位</td><td className="num">15 min</td><td>顺题号找关键词回原文，读那一两句就够</td></tr>
            <tr><td>回看 / 检查</td><td className="num">1–2 min</td><td>机考直接作答、无誊卡时间；留点时间回看标记（flag）的题，拿不准先猜不空</td></tr>
          </tbody>
        </table>
      </div>

      <Note tag="定位，不是通读">
        阅读高分靠的是<b>快速定位</b>：带着题目的关键词去原文里找那一句同义改写，读懂它就行。
        想把整篇读透再做题，一定做不完。选关键词有讲究：<b>专有名词、数字、年代、大写词</b>没法被同义替换，
        是最快的定位锚；普通高频词几乎必被改写——<b>会被替换的才是考点</b>（第 05 节那条链）。
      </Note>

      <Bridge>
        目标 <b>Band 7</b>。先建立"扫读—定位—配速"的节奏，再逐个题型攻坚。
        下一节先啃最难、最区分水平的 <b>T/F/NG</b>。
      </Bridge>
    </ChapterShell>
  )
}
