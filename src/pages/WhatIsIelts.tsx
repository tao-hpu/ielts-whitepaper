import { ChapterShell, Bridge } from '../components/ChapterShell'
import { Note } from '../components/kit'

export function WhatIsIelts() {
  return (
    <ChapterShell
      slug="what-is-ielts"
      part="第一部分 · 认识这场考试"
      lede={<>International English Language Testing System——一场衡量"在<b>真实场景里用英语完成任务</b>"的考试，由剑桥、英国文化协会、IDP 共同运营。动手备考前，先认清它长什么样。</>}
    >
      <h2><span className="h2-en">Academic vs General</span>两个版本，别考错</h2>
      <div className="cardgrid">
        <div className="card">
          <span className="card-k">留学</span>
          <h4>Academic 学术类</h4>
          <p>留学申请用。写作 Task 1 是<strong>图表描述</strong>。本白皮书全程针对它。</p>
        </div>
        <div className="card">
          <span className="card-k">移民 / 工作</span>
          <h4>General Training 培训类</h4>
          <p>移民 / 工作签证用。写作 Task 1 是<strong>书信</strong>，阅读偏生活材料。</p>
        </div>
      </div>

      <h2><span className="h2-en">Four skills at a glance</span>四项 · 一张表看全</h2>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th>项目</th><th className="num">时长</th><th>题量 / 任务</th><th>考什么</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>听力 Listening</strong></td><td className="num">约 30 min</td><td>40 题 · 4 段录音</td><td>定位信息、同义替换、拼写</td></tr>
            <tr><td><strong>阅读 Reading</strong></td><td className="num">60 min</td><td>40 题 · 3 篇文章</td><td>题型解法、定位、配速</td></tr>
            <tr><td><strong>写作 Writing</strong></td><td className="num">60 min</td><td>Task 1 (150 词) + Task 2 (250 词)</td><td>任务回应、结构、词汇、语法</td></tr>
            <tr><td><strong>口语 Speaking</strong></td><td className="num">11–14 min</td><td>3 部分 · 考官面对面</td><td>流利度、词汇、语法、发音</td></tr>
          </tbody>
        </table>
      </div>
      <p>四项总时长约 <strong>2 小时 45 分</strong>。口语常与听读写安排在同一天或相邻几天，是真人考官一对一。</p>

      <h2><span className="h2-en">Computer-delivered</span>机考：现在的标准形态</h2>
      <p>雅思现在基本都是<strong>机考</strong>——在电脑上作答，纸考正在各考点陆续退场，不用再纠结"选机考还是纸考"。机考的几个实感：<strong>出分快</strong>（3–5 天）、答案能随时回改、听力播完只给较短的答案确认时间（没有纸考那种额外誊卡时间）、作文<strong>直接打字</strong>且实时显示字数。对打字顺手的人是明显利好。</p>

      <Note tag="报考前必查">
        成绩 <b>2 年</b>有效。很多学校卡"总分够 + 单项不低于某值"，报考前先查清目标院校的
        <b>单项最低要求</b>——单项没够，总分再高也白搭。
      </Note>

      <Bridge>
        这一节不直接给分，但它决定你<b>别把力气用错地方</b>：认准 Academic、锁定目标 6.5，
        后面每一节都是朝这个目标的拆解。
      </Bridge>
    </ChapterShell>
  )
}
