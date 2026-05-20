import { useRef, useState } from "react";

function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(formRef.current);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      setStatus("Sorry, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-card">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Get in Touch</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">Contact Me</h3>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-300">
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-violet-500"
              required
            />
          </label>
          <label className="space-y-2 text-sm text-slate-300">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-violet-500"
              required
            />
          </label>
        </div>

        <label className="space-y-2 text-sm text-slate-300">
          <span>Message</span>
          <textarea
            name="message"
            rows="5"
            placeholder="Tell me about your project or opportunity..."
            className="w-full rounded-[1.75rem] border border-slate-700 bg-slate-950/90 px-4 py-4 text-slate-100 outline-none transition focus:border-violet-500"
            required
          />
        </label>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">{status || "Ready to connect? Send me a message."}</p>
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
