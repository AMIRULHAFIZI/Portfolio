function Hero() {
  return (
    <section className="section-card overflow-hidden">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Full-Stack Developer & Data Analyst</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Crafting elegant apps and powerful analytics for modern software solutions.</h2>
          <p className="mt-6 max-w-xl text-slate-300 leading-8">
            Detail-oriented Software Development student with a strong technical foundation in Full-Stack development and Data Analytics, backed by a CompTIA Data+ certification. As part of a competitive university workshop, my team was selected to develop a custom digital automation system based on real-world requirements provided by iPetro company. My goal is to leverage my programming expertise and problem-solving skills in a professional internship to build secure, scalable, and user-centric software.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">View Projects</a>
          </div>
        </div>

        <div className="grid gap-4 rounded-[2rem] border border-border bg-slate-950/70 p-5 text-sm text-slate-300">
          <div>
            <p className="text-slate-400">Location</p>
            <p className="mt-2 text-white">Batu Pahat, Johor</p>
          </div>
          <div>
            <p className="text-slate-400">Availability</p>
            <p className="mt-2 text-white">Open to internships and freelance projects</p>
          </div>
          <div className="flex items-center gap-3 pt-3">
            <a href="https://github.com/AMIRULHAFIZI" target="_blank" rel="noreferrer" className="transition hover:text-white" aria-label="GitHub">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.613-4.033-1.613-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.729.082-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.42-1.304.763-1.604-2.665-.303-5.466-1.333-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.476 5.921.431.372.815 1.103.815 2.222v3.293c0 .319.218.694.825.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="transition hover:text-white" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8h4.6V24H.2V8zm7.92 0h4.42v2.18h.06c.62-1.18 2.14-2.42 4.4-2.42 4.7 0 5.56 3.08 5.56 7.08V24h-4.61v-7.56c0-1.8-.04-4.12-2.5-4.12-2.5 0-2.88 1.94-2.88 3.96V24H8.12V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
