import { ChapterShell, Bridge } from '../components/ChapterShell'
import { Note } from '../components/kit'

export function WritingTask1() {
  return (
    <ChapterShell
      slug="writing-task1"
      part="第四部分 · 说与写：守住的分"
      lede={<>Academic Task 1 给你一张图，要你<b>客观描述</b>它的趋势、比较和数据——<b>不评论、不猜原因、不加个人观点</b>。它是可模板化、最好拿分的一块：结构固定 + 语言库背熟，就能稳稳守住 <b>Band 6</b>。</>}
    >
      <h2><span className="h2-en">The task</span>考什么</h2>
      <p>系统会给你一张（或多张）<b>图表 / 表格 / 地图 / 流程图</b>，要求你用<span className="kw">至少 150 词</span>、约 <b>20 分钟</b>，客观描述它的主要特征和对比。</p>
      <ul className="tight">
        <li><b>只描述，不解释</b>：写"数据是什么样"，绝不写"为什么会这样"——原因和评论是 Task 2 的事。</li>
        <li><b>抓大放小</b>：挑最显著的趋势和对比来写，不要逐格数字全抄。</li>
        <li><b>不带个人观点</b>：没有 <code>I think</code>、没有 <code>good / bad</code> 这类主观判断。</li>
      </ul>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th>图型</th><th>描述重点</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>折线图 / 柱状图</strong></td><td>随时间的<b>趋势</b>：升、降、波动、持平</td></tr>
            <tr><td><strong>饼图 / 表格</strong></td><td>项目之间的<b>比例与对比</b>，最大 / 最小</td></tr>
            <tr><td><strong>地图</strong></td><td>前后<b>变化</b>：新增、拆除、扩建、位移</td></tr>
            <tr><td><strong>流程图</strong></td><td>各<b>步骤顺序</b>，用被动态和先后连接词</td></tr>
          </tbody>
        </table>
      </div>

      <h2><span className="h2-en">Structure</span>四段骨架</h2>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th>段</th><th>写什么</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>① Introduction</strong></td><td>用自己的话<b>改写题目一句话</b>（paraphrase），说明这张图是关于什么的——<b>别照抄原题</b>。</td></tr>
            <tr><td><strong>② Overview</strong></td><td>概括 <b>2–3 个最显著</b>的总体趋势 / 特征。<span className="kw">最关键，没有它上不了 6</span>，这里<b>不写具体数字</b>。</td></tr>
            <tr><td><strong>③④ Body</strong></td><td>分组展开具体<b>数据与对比</b>：把相关的项目放一起写，带上关键数字。</td></tr>
          </tbody>
        </table>
      </div>
      <p><span className="kw">Overview 是 Task 1 的命门。</span>它通常以 <code>Overall, ...</code> 开头，只说"总体上谁涨谁跌、谁最高谁最低"，不掉进具体数字。批改时它是从 5 迈向 6 的分水岭。</p>

      <h2><span className="h2-en">Language bank</span>图表语言库</h2>
      <p>这是本节重点。把下面这套固定表达背熟，描述任何图表都够用。同一个意思要会<b>动词</b>和<b>名词化</b>两种写法。</p>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th>类别</th><th>固定表达</th></tr>
          </thead>
          <tbody>
            <tr><td><b>趋势动词</b></td><td><code>rise / increase / climb</code>、<code>fall / decline / drop</code>、<code>fluctuate</code>、<code>level off / plateau</code>、<code>peak at</code>、<code>remain stable</code></td></tr>
            <tr><td><b>程度副词</b></td><td><code>sharply / dramatically</code>（剧烈）、<code>gradually / steadily</code>（平缓）、<code>slightly</code>（略微）、<code>significantly</code>（显著）</td></tr>
            <tr><td><b>名词化</b></td><td><code>a sharp rise</code>、<code>a gradual decline</code>、<code>a slight fall</code>（动词⇄名词都要会）</td></tr>
            <tr><td><b>比较</b></td><td><code>twice as high as</code>、<code>the highest / lowest</code>、<code>compared with</code>、<code>whereas / while</code></td></tr>
            <tr><td><b>约数</b></td><td><code>approximately / around</code>、<code>just over / just under</code>、<code>nearly</code></td></tr>
          </tbody>
        </table>
      </div>
      <div className="cardgrid">
        <div className="card">
          <span className="card-k">动词写法</span>
          <h4>Verb + adverb</h4>
          <p><code>Sales rose sharply to around 500 units.</code></p>
        </div>
        <div className="card">
          <span className="card-k">名词写法</span>
          <h4>There was + noun</h4>
          <p><code>There was a sharp rise in sales to around 500 units.</code></p>
        </div>
      </div>
      <p>两句同义。作文里<b>两种句式交替使用</b>，句法多样性一上来，语法和词汇维度都加分。</p>

      <h2><span className="h2-en">Traps</span>常见坑</h2>
      <ul className="check">
        <li><b>没写 overview</b>——最致命的丢分，直接卡在 5 分上不去。</li>
        <li><b>逐个数字罗列不分组</b>——像念账本，读者抓不到重点，连贯维度扣分。</li>
        <li><b>给原因 / 加评论</b>——"因为经济增长所以……"是 Task 2 的活，Task 1 写了算跑偏。</li>
        <li><b>字数不够 150</b>——踩线甚至不足直接扣分，练到能稳定写 160–180 词。</li>
      </ul>
      <Note tag="别踩这个坑">
        最常见的丢分：<b>没写 overview</b>，或者把 overview 写成了一堆具体数字。
        记住那句口诀——<b>overview 讲总体、body 讲细节</b>，两处混在一起，6 分就没了。
      </Note>

      <Bridge>
        图型认全、四段骨架记牢、语言库背熟，Task 1 就是一项可模板化、能反复复用的稳定得分——<b>稳拿 Band 6</b>。
      </Bridge>
    </ChapterShell>
  )
}
