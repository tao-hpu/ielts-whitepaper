import { Note } from '../components/kit'

// 官方链接速查：报名 / 备考 / 评分标准 / 真题的官方入口，一页直达。
// 只收官方渠道（NEEA / British Council / IDP / ielts.org / 剑桥出版社），
// URL 均已核实可达（2026-07）；报名与费用类信息一律以官方站现行说明为准。

interface QuickLink {
  name: string
  url: string
  desc: string
  tag: '免费' | '免费 · 需报名' | '付费'
}

interface LinkGroup {
  name: string
  en: string
  links: QuickLink[]
}

const GROUPS: LinkGroup[] = [
  {
    name: '报名与考务',
    en: 'Registration & admin',
    links: [
      { name: '雅思报名官网（NEEA）', url: 'https://ielts.neea.cn', desc: '报名、转退考、查成绩、复议入口——大陆考务全在这', tag: '免费' },
      { name: '复议（EOR）官方说明', url: 'https://ielts.neea.cn/performancereview_cn.html', desc: '成绩公布后 4 周内申请，1400 元一项或多项同价，提分全额退', tag: '付费' },
      { name: '雅思中文官网（British Council）', url: 'https://www.chinaielts.org', desc: '政策公告、考试当日流程、机考说明——2026-09 起全面机考的官宣就在这', tag: '免费' },
    ],
  },
  {
    name: '官方备考资源',
    en: 'Official prep',
    links: [
      { name: '官方样题（ielts.org）', url: 'https://ielts.org/take-a-test/preparation-resources/sample-test-questions', desc: '四科官方样题，认识题型从这开始', tag: '免费' },
      { name: '机考界面模拟（GEL 中国区）', url: 'https://famtest.gelielts.cn', desc: '熟悉机考答题界面，不限时、不用报名——考前务必点一遍', tag: '免费' },
      { name: 'IELTS Ready Premium（BC 考生）', url: 'https://www.chinaielts.org/prepare/ielts-ready-premium', desc: '40 套全真模拟 + 四科专项练习，报名后免费用到考试日；登录入口 britishcouncil.gelielts.cn', tag: '免费 · 需报名' },
      { name: 'IDP 官方备考', url: 'https://ielts.idp.com/prepare', desc: '备考文章与讲座，IDP 渠道考生的 IELTS Ready 入口', tag: '免费' },
    ],
  },
  {
    name: '评分标准',
    en: 'Band descriptors',
    links: [
      { name: 'Writing Band Descriptors（公开版 PDF）', url: 'https://assets.ctfassets.net/unrdeg6se4ke/19SJoSvnUYjrHgVhWvuMnC/42f1b0cb0d7709646a1392d8418646d0/writingbanddescriptorstask1and2.pdf', desc: 'Task 1 / Task 2 四维评分细则——对着它自评，比看范文有用', tag: '免费' },
      { name: 'Speaking Band Descriptors（公开版 PDF）', url: 'https://www.ielts.org/-/media/pdfs/ielts-speaking-band-descriptors.ashx', desc: '口语四维评分细则，录音自评就对这张表', tag: '免费' },
    ],
  },
  {
    name: '真题',
    en: 'Practice tests',
    links: [
      { name: '《剑桥雅思》官方购买（剑桥出版社）', url: 'https://www.cambridge.org/ielts', desc: '唯一该买的真题（已出到 20），买正版——本站不分发任何真题内容', tag: '付费' },
    ],
  },
]

export function QuickLinks() {
  return (
    <article className="page">
      <header className="masthead">
        <div className="kicker">Quick links · 工具页</div>
        <h1>官方链接速查<span className="zh-sub">报名、备考、评分标准、真题——官方入口一页直达</span></h1>
        <p className="lede">
          只收<b>官方渠道</b>：NEEA、British Council、IDP、ielts.org、剑桥出版社。
          备考信息鱼龙混杂，凡是这页能解决的，别去搜。
        </p>
      </header>

      {GROUPS.map((g) => (
        <section key={g.name}>
          <h2><span className="h2-en">{g.en}</span>{g.name}</h2>
          <div className="table-x">
            <table className="ledger">
              <thead>
                <tr><th>入口</th><th>干什么用</th><th className="num">属性</th></tr>
              </thead>
              <tbody>
                {g.links.map((l) => (
                  <tr key={l.url}>
                    <td><a href={l.url} target="_blank" rel="noreferrer"><strong>{l.name}</strong></a></td>
                    <td>{l.desc}</td>
                    <td className="num">{l.tag}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <Note tag="关于 britishcouncil.gelielts.cn">
        常有人把它当成"人人可用的官方免费网课"——不是。它是 BC 官方备考产品
        <b> IELTS Ready Premium</b> 的中国区登录门户（由 BC 指定合作方 GEL 运营），
        <b>只对通过 BC 渠道报名的考生免费</b>，用报名邮箱登录、有效期到考试日。
        还没报名就先用上面的官方样题和机考模拟；报了名，这个入口值得用满。
      </Note>

      <p className="page-foot">链接核实于 2026-07 · 费用与流程以官方站现行说明为准</p>
    </article>
  )
}
