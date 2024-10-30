'use client'
import React, { useState } from 'react';
import { Button } from '../button/Button';

interface IProps {
  open: boolean
  handleOpen: () => void
}

export const BurderMenu: React.FC<IProps> = ({open, handleOpen}) => {

  return (
    <Button className='!w-[30px] h-[20px] overflow-hidden !justify-end' handleClick={handleOpen}>
      <div className='flex flex-col gap-[2px]'>
        <div className={`w-[15px] h-[2px] rounded-full bg-border-gray transition-all ${open ? 'rotate-[45deg] translate-y-[4px]' : ''}`}></div>
        <div className={`w-[15px] h-[2px] rounded-full bg-border-gray transition-all ${open ? 'rotate-[-45deg] translate-y-[0px]' : ''}`}></div>
        <div className={`w-[15px] h-[2px] rounded-full bg-border-gray transition-all ${open ? 'opacity-0' : 'opacity-100'}`}></div>
      </div>
    </Button>
  );
};