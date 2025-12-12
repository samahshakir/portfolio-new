'use client';

import { LuExternalLink as LinkIcon } from "react-icons/lu";
import { FaCodeBranch as CodeIcon } from "react-icons/fa6";
import { HiDocumentText as PublicationIcon } from "react-icons/hi";
import { portfolioData } from "@/data";
import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Only run blur effects on desktop - mobile uses pure CSS sticky
    if (window.innerWidth < 768) return;

    const cards = containerRef.current?.querySelectorAll('.project-card');
    if (!cards) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          cards.forEach((card, index) => {
            const cardElement = card as HTMLElement;
            const wrapper = cardElement.closest('.project-card-wrapper') as HTMLElement;
            if (!wrapper) return;

            const rect = wrapper.getBoundingClientRect();
            const baseTop = 80;
            const increment = 40;
            const topThreshold = baseTop + index * increment;
            const isLastCard = index === cards.length - 1;

            // Last card should never blur
            if (isLastCard) {
              cardElement.style.filter = 'blur(0px)';
              return;
            }

            // Check if this card is stuck at the top
            const isStuck = rect.top <= topThreshold + 10;

            // Calculate how far down the page we've scrolled past this card
            const scrolledPast = Math.max(0, topThreshold - rect.top);
            const blurAmount = isStuck ? Math.min(10, scrolledPast / 10) : 0;

            // Apply blur to cards that are stuck and being scrolled past
            cardElement.style.filter = `blur(${blurAmount}px)`;
          });

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="relative z-10 mt-32 p-6 text-slate-900">
      <h3
        className="projects-title motion-preset-blur-right mb-8 font-heading text-4xl"
      >
        Selected Work
      </h3>

      <div
        ref={containerRef}
        id="projects-container"
        className="mb-6 flex flex-col gap-6"
      >
        {portfolioData.projects.map((project, index) => {
          const baseTop = isMobile ? 120 : 80;
          const increment = isMobile ? 30 : 40;

          return (
            <div
              key={index}
              className="project-card-wrapper"
              style={{
                position: 'sticky',
                top: `${baseTop + index * increment}px`,
                zIndex: index + 1,
              }}
            >
            <div className="project-card wrapper flex flex-col gap-4 rounded-[30px] border-[3px] border-slate-900 bg-white p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <h3 className="flex gap-4 font-heading text-3xl">
                {project.title}
              </h3>

              {(project.links.demo || project.links.code || project.links.publication) && (
                <div className="flex flex-col items-start gap-2 text-lg md:flex-row md:gap-4">
                  {project.links.demo && (
                    <a
                      target="_blank"
                      href={project.links.demo}
                      className="inline-flex w-fit items-center gap-2 rounded-[30px] border-[2px] border-slate-900 bg-slate-900 px-6 py-1 font-medium text-white shadow-[2px_2px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                    >
                      {project.links.demoLabel || "Deployed site"}
                      <LinkIcon className="inline h-[20px] w-[20px] text-white" />
                    </a>
                  )}
                  {project.links.code && (
                    <a
                      target="_blank"
                      href={project.links.code}
                      className="inline-flex w-fit items-center gap-2 rounded-[30px] border-[2px] border-slate-900 px-6 py-1 font-medium shadow-[2px_2px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                    >
                      Source code
                      <CodeIcon className="inline h-[17px] w-[17px]" />
                    </a>
                  )}
                  {project.links.publication && (
                    <a
                      target="_blank"
                      href={project.links.publication}
                      className="inline-flex w-fit items-center gap-2 rounded-[30px] border-[2px] border-slate-900 bg-lime-500 px-6 py-1 font-medium text-slate-900 shadow-[2px_2px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                    >
                      Publication
                      <PublicationIcon className="inline h-[20px] w-[20px]" />
                    </a>
                  )}
                </div>
              )}

              <div>
                <p className="mb-2 text-xl">
                  {project.description}
                </p>
                <div className="badge-container flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          );
        })}
      </div>

      <a
        href={portfolioData.personal.socials.github}
        target="_blank"
        className="wrapper flex h-16 items-center justify-center gap-2 rounded-[30px] border-[3px] border-slate-900 text-center text-[20px] font-medium shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
      >
        More on github
        <LinkIcon />
      </a>
    </section>
  );
}
