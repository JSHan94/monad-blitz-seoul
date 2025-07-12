
import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button: React.FC<ButtonProps> = ({ className, variant, size, ...props }) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'destructive':
        return 'destructive';
      case 'outline':
        return 'outline';
      case 'secondary':
        return 'secondary';
      case 'ghost':
        return 'ghost';
      case 'link':
        return 'link';
      default:
        return 'default';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'sm';
      case 'lg':
        return 'lg';
      case 'icon':
        return 'icon';
      default:
        return 'default';
    }
  };

  return (
    <button
      className={`button ${getVariantClass()} ${getSizeClass()} ${className}`}
      {...props}
    />
  );
};

export { Button };
