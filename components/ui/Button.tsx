import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-4 font-black uppercase tracking-wider text-sm transition-all duration-300 transform skew-x-[-10deg] flex items-center justify-center gap-2 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-brand-pink text-white hover:bg-brand-purple border-none shadow-[4px_4px_0px_0px_rgba(57,173,221,1)] hover:shadow-[2px_2px_0px_0px_rgba(57,173,221,1)] hover:translate-x-[2px] hover:translate-y-[2px]",
    outline: "border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-black",
    ghost: "text-white hover:text-brand-yellow",
  };

  const innerContentClass = "skew-x-[10deg]"; // Counter-skew text

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className={innerContentClass}>{children}</span>
    </motion.button>
  );
};

export default Button;