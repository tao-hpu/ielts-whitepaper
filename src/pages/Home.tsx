import { Link } from 'react-router-dom'
import { parts, chapterPath, firstLiveChapter } from '../chapters'
import { BandRuler } from '../components/kit'

export function Home() {
  const start = firstLiveChapter()
  return (
    <div className="home">
      <header className="hero">
        <p className="hero-eyebrow">教学型白皮书 · A Teaching Whitepaper</p>
        <h1 className="hero-h1">
          雅思不是一场英语考试。<br />
          它是一套可以被<span className="hl">逆向工程</span>的评分系统。
        </h1>
        <p className="hero-lede">
          大多数人把雅思当成"测英语水平"，于是埋头背单词、盲目刷题，提分慢。真相是：雅思有一套
          <b>公开的评分标准</b>，考官照着它逐条打分。看懂这套标准，你就能把模糊的"提高英语"
          翻译成清晰的"满足哪几条可勾选的要求"——<b>这就是这份白皮书要教你的事。</b>
        </p>

        <BandRuler />

        <div className="hero-meta">
          <span>类型 · Academic</span>
          <span>示范目标 · Overall 6.5</span>
          <span>周期 · 10 周</span>
          <span>设计 · 与 l2a 同源</span>
        </div>

        {start && (
          <Link className="start-cta" to={chapterPath(start)}>
            从第 01 节开始 <span className="arrow">→</span>
          </Link>
        )}
      </header>

      <section className="two-ideas">
        <div className="cardgrid">
          <div className="card">
            <span className="card-k">核心念头 ①</span>
            <h4>分数是"可勾选标准"的总和</h4>
            <p>不是玄学，不是天赋。考官手里有一张评分细则（band descriptors），照着它一条条勾。你要做的是逆向工程：从标准倒推每一项该练什么。</p>
          </div>
          <div className="card">
            <span className="card-k">核心念头 ②</span>
            <h4>听说读写共享一条底层链</h4>
            <p>它们不是四门孤立的课。输入端（听 / 读）遇到的同义替换，正是输出端（说 / 写）的高分表达。打通这条链，才是"系统化"真正的价值。</p>
          </div>
        </div>
      </section>

      <section className="home-outline">
        <h2 className="outline-title">全书大纲 · 5 部分 16 节</h2>
        {parts.map((part) => (
          <div className="ol-part" key={part.name}>
            <div className="ol-part-head">
              <div className="ol-part-name">{part.name}</div>
              <div className="ol-part-blurb">{part.blurb}</div>
            </div>
            <ul className="ol-list">
              {part.chapters.map((c) => {
                const live = c.status === 'live'
                return (
                  <li key={c.slug}>
                    {live ? (
                      <Link className="ol-item" to={chapterPath(c)}>
                        <span className="ol-num">{c.num}</span>
                        <span className="ol-main">
                          <span className="ol-title">{c.title}{c.core && <span className="ol-star"> ★</span>}</span>
                          <span className="ol-hook">{c.hook}</span>
                        </span>
                        <span className="ol-bridge">{c.bridge}</span>
                      </Link>
                    ) : (
                      <span className="ol-item is-planned">
                        <span className="ol-num">{c.num}</span>
                        <span className="ol-main">
                          <span className="ol-title">{c.title}</span>
                          <span className="ol-hook">{c.hook}</span>
                        </span>
                        <span className="ol-bridge">规划中</span>
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
        <p className="outline-foot">★ 标记的是"过河最短主线"。真题只认官方《剑桥雅思》，本项目不分发任何真题内容。</p>
      </section>
    </div>
  )
}
