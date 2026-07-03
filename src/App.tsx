import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Layout } from './site/Layout'
import { Home } from './pages/Home'
import './site.css'

// 章节页全部按需加载（lazy）——首页只下载外壳 + Home，点哪节才拉哪节的代码。
// 页面是具名导出，所以用 .then 取出对应的命名成员当 default。
const L = <T,>(p: Promise<T>, k: keyof T) =>
  lazy(() => p.then((m) => ({ default: m[k] as React.ComponentType })))

const WhatIsIelts = L(import('./pages/WhatIsIelts'), 'WhatIsIelts')
const BandScale = L(import('./pages/BandScale'), 'BandScale')
const HowExaminersScore = L(import('./pages/HowExaminersScore'), 'HowExaminersScore')
const ScoreArithmetic = L(import('./pages/ScoreArithmetic'), 'ScoreArithmetic')
const ParaphraseChain = L(import('./pages/ParaphraseChain'), 'ParaphraseChain')
const Listening = L(import('./pages/Listening'), 'Listening')
const ReadingOverview = L(import('./pages/ReadingOverview'), 'ReadingOverview')
const ReadingTfng = L(import('./pages/ReadingTfng'), 'ReadingTfng')
const ReadingMatching = L(import('./pages/ReadingMatching'), 'ReadingMatching')
const Speaking = L(import('./pages/Speaking'), 'Speaking')
const WritingOverview = L(import('./pages/WritingOverview'), 'WritingOverview')
const WritingTask1 = L(import('./pages/WritingTask1'), 'WritingTask1')
const WritingTask2 = L(import('./pages/WritingTask2'), 'WritingTask2')
const TrainingLoop = L(import('./pages/TrainingLoop'), 'TrainingLoop')
const TenWeekPlan = L(import('./pages/TenWeekPlan'), 'TenWeekPlan')
const ExamDayResources = L(import('./pages/ExamDayResources'), 'ExamDayResources')

function PageFallback() {
  return <div className="page-loading" role="status" aria-live="polite">加载中…</div>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="ch/*"
            element={
              <Suspense fallback={<PageFallback />}>
                <Routes>
                  <Route path="what-is-ielts" element={<WhatIsIelts />} />
                  <Route path="the-band-scale" element={<BandScale />} />
                  <Route path="how-examiners-score" element={<HowExaminersScore />} />
                  <Route path="score-arithmetic" element={<ScoreArithmetic />} />
                  <Route path="the-paraphrase-chain" element={<ParaphraseChain />} />
                  <Route path="listening" element={<Listening />} />
                  <Route path="reading-overview" element={<ReadingOverview />} />
                  <Route path="reading-tfng" element={<ReadingTfng />} />
                  <Route path="reading-matching" element={<ReadingMatching />} />
                  <Route path="speaking" element={<Speaking />} />
                  <Route path="writing-overview" element={<WritingOverview />} />
                  <Route path="writing-task1" element={<WritingTask1 />} />
                  <Route path="writing-task2" element={<WritingTask2 />} />
                  <Route path="the-training-loop" element={<TrainingLoop />} />
                  <Route path="ten-week-plan" element={<TenWeekPlan />} />
                  <Route path="exam-day-and-resources" element={<ExamDayResources />} />
                </Routes>
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
