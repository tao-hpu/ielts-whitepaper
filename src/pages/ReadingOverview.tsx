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

      <h2><span className="h2-en">Pace budget</span>20 分钟一篇：时间怎么分</h2>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th>动作</th><th className="num">用时</th><th>要点</th></tr>
          </thead>
          <tbody>
            <tr><td>扫读全文抓结构</td><td className="num">2–3 min</td><td>看首末段、每段首句，建"文章地图"，不逐字读</td></tr>
            <tr><td>做题 + 回原文定位</td><td className="num">15 min</td><td>顺题号找关键词回原文，读那一两句就够</td></tr>
            <tr><td>誊卡 / 检查</td><td className="num">1–2 min</td><td>纸考要留誊卡时间；拿不准的先猜不空</td></tr>
          </tbody>
        </table>
      </div>

      <Note tag="定位，不是通读">
        阅读高分靠的是<b>快速定位</b>：带着题目的关键词去原文里找那一句同义改写，读懂它就行。
        想把整篇读透再做题，一定做不完。
      </Note>

      <Bridge>
        目标 <b>Band 7</b>。先建立"扫读—定位—配速"的节奏，再逐个题型攻坚。
        下一节先啃最难、最区分水平的 <b>T/F/NG</b>。
      </Bridge>
    </ChapterShell>
  )
}
