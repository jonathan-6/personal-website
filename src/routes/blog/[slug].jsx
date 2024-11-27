import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostBySlug } from '../../lib/posts'
import BlogPost from '../../components/BlogPost'

const BlogPostPage = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const loadPost = async () => {
      try {
        console.log('Loading post with slug:', slug) // Debug log
        const postData = await getPostBySlug(slug)
        console.log('Post data:', postData) // Debug log
        if (postData) {
          setPost(postData)
        } else {
          setError('Post not found')
        }
      } catch (err) {
        console.error('Error loading post:', err)
        setError(err.message)
      }
    }

    loadPost()
  }, [slug])

  if (error) return <div>Error loading post: {error}</div>
  if (!post) return <div>Loading...</div>

  return <BlogPost post={post} />
}

export default BlogPostPage