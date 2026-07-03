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
