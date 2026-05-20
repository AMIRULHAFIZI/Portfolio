function ProjectsGrid({ projects }) {
  return (
    <section id="projects" className="section-card">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Work Showcase</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Selected Projects</h3>
        </div>
        <p className="text-sm text-slate-400">A collection of software solutions and analytics prototypes.</p>
      </div>

      <div className="grid gap-5 grid-cols-1 md:max-w-2xl md:ml-auto">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-[2rem] border border-border bg-slate-950/80 p-6 transition duration-300 hover:-translate-y-1 hover:bg-slate-900/95"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-violet-300">Featured</p>
                <h4 className="mt-3 text-xl font-semibold text-white">{project.title}</h4>
              </div>
              {project.tag && (
                <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-200">
                    {project.tag}
                </span>
             )}
            </div>
            <p className="mt-5 text-slate-300 leading-7">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700 bg-slate-900/90 px-3 py-1 text-xs text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
