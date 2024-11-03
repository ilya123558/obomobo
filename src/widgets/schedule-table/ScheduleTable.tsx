'use client'
import { ScheduleTableDays } from '@/features/schedule-table-days/ScheduleTableDays';
import { ScheduleTableRow } from '@/features/schedule-table-row/ScheduleTableRow';
import { getColorData } from '@/shared/lib/getColorData';
import { getWeekArray } from '@/shared/lib/getWeekArray';
import { Button } from '@/shared/ui/button/Button';
import { EmptyTableRow } from '@/shared/ui/empty-table-row/EmptyTableRow';
import React, { useEffect, useState, useRef } from 'react';

const taskList = [
  {title: 'Discord App', dayStart: '31.10.2024', dayEnd: '5.11.2024', timeStart: '00:00', timeEnd: '00:00', progress: 77},
  {title: 'Discord App', dayStart: '1.11.2024', dayEnd: '8.11.2024', timeStart: '00:00', timeEnd: '00:00', progress: 53},
  {title: 'Discord App', dayStart: '2.11.2024', dayEnd: '7.11.2024', timeStart: '00:00', timeEnd: '00:00', progress: 20},
  {title: 'Discord App', dayStart: '2.11.2024', dayEnd: '8.11.2024', timeStart: '00:00', timeEnd: '00:00', progress: 80},
  {title: 'Discord App', dayStart: '1.11.2024', dayEnd: '6.11.2024', timeStart: '00:00', timeEnd: '00:00', progress: 5},
]

interface IProps {
  handleOpenContentInfo: () => void
}

export const ScheduleTable: React.FC<IProps> = ({handleOpenContentInfo}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const stickyBlockRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const prevDaysList = getWeekArray(-7);
  const daysList = getWeekArray();
  const nextDaysList = getWeekArray(7);

  const activeDay = daysList[2].title as number | string;
  const [activeIndexCol, setActiveIndexCol] = useState<number | null>(null);

  useEffect(() => {
    const index = daysList.findIndex(item => item.title === activeDay);
    setActiveIndexCol(index);
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollToMiddle = scrollContainerRef.current.scrollWidth / 21 * 4 + 1; 
      scrollContainerRef.current.scrollLeft = scrollToMiddle;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyBlockRef.current && scrollContainerRef.current) {
        stickyBlockRef.current.style.left = `${scrollContainerRef.current.scrollLeft}px`;
      }
    };

    scrollContainerRef.current?.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainerRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(event.clientX);
    setStartY(event.clientY);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setScrollTop(scrollContainerRef.current.scrollTop);
    scrollContainerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;

    const x = event.clientX;
    const y = event.clientY;
    const walkX = (x - startX) * 1.5;
    const walkY = (y - startY) * 1.5;

    const newScrollLeft = Math.max(0, Math.min(scrollLeft - walkX, scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth));
    const newScrollTop = Math.max(0, Math.min(scrollTop - walkY, scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight));

    scrollContainerRef.current.scrollLeft = newScrollLeft;
    scrollContainerRef.current.scrollTop = newScrollTop;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  return (
    <div className="h-full w-full">
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="h-full w-full overflow-auto cursor-grab scroll-hidden select-none relative"
      >
        <div 
          ref={stickyBlockRef} 
          className="h-fit absolute top-0 left-0 overflow-y-auto z-50 pointer-events-none"
          style={{width: (scrollContainerRef?.current?.scrollWidth || 0) / 21 * 3}}
        >
          <div className={'xl:w-full w-[66%] bg-[#EAF1FF]'}>
            <ScheduleTableDays list={[]} isEmpty />
              {taskList.map(({title}, index) => (
                <>
                  <div key={index} className="w-full 2xl:h-[70px] lg:h-[60px] sm:h-[50px] h-[40px] border-b-[1px] border-black border-opacity-15 border-r-[1px]"></div>
                  <div key={index} className="w-full 2xl:h-[70px] lg:h-[60px] sm:h-[50px] h-[40px] border-b-[1px] border-black border-opacity-15 border-r-[1px] lg:pl-[25px] pl-[10px] flex items-center xl:text-[17px] lg:text-[14px] sm:text-[10px] text-[8px] text-black text-opacity-50">{title}</div>
                </>
              ))}
              {Array(10).fill(null).map((_, index) => (
                <div key={index} className="w-full 2xl:h-[70px] lg:h-[60px] sm:h-[50px] h-[40px] border-b-[1px] border-black border-opacity-15 border-r-[1px]"></div>
              ))}
          </div>
        </div>

        <div className="md:min-w-[110%] min-w-[200%] h-full flex flex-nowrap">
          <div className="min-w-[50%]">
            <ScheduleTableDays list={prevDaysList} />
            <EmptyTableRow activeIndexCol={null} taskListLength={taskList.length} withoutTitleBlock />
            {Array(10).fill(null).map((_, index) => (
              <EmptyTableRow key={index} activeIndexCol={activeIndexCol} withoutTitleBlock />
            ))}
          </div>

          <div className="min-w-[50%]">
            <ScheduleTableDays list={daysList} />
            {taskList.map((taskItem, i) => (
              <React.Fragment key={i}>
                <EmptyTableRow activeIndexCol={activeIndexCol} />
                <ScheduleTableRow {...taskItem} activeIndexCol={activeIndexCol} {...getColorData(i)} />
              </React.Fragment>
            ))}
            {Array(10).fill(null).map((_, index) => (
              <EmptyTableRow key={index} activeIndexCol={activeIndexCol} />
            ))}
          </div>

          <div className="min-w-[50%]">
            <ScheduleTableDays list={nextDaysList} />
            <EmptyTableRow activeIndexCol={null} taskListLength={taskList.length} withoutTitleBlock />
            {Array(10).fill(null).map((_, index) => (
              <EmptyTableRow key={index} activeIndexCol={activeIndexCol} withoutTitleBlock />
            ))}
          </div>
        </div>
      </div>
      
      <Button handleClick={handleOpenContentInfo} className='p-[10px] lg:hidden block rounded-[10px] border-[1px] border-black border-opacity-15 bg-white absolute top-[10%] right-[20px]'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20px" height="20px" viewBox="0 0 24 24">
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
        </svg>
      </Button>
    </div>
  );
};
