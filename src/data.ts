
export const portfolioData = {
    personal: {
        name: "Samah Shakir Ali",
        title: "Senior Full Stack Engineer",
        location: "Saudi Arabia",
        email: "samah.shakir.ali@gmail.com",
        contact: "+966 561252688",
        websites: [
            { url: "https://getssa.in", label: "getssa.in" },
            { url: "https://getssa.framer.website", label: "Portfolio (Framer)" },
        ],
        socials: {
            github: "https://github.com/samahshakir", // Inferred from text "samahshakir"
            linkedin: "https://linkedin.com/in/samahshakir",
            twitter: "", // Not explicitly provided, leaving empty
        },
        about: `Senior Full Stack Engineer with 3+ years of experience building high-impact AI-powered software solutions.`,
        resumeUrl: "/resume.pdf", // Assuming user will replace the file
    },
    skills: {
        frontend: [
            { name: "React", icon: "react.svg" },
            { name: "Next.js", icon: "next.svg" },
            { name: "TypeScript", icon: "ts.svg" },
            { name: "JavaScript", icon: "js.svg" },
            { name: "HTML", icon: "html.svg" },
            { name: "CSS", icon: "css.svg" },
            { name: "Tailwind CSS", icon: "tailwindcss.svg" },
        ],
        backend: [
            { name: "Node.js", icon: "node.svg" },
            { name: "Python", icon: "python.svg" },
            { name: "C#", icon: "csharp.svg" },
            { name: ".NET Core", icon: "dotnet.svg" },
            { name: "MySQL", icon: "mysql.svg" },
            { name: "MongoDB", icon: "mongodb.svg" },
            { name: "Redis", icon: "redis.svg" },
        ],
        ai: [
            { name: "OpenAI", icon: "openai.svg" },
            { name: "LangChain", icon: "langchain.svg" },
        ],
        devops: [
            { name: "Git", icon: "git-light.svg" },
            { name: "GitHub", icon: "github.svg" },
            { name: "GitHub Actions", icon: "githubactions.svg" },
            { name: "Prometheus", icon: "prometheus.svg" },
            { name: "Grafana", icon: "grafana.svg" },
        ],
        misc: [
            { name: "Docker", icon: "docker.svg" },
            { name: "Kubernetes", icon: "kubernetes.svg" },
            { name: "AWS", icon: "aws.svg" },
            { name: "Nginx", icon: "nginx.svg" },
            { name: "Git", icon: "git-light.svg" },
            { name: "GitHub", icon: "github.svg" },
            { name: "Postman", icon: "postman.svg" },
            { name: "Figma", icon: "figma.svg" },
            { name: "Jest", icon: "jest.svg" },
        ]
    },
    projects: [
        {
            title: "LubReminder",
            description: "AI-powered appointment reminder system that helps healthcare providers reduce no-shows and improve patient engagement through intelligent multi-channel communication.",
            techStack: ["AI/ML", "Node.js", "React", "Multi-channel APIs"],
            links: {
                demo: "https://lubreminder.lubab.sa",
                code: "",
            }
        },
        {
            title: "ERP Sovereign",
            description: "Comprehensive accounting management software built with .NET to manage daily credits and debits, track inventory, and analyze profits for businesses.",
            techStack: [".NET", "SQL Server", "React", "Chart.js"],
            links: {
                demo: "https://getssa.framer.website/erp-sovereign",
                demoLabel: "View more",
                code: "",
            }
        },
        {
            title: "CredRep Platform",
            description: "Architected a decentralized review platform using Solidity, Node.js, and React. Work resulted in a State-sponsored Technology Innovation Award from the Government of Karnataka.",
            techStack: ["Solidity", "Node.js", "React"],
            links: {
                demo: "",
                code: "",
                publication: "https://hbrppublication.com/OJS/index.php/AICPL/article/view/3035",
            }
        },
    ],
    certifications: [
        {
            title: "AI Agents & AI Architecture",
            issuer: "Vanderbilt University",
            date: "2025",
        },
        {
            title: "RAG and Agentic AI Certification",
            issuer: "IBM",
            date: "2025",
        },
        {
            title: "Advanced RAG with Vector Db",
            issuer: "IBM",
            date: "2025",
        },
        {
            title: "Product Management",
            issuer: "IBM",
            date: "2025",
        },
        {
            title: "Google Cybersecurity Professional",
            issuer: "Google",
            date: "2024",
        },
        {
            title: "Machine Learning with Python",
            issuer: "Coursera",
            date: "2024",
        },
        {
            title: "Information Security Certification",
            issuer: "",
            date: "2023",
        },
    ],
    awards: [
        {
            title: "State-sponsored Project",
            issuer: "Govt. of Karnataka",
            date: "2023"
        }
    ]
};
