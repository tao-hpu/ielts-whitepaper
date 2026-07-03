import { ChapterShell, Bridge } from '../components/ChapterShell'
import { Note } from '../components/kit'

export function TrainingLoop() {
  return (
    <ChapterShell
      slug="the-training-loop"
      part="第五部分 · 怎么练，怎么上考场"
      lede={<>方法只有一个闭环。刷题不是目的，<b>"消灭你反复犯的那类错"才是</b>。进步不发生在"做新题"里，发生在"改对旧错"里。</>}
    >
      <h2><span className="h2-en">Diagnose → Prescribe → Retrain</span>三步闭环</h2>
      <div className="steps">
        <div className="step">
          <div className="step-n">STEP 01</div>
          <h4>诊断</h4>
          <p>做一套真题摸底，定位你到底卡在哪条标准、哪类题型、哪个维度。不是"我阅读差"，是"我 T/F/NG 正确率 40%"。</p>
        </div>
        <div className="step">
          <div className="step-n">STEP 02</div>
          <h4>处方</h4>
          <p>针对诊断出的短板下定向训练：该补题型解法就专项刷该题型，该补语法就针对性改错，不撒胡椒面。</p>
        </div>
        <div className="step">
          <div className="step-n">STEP 03</div>
          <h4>复训</h4>
          <p>盯着同一类错反复练，直到它不再犯。攒你的"错题指纹"，定期回炉——这才是分数真正上去的地方。</p>
        </div>
      </div>

      <h2><span className="h2-en">Your error fingerprint</span>建一份"错题指纹"</h2>
      <p>准备一个本子或文档，每次做完题只记<strong>错因</strong>，不抄题：</p>
      <ul className="tight">
        <li>错在哪类题型 / 哪个维度（如"NG 判成 False"、"时态错"）。</li>
        <li>为什么错（脑补？没定位？拼写？跑题？）。</li>
        <li>每周回看：<b>确认同一个坑没有第二次踩。</b></li>
      </ul>

      <Note tag="核心原则">
        进步不在"做新题"，在"改对旧错"。每周留一个固定时段，只做一件事：
        <b>回看错题指纹，把重复犯的错一个个消掉。</b>
      </Note>

      <Bridge>
        这套"诊断 → 处方 → 复训"是整份白皮书的方法内核，也是未来产品要自动化的闭环：
        你的错题指纹沉淀成<b>个性化训练队列</b>。
      </Bridge>
    </ChapterShell>
  )
}
