import { ChapterShell, Bridge } from '../components/ChapterShell'
import { Note } from '../components/kit'

export function ReadingMatching() {
  return (
    <ChapterShell
      slug="reading-matching"
      part="第三部分 · 听与读：确定性的分"
      lede={<>Matching Headings（段落标题匹配）是最容易被<b>关键词钓走</b>的题型：题目给你一列标题，让你为每段挑一个概括<b>主旨</b>的。多数人栽在"段里出现了标题里的词，就以为是它"——这一节把这个反向陷阱讲破。</>}
    >
      <h2><span className="h2-en">What it is</span>它到底考什么</h2>
      <p>Matching Headings 给你一列标题（<b>数量比段落多</b>，多出来的就是干扰项），要你为每个指定段落挑一个能<b>概括全段主旨</b>的标题。它考的不是"找关键词"，而是<span className="kw">你能不能一句话说清"这段到底在讲什么"</span>。</p>
      <div className="spec">
        <div className="spec-row"><div className="spec-k">要匹配的</div><div className="spec-v">段落的<b>中心思想</b>，不是某个细节</div></div>
        <div className="spec-row"><div className="spec-k">标题列表</div><div className="spec-v">比需要的多，用剩的是<b>诱饵</b></div></div>
        <div className="spec-row"><div className="spec-k">每个标题</div><div className="spec-v">通常只用一次，且<b>不按段落顺序</b>排列</div></div>
      </div>

      <h2><span className="h2-en">The trap</span>头号陷阱：关键词命中，主旨却相反</h2>
      <p>出题人最爱的诱饵：把某个标题里的词，塞进一个<b>主旨完全不同</b>的段落里。你一看"这词出现了"就选它，正中下怀。两种典型翻车：</p>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th>陷阱</th><th>长什么样</th><th>为什么错</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>关键词命中</strong></td><td>段里出现标题的词，但那只是<b>一句提及</b></td><td>主旨在别处，这词只是路过</td></tr>
            <tr><td><strong>主旨相反</strong></td><td>段落其实在<b>反驳/推翻</b>标题说的事</td><td>词对了，立场反了</td></tr>
            <tr><td><strong>以偏概全</strong></td><td>标题只概括了<b>段里一个细节</b></td><td>盖不住全段，不算主旨</td></tr>
          </tbody>
        </table>
      </div>
      <p>破法一句话：<span className="kw">先读完整段抓中心句，再回头选标题——绝不"见词就配"。</span></p>
      <ul className="tight">
        <li>中心句<b>最常在首句</b>（经验统计约五成多），其次是第二句和末句（各约两成）——先读这三处，但别当铁律；转折词（however、but、yet）之后往往才是真正的重点。</li>
        <li><b>先易后难</b>：先把你最有把握的段落配掉，再用<b>排除法</b>缩小剩下标题的范围。</li>
        <li>选完在标题旁写一句<b>"这段主旨=…"</b>自检，对不上就换。</li>
      </ul>

      <Note tag="别见词就配">
        一个段落里出现了标题的关键词，只能说明"这段<b>提到</b>了这件事"，不等于"这段<b>在讲</b>这件事"。
        <b>能被一两句话就代表的，是细节；贯穿全段、每句都在服务的，才是主旨。</b>
        反过来也成立：和段落原词<b>一模一样</b>的标题要格外警惕——正确标题几乎总是主旨句的<b>同义改写</b>（还是那条替换链），照抄原词的多半是诱饵。
      </Note>

      <h2><span className="h2-en">Don't confuse</span>别和"段落信息定位"搞混</h2>
      <p>Matching Headings 常和 <b>Matching Information</b>（段落信息定位）撞脸，但考法相反，别用同一套打法：</p>
      <div className="cardgrid">
        <div className="card">
          <span className="card-k">Matching Headings</span>
          <h4>给段落配主旨</h4>
          <p>问"这段<b>整体</b>在讲什么"，抓中心思想，一个标题一般只用一次。</p>
        </div>
        <div className="card">
          <span className="card-k">Matching Information</span>
          <h4>找信息在哪段</h4>
          <p>问"哪一段<b>包含</b>某条具体信息"，可<b>重复</b>、<b>不按顺序</b>，必须逐段扫读定位，别指望题号和段落顺序对应。</p>
        </div>
      </div>
      <p>一句话记牢：<span className="kw">Headings 抓"整段主旨"，Information 找"某句细节落在哪段"——一个看森林，一个找树。</span></p>

      <h2><span className="h2-en">Drill</span>怎么练到稳</h2>
      <ul className="check">
        <li>做完对答案时，逼自己给每段写出<b>"主旨一句话"</b>，再和正确标题核对——练的就是"抓中心"这块肌肉。</li>
        <li>重点复盘<b>被干扰项钓走</b>的题：回看当时是不是"见词就配"，把那类关键词标记成警报。</li>
        <li>练"先易后难 + 排除法"的下笔顺序，别一段一段死磕。</li>
      </ul>

      <Bridge>
        把 Matching 从"看见关键词就赌一个"练到"先抓主旨再匹配"，这类题就不再靠猜、错误率骤降，阅读单项稳稳站上 <b>Band 7</b>。
      </Bridge>
    </ChapterShell>
  )
}
