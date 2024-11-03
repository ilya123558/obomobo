import React, { PropsWithChildren } from 'react';
import style from './MenuButtonWrapper.module.scss'

interface IProps {
  className?: string
  handleClick: () => void
  active: boolean
}

export const MenuButtonWrapper: React.FC<PropsWithChildren<IProps>> = ({children, className, handleClick, active}) => {
  return (
    <button onClick={handleClick} className={`sm:w-[61px] sm:h-[61px] h-[48px] w-[48px] bg-white rounded-[15px] hover:scale-105 flex items-center justify-center transition-all will-change-transform active:scale-95 ${className ? className : ''} ${active ? style.btn__active: ''}`}>
      {children}
    </button>
  );
};