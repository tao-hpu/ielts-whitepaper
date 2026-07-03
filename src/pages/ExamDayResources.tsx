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
        <li><b>听力</b>：抓住每段前的空档预读题干；一题丢了立刻放，保住后面一串。</li>
        <li><b>阅读</b>：严格 20 分钟一篇，到点就换；拿不准的先猜不空——<b>不倒扣</b>。</li>
        <li><b>写作</b>：先看两个 Task 的题，<b>先写 Task 2</b>（权重高），留 20 分钟给 Task 1；各留 2 分钟检查字数和低级错。</li>
        <li><b>口语</b>：把它当聊天，不是背诵；听不懂可以请考官重复，卡壳了就换个说法继续。</li>
      </ul>

      <h2><span className="h2-en">Materials that matter</span>材料就认一套</h2>
      <ul className="check">
        <li><b>真题只用官方《剑桥雅思 1–19》</b>——最贴近真实难度。自己购买正版，本项目不分发任何真题内容（版权归剑桥）。</li>
        <li><b>口语题库每季度更新</b>（1 / 5 / 9 月换题），用当季题卡练，别吃过期题。</li>
        <li><b>评分标准</b>去官方查 Public Band Descriptors，对着它自评，比看范文更有用。</li>
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
