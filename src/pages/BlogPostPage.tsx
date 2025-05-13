import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import { blogPosts } from '../data/blog';

function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the blog post with the matching id
  const postId = parseInt(id || '0');
  const post = blogPosts.find(p => p.id === postId);
  
  // If post doesn't exist, navigate back to blog page
  if (!post) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-secondary-900 mb-6">Post Not Found</h2>
        <p className="text-secondary-600 mb-8">The blog post you're looking for doesn't exist.</p>
        <Button to="/blog" variant="primary">
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Button>
      </div>
    );
  }
  
  // Find previous and next posts
  const currentIndex = blogPosts.findIndex(p => p.id === postId);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  
  // Generate placeholder content for the blog post
  const generateParagraphs = () => {
    return (
      <>
        <p className="mb-6 leading-relaxed">
          In the rapidly evolving landscape of technology, businesses face the continuous challenge of staying ahead. The digital transformation journey requires not just adopting new technologies, but fundamentally rethinking business models and processes. This article explores how organizations can navigate this complex terrain and leverage innovation to drive growth.
        </p>
        <p className="mb-6 leading-relaxed">
          Digital transformation is more than just implementing new technologies—it's about reimagining how a business operates and delivers value to its customers. It involves a cultural shift that requires organizations to continually challenge the status quo, experiment, and become comfortable with failure as a stepping stone to success.
        </p>
        <h2 className="text-2xl font-semibold mb-4 mt-8 text-secondary-900">Key Components of Digital Transformation</h2>
        <p className="mb-6 leading-relaxed">
          Successful digital transformation strategies typically encompass several key components:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-secondary-700">
          <li>Customer Experience: Reimagining customer journeys and touchpoints to create seamless, personalized experiences.</li>
          <li>Operational Agility: Streamlining processes and workflows to increase efficiency and responsiveness.</li>
          <li>Cultural Transformation: Fostering a culture of innovation, collaboration, and continuous learning.</li>
          <li>Data Integration: Leveraging data analytics and insights to drive decision-making and personalization.</li>
          <li>Technology Architecture: Building flexible, scalable technology foundations that support rapid innovation.</li>
        </ul>
        <p className="mb-6 leading-relaxed">
          Organizations that excel at digital transformation don't just implement these components in isolation—they integrate them into a cohesive strategy aligned with their business objectives.
        </p>
        <h2 className="text-2xl font-semibold mb-4 mt-8 text-secondary-900">Challenges and Pitfalls</h2>
        <p className="mb-6 leading-relaxed">
          Despite the clear benefits, digital transformation initiatives face numerous challenges. A McKinsey study found that less than 30% of digital transformations succeed. Common pitfalls include:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-secondary-700">
          <li>Lack of clear vision and strategy</li>
          <li>Insufficient leadership commitment</li>
          <li>Resistance to change from employees</li>
          <li>Focusing too much on technology rather than business outcomes</li>
          <li>Attempting to transform too much at once</li>
        </ul>
        <p className="mb-6 leading-relaxed">
          To overcome these challenges, organizations should prioritize creating a clear transformation roadmap, securing executive sponsorship, investing in change management, and focusing on delivering tangible business value early and often.
        </p>
        <h2 className="text-2xl font-semibold mb-4 mt-8 text-secondary-900">The Path Forward</h2>
        <p className="mb-6 leading-relaxed">
          As we look to the future, digital transformation will continue to be a critical priority for organizations seeking to remain competitive. However, the focus will shift from broad transformation initiatives to more targeted, value-driven approaches that directly address specific business challenges and opportunities.
        </p>
        <p className="mb-6 leading-relaxed">
          Successful organizations will maintain a balance between innovation and execution, continuously experimenting with new technologies and approaches while ensuring they deliver tangible business outcomes. They will also recognize that digital transformation is not a one-time project but an ongoing journey of evolution and adaptation.
        </p>
        <p className="mb-8 leading-relaxed">
          By embracing this mindset and approach, businesses can position themselves for sustained success in an increasingly digital world.
        </p>
      </>
    );
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary-950 to-secondary-900 text-white">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center text-secondary-300 gap-4 mb-8">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-2" />
                <span>{post.category}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto rounded-xl shadow-medium"
              />
            </div>
            <article className="prose prose-lg max-w-none text-secondary-700">
              {generateParagraphs()}
            </article>
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-secondary-200">
              <div className="flex flex-wrap gap-2">
                <span className="text-secondary-600 font-medium">Tags:</span>
                <a href="#" className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm hover:bg-secondary-200 transition-colors">
                  Technology
                </a>
                <a href="#" className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm hover:bg-secondary-200 transition-colors">
                  Innovation
                </a>
                <a href="#" className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm hover:bg-secondary-200 transition-colors">
                  Digital Transformation
                </a>
                <a href="#" className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm hover:bg-secondary-200 transition-colors">
                  Strategy
                </a>
              </div>
            </div>
            
            {/* Author */}
            <div className="mt-12 p-8 bg-secondary-50 rounded-xl">
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt={post.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2 text-secondary-900">{post.author}</h3>
                  <p className="text-secondary-600 mb-4">
                    Senior Technology Consultant at Neonsol Creatives with over 10 years of experience in digital transformation and emerging technologies.
                  </p>
                  <div className="flex space-x-4 justify-center md:justify-start">
                    <a href="#" className="text-primary-600 hover:text-primary-800 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-primary-600 hover:text-primary-800 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-primary-600 hover:text-primary-800 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.21c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Post Navigation */}
            <div className="mt-12 flex flex-col sm:flex-row justify-between items-center border-t border-secondary-200 pt-8">
              {prevPost ? (
                <Link 
                  to={`/blog/${prevPost.id}`} 
                  className="flex items-center text-primary-600 hover:text-primary-800 transition-colors mb-4 sm:mb-0"
                >
                  <ChevronLeft size={20} className="mr-2" />
                  <div>
                    <div className="text-sm text-secondary-600">Previous</div>
                    <div className="font-medium">{prevPost.title}</div>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
              {nextPost && (
                <Link 
                  to={`/blog/${nextPost.id}`} 
                  className="flex items-center text-primary-600 hover:text-primary-800 transition-colors text-right"
                >
                  <div>
                    <div className="text-sm text-secondary-600">Next</div>
                    <div className="font-medium">{nextPost.title}</div>
                  </div>
                  <ChevronRight size={20} className="ml-2" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-secondary-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts
                .filter(p => p.id !== postId && p.category === post.category)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link to={`/blog/${relatedPost.id}`} key={relatedPost.id} className="group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-secondary-900 group-hover:text-primary-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-secondary-600 line-clamp-2 mb-4">{relatedPost.excerpt}</p>
                        <div className="flex items-center text-secondary-500 text-sm">
                          <Calendar size={14} className="mr-1" />
                          <span>{relatedPost.date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPostPage;