import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MinimalSite from './components/MinimalSite'
import BlogIndex from './routes/blog'
import BlogPostPage from './routes/blog/[slug]'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MinimalSite />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </Router>
  )
}

export default App