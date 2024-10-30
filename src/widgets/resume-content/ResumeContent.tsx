import { ResumeContactInfo } from '@/features/resume-contact-info/ResumeContactInfo';
import { ResumeEducation } from '@/features/resume-education/ResumeEducation';
import { ResumeLanguages } from '@/features/resume-languages/ResumeLanguages';
import { ResumeSkill } from '@/features/resume-skill/ResumeSkill';
import { ResumeTakingCourses } from '@/features/resume-taking-courses/ResumeTakingCourses';
import { ResumeWorkExperience } from '@/features/resume-work-experience/ResumeWorkExperience';
import { Container } from '@/shared/ui/container/Container';
import React from 'react';

export const ResumeContent = () => {
  return (
    <main className='mt-[80px]'>
      <Container className='md:flex gap-[30px]'>
        <div className="w-full">
          <ResumeContactInfo />
          <ResumeEducation />
          <ResumeWorkExperience />
        </div>
        <div className="w-full md:mt-0 mt-[80px]">
          <ResumeSkill />
          <ResumeLanguages />
          <ResumeTakingCourses />
        </div>
      </Container>
    </main>
  );
};