import { ChapterShell, Bridge } from '../components/ChapterShell'
import { Note } from '../components/kit'

export function WritingTask2() {
  return (
    <ChapterShell
      slug="writing-task2"
      part="第四部分 · 说与写：守住的分"
      lede={<>Task 2 是一篇 <b>250 词</b>的议论文，<b>40 分钟</b>写完，权重约占写作的<b>三分之二</b>——写作能不能上 6，几乎由它决定。它考的不是你知道多少，而是<b>你有没有一个清楚的立场，并把它论证明白</b>。</>}
    >
      <h2><span className="h2-en">Question types</span>先认题型</h2>
      <p>Task 2 拿分的第一命门在<span className="kw">任务回应</span>（Task Response）：题目问什么，你就得<b>正面回应什么</b>。回应错了，语言再漂亮也是跑题。四类高频题型，先学会一眼认出：</p>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th>题型</th><th>典型问法</th><th>要你做什么</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Opinion</strong></td><td>To what extent do you agree or disagree?</td><td>表明<b>你的立场</b>（同意 / 反对 / 部分同意），并论证它</td></tr>
            <tr><td><strong>Discussion</strong></td><td>Discuss both views and give your opinion.</td><td><b>两种观点都要讨论</b>，最后明确<b>给出你自己的看法</b></td></tr>
            <tr><td><strong>Problem–Solution</strong></td><td>What are the causes? What can be done?</td><td>分析<b>起因 / 问题</b>，再给<b>对应的对策</b></td></tr>
            <tr><td><strong>Adv–Disadv</strong></td><td>Do the advantages outweigh the disadvantages?</td><td><b>权衡利弊</b>，并说清哪一边更重</td></tr>
          </tbody>
        </table>
      </div>
      <Note tag="别答错题">
        最常见的翻车：把 Discussion 写成了 Opinion（只讲自己那边，没讨论另一种观点），或 Agree/Disagree 题从头到尾<b>不表态</b>。
        动笔前先圈出题目的<b>指令句</b>，确认它到底要你做哪件事——<b>读懂问的是哪种、直接回应它</b>。
      </Note>

      <h2><span className="h2-en">The four-paragraph skeleton</span>四段骨架</h2>
      <p>Band 6 不需要花哨结构，需要的是<b>稳</b>。一个几乎万能的四段骨架：</p>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th>段落</th><th>写什么</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>① Introduction</strong></td><td>用自己的话<b>改写题目</b>（别照抄），再给<b>一句清晰的立场句（thesis）</b>——让考官第一段就知道你站哪</td></tr>
            <tr><td><strong>② Body 1</strong></td><td>一个<b>主论点</b>，按 <span className="kw">Point → Explain → Example</span> 展开：论点句 → 解释为什么 → 一个具体例子</td></tr>
            <tr><td><strong>③ Body 2</strong></td><td>第二个<b>主论点</b>，同法展开；可在这里放一次<b>让步</b>：<code>Admittedly… However…</code></td></tr>
            <tr><td><strong>④ Conclusion</strong></td><td><b>重申立场</b>、收束两个论点，<b>不加任何新信息、新例子</b></td></tr>
          </tbody>
        </table>
      </div>
      <ul className="tight">
        <li><b>立场要贯穿全文</b>：intro 表态、每个 body 都在支撑它、conclusion 再点一次，四段一条线。</li>
        <li><b>两个主论点就够</b>：与其铺四个论点各写两句，不如两个论点每个都写透。</li>
        <li><b>让步是加分项不是必需</b>：一次 <code>Admittedly… However…</code> 能显出思辨，但别让它盖过你的主张。</li>
      </ul>

      <h2><span className="h2-en">How an argument unfolds</span>论证怎么展开</h2>
      <p>Band 6 和 Band 5 的分水岭，往往就是<b>有没有把论点撑起来</b>。空讲大道理没用，要的是 <span className="kw">Point → Explain → Example</span> 一条链，尤其是<b>那个具体例子</b>。</p>
      <div className="chain">
        <p className="ct">一个 body 段的示范（主题：远程办公）</p>
        <p><b>Point</b>：Remote work significantly improves employees' productivity.</p>
        <p><b>Explain</b>：Without a daily commute or constant office interruptions, people can focus on deep, uninterrupted work.</p>
        <p><b>Example</b>：A 2021 Stanford study of call-centre staff found that home-based workers completed 13% more calls than their office-based colleagues.</p>
        <p className="flow">立场 → 论点 → 例证 → 让步</p>
      </div>
      <p>看出区别了吗：<b>解释</b>回答「为什么这个论点成立」，<b>例子</b>把抽象主张落到一个具体的人、数字或场景上。哪怕例子是你合理编的（考官不核实真伪），<b>具体永远比空泛有力</b>。</p>

      <Note tag="技术写作者的坑">
        你习惯像写技术文档那样<b>客观罗列信息、平铺各方观点</b>——但 Task 2 要的恰恰相反：<b>先有一个明确立场，再去论证它</b>。
        对你而言最危险的三个扣分点，都比语法错误更狠：
        <ul className="tight">
          <li><b>跑题</b>：没正面回应题目那个<b>具体</b>问题——任务回应维度直接崩。</li>
          <li><b>论证单薄</b>：只陈述「有 A、有 B、有 C」，却没有立场、没有 Explain、没有 Example。</li>
          <li><b>字数 / 时间失控</b>：字数务必 <b>≥250</b>；全程<b>留够 40 分钟</b>，留 3–5 分钟检查。</li>
        </ul>
        一句话：把「陈述信息」的手，换成「亮出主张 + 证明它」的手。
      </Note>

      <Bridge>
        <b>观点明确</b>（intro 一句立场贯穿全文）+ <b>结构清楚</b>（四段骨架不跑题、够字数）+ <b>每段有论证有例子</b>（Point–Explain–Example），
        Task 2 就能稳稳守住 <b>Band 6</b>。它是写作里权重最高的一块，也是最不能放的一块。
      </Bridge>
    </ChapterShell>
  )
}
