import { ChapterShell, Bridge } from '../components/ChapterShell'
import { Note } from '../components/kit'

export function WritingOverview() {
  return (
    <ChapterShell
      slug="writing-overview"
      part="第四部分 · 说与写：守住的分"
      lede={<>写作是四项里<b>最难涨</b>的，所以目标是稳稳守住 6，别死磕 6.5。两个 Task、四个维度，最关键的是<b>把时间和结构留够</b>。</>}
    >
      <h2><span className="h2-en">Two tasks, unequal weight</span>两个 Task，权重不等</h2>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th>任务</th><th className="num">建议用时</th><th className="num">字数</th><th>写什么</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Task 1</strong></td><td className="num">20 min</td><td className="num">≥150</td><td>客观描述图表的趋势与对比，<b>不评论、不猜原因</b></td></tr>
            <tr><td><strong>Task 2</strong></td><td className="num">40 min</td><td className="num">≥250</td><td>就一个观点写议论文，要有<b>清晰立场和论证</b></td></tr>
          </tbody>
        </table>
      </div>
      <p><span className="kw">Task 2 权重约占三分之二</span>，所以时间要先保 Task 2。两个 Task 各自评四维：任务回应 / 连贯衔接 / 词汇 / 语法。</p>

      <h2><span className="h2-en">Where points leak</span>分从哪漏掉</h2>
      <ul className="tight">
        <li><b>跑题</b>：Task 2 没回应题目问的那个点——任务回应维度直接崩。</li>
        <li><b>字数不够</b>：低于下限（150 / 250）直接扣分，别踩线。</li>
        <li><b>硬塞高级词用错</b>：背来的大词用错，语法 / 词汇分不升反降。</li>
        <li><b>时间失衡</b>：Task 1 写嗨了，Task 2 没写完——丢的是权重更高的那块。</li>
      </ul>

      <Note tag="批改是刚需">
        写作和听读最大的不同：<b>你自己看不出自己的错。</b>不经批改的写作练习约等于白写。
        每周至少 1–2 篇，找人或 AI <b>对标 band descriptors 逐维度</b>指出扣分点。
      </Note>

      <Bridge>
        目标 <b>Band 6</b>：不跑题、够字数、结构清楚、少犯低级语法错，6 分到手。
        Task 1 的图表语言库和 Task 2 的论证范式（规划中）会把这两块夯实。
      </Bridge>
    </ChapterShell>
  )
}
