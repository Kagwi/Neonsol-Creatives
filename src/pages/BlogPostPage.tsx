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
