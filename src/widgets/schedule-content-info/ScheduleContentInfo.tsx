'use client'
import React, { useState } from "react";
import style from "./ScheduleContentInfo.module.scss";
import Image from "next/image";
import { SchedulePlan } from "@/features/schedule-plan/SchedulePlan";
import { ScheduleEfficacy } from "../schedule-efficacy/ScheduleEfficacy";
import { ScheduleCompletedTask } from "../schedule-completed-task/ScheduleCompletedTask";
import { Button } from "@/shared/ui/button/Button";

interface IProps {
  openContentInfo: boolean
  handleCloseContentInfo: () => void
}

export const ScheduleContentInfo: React.FC<IProps> = ({ handleCloseContentInfo, openContentInfo }) => {
  return (
    <div className={`absolute h-full 2xl:w-[30%] xl:w-[40%] lg:w-[45%] md:w-full z-[60] right-0 top-0 transition-all overflow-y-auto scroll-decor bg-white sm:p-[42px_45px] p-[20px] ${style.wrapper} ${openContentInfo ? 'translate-x-[0%]' : 'translate-x-[100%]'}`}>
      <Button handleClick={handleCloseContentInfo} className='p-[10px] lg:hidden block rounded-[10px] border-[1px] border-black border-opacity-15 bg-white absolute top-[10px] right-[10px]'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20px" height="20px" viewBox="0 0 24 24">
          <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
        </svg>
      </Button>
      <div className="w-full mb-[100px] relative">
        <div className="flex items-center mb-[15px]">
          <Image src={'/workspace/schedule/content.png'} alt='content' width={56} height={56} quality={100} className='rounded-[6px]' />
          <h6 className='ml-[10px] text-[17px] font-bold'>UI UX Design</h6>
        </div>

        <p className="text-[12px] text-black text-opacity-60">
          The schedule will be located in the questionnaire, this is a button
          that opens the schedule where it is indicated on what dates classes
          will be held. The button should be in a prominent place at the top.
          The button should be located in the questionnaire. This schedule can
          only be set by the owner of the questionnaire year month day time. I'm
          attaching an example. Just in case, I attach a photo of the
          questionnaire. You don't need to copy it as in the screenshot – it's just a
        </p>
        <SchedulePlan />
        <ScheduleEfficacy />
        <ScheduleCompletedTask />
      </div>
    </div>
  );
};