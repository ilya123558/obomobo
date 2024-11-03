import React, { useState } from 'react';
import { ScheduleContentInfo } from '../schedule-content-info/ScheduleContentInfo';
import { ScheduleTable } from '../schedule-table/ScheduleTable';

export const ScheduleContent = () => {
  const [openContentInfo, setOpenContentInfo] = useState(false)

  return (
    <div className="w-full h-full relative bg-[#EAF1FF]">
      <ScheduleTable handleOpenContentInfo={() => setOpenContentInfo(true)} />
      <ScheduleContentInfo openContentInfo={openContentInfo} handleCloseContentInfo={() => setOpenContentInfo(false)} />
    </div>
  );
};