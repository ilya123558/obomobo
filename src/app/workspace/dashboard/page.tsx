'use client'
import { DashboardInfoList } from '@/features/dashboard-info-list/DashboardInfoList';
import { WorkspaceTitle } from '@/features/workspace-title/WorkspaceTitle';
import { useGetHeightContainer } from '@/shared/hooks/useGetSizeContainer';
import { WorkspaceContainer } from '@/shared/ui/workspace-container/WorkspaceContainer';
import { CompletedTask } from '@/widgets/completed-task/CompletedTask';
import { Efficacy } from '@/widgets/efficacy/Efficacy';
import React, { useRef } from 'react';

export default function Page() {
  const ref = useRef<HTMLDivElement>(null)
  const { height } = useGetHeightContainer(ref)

  return (
    <div className="w-full h-full bg-[#F2F3F5]">
      <WorkspaceContainer>
        <WorkspaceTitle title='Панель управления' className='lg:pt-[50px] pt-[30px]' />
        <div ref={ref} style={{maxHeight: height}} className="min-h-full overflow-y-auto pb-[100px] lg:mt-[37px] mt-[20px]">
          <DashboardInfoList />
          <div className="lg:mt-[37px] mt-[20px] w-full flex 2xl:flex-row flex-col gap-[15px]">
            <CompletedTask />
            <Efficacy />
          </div>
        </div>
      </WorkspaceContainer>
    </div>
  );
};