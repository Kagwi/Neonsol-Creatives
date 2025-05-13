import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconComponentProps {
  name: string;
  size?: number;
  className?: string;
  color?: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ 
  name, 
  size = 24, 
  className = '', 
  color
}) => {
  // Convert the name to PascalCase for the Lucide component
  const pascalCase = name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  // Get the icon component from Lucide
  const Icon = (LucideIcons as any)[pascalCase];

  if (!Icon) {
    console.warn(`Icon "${name}" not found`);
    return <span className={className}>Icon not found</span>;
  }

  return <Icon size={size} className={className} color={color} />;
};

export default IconComponent;