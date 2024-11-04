'use client'
import { Button } from '@/shared/ui/button/Button';
import React, { PropsWithChildren } from 'react';

interface IProps {
  className?: string
  handleClick: () => void
}

export const InterwievBtn: React.FC<PropsWithChildren<IProps>> = ({className, children, handleClick}) => {
  return (
    <Button handleClick={handleClick} className={`sm:min-w-[61px] sm:min-h-[61px] min-w-[50px] min-h-[50px] hover:scale-105 rounded-[15px] bg-white ${className ? className : ''}`}>
      {children}
    </Button>
  );
};