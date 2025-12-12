import AOSComponent from "@/lib/aos";
import Image from "next/image";
import { portfolioData } from "@/data";

// TODO: add tooltip on hover to these icons
export default function TechStack() {
  return (
    <AOSComponent>
      <section
        id="tech-stack"
        className="mt-32 flex max-w-[630px] flex-col gap-6 p-6 pb-0 text-slate-900 relative z-10"
      >
        <h3
          className="tech-stack-title mb-4 font-heading text-4xl"
          data-aos="fade-down"
        >
          Tech Stack <span className="hidden md:inline">/ Tools</span>
        </h3>

        <div className="stack-wrapper flex grid-cols-[2.2fr_0.9fr] grid-rows-[1fr_1fr] flex-col gap-6 md:grid">
          <div
            data-aos="fade-right"
            className="col-start-1 col-end-2 row-start-1 row-end-2"
          >
            <div className="wrapper rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <h3 className="vertical mb-4 font-heading text-3xl">Frontend</h3>

              <div className="flex max-w-80 flex-wrap gap-4">
                {portfolioData.skills.frontend.map((elm) => (
                  <span
                    className="hint--top hint--rounded"
                    key={elm.icon}
                    aria-label={elm.name}
                  >
                    <Image
                      height={45}
                      width={45}
                      alt={elm.name}
                      src={`/skillicons/${elm.icon}`}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="col-start-1 col-end-2 row-start-2 row-end-3"
          >
            <div className="wrapper rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <h3 className="vertical mb-4 font-heading text-3xl">Backend</h3>

              <div className="flex max-w-80 flex-wrap gap-4">
                {portfolioData.skills.backend.map((elm) => (
                  <span
                    className="hint--top hint--rounded"
                    key={elm.icon}
                    aria-label={elm.name}
                  >
                    <Image
                      height={45}
                      width={45}
                      alt={elm.name}
                      src={`/skillicons/${elm.icon}`}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="col-start-2 col-end-3 row-start-1 row-end-3 md:h-full"
          >
            <div className="wrapper rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:h-full">
              <h3 className="vertical mb-4 font-heading text-3xl">Misc.</h3>

              <div className="flex max-w-80 flex-wrap gap-4">
                {portfolioData.skills.misc.map((elm) => (
                  <span
                    className="hint--top hint--rounded"
                    key={elm.icon}
                    aria-label={elm.name}
                  >
                    <Image
                      height={45}
                      width={45}
                      alt={elm.name}
                      src={`/skillicons/${elm.icon}`}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AOSComponent>
  );
}
