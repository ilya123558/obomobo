'use client'
import React from 'react';

import { usePathname } from 'next/navigation';
import { BackstageControlHeader } from '../backstage-control-header/BackstageControlHeader';
import { MainHeader } from '../main-header/MainHeader';
import { DeviceManagerHeader } from '../device-manager-header/DeviceManagerHeader';
import { InterwievHeader } from '../interwiev-header/InterwievHeader';

export const Header = () => {
  const data = usePathname()
  const page = data.split('/')[1]

  return (
    <div className='bg-white'>
      {page === 'interwiev' && <InterwievHeader />}
      {page === 'catalog' && <MainHeader />}
      {page === 'device-manager' && <DeviceManagerHeader />}
      {page === 'user' && <BackstageControlHeader />}
    </div>
  );
};