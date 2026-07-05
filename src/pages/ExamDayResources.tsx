import { Link } from 'react-router-dom'
import { ChapterShell, Bridge } from '../components/ChapterShell'
import { Note } from '../components/kit'

export function ExamDayResources() {
  return (
    <ChapterShell
      slug="exam-day-and-resources"
      part="第五部分 · 怎么练，怎么上考场"
      lede={<>最后一节：考场上怎么分配时间、用什么材料，以及这份白皮书接下来会长成什么。</>}
    >
      <h2><span className="h2-en">Exam-day tactics</span>考场策略</h2>
      <ul className="tight">
        <li><b>听力</b>：抓住每段前的空档预读题干；一题丢了立刻放，保住后面一串。机考结尾有 <b>2 分钟</b>检查答案的时间。</li>
        <li><b>阅读</b>：严格 20 分钟一篇，到点就换；拿不准的先猜不空——<b>不倒扣</b>。</li>
        <li><b>写作</b>：先看两个 Task 的题，<b>先写 Task 2</b>（权重高），留 20 分钟给 Task 1；各留 2 分钟检查字数和低级错。</li>
        <li><b>口语</b>：把它当聊天，不是背诵；听不懂可以请考官重复，卡壳了就换个说法继续。</li>
      </ul>

      <h2><span className="h2-en">Admin quick facts</span>考务速查（2026 现行口径）</h2>
      <div className="spec">
        <div className="spec-row"><div className="spec-k">考试形式</div><div className="spec-v">中国大陆自 <b>2026 年 9 月 1 日</b>起全面机考、停办纸笔（官方公告）。本书全部按机考口径写。</div></div>
        <div className="spec-row"><div className="spec-k">口试预订</div><div className="spec-v">可通过官方微信小程序「雅思考试官方服务平台」<b>自行预订口试时段</b>；机考口试通常安排在笔试同日或临近日期。</div></div>
        <div className="spec-row"><div className="spec-k">出分</div><div className="spec-v">机考约 <b>3–5 天</b>出分；成绩有效期 2 年。</div></div>
        <div className="spec-row"><div className="spec-k">复议 EOR</div><div className="spec-v">成绩公布后 <b>4 周内</b>在报名网站申请，1400 元，<b>复议一项或多项同价</b>，最多 6 周出结果，<b>分数提高则全额退费</b>。最值得复议的情形：说 / 写主观分与听 / 读客观分<b>差距异常大</b>。</div></div>
      </div>
      <p>报名、复议、官方免费模考等入口，都收在<Link to="/links">官方链接速查</Link>一页，考前照单点一遍。</p>

      <h2><span className="h2-en">Materials that matter</span>材料就认一套</h2>
      <ul className="check">
        <li><b>真题只用官方《剑桥雅思》系列</b>（已出到 20）——最贴近真实难度。自己购买正版，本项目不分发任何真题内容（版权归剑桥）。</li>
        <li><b>口语题库每季度更新</b>（1 / 5 / 9 月换题——这是考生社区的长期归纳，<b>官方从未证实</b>），用当季题卡练，别吃过期题。</li>
        <li><b>评分标准</b>直接读官方 Public Band Descriptors（<Link to="/links">链接页</Link>有直达 PDF），对着它自评，比看范文更有用。</li>
      </ul>

      <h2><span className="h2-en">What comes next</span>这份白皮书的下一站</h2>
      <p>v0 是"脉络与方法"。往下，它会照 <a href="https://l2a.fim.ai" target="_blank" rel="noreferrer">linalg → attention</a> 的路子，长成一个<strong>可交互的教学站点</strong>：</p>
      <ul className="tight">
        <li>每个<b>题型一个能上手练的模块</b>（T/F/NG、Matching、Part 2 框架…），练完即时反馈；</li>
        <li>写作 / 口语接<b>对标 band descriptors 的 AI 批改</b>，逐维度指出扣分点；</li>
        <li>你的<b>错题指纹</b>沉淀成个性化训练队列——诊断 → 处方 → 复训的闭环自动跑起来。</li>
      </ul>

      <Note tag="先过河，再修桥" tone="gold">
        眼下这份白皮书，是给<b>正在备考的你</b>用的路线图；
        等你亲手验证过它管用，它才有资格变成给更多人用的产品。
      </Note>

      <Bridge>
        读到这儿，你手里已经有了一整套地图：分怎么给、6.5 怎么配、四项怎么练、十周怎么排。
        剩下的只有一件事——<b>真上路。</b>
      </Bridge>
    </ChapterShell>
  )
}
