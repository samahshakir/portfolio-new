"use client";

import AOSComponent from "@/lib/aos";
import GitHubCalendar from "react-github-calendar";

export default function Github() {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2025 + 1 },
    (_, i) => 2025 + i,
  );

  const transformData = (data: any) => {
    return data.filter(
      (activity: any) => new Date(activity.date) >= new Date('2025-06-01'),
    );
  };

  return (
    <AOSComponent>
      <section
        id="github"
        className="relative z-10 mt-32 flex max-w-[630px] flex-col gap-6 p-6 pb-0 text-slate-900"
      >
        <h3
          className="gitroll-title mb-4 font-heading text-4xl"
          data-aos="fade-left"
        >
          Commit History
        </h3>

        <div className="flex flex-col gap-6">
          {years.map((year) => (
            <div data-aos="fade-left" key={year}>
              <div className="disable-scrollbar wrapper rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                <GitHubCalendar
                  username="samahshakir"
                  colorScheme="light"
                  year={year}
                  blockSize={12}
                  blockMargin={4}
                  fontSize={14}
                  hideColorLegend={false}
                  hideTotalCount={false}
                  throwOnError={false}
                  transformData={transformData}
                  errorMessage="Failed to load contributions"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </AOSComponent>
  );
}