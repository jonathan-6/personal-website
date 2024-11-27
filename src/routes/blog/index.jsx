import { useEffect, useState } from 'react'
import BlogList from '../../components/BlogList'
import { getAllPosts } from '../../lib/posts'

const BlogIndex = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const loadPosts = async () => {
      const allPosts = await getAllPosts()
      setPosts(allPosts)
    }
    loadPosts()
  }, [])

  return (
    <div className="max-w-2xl mx-auto px-6 pt-24 pb-24">
      <h1 className="font-serif text-2xl mb-8">Blog</h1>
      <BlogList posts={posts} />
    </div>
  )
}

export default BlogIndex