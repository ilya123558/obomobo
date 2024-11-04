import { ProjectItem } from "@/features/project-item/ProjectItem";
import { Container } from "@/shared/ui/container/Container";
import { TitleH4 } from "@/shared/ui/title-h4/TitleH4";
import React from "react";

export const ResumeProject = () => {
  const projectList = [
    {
      imgSrc: '/user/resume/project-img.png',
      title: 'First project',
      githubLink: 'https://github.com/',
      liveDemoLink: '/',
    },
    {
      imgSrc: '/user/resume/project-img.png',
      title: 'First project',
      githubLink: 'https://github.com/',
      liveDemoLink: '/',
    },
    {
      imgSrc: '/user/resume/project-img.png',
      title: 'First project',
      githubLink: 'https://github.com/',
      liveDemoLink: '/',
    }
  ]

  return (
    <Container className="flex text-center flex-col items-center mt-[66px] max-w-[1200px]">
      <div>
        <TitleH4>Проекты</TitleH4>
      </div>
      <div className="mb-[45px] sm:text-[24px] text-[14px]">
        Example.Programming in Delphi, Java, PHP, C++; Knowledge of document
        (website) markup languages: HTML, CSS, Javascript (JS); I have basic
        programming skills in the 1C: Enterprise 8.3 system; Knowledge of
        Microsoft Office suite; Blind recruitment method; Ability to write
        structured and understandable code;
      </div>
      <div className="w-full flex lg:flex-row flex-col lg:justify-center lg:items-start items-center xl:gap-[40px] gap-[20px]">
        {projectList.map((projectItem, index) => (
          <ProjectItem key={index} {...projectItem} />
        ))}
      </div>
    </Container>
  );
};
