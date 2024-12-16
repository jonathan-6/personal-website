import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import MinimalSite from './components/MinimalSite'
import BlogIndex from './routes/blog'
import BlogPostPage from './routes/blog/[slug]'
import WorkIndex from './routes/work'
import WorkPage from './routes/work/[slug]'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MinimalSite />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/work" element={<WorkIndex />} />
        <Route path="/work/:slug" element={<WorkPage />} />
      </Routes>
    </Router>
  )
}

export default App