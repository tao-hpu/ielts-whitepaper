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

      <h2><span className="h2-en">Library ≠ script</span>素材库不是背稿：分界线在细节</h2>
      <p>"背模板"产品的口语版长这样：几个预制故事逐字背熟，改两句开头结尾去硬扣几十张不同的话题卡；理由也是预制的通用段落，往任何题上拼。考官为什么一听一个准：</p>
      <ul className="tight">
        <li><b>接缝</b>：背的部分书面语、流畅华丽，即兴的部分立刻回到真实水平——这个落差本身就是信号。</li>
        <li><b>扣题句是焊上去的</b>：故事和题目对不上，只能在结尾硬转——常见到"旅行偶遇的礼物"被扣成"祖传旧物"这种自相矛盾。</li>
        <li><b>细节经不起追问</b>：通用素材没有真实细节，Part 3 一句追问就塌。</li>
      </ul>
      <p>你的<span className="kw">个人素材库</span>和它的区别就在这里：素材是<b>你真实经历的事</b>，
        复用的是"哪段经历配哪类话题"的映射，句子每次现场组织——<b>细节随便追问，越问越有的说</b>。</p>

      <Note tag="别背诵">
        考官每天听几十个考生，<b>背出来的答案一耳朵就能听出来</b>——"考官受过识别背诵答案的训练"是
        BC / IDP 官方备考指引里白纸黑字的话，写作评分标准里通篇背诵更是直接落 Band 0 档。
        宁可说得朴素、真实、偶有停顿，也别背一段"完美"的稿子。
      </Note>

      <Bridge>
        目标 <b>Band 6</b>：说得<b>顺</b>比说得<b>难</b>更重要。素材库保证有话说、框架保证说得有条理、
        不背诵保证不被压分——6 分稳稳守住。
      </Bridge>
    </ChapterShell>
  )
}
