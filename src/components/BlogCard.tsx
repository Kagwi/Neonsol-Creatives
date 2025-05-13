import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  id, 
  title, 
  excerpt, 
  category, 
  date, 
  image, 
  author 
}) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
      <Link to={`/blog/${id}`} className="block h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center text-secondary-500 text-sm mb-3">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{author}</span>
        </div>
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-semibold mb-3 text-secondary-900 hover:text-primary-600 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-secondary-600 mb-4 line-clamp-2">{excerpt}</p>
        <Link 
          to={`/blog/${id}`} 
          className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
        >
          Read More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;