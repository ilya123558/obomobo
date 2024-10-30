'use client'
import { BurderMenu } from '@/shared/ui/burder-menu/BurderMenu';
import { Button } from '@/shared/ui/button/Button';
import React, { useState } from 'react';

interface IProps {
  activeComponentValue: 'chat' | 'profile' | 'profile-list'
  setActiveComponentValue: (activeComponentValue: 'chat' | 'profile' | 'profile-list') => void
}

export const DMMenu: React.FC<IProps> = ({ activeComponentValue, setActiveComponentValue }) => {
  const [openBurger, setOpenBurger] = useState(true)

  const handleClick = (value: 'chat' | 'profile' | 'profile-list') => {
    setActiveComponentValue(value)
  }

  return (
    <div className="md:hidden absolute z-50 top-[18px] right-[10px] flex flex-col items-center">
      <BurderMenu open={openBurger} handleOpen={() => setOpenBurger(!openBurger)} />
      <div className={`bg-white rounded-[6px] overflow-hidden border-[1px] border-border-gray border-opacity-30 mt-[10px] flex flex-col transition-all ${openBurger ? 'opacity-100 translate-y-[0px]': 'translate-y-[-20px] opacity-0 pointer-events-none'}`}>
        <Button unActiveScale handleClick={() => handleClick('profile-list')} className={`p-[10px] ${activeComponentValue === 'profile-list' ? 'bg-green': ''}`}>
          <svg fill={activeComponentValue === 'profile-list' ? 'white': ''} className='w-[18px] h-[18px] ' focusable="false" viewBox="0 0 24 24">
            <circle cx="10" cy="8" r="4"></circle>
            <path d="M10.35 14.01C7.62 13.91 2 15.27 2 18v2h9.54c-2.47-2.76-1.23-5.89-1.19-5.99m9.08 4.01c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"></path>
          </svg>
        </Button>
        <Button unActiveScale handleClick={() => handleClick('chat')} className={`p-[10px] border-y-[1px] border-border-gray border-opacity-30 ${activeComponentValue === 'chat' ? 'bg-green': ''}`}>
          <svg fill={activeComponentValue === 'chat' ? 'white': ''} className='w-[18px] h-[18px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chat">
            <path d="M8,11a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,12,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,16,11ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z"></path>
          </svg>
        </Button>
        <Button unActiveScale handleClick={() => handleClick('profile')} className={`p-[10px] ${activeComponentValue === 'profile' ? 'bg-green': ''}`}>
          <svg fill={activeComponentValue === 'profile' ? 'white': ''} className='w-[18px] h-[18px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="user">
            <path d="M19.247 18.468C17.383 11.511 21.584 4.331 28.622 2.445 35.66.559 42.888 4.677 44.753 11.634 46.617 18.592 42.416 25.772 35.378 27.658 28.34 29.544 21.112 25.426 19.247 18.468zM44.003 31.262C53.176 33.928 61.012 43.833 61.012 55.553L61.012 58.776C61.012 60.556 59.567 62 57.788 62L6.212 62C4.433 62 2.988 60.556 2.988 58.776L2.988 55.553C2.988 43.833 10.824 33.928 19.997 31.262 20.851 31.014 21.986 31.384 22.53 32.088 23.946 33.922 27.739 35.922 32 35.922 36.261 35.922 40.054 33.922 41.47 32.088 42.014 31.384 43.149 31.014 44.003 31.262z"></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};