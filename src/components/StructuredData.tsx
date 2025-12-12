export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://samahshakir.dev/#person",
        name: "Samah Shakir Ali",
        url: "https://samahshakir.dev",
        image: "https://samahshakir.dev/profile-image.jpg",
        jobTitle: "Senior Full Stack Engineer",
        worksFor: {
          "@type": "Organization",
          name: "Freelance",
        },
        knowsAbout: [
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "MongoDB",
          "Full Stack Development",
          "AI/ML",
          ".NET",
          "Python",
        ],
        sameAs: [
          "https://github.com/samahshakir",
          "https://linkedin.com/in/samahshakir",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://samahshakir.dev/#website",
        url: "https://samahshakir.dev",
        name: "Samah Shakir Ali Portfolio",
        description:
          "Senior Full Stack Engineer Portfolio showcasing modern web applications",
        publisher: {
          "@id": "https://samahshakir.dev/#person",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": "https://samahshakir.dev/#webpage",
        url: "https://samahshakir.dev",
        name: "Samah Shakir Ali - Senior Full Stack Engineer Portfolio",
        isPartOf: {
          "@id": "https://samahshakir.dev/#website",
        },
        about: {
          "@id": "https://samahshakir.dev/#person",
        },
        description:
          "Portfolio showcasing full-stack web development projects using React, Next.js, TypeScript, and modern technologies",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
