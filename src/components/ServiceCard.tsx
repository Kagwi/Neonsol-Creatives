import React from 'react';
import { ArrowRight } from 'lucide-react';
import IconComponent from './IconComponent';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0, link }) => {
  return (
    <div 
      className="bg-white p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-50 text-primary-600 mb-6">
        <IconComponent name={icon} size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-secondary-900">{title}</h3>
      <p className="text-secondary-600 mb-6 leading-relaxed">{description}</p>
      </div>
  );
};

export default ServiceCard;
