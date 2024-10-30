import React, { PropsWithChildren } from 'react';

interface IProps {
  className?: string
  handleClick: () => void
  type?: "submit" | "reset" | "button"
  unActiveScale?: boolean
}

export const Button: React.FC<PropsWithChildren<IProps>> = ({className, children, handleClick, type, unActiveScale}) => {
  return (
    <button 
      onClick={handleClick}
      type={type} 
      className={`transition-all select-none will-change-transform cursor-pointer ${unActiveScale ? '': 'active:scale-95'}  flex items-center justify-center w-fit ${className ? className: ""}`}
    >
      {children}
    </button>
  );
};