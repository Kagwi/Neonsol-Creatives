import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  company, 
  quote, 
  image 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-soft p-8 flex flex-col">
      <div className="mb-6">
        <svg
          className="h-10 w-10 text-primary-600 mb-4"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-secondary-600 leading-relaxed">{quote}</p>
      </div>
      <div className="mt-auto flex items-center">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={image}
          alt={name}
        />
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-secondary-900">{name}</h4>
          <p className="text-secondary-600">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;