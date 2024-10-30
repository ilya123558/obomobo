import React, { PropsWithChildren } from 'react';

interface IProps {
  className?: string
  cursorPointer?: boolean
}

export const HeaderNavWrapper: React.FC<PropsWithChildren<IProps>> = ({children, className, cursorPointer}) => {
  return (
    <div className={`text-nowrap h-[36px] p-[0px_15px] select-none text-[14px] text-[#758195] flex items-center rounded-[6px] bg-[#F6F6F7] ${cursorPointer ? 'will-change-transform transition-all active:scale-95 cursor-pointer': ''} ${className ? className: ''}`}>
      {children}
    </div>
  );
};