import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BlogList = ({ posts }) => {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article key={post.slug} className="group">
          <div className="mb-2">
            <time className="font-serif text-base text-gray-500">
              {new Date(post.date).toLocaleDateString()}
            </time>
          </div>
          <h3 className="font-serif text-base mb-2">
            <Link 
              to={`/blog/${post.slug}`} 
              className="underline hover:no-underline"
            >
              {post.title}
            </Link>
          </h3>
          <p className="font-serif text-base text-gray-600">
            {post.excerpt}
          </p>
        </article>
      ))}
    </div>
  )
}

BlogList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired
    })
  ).isRequired
}

export default BlogList