import { ChapterShell, Bridge } from '../components/ChapterShell'
import { Note, BandRuler } from '../components/kit'

export function BandScale() {
  return (
    <ChapterShell
      slug="the-band-scale"
      part="第一部分 · 认识这场考试"
      lede={<>这一节是全篇地基：搞懂考官那把"尺"到底怎么量，才谈得上逆向工程。雅思用 <b>0–9 分、每 0.5 一档</b>给分，总分和单项都是。</>}
    >
      <BandRuler />

      <h2><span className="h2-en">What each band means</span>各档什么意思</h2>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th className="num">档位</th><th>名称</th><th>大白话</th></tr>
          </thead>
          <tbody>
            <tr><td className="num">5</td><td>Modest</td><td>能沟通，但错误频繁，只在熟悉话题里勉强达意</td></tr>
            <tr><td className="num">6</td><td>Competent</td><td>大体有效，有错但不影响理解——多数留学门槛</td></tr>
            <tr><td className="num">7</td><td>Good</td><td>熟练，偶有失误，能处理复杂表达——名校 / 专业门槛</td></tr>
            <tr><td className="num">8</td><td>Very good</td><td>只在陌生场景偶尔出错</td></tr>
            <tr><td className="num">9</td><td>Expert</td><td>完全地道，近母语</td></tr>
          </tbody>
        </table>
      </div>

      <h2><span className="h2-en">How the overall is computed</span>总分怎么算：四项平均，进到半档</h2>
      <p>总分 = 听说读写四项的<strong>算术平均</strong>，再进到最近的半档。规则：平均值尾数
        <span className="kw"> .25 进到 .5</span>，<span className="kw">.75 进到下一整数</span>。</p>
      <p>下面四行都是<strong>示例算例</strong>——不是评分维度，就是四个例子：把不同的四项分代进同一条规则，看总分怎么落档。</p>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th>示例</th><th className="num">听</th><th className="num">读</th><th className="num">写</th><th className="num">说</th><th className="num">平均</th><th className="num">总分</th></tr>
          </thead>
          <tbody>
            <tr><td className="ex">例 1</td><td className="num">6.5</td><td className="num">6.5</td><td className="num">5.5</td><td className="num">6</td><td className="num">6.125</td><td className="num"><span className="score">6.0</span></td></tr>
            <tr><td className="ex">例 2</td><td className="num">6.5</td><td className="num">6.5</td><td className="num">6</td><td className="num">6</td><td className="num">6.25</td><td className="num"><span className="score hi">6.5</span></td></tr>
            <tr><td className="ex">例 3</td><td className="num">7</td><td className="num">6.5</td><td className="num">6</td><td className="num">6.5</td><td className="num">6.5</td><td className="num"><span className="score hi">6.5</span></td></tr>
            <tr><td className="ex">例 4</td><td className="num">7</td><td className="num">7</td><td className="num">6.5</td><td className="num">6.5</td><td className="num">6.75</td><td className="num"><span className="score">7.0</span></td></tr>
          </tbody>
        </table>
      </div>

      <Note tag="记住这条">
        总分是<b>平均后再进位</b>。这意味着单项之间可以"互相搭救"——某项低一点，另一项高一点就能拉回来。
        下一节的"田忌赛马"整个建立在这条规则上。
      </Note>

      <Bridge>
        看懂这把尺，你才知道 6.5 <b>不用四项都 6.5</b>。哪项好拿分就冲高、哪项难就兜底——
        这就是 <b>§04 分数是凑出来的</b>。
      </Bridge>
    </ChapterShell>
  )
}
