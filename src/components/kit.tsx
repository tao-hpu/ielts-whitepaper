import { type ReactNode } from 'react'

// 复用组件：批注块 Note + 九分制标尺 BandRuler。

export function Note({ tag = '重点', tone, children }: {
  tag?: string
  tone?: 'gold'
  children: ReactNode
}) {
  return (
    <div className={`note ${tone === 'gold' ? 'gold' : ''}`}>
      <span className="note-tag">✎ {tag}</span>
      {children}
    </div>
  )
}

const BANDS = [
  { n: '0', lab: '' },
  { n: '1', lab: '' },
  { n: '2', lab: '' },
  { n: '3', lab: '' },
  { n: '4', lab: 'Limited' },
  { n: '5', lab: 'Modest' },
  { n: '6', lab: 'Competent', zone: true },
  { n: '6.5', lab: '目标线', zone: true, target: true },
  { n: '7', lab: 'Good', zone: true },
  { n: '8·9', lab: 'Very good / Expert' },
]

export function BandRuler({ caption = 'The 9-band scale · 雅思的那把尺' }: { caption?: string }) {
  return (
    <div className="ruler-shell">
      <div className="ruler-cap">{caption}</div>
      <div className="ruler" role="img"
        aria-label="雅思 0 到 9 分档标尺，6 到 7 分为留学门槛带，6.5 为多数人目标线">
        {BANDS.map((b) => (
          <div key={b.n} className={`tick ${b.zone ? 'zone' : ''} ${b.target ? 'target' : ''}`}>
            <span className="n">{b.n}</span>
            <span className="lab">{b.lab}</span>
            {b.target && <span className="target-mark" aria-hidden="true" />}
          </div>
        ))}
      </div>
      <div className="ruler-note">
        <span>◍ 每 <b>0.5</b> 分一档，0–9 共 19 档</span>
        <span>◍ <b>6.0–7.0</b> 是绝大多数留学 / 签证门槛带</span>
      </div>
    </div>
  )
}
