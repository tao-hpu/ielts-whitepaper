import { ChapterShell, Bridge } from '../components/ChapterShell'
import { Note } from '../components/kit'

export function HowExaminersScore() {
  return (
    <ChapterShell
      slug="how-examiners-score"
      part="第一部分 · 认识这场考试"
      lede={<>分数从哪来？听力和阅读靠<b>客观换算</b>，口语和写作靠考官对<b>四个维度</b>逐一打分。搞清这一点，"提分"就从碰运气变成了对标施工。</>}
    >
      <h2><span className="h2-en">Two scoring engines</span>听读靠换算，说写靠维度</h2>
      <div className="cardgrid">
        <div className="card">
          <span className="card-k">客观 · 无主观分</span>
          <h4>听力 · 阅读</h4>
          <p>答对题数 /40，查换算表得档。错就是错——所以是技巧可控、最容易短期拉分的两项。</p>
        </div>
        <div className="card">
          <span className="card-k">主观 · 可定位</span>
          <h4>写作 · 口语</h4>
          <p>考官按<strong>四个维度</strong>各打一档，再平均。维度化意味着：你卡在哪，是可定位、可对症下药的。</p>
        </div>
      </div>

      <h2><span className="h2-en">The four dimensions</span>说写的四个维度（各占 25%）</h2>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th>写作 Writing</th><th>口语 Speaking</th><th>在量什么</th></tr>
          </thead>
          <tbody>
            <tr><td>Task Response 任务回应</td><td>Fluency &amp; Coherence 流利与连贯</td><td>说没说到点、够不够顺</td></tr>
            <tr><td>Coherence &amp; Cohesion 连贯衔接</td><td>—</td><td>结构、逻辑连接词</td></tr>
            <tr><td>Lexical Resource 词汇</td><td>Lexical Resource 词汇</td><td>用词范围与准确度</td></tr>
            <tr><td>Grammatical Range 语法</td><td>Grammatical Range 语法</td><td>句式多样性 + 正确率</td></tr>
            <tr><td>—</td><td>Pronunciation 发音</td><td>清晰度、连读、语调</td></tr>
          </tbody>
        </table>
      </div>
      <p>官方把每个维度每一档要求写成了 <strong>Public Band Descriptors</strong>（公开可查）。它就是考官的打分细则，也应该是你的自评清单——<span className="kw">对着 descriptor 自评，比对着范文更有用</span>。</p>

      <Note tag="考官视角">
        一句话戳破：考官不是在"感受"你英语好不好，是在<b>勾选你满足了哪几条标准</b>。
        你的任务因此变得具体——不是"变强"，是"把每一条勾满"。
      </Note>

      <Bridge>
        把 band descriptors 当成一张 checklist：<b>说写照着它自评，听读照着换算表估分</b>。
        分数从此可测、可拆、可练——这是整份白皮书的支点。
      </Bridge>
    </ChapterShell>
  )
}
