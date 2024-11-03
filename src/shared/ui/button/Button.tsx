import React, { PropsWithChildren } from 'react';

interface IProps {
  className?: string
  handleClick: () => void
  type?: "submit" | "reset" | "button"
  unActiveScale?: boolean
  linearGradient?: string 
}

export const Button: React.FC<PropsWithChildren<IProps>> = ({className, children, handleClick, type, unActiveScale, linearGradient}) => {
  return (
    <button 
      onClick={handleClick}
      type={type} 
      style={{backgroundImage: linearGradient ? linearGradient : ''}}
      className={`transition-all select-none will-change-transform cursor-pointer ${unActiveScale ? '': 'active:scale-95'}  flex items-center justify-center w-fit ${className ? className: ""}`}
    >
      {children}
    </button>
  );
};