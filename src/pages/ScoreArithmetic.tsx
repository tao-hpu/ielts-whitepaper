import { ChapterShell, Bridge } from '../components/ChapterShell'
import { Note } from '../components/kit'

export function ScoreArithmetic() {
  return (
    <ChapterShell
      slug="score-arithmetic"
      part="第二部分 · 分数的逆向工程"
      lede={<>总分是平均分。所以拿分的最优解<b>不是四项平均发力</b>，而是"田忌赛马"——把好拿分的项目冲高，给难拿分的项目兜底。<b>先按你的目标分，倒推一张配分表。</b></>}
    >
      <h2><span className="h2-en">Score by your target</span>按目标分配分</h2>
      <p>同一套逻辑（听读冲高、说写兜底），套不同目标分，得到不同配分表。对号入座：</p>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th>目标总分</th><th className="num">听</th><th className="num">读</th><th className="num">写</th><th className="num">说</th><th>思路</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>6.0</strong></td><td className="num">6.5</td><td className="num">6.5</td><td className="num">5.5</td><td className="num">5.5</td><td>听读小冲，说写保底即可</td></tr>
            <tr className="total"><td><strong>6.5</strong>（本书示范）</td><td className="num"><span className="score">7</span></td><td className="num"><span className="score">7</span></td><td className="num"><span className="score">6</span></td><td className="num"><span className="score">6</span></td><td>听读拿分，说写守住</td></tr>
            <tr><td><strong>7.0</strong></td><td className="num">7.5</td><td className="num">7.5</td><td className="num">6.5</td><td className="num">6.5</td><td>听读要高，说写也得上一个台阶</td></tr>
          </tbody>
        </table>
      </div>
      <p>三行的平均都正好落在目标分上：<code>(6.5+6.5+5.5+5.5)/4 = 6.0</code>、<code>(7+7+6+6)/4 = 6.5</code>、<code>(7.5+7.5+6.5+6.5)/4 = 7.0</code>。规律一眼可见：<span className="kw">目标越高，说写这两块"难涨项"的下限就被越往上顶</span>——这也是为什么 7 分比 6.5 难得多，卡的正是说写。</p>

      <h2><span className="h2-en">The 6.5 case, unpacked</span>以 6.5 为例，拆开看</h2>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th>项目</th><th className="num">目标</th><th>为什么这么定</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>听力</strong></td><td className="num"><span className="score hi">7</span></td><td>纯技巧题，定位 + 同义替换练熟就涨，存分大户</td></tr>
            <tr><td><strong>阅读</strong></td><td className="num"><span className="score hi">7</span></td><td>题型固定，练透 T/F/NG 与 Matching 直接拉分</td></tr>
            <tr><td><strong>写作</strong></td><td className="num"><span className="score">6</span></td><td>最难涨，冲 6.5 性价比极低——守住 6 就好</td></tr>
            <tr><td><strong>口语</strong></td><td className="num"><span className="score">6</span></td><td>不背诵、不卡壳、Part 2 有框架，6 稳拿</td></tr>
            <tr className="total"><td>Overall</td><td className="num"><span className="score">6.5</span></td><td>(7 + 7 + 6 + 6) ÷ 4 = 6.5 ✓</td></tr>
          </tbody>
        </table>
      </div>
      <Note tag="怎么用这张表">
        本书后面各技能页标的"目标 Band X"，都是按 <b>6.5 这个示范</b>算的。
        你的目标分不同，就照上面对应那行调整——但"<b>听读冲高、说写兜底</b>"的打法通用。
      </Note>

      <h2><span className="h2-en">Conversion anchors</span>听读的换算锚点（近似）</h2>
      <p>不同场次换算表略有浮动，记住大致锚点，做完就能自己估分：</p>
      <ul className="tight">
        <li>阅读（A 类）：约 <b>30/40 → 7</b>，<b>23/40 → 6</b>，<b>15/40 → 5</b></li>
        <li>听力：约 <b>30/40 → 7</b>，<b>23/40 → 6</b>，<b>16/40 → 5.5</b></li>
      </ul>
      <p>换句话说，听读<strong>每篇少错 2–3 个</strong>就是半档。这正是它们值得优先投入的原因：回报又快又线性。</p>

      <Note tag="别踩这个坑">
        新手最常见的误区：把全部精力砸在写作上死磕高分，回报最低。
        <b>先把听读的确定性分数吃满，再谈其它。</b>
      </Note>

      <Bridge>
        把你的目标分翻译成一张<b>四项配分表</b>，你就知道每项该冲还是该守。
        6.5 是 <b>7 / 7 / 6 / 6</b>；换个目标，照表调——但逻辑不变。
      </Bridge>
    </ChapterShell>
  )
}
