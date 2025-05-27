
import React from 'react';

interface TeamMemberCardProps {
  name: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-soft group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-950 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-secondary-900">{name}</h3>
        
      </div>
    </div>
  );
};

export default TeamMemberCard;
