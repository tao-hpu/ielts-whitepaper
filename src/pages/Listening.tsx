import { ChapterShell, Bridge } from '../components/ChapterShell'
import { Note } from '../components/kit'

export function Listening() {
  return (
    <ChapterShell
      slug="listening"
      part="第三部分 · 听与读：确定性的分"
      lede={<>听力是<b>存分大户</b>：客观题、无主观分，练熟了最稳。很多人"听懂了却丢分"，问题不在听力本身，在<b>定位</b>和<b>拼写</b>。</>}
    >
      <h2><span className="h2-en">The spec sheet</span>听力规格卡</h2>
      <div className="spec">
        <div className="spec-row"><div className="spec-k">结构</div><div className="spec-v">4 段录音，难度递进：日常对话 → 独白 → 学术讨论 → 讲座。40 题。</div></div>
        <div className="spec-row"><div className="spec-k">考什么</div><div className="spec-v">边听边定位答案；题目几乎都是原文的<span className="kw">同义替换</span>，极少原词复现。含填空题，拼写 / 单复数错了不给分。</div></div>
        <div className="spec-row"><div className="spec-k">评分</div><div className="spec-v">答对数 /40 直接换算，无主观分。约 30/40 → 7。</div></div>
        <div className="spec-row"><div className="spec-k">怎么练</div><div className="spec-v"><b>精听</b>（逐句听写，找出听不出的连读弱读盲区）+ <b>跟读</b>练语音 + 做题时"预读题干、划关键词、等同义替换出现"。</div></div>
        <div className="spec-row"><div className="spec-k trap">常见坑</div><div className="spec-v trap">纠结上一题没听清 → <b>连丢后面好几题</b>；听懂了却拼错、漏写复数 s；没预读题干，答案来了没接住。</div></div>
      </div>

      <h2><span className="h2-en">The core drill</span>核心练法：精听 + 预读</h2>
      <ul className="tight">
        <li><b>精听一段</b>：不看文本反复听，逐句默写；卡住的地方对答案，标出是"没听出连读"还是"生词"。</li>
        <li><b>预读题干</b>：录音开始前的空档，快速扫题、划出关键词和"要填什么词性 / 单位"。</li>
        <li><b>果断弃子</b>：一题没抓住立刻放，把注意力挪到下一题。丢 1 题是丢 1 题，恋战是丢一串。</li>
      </ul>

      <Note tag="拼写就是分">
        听力填空<b>拼错 = 0 分</b>，再懂也没用。日常听写时就把拼写和单复数一起练对，
        别等考场才发现 <code>government</code> 写不利索。
      </Note>

      <Bridge>
        目标 <b>Band 7</b>（约 30/40）。精听补盲区、预读接答案、拼写不失手——
        听力是你这盘棋里最该先冲高的一项。
      </Bridge>
    </ChapterShell>
  )
}
