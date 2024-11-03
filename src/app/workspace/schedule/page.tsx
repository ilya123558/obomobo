'use client'
import { WorkspaceTitle } from '@/features/workspace-title/WorkspaceTitle';
import { WorkspaceBtn } from '@/shared/ui/workspace-btn/WorkspaceBtn';
import { WorkspaceContainer } from '@/shared/ui/workspace-container/WorkspaceContainer';
import { ScheduleContent } from '@/widgets/schedule-content/ScheduleContent';
import React from 'react';

export default function Page() {
  return (
    <div className="w-full h-full relative">
      <WorkspaceContainer>
        <div className='lg:my-[29px] my-[15px]'>
          <WorkspaceTitle title='Расписание'>
            <div className="w-full flex justify-end sm:pr-[21px] pr-[15px]">
              <WorkspaceBtn className='md:p-[9px_23px] p-[6px_18px] md:text-[13px] text-[9px]' handleClick={() => {}}>
                <div className="flex gap-[7px] items-center">
                  <svg className='md:w-[11px] md:h-[11px] w-[9px] h-[9px]' width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5.5C11 5.62156 10.9517 5.73814 10.8658 5.82409C10.7798 5.91005 10.6632 5.95833 10.5417 5.95833H5.95833V10.5417C5.95833 10.6632 5.91005 10.7798 5.82409 10.8658C5.73814 10.9517 5.62156 11 5.5 11C5.37844 11 5.26186 10.9517 5.17591 10.8658C5.08996 10.7798 5.04167 10.6632 5.04167 10.5417V5.95833H0.458333C0.336776 5.95833 0.220197 5.91005 0.134243 5.82409C0.0482886 5.73814 0 5.62156 0 5.5C0 5.37844 0.0482886 5.26186 0.134243 5.17591C0.220197 5.08996 0.336776 5.04167 0.458333 5.04167H5.04167V0.458333C5.04167 0.336776 5.08996 0.220197 5.17591 0.134243C5.26186 0.0482886 5.37844 0 5.5 0C5.62156 0 5.73814 0.0482886 5.82409 0.134243C5.91005 0.220197 5.95833 0.336776 5.95833 0.458333V5.04167H10.5417C10.6632 5.04167 10.7798 5.08996 10.8658 5.17591C10.9517 5.26186 11 5.37844 11 5.5Z" fill="white"/>
                  </svg>
                  <p>Расписание</p>
                </div>
              </WorkspaceBtn>
            </div>
          </WorkspaceTitle>
        </div>
      </WorkspaceContainer>
      <ScheduleContent />
    </div>
  );
};