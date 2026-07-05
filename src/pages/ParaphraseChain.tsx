import { ChapterShell, Bridge } from '../components/ChapterShell'
import { Note } from '../components/kit'

export function ParaphraseChain() {
  return (
    <ChapterShell
      slug="the-paraphrase-chain"
      part="第二部分 · 分数的逆向工程"
      lede={<>听说读写不是四门孤立的课。它们被一条底层链焊在一起：<b>输入端（听 / 读）遇到的同义替换，正是输出端（说 / 写）的高分表达。</b>大多数学法把四项割裂开——打通这条链，才是"系统化"真正的溢价。</>}
    >
      <div className="chain">
        <p className="ct">↔ 那条把四项焊在一起的链</p>
        <p>雅思听力和阅读几乎<strong>不考原词复现</strong>，全是同义改写：题目说 <code>increase</code>，
          原文写 <code>a marked rise</code>。你能听懂 / 读懂，靠的就是识别这组替换。而这组替换，
          反过来正是你写作、口语里该主动用的<strong>高分表达</strong>。</p>
        <p className="flow">听 / 读：识别同义替换 ⟶ 收进个人语料库 ⟶ 说 / 写：主动产出</p>
      </div>

      <h2><span className="h2-en">Five gears</span>替换的五个档位</h2>
      <p>同义替换不是一种技巧，是一个<b>难度递增的谱系</b>。从易到难五档，考题在每一档都会出手：</p>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th>档位</th><th>长什么样</th><th className="num">难度</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>词性转换</strong></td><td><code>grow → growth</code>——同一词根换个词性</td><td className="num">★</td></tr>
            <tr><td><strong>同近义词</strong></td><td><code>big → substantial</code>、<code>buy → purchase</code></td><td className="num">★★</td></tr>
            <tr><td><strong>上下义</strong></td><td><code>smartphones → devices</code>——具体与类别互换</td><td className="num">★★★</td></tr>
            <tr><td><strong>反义 + 否定</strong></td><td><code>cheap → not expensive</code>、<code>lack → do not have</code></td><td className="num">★★★</td></tr>
            <tr><td><strong>句式重组</strong></td><td>主动 ↔ 被动、整句改写——一个词都不重合，意思一致</td><td className="num">★★★★</td></tr>
          </tbody>
        </table>
      </div>

      <Note tag="被换的是高频词，不是难词">
        出题人只改写<b>高频常用词</b>——生僻难词反而原词照登，因为它们没法有效替换。
        所以在替换上翻车，不是词汇量不够大，而是<b>没吃透高频词的一词多义、多词性</b>。
        还有一条边界：题干比原文<b>更具体</b>（原文说 Europe、题干说 UK）就不再是替换——这正是
        T/F/NG 里 Not Given 的一大来源（第 08 节细讲）。
      </Note>

      <h2><span className="h2-en">Build the library</span>怎么把这条链变成资产</h2>
      <p>做法极简单，贵在坚持——每天做完听读，顺手做三件事：</p>
      <ul className="tight">
        <li><b>划替换对</b>：把题干词和原文的同义表达配成一对，如 <code>big → substantial</code>、<code>because of → owing to</code>。</li>
        <li><b>归类</b>：按"趋势 / 因果 / 让步 / 程度"等场景归堆，写作 Task 1 / Task 2 直接能调用。</li>
        <li><b>回填输出</b>：下一次写作或口语练习，强制用上本周新收的 3–5 组。</li>
      </ul>

      <Note tag="这就是杠杆">
        同一份精力，输入端练一遍、输出端再用一遍，<b>四项一起涨</b>。
        这也是为什么单独刷某一项，性价比远不如打通这条链。
      </Note>

      <Bridge>
        建起你的<b>个人同义替换库</b>，它同时喂养听、读、说、写四项。
        后面每一节的方法，最终都汇进这一个语料库。
      </Bridge>
    </ChapterShell>
  )
}
