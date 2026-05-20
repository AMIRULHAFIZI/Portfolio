import Hero from "./components/Hero";
import ProjectsGrid from "./components/ProjectsGrid";
import SkillsDashboard from "./components/SkillsDashboard";
import Certificates from "./components/Certificates";
import ContactForm from "./components/ContactForm";
import projects from "./data/projects";

function App() {
  return (
    <div className="min-h-screen bg-surface text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-12 px-6 py-10 md:px-10">
        <header className="rounded-3xl border border-border bg-surface2/80 p-6 shadow-glow backdrop-blur-xl">
          <nav className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Portfolio</p>
              <h1 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Amirul Hafizi Bin Ishak | Software Development Student</h1>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <a href="#projects" className="transition hover:text-white">Projects</a>
              <a href="#skills" className="transition hover:text-white">Skills</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>
          </nav>
        </header>

        <main className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr]">
          <section className="space-y-8">
            <Hero />
            <ProjectsGrid projects={projects} />
          </section>

          <aside className="space-y-8">
            <SkillsDashboard />
            <Certificates />
            <ContactForm />
          </aside>
        </main>
      </div>
    </div>
  );
}

export default App;
