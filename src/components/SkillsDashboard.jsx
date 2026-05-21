const skillGroups = [
  {
    title: "Programming Languages",
    items: ["C++", "C#", "Java", "Python"]
  },
  {
    title: "Database & Analytics",
    items: ["PostgreSQL", "Microsoft Power BI"]
  },
  {
    title: "Certifications",
    items: ["iPetro", "Google Cloud" , "CompTIA Data+"]
  }
];

function SkillsDashboard() {
  return (
    <section id="skills" className="section-card">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Skills Dashboard</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">Technical Strengths</h3>
      </div>

      <div className="grid gap-4 grid-cols-1">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-3xl border border-border bg-slate-950/80 p-5">
            <h4 className="text-sm font-semibold text-white line-clamp-2">{group.title}</h4>
            <div className="mt-4 space-y-3">
              {group.items.map((item) => (
                <div key={item} className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-200 shadow-sm whitespace-normal text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsDashboard;
