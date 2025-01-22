import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllPosts } from '../lib/posts'
import { getAllWork } from '../lib/work'

const MinimalSite = () => {
    const [posts, setPosts] = useState([])
    const [work, setWork] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadContent = async () => {
            try {
                const [allPosts, allWork] = await Promise.all([
                    getAllPosts(),
                    getAllWork()
                ])
                setPosts(allPosts)
                setWork(allWork)
            } catch (error) {
                setError(error.message)
            }
        }
        loadContent()
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
              {"I build products that make complex technology feel simple and meaningful. Lately, I'm energized by products that aim to make a difference in the world. In an era where AI integration seems ubiquitous, I believe in keeping the end user's experience simple to deliver real value. Not everything needs to be a chatbot."}
            </p>

            <p className="font-serif text-base mb-6">
              {"At Ready, I led development of AI-driven mental health and relationship tools, achieving industry-leading retention metrics. At Metalab and Deloitte, I built consumer and enterprise products that made complex technology accessible – from health tech to federal AI platforms."}
            </p>
          </div>

           {/* Latest Work */}
        <div className="mb-16">
          <h2 className="font-serif text-base mb-6 font-semibold">{"Selected work"}</h2>
          <div className="space-y-8">
            {work.map(project => (
              <article key={project.slug} className="group">
                {/*<div className="mb-2">
                  <time className="font-serif text-base text-gray-500">
                    {project.timeline}
                  </time>
                </div>*/}
                <h3 className="font-serif text-base mb-2">
                  <Link 
                    to={`/work/${project.slug}`}
                    className="underline hover:no-underline"
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className="font-serif text-base text-gray-600">{project.subtitle}</p>
              </article>
            ))}
          </div>
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
              {"Email me at "}<a href="mailto:jonathan3marks@gmail.com" className="underline hover:no-underline">{"jonathan3marks@gmail.com"}</a><br />
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
                 <li>{"I'm usually learning something new – currently building this site – or exploring different cultures through food and travel, from Vietnam's street food to Portugal's pastéis de nata."}</li>
             </ul>
          </div>
        </main>
      </div>
    );
  };
  
  export default MinimalSite;