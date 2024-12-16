import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BlogPost = ({ post }) => {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <main className="max-w-2xl mx-auto px-6 pt-24 pb-24">
        <Link 
          to="/" 
          className="font-serif text-base font-normal no-underline hover:underline mb-16 inline-block"
        >
          ← back to home
        </Link>
      
        <article className="prose prose-slate max-w-none">
          <header className="mt-1 mb-8 not-prose">
            <h1 className="font-serif text-[28px] mb-2 font-medium leading-tight">{post.title}</h1>
            <time className="font-serif text-base italic text-gray-500 block">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </header>
          
          <div 
            className="
              [&_figure.reduced-width]:w-3/4 
              [&_figure.reduced-width]:mx-auto 
              prose-img:max-w-full 
              prose-img:!w-auto 
              prose-figure:my-12 
              prose-figcaption:text-sm 
              prose-figcaption:text-gray-500 
              prose-figcaption:text-center 
              prose-p:text-black 
              prose-p:font-serif 
              prose-ul:font-serif 
              prose-ul:text-black 
              prose-ol:font-serif 
              prose-ol:text-black 
              prose-li:marker:text-black 
              prose-h2:font-serif
              [&_ol>li]:font-serif
              [&_ol>li::marker]:text-black
              [&_ol]:pl-6
              [&_ol]:space-y-2
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <Link 
          to="/" 
          className="font-serif text-base font-normal no-underline hover:underline mt-16 mb-16 inline-block"
        >
          ← back to home
        </Link>
      </main>
    </div>
  )
}

BlogPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
}

export default BlogPost