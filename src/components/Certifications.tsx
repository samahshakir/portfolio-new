"use client";

import AOSComponent from "@/lib/aos";
import { portfolioData } from "@/data";
import { FaAward } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";

export default function Certifications() {
    return (
        <AOSComponent>
            <section id="certifications" className="relative z-10 mt-20 p-6 text-slate-900">
                <h3
                    data-aos="fade-left"
                    className="projects-title motion-preset-blur-right mb-8 font-heading text-4xl"
                >
                    Certifications & Awards
                </h3>

                <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {portfolioData.certifications.map((cert, index) => (
                        <div data-aos="fade-left" key={index} className="h-full">
                            <div className="wrapper flex h-full flex-col gap-3 rounded-[20px] border-[3px] border-slate-900 p-4 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="font-heading text-lg leading-tight md:text-xl">
                                        {cert.title}
                                    </h3>
                                    <PiCertificate className="min-w-[24px] text-2xl" />
                                </div>

                                <div className="mt-auto flex flex-col gap-0.5 text-sm">
                                    <span className="font-semibold text-slate-700">{cert.issuer}</span>
                                    <span className="text-slate-500 text-xs">{cert.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {portfolioData.awards.map((award, index) => (
                        <div data-aos="fade-left" key={`award-${index}`} className="h-full">
                            <div className="wrapper flex h-full flex-col gap-3 rounded-[20px] border-[3px] border-slate-900 p-4 shadow-[4px_4px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none bg-slate-50">
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="font-heading text-lg leading-tight md:text-xl">
                                        {award.title}
                                    </h3>
                                    <FaAward className="min-w-[24px] text-2xl text-yellow-600" />
                                </div>

                                <div className="mt-auto flex flex-col gap-0.5 text-sm">
                                    <span className="font-semibold text-slate-700">{award.issuer}</span>
                                    <span className="text-slate-500 text-xs">{award.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </AOSComponent>
    );
}
