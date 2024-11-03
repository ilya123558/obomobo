'use client'
import { WorkspaceSearch } from '@/features/workspace-search/WorkspaceSearch';
import { WorkspaceTitle } from '@/features/workspace-title/WorkspaceTitle';
import { Button } from '@/shared/ui/button/Button';
import React from 'react';

export const CatalogContentTop = () => {
  return (
    <WorkspaceTitle title=''>
      <div className="w-full flex items-center">
        <Button handleClick={() => {}}>
          <svg className='sm:w-[32px] sm:h-[32px] w-[20px] h-[20px]' width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 12C32 12.3536 31.8595 12.6928 31.6095 12.9428C31.3594 13.1929 31.0203 13.3333 30.6667 13.3333H1.33333C0.979711 13.3333 0.640573 13.1929 0.390525 12.9428C0.140476 12.6928 0 12.3536 0 12C0 11.6464 0.140476 11.3072 0.390525 11.0572C0.640573 10.8071 0.979711 10.6667 1.33333 10.6667H30.6667C31.0203 10.6667 31.3594 10.8071 31.6095 11.0572C31.8595 11.3072 32 11.6464 32 12ZM1.33333 2.66667H30.6667C31.0203 2.66667 31.3594 2.52619 31.6095 2.27614C31.8595 2.02609 32 1.68696 32 1.33333C32 0.979711 31.8595 0.640573 31.6095 0.390525C31.3594 0.140476 31.0203 0 30.6667 0H1.33333C0.979711 0 0.640573 0.140476 0.390525 0.390525C0.140476 0.640573 0 0.979711 0 1.33333C0 1.68696 0.140476 2.02609 0.390525 2.27614C0.640573 2.52619 0.979711 2.66667 1.33333 2.66667ZM30.6667 21.3333H1.33333C0.979711 21.3333 0.640573 21.4738 0.390525 21.7239C0.140476 21.9739 0 22.313 0 22.6667C0 23.0203 0.140476 23.3594 0.390525 23.6095C0.640573 23.8595 0.979711 24 1.33333 24H30.6667C31.0203 24 31.3594 23.8595 31.6095 23.6095C31.8595 23.3594 32 23.0203 32 22.6667C32 22.313 31.8595 21.9739 31.6095 21.7239C31.3594 21.4738 31.0203 21.3333 30.6667 21.3333Z" fill="black"/>
          </svg>
        </Button>
        <div className="sm:p-[0px_20px] p-[0px_10px]  sm:text-[17px] text-[14px] font-bold">SELLTONA</div>
        <WorkspaceSearch />
      </div>
    </WorkspaceTitle>
  );
};