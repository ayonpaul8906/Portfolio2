import React, { useState } from 'react';
import FadeIn from '../ui/FadeIn';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const data = {
      name: formData.name,
      email: formData.email,
      _subject: formData.subject || "New Contact Form Submission",
      message: formData.message,
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/ayonpaul8906@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-transparent border-t border-card px-4 sm:px-8 md:px-10 pt-20 pb-10 text-[var(--text-color)] select-none z-10 relative overflow-hidden"
    >
      {/* Background visual details */}
      <div className="absolute inset-0 grid-lines opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto w-full flex flex-col relative z-10">
        
        {/* Section label */}
        <FadeIn delay={0} y={15} className="mb-4 text-center">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted opacity-80">
            08 / Contact
          </div>
        </FadeIn>

        {/* Section Heading */}
        <FadeIn delay={0.1} y={30} className="w-full text-center mb-12 sm:mb-16">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Get In Touch
          </h2>
          <p className="text-xs sm:text-sm font-mono text-muted uppercase tracking-widest text-center mt-3 max-w-xl mx-auto leading-relaxed px-2">
            Open to internships, freelance projects, and collaborative ventures. If you have an idea or opportunity, I&apos;d love to hear about it.
          </p>
        </FadeIn>

        {/* Double-column grid: Info & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center text-left">
          
          {/* Left Column: Direct Premium Icon-Tiles */}
          <div className="flex flex-col gap-4">
            
            {/* Tile 1: Email */}
            <FadeIn
              delay={0.15}
              y={25}
              as="a"
              href="mailto:ayonpaul8906@gmail.com"
              className="group p-5 rounded-2xl border border-card bg-card/80 hover:bg-card hover:border-[var(--text-color)]/20 transition-all duration-300 flex items-center gap-4 cursor-pointer"
              style={{
                boxShadow: `0 4px 20px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.05)`
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--text-color)]/5 border border-card flex items-center justify-center group-hover:scale-105 group-hover:bg-[var(--text-color)]/10 transition-all duration-300 text-[var(--text-color)] group-hover:text-[var(--text-color)] flex-shrink-0">
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted opacity-80">direct_email</span>
                <span className="text-sm sm:text-base font-bold text-[var(--text-color)] group-hover:opacity-80 transition-colors leading-tight mt-0.5">
                  ayonpaul8906@gmail.com
                </span>
              </div>
            </FadeIn>

            {/* Tile 2: LinkedIn */}
            <FadeIn
              delay={0.2}
              y={25}
              as="a"
              href="https://linkedin.com/in/ayon2407s"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl border border-card bg-card/80 hover:bg-card hover:border-[var(--text-color)]/20 transition-all duration-300 flex items-center gap-4 cursor-pointer"
              style={{
                boxShadow: `0 4px 20px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.05)`
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--text-color)]/5 border border-card flex items-center justify-center group-hover:scale-105 group-hover:bg-[var(--text-color)]/10 transition-all duration-300 text-[var(--text-color)] group-hover:text-[var(--text-color)] flex-shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted opacity-80">professional_network</span>
                <span className="text-sm sm:text-base font-bold text-[var(--text-color)] group-hover:opacity-80 transition-colors leading-tight mt-0.5">
                  linkedin.com/in/ayon2407s
                </span>
              </div>
            </FadeIn>

            {/* Tile 3: GitHub */}
            <FadeIn
              delay={0.25}
              y={25}
              as="a"
              href="https://github.com/ayonpaul8906"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl border border-card bg-card/80 hover:bg-card hover:border-[var(--text-color)]/20 transition-all duration-300 flex items-center gap-4 cursor-pointer"
              style={{
                boxShadow: `0 4px 20px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.05)`
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--text-color)]/5 border border-card flex items-center justify-center group-hover:scale-105 group-hover:bg-[var(--text-color)]/10 transition-all duration-300 text-[var(--text-color)] group-hover:text-[var(--text-color)] flex-shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted opacity-80">codebase_nodes</span>
                <span className="text-sm sm:text-base font-bold text-[var(--text-color)] group-hover:opacity-80 transition-colors leading-tight mt-0.5">
                  github.com/ayonpaul8906
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Premium Contact Form */}
          <FadeIn delay={0.2} y={30} className="w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full p-6 sm:p-8 rounded-3xl border border-card bg-card/50 backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-mono text-[9px] uppercase tracking-wider text-muted">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-xl border border-card bg-[var(--bg-color)] text-[var(--text-color)] font-sans text-sm focus:outline-none focus:border-[var(--text-color)]/40 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-mono text-[9px] uppercase tracking-wider text-muted">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-xl border border-card bg-[var(--bg-color)] text-[var(--text-color)] font-sans text-sm focus:outline-none focus:border-[var(--text-color)]/40 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="font-mono text-[9px] uppercase tracking-wider text-muted">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-xl border border-card bg-[var(--bg-color)] text-[var(--text-color)] font-sans text-sm focus:outline-none focus:border-[var(--text-color)]/40 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="font-mono text-[9px] uppercase tracking-wider text-muted">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-xl border border-card bg-[var(--bg-color)] text-[var(--text-color)] font-sans text-sm focus:outline-none focus:border-[var(--text-color)]/40 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full py-3.5 sm:py-4 rounded-xl border border-[var(--text-color)] text-[var(--bg-color)] bg-[var(--text-color)] hover:bg-transparent hover:text-[var(--text-color)] transition-all duration-300 font-bold uppercase tracking-widest text-xs shadow-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </FadeIn>
          
        </div>

        {/* Footer bottom bar */}
        <FadeIn
          delay={0.35}
          y={10}
          className="w-full flex flex-col md:flex-row justify-between items-center gap-6 mt-16 sm:mt-24 pt-8 border-t border-card text-muted opacity-80 text-xs tracking-wider"
        >
          <span>&copy; {new Date().getFullYear()} AYON PAUL. ALL RIGHTS RESERVED.</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em]">
            Built with React + TS + Framer Motion
          </span>
        </FadeIn>

      </div>
    </section>
  );
};

export default ContactSection;
