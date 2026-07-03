import { ChapterShell, Bridge } from '../components/ChapterShell'
import { Note } from '../components/kit'

export function Speaking() {
  return (
    <ChapterShell
      slug="speaking"
      part="第四部分 · 说与写：守住的分"
      lede={<>口语考的是"能不能<b>自然地把话说下去</b>"，不是背了多少。目标 6 很稳——只要你不背模板、不卡壳，Part 2 有框架。</>}
    >
      <h2><span className="h2-en">The spec sheet</span>口语规格卡</h2>
      <div className="spec">
        <div className="spec-row"><div className="spec-k">结构</div><div className="spec-v">Part 1 日常问答 · Part 2 话题卡独白 1–2 分钟（有 1 分钟准备）· Part 3 就 Part 2 话题深入追问。全程 11–14 分钟，真人考官。</div></div>
        <div className="spec-row"><div className="spec-k">评分</div><div className="spec-v">四维各一档取平均：<b>流利连贯 / 词汇 / 语法 / 发音</b>。</div></div>
        <div className="spec-row"><div className="spec-k">怎么练</div><div className="spec-v">建<span className="kw">个人话题素材库</span>（几个万能例子反复复用）+ Part 2 用固定框架搭骨架 + <b>录音自评</b>揪口头禅和卡顿。</div></div>
        <div className="spec-row"><div className="spec-k trap">常见坑</div><div className="spec-v trap">背模板 → <b>考官一听一个准，直接压分</b>；一味追求高级词却卡壳，反而丢流利度；答得太短，没展开。</div></div>
      </div>

      <h2><span className="h2-en">Part 2 framework</span>Part 2：一分钟怎么填满</h2>
      <p>话题卡千变万化，但骨架就一套。拿到卡，用这四个抓手快速搭出 1.5 分钟：</p>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th>抓手</th><th>说什么</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>What / When</strong></td><td>是什么、什么时候的事——快速交代背景</td></tr>
            <tr><td><strong>Detail</strong></td><td>具体描述，多给细节和例子（这里最占时间）</td></tr>
            <tr><td><strong>Feeling</strong></td><td>你的感受、态度</td></tr>
            <tr><td><strong>Why it matters</strong></td><td>它为什么重要 / 对你有什么影响——自然收尾</td></tr>
          </tbody>
        </table>
      </div>

      <Note tag="别背诵">
        考官每天听几十个考生，<b>背出来的答案一耳朵就能听出来</b>，一旦判定背诵，分数直接受限。
        宁可说得朴素、真实、偶有停顿，也别背一段"完美"的稿子。
      </Note>

      <Bridge>
        目标 <b>Band 6</b>：说得<b>顺</b>比说得<b>难</b>更重要。素材库保证有话说、框架保证说得有条理、
        不背诵保证不被压分——6 分稳稳守住。
      </Bridge>
    </ChapterShell>
  )
}
