import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { findChapter } from '../chapters'

const SITE = '雅思白皮书'
const DEFAULT_DESC =
  '把雅思讲成一套可以被逆向工程的评分系统——从「什么是雅思」到「怎么练」的系统化听说读写攻略。'

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** 路由切换时把 <title> 和 description / og 标签换成当前章节的——SPA 也能有正确标题与分享卡。 */
export function useDocMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const slug = pathname.startsWith('/ch/') ? pathname.slice('/ch/'.length) : ''
    const c = slug ? findChapter(slug) : undefined
    const isPlanner = pathname.startsWith('/planner')
    const isLinks = pathname.startsWith('/links')

    const title = c
      ? `${c.num} ${c.title} · ${SITE}`
      : isPlanner
        ? `备考规划器 · ${SITE}`
        : isLinks
          ? `官方链接速查 · ${SITE}`
          : `${SITE} · 从零到你的目标分`
    const desc = c
      ? c.hook
      : isPlanner
        ? '填五个问题，纯规则算出你的四项象限、目标配分表、预计周期和每周时间配方。'
        : isLinks
          ? '报名、备考、评分标准、真题——雅思官方入口一页直达。'
          : DEFAULT_DESC

    document.title = title
    setMeta('description', desc)
    setProperty('og:title', title)
    setProperty('og:description', desc)
    setProperty('og:type', 'website')
    setProperty('og:url', `https://ielts.fim.ai${c ? `/ch/${slug}` : isPlanner ? '/planner' : isLinks ? '/links' : ''}`)
    setMeta('twitter:title', title)
    setMeta('twitter:description', desc)
  }, [pathname])
}
