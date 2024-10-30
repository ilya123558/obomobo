import { ResumeUserInfo } from '@/features/resume-user-info/ResumeUserInfo';
import { BriefResume } from '@/widgets/brief-resume/BriefResume';
import { Comments } from '@/widgets/comments/Comments';
import { ResumeContent } from '@/widgets/resume-content/ResumeContent';
import { ResumePhotoSlider } from '@/widgets/resume-photo-slider/ResumePhotoSlider';
import { ResumeProject } from '@/widgets/resume-project/ResumeProject';
import React from 'react';

export default function Page() {
  return (
    <section className='mb-[80px]'>
      <ResumeUserInfo />
      <ResumeContent />
      <BriefResume />
      <ResumePhotoSlider />
      <ResumeProject />
      <Comments />
    </section>
  );
};