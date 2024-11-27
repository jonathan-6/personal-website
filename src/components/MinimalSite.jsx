import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllPosts } from '../lib/posts'

const MinimalSite = () => {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadPosts = async () => {
            try {
                console.log('Loading posts...') // Debug log
                const allPosts = await getAllPosts()
                console.log('Posts loaded:', allPosts) // Debug log
                setPosts(allPosts)
            } catch (error) {
                console.error('Error loading posts:', error)
                setError(error.message)
            }
        }
        loadPosts()
    }, [])
    
    if (error) {
        return <div>Error loading posts: {error}</div>
    }

    return (
      <div className="min-h-screen bg-[#fafaf9]">
        <main className="max-w-2xl mx-auto px-6 pt-48 pb-24">
          {/* Introduction Section */}
          <div className="mb-16">
            <p className="font-serif text-base mb-6">
              {"Hi, I'm Jonathan 👋🏼"}
            </p>

            <p className="font-serif text-base mb-6">
              {"I'm a product leader searching for my next role while advising early-stage startups. Most recently at Ready, I led development of AI-driven relationship tools, achieving industry-leading retention metrics. At Metalab and Deloitte, I built consumer and enterprise products that made complex technology accessible – from health tech to federal AI platforms."}
            </p>

            <p className="font-serif text-base mb-6">
              {"Building products has given me countless insights and memorable conversations. I've created this space to share these learnings and continue the dialogue."}
            </p>

            {/* 
            <p className="font-serif text-base text-gray-600 leading-relaxed">
              {"Read more about me, take a look at my work and background, or "}<a href="#contact" className="underline hover:no-underline">{"get in touch"}</a>.
            </p>
            */}

          </div>
  
          {/* Latest Blog Posts */}
          <div className="mb-16">
            <h2 className="font-serif text-base mb-6 font-semibold">{"Latest writing"}</h2>
            <div className="space-y-8">
              {posts.map(post => (
                <article key={post.slug} className="group">
                  <div className="mb-2">
                    <time className="font-serif text-base text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
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
                  <p className="font-serif text-base text-gray-600">{post.excerpt}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-16" id="contact">
            <h2 className="font-serif text-base mb-6 font-semibold">{"Contact"}</h2>
            <p className="font-serif text-base">
              {"Email me at "}<a href="mailto:jonathan0marks@gmail.com" className="underline hover:no-underline">{"jonathan0marks@gmail.com"}</a><br />
              {"Connect with me on "}<a href="https://www.linkedin.com/in/jonathanmarks2/" className="underline hover:no-underline">{"LinkedIn"}</a>
            </p>
          </div>

          {/* More About Me Section */}
          <div className="mb-16">
            <h2 className="font-serif text-base mb-6 font-semibold">{"More about me"}</h2>
            <ul className="font-serif text-base space-y-2 list-disc pl-5">
                 <li>{"I call Washington, DC home, where you'll find me exploring the city's amazing museums ("}
                     <a 
                         href="https://americanart.si.edu/visit/saam/kogod-courtyard" 
                         className="underline hover:no-underline"
                     >
                         {"The Kogod Courtyard"}
                     </a>
                {" is my favorite spot for creative thinking) or trying our world class food scene."}</li>
                 <li>{"I teach yoga at Yoga District, a local non-profit."}</li>
                 <li>{"I studied Mining Engineering at Virginia Tech, driven by a passion for environmental conservation and sustainable technology. My first role actually involved working with explosives, but more importantly taught me how to optimize complex operations through technology."}</li>
                 <li>{"At Deloitte, I led the development of Sensingbridge, an NLP-powered AI platform that processed hundreds of thousands of data sources to build knowledge graphs and surface insights for federal and enterprise clients. This work contributed to a 2017 Congressional paper on the foundations and future of AI."}</li>
                 <li>{"I've shaped product strategy for some of America's largest companies: helping Anthem reimagine clinical search experiences and guiding Marriott's product innovation through COVID-19."}</li>
                 <li>{"Most recently, I've focused on bringing scientific research into everyday products – from biological age testing at Tally Health to relationship science at Ready Platform. I'm passionate about making complex technology accessible and engaging."}</li>
                 <li>{"I'm usually learning something new – currently piano – or exploring different cultures through food and travel, from Vietnam's street food to Portugal's pastéis de nata."}</li>
             </ul>
          </div>
  

        </main>
      </div>
    );
  };
  
  export default MinimalSite;