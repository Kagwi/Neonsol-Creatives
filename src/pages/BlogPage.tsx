import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import { Search } from 'lucide-react';
import { blogPosts } from '../data/blog';

function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-32 pb-20 text-white bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://raw.githubusercontent.com/Kagwi/Neonsol-Creatives/main/public/pexels-david-geib-1265112-3220850.jpg")',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            Our <span className="text-primary-600">Blog</span>
          </h1>
          <p
            className="text-secondary-200 text-xl mb-8 animate-slide-up"
            style={{ animationDelay: '200ms' }}
          >
            Insights, trends, and thought leadership from our technology experts.
          </p>
        </div>
      </section>

      {/* Blog Listing Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-6 md:space-y-0">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 bg-white border border-secondary-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
              <Search
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white hover:bg-secondary-100 text-secondary-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  date={post.date}
                  image={post.image}
                  author={post.author}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-secondary-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Stay Updated with Our Newsletter
                </h2>
                <p className="text-primary-100 mb-0">
                  Subscribe to receive the latest insights, trends, and news from our technology experts.
                </p>
              </div>
              <div className="md:w-1/3 w-full">
                <form className="flex flex-col space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-3 rounded-md focus:ring-2 focus:ring-secondary-900 focus:border-secondary-900 outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-secondary-900 text-white px-4 py-3 rounded-md font-medium hover:bg-secondary-800 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPage;
