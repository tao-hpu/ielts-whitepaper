import { ChapterShell, Bridge } from '../components/ChapterShell'
import { Note } from '../components/kit'

export function ReadingTfng() {
  return (
    <ChapterShell
      slug="reading-tfng"
      part="第三部分 · 听与读：确定性的分"
      lede={<>True / False / Not Given 是雅思阅读<b>最难、最区分水平</b>的题型，也是丢分头号原因——因为大多数人把 <b>Not Given 当成了 False</b>。这一节把这条分界线讲死。</>}
    >
      <h2><span className="h2-en">The one rule</span>一条分界线，定生死</h2>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th>判成</th><th>条件</th><th>怎么验证</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>TRUE</strong></td><td>原文有一句和题干意思一致（同义改写）</td><td>能在原文<b>指出支持它的那句</b></td></tr>
            <tr><td><strong>FALSE</strong></td><td>原文有一句和题干<b>直接矛盾</b></td><td>能在原文<b>指出被它推翻的那句</b></td></tr>
            <tr><td><strong>NOT GIVEN</strong></td><td>原文<b>没说到</b>，既不支持也不反驳</td><td>找不出任何相关的那一句</td></tr>
          </tbody>
        </table>
      </div>
      <p>核心口诀：<span className="kw">FALSE 必须能指出"被它矛盾的那句"；指不出来、只是"没提到"的，一律 NOT GIVEN。</span></p>

      <h2><span className="h2-en">Worked example</span>一个例子讲透</h2>
      <p>假设原文写道：</p>
      <ul className="tight">
        <li><em>"The navigators memorised the positions of more than a hundred stars."</em>（航海者记住了一百多颗星的位置。）</li>
      </ul>
      <p>三个题干，三种判法：</p>
      <ul className="tight">
        <li>题干：<em>Navigators learned the positions of over 100 stars.</em> → <b>TRUE</b>（同义改写，原文支持）</li>
        <li>题干：<em>Navigators ignored the stars when at sea.</em> → <b>FALSE</b>（与"记住星位"直接矛盾）</li>
        <li>题干：<em>Navigators found memorising the stars difficult.</em> → <b>NOT GIVEN</b>（原文没说"难不难"，别用常识脑补）</li>
      </ul>

      <h2><span className="h2-en">Trigger patterns</span>FALSE 和 NOT GIVEN 各长什么样</h2>
      <p>出题人制造"矛盾"和"没说"的手法其实非常固定（从历年真题归纳的经验规律）。两张清单对号入座，绝大多数题当场判完：</p>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th>FALSE 的四种手法</th><th>微型例子（原文 → 题干）</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>直接相反</strong></td><td><code>rises → falls</code></td></tr>
            <tr><td><strong>程度 / 频率升级</strong></td><td><code>some / often → all / always</code></td></tr>
            <tr><td><strong>"之一"改"唯一"</strong></td><td><code>one of the reasons → the only reason</code></td></tr>
            <tr><td><strong>观点说成事实</strong></td><td><code>scientists believe → it has been proven</code></td></tr>
          </tbody>
        </table>
      </div>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th>NOT GIVEN 的四种手法</th><th>微型例子（原文 → 题干）</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>压根没提</strong></td><td>原文只说"他做了"，题干问的是"他喜欢做吗"</td></tr>
            <tr><td><strong>题干更具体</strong></td><td><code>in Europe → in the UK</code>（范围一收窄，原文就管不着了）</td></tr>
            <tr><td><strong>愿望当事实</strong></td><td><code>aims to reduce → has reduced</code></td></tr>
            <tr><td><strong>凭空比较</strong></td><td>原文分别提了 A 和 B，题干却说 A 比 B 更…</td></tr>
          </tbody>
        </table>
      </div>
      <p>共同信号：<span className="kw">盯紧 all / always / only / must 这类绝对词和范围词——FALSE 靠"改程度"制造矛盾，NG 靠"改范围"跳出原文。</span></p>

      <Note tag="别脑补">
        NOT GIVEN 的陷阱就是"听起来很合理"。合理≠原文说过。
        <b>只要你要靠推理、常识、或"应该是这样"才能判成 False，那多半就是 Not Given。</b>
      </Note>

      <h2><span className="h2-en">Drill</span>怎么练到稳</h2>
      <ul className="tight">
        <li>做每道 T/F/NG 都<b>写下依据句</b>：判 T/F 必须抄出原文那一句；抄不出就老实选 NG。</li>
        <li>对答案时重点复盘<b>错判的 NG</b>——它暴露你在哪种"想当然"上翻车。</li>
      </ul>

      <Bridge>
        把 T/F/NG 的正确率从"靠感觉"练到"能指出依据句"，阅读单项就稳稳站上 <b>Band 7</b>。
        这是阅读里最值钱的一块肌肉。
      </Bridge>
    </ChapterShell>
  )
}
