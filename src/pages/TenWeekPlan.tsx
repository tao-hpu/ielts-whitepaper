import { ChapterShell, Bridge } from '../components/ChapterShell'
import { Note } from '../components/kit'

export function TenWeekPlan() {
  return (
    <ChapterShell
      slug="ten-week-plan"
      part="第五部分 · 怎么练，怎么上考场"
      lede={<>把闭环铺进日历。以 6.5、2–3 个月为例，分三个阶段：<b>搭框架 → 上量练弱项 → 全真模考</b>。</>}
    >
      <h2><span className="h2-en">Three phases</span>十周节奏</h2>
      <p>开跑前先花一个下午<b>摸底</b>：掐表做一套完整真题（只批听力阅读，写作口语先按 5.5–6 估），
        用真实分数定弱项和配分——<b>不摸底的计划都是猜</b>。</p>
      <div className="table-x">
        <table className="ledger">
          <thead>
            <tr><th className="num">阶段</th><th>周次</th><th>重点</th></tr>
          </thead>
          <tbody>
            <tr><td className="num">Ⅰ</td><td>第 1–3 周</td><td><strong>搭框架</strong>：过一遍听读所有题型解法 + 高频词；写作学 Task 1/2 骨架模板，口语建素材库</td></tr>
            <tr><td className="num">Ⅱ</td><td>第 4–7 周</td><td><strong>上量练弱项</strong>：限时刷题按题型专项突破；每周交 1–2 篇作文批改、1 次口语模拟</td></tr>
            <tr><td className="num">Ⅲ</td><td>第 8–10 周</td><td><strong>全真模考</strong>：掐表整套，从每周 1 套逐步加密到隔天 1 套；揪反复犯的同一类错，调时间分配与临场状态</td></tr>
          </tbody>
        </table>
      </div>

      <h2><span className="h2-en">Weekly recipe</span>每周训练配方（参考）</h2>
      <ul className="check">
        <li><b>听力</b> · 精听 2–3 段 + 跟读 · 做 1 套限时题</li>
        <li><b>阅读</b> · 按题型专项 1 次 + 掐表整篇 2 篇</li>
        <li><b>写作</b> · Task 1 与 Task 2 各 1 篇，<b>务必找人 / AI 对标批改</b>（不批改等于白写）</li>
        <li><b>口语</b> · Part 2 话题卡 3–5 张 · 录音自评 1 次 · 有条件找人模拟</li>
        <li><b>词汇</b> · 每日一组高频词 + <b>把当天听读里的同义替换收进语料库</b></li>
        <li><b>复盘</b> · 每周固定时段回看错题指纹，消掉重复犯的错</li>
      </ul>

      <Note tag="节奏比强度重要">
        每天 2–3 小时、六天一循环，好过周末突击一整天。
        雅思是<b>肌肉记忆</b>——题型手感、听力反应、写作结构，都需要高频、短时、持续地喂。
        市面上的冲刺计划普遍日均 4–8 小时、全程无休，那是全职备考的强度；本计划刻意反着来：
        <b>2–3 小时 + 每周休一天</b>，是在职 / 在校的人能真正撑满十周的配速。
        分数缺口大，就<b>拉长周数</b>，别加码日时长。
      </Note>

      <p>顺带说明一个流派分歧：不少备考计划把口语压到第 4–5 周才启动、先攻听读。
        本计划让口语和写作<b>从第 1 周就开工</b>——"输出项见效慢"恰恰是两派的共识，
        那就更该早点开始积累，而不是把最慢的项留到最后赶工。</p>

      <Bridge>
        把这张表贴出来照着走，十周后你手上会有：吃透的题型、批改过的十几篇作文、几套全真模考的手感——
        以及一份越来越薄的错题指纹。
      </Bridge>
    </ChapterShell>
  )
}
