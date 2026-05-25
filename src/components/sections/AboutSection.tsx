import React from "react";
import FadeIn from "../ui/FadeIn";

export const AboutSection: React.FC = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeClick = () => {
    window.dispatchEvent(new CustomEvent("open-resume"));
  };

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-transparent px-4 sm:px-8 md:px-10 py-20 sm:py-28 overflow-hidden select-none"
    >
      {/* Background visual components */}
      <div className="absolute inset-0 grid-lines opacity-[0.02] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(215,226,234,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full flex flex-col relative z-10">
        {/* Double-column grid: Photo Badge (Left) & Bio Details (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Cyber-ID Portrait Card (Span 5) */}
          <FadeIn
            delay={0.1}
            y={30}
            className="lg:col-span-5 w-full max-w-sm lg:max-w-none mx-auto p-5 rounded-3xl border border-card bg-card/80 relative overflow-hidden"
            style={{
              boxShadow: `0 8px 30px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.05)`,
            }}
          >
            {/* HUD border lines */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[var(--text-color)]/30" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[var(--text-color)]/30" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[var(--text-color)]/30" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[var(--text-color)]/30" />

            {/* Glowing scan element */}
            <div className="absolute left-0 right-0 h-[1.5px] bg-[var(--text-color)]/15 animate-scan top-0 pointer-events-none z-10" />

            {/* Avatar frame */}
            <div className="w-full h-[320px] sm:h-[400px] overflow-hidden rounded-2xl bg-[var(--bg-color)]/60 border border-card relative flex items-center justify-center">
              <img
                src="/pic.png"
                alt="Ayon Paul portrait"
                className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
                draggable="false"
              />
            </div>

            {/* Bottom details block */}
            <div className="mt-5 flex flex-col gap-1 text-left px-1">
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted opacity-80">
                identity_key
              </span>
              <h3 className="font-black text-lg uppercase tracking-wider text-[var(--text-color)]">
                Ayon Paul
              </h3>
              <p className="font-mono text-[9px] uppercase tracking-wider text-muted">
                Durgapur, WB, India
              </p>
            </div>
          </FadeIn>

          {/* Right Column: Bio Copywriting & Details (Span 7) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Section label */}
            <FadeIn delay={0} y={15} className="mb-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted opacity-80 block">
                01 / Identity
              </span>
            </FadeIn>

            {/* Heading */}
            <FadeIn delay={0.05} y={30} className="mb-6">
              <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                About me
              </h2>
            </FadeIn>

            {/* Profile taglines */}
            <FadeIn
              delay={0.1}
              y={20}
              className="mb-6 flex flex-col gap-1.5 border-b border-card pb-5"
            >
              <h3 className="text-[var(--text-color)] font-extrabold uppercase text-base sm:text-lg tracking-wider">
                AI Engineer &amp; Full-Stack Developer
              </h3>
              <span className="font-mono text-xs text-muted uppercase tracking-widest flex items-center gap-1.5">
                <svg
                  className="w-3.5 h-3.5 text-muted opacity-80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Durgapur, WB, India
              </span>
            </FadeIn>

            {/* Narrative text blocks */}
            <FadeIn
              delay={0.15}
              y={30}
              className="flex flex-col gap-5 text-sm sm:text-base text-[var(--text-color)] opacity-80 font-light leading-relaxed mb-8 text-justify"
            >
              <p>
                I’m a Full-Stack Developer and AI Engineer who loves building
                products that go beyond flashy UI and actually solve real-world
                problems. From engineering AI-powered investment systems and
                scalable cloud architectures to creating immersive 3D web
                experiences, I focus on building high-performance applications
                with strong functionality, scalability, and clean execution.
              </p>

              <p>
                My work spans across ReactJS, Python, Node.js, Flask, Postman, Docker,
                Kubernetes, Firebase, and Generative AI technologies, where I
                combine modern development with intelligent systems and
                product-focused engineering. I enjoy exploring the intersection
                of AI, Web3, cloud computing, and immersive frontend experiences
                to create products that feel both futuristic and practical.
              </p>

              <p>
                Beyond development, I lead and grow student developer
                communities as a GDG On Campus Lead, actively participate in
                hackathons, contribute to innovative projects, and constantly
                experiment with new technologies. I’m a fast learner with a
                builder mindset, always turning ambitious ideas into polished
                digital experiences.
              </p>
            </FadeIn>

            {/* Call to Actions */}
            <FadeIn
              delay={0.2}
              y={20}
              className="flex flex-wrap gap-4 items-center"
            >
              <button
                onClick={() => handleScroll("contact")}
                className="px-6 py-3.5 rounded-xl border border-[var(--text-color)] bg-[var(--text-color)] text-[var(--bg-color)] hover:bg-transparent hover:text-[var(--text-color)] transition-all duration-300 font-bold uppercase tracking-widest text-xs cursor-pointer text-center"
              >
                Let&apos;s Connect
              </button>
              <button
                onClick={handleResumeClick}
                className="px-6 py-3.5 rounded-xl border border-card bg-[var(--text-color)]/5 hover:bg-[var(--text-color)]/10 hover:border-card text-[var(--text-color)] transition-all duration-300 font-bold uppercase tracking-widest text-xs cursor-pointer text-center"
              >
                View Resume
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
