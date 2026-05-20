import certificates from "../data/certificates";

function Certificates() {
  return (
    <section className="section-card">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Certifications</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">Verified Certificates</h3>
      </div>

      <div className="flex flex-col gap-4">
        {certificates.map((cert) => (
          <div key={cert.id} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="max-w-[60%]">
                <p className="text-sm font-semibold text-white">{cert.title}</p>
                <p className="text-xs text-slate-400 mt-1">{cert.issuer} • {cert.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  title="Open full view"
                >
                  View
                </a>
                <a
                  href={cert.file}
                  download
                  className="btn-primary"
                >
                  Download
                </a>
              </div>
            </div>

            <div className="mt-4">
              <iframe
                src={cert.file}
                className="w-full h-40 rounded-md border border-slate-800"
                title={cert.title}
              />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Certificates;
