import React, { PropsWithChildren } from 'react';

interface IProps {
  className?: string
  handleClick: () => void 
}

export const WorkspaceBtn: React.FC<PropsWithChildren<IProps>> = ({handleClick, className, children}) => {
  return (
    <button onClick={handleClick} className={`rounded-[4px] text-white bg-[#5765F2] flex items-center justify-center transition-all will-change-transform select-none active:scale-95 hover:scale-105 ${className ? className : ''}`}>
      {children}
    </button>
  );
};