import React,{useState} from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzbd1xqZMwlKXeargpftKCN8a_90fZ23jhVhtfzXiDjYKtb-MOdGiIG_DxIaOHgh1l1/exec", {
  method: "POST",
  body: JSON.stringify(form),
  mode: "no-cors",
      });

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error submitting form", err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionHeading>Let's Collaborate</SectionHeading>
        <p className="text-slate-400 mb-12">
          Whether you have a question, a freelance project, or just want to say hi, my inbox is open.
        </p>

        <div className="bg-slate-900 p-8 rounded-2xl border border-white/5 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-400 text-sm mb-2">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-sm mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 text-sm mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button
              variant="primary"
              className="w-full justify-center flex items-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>

            {success && (
              <p className="text-green-400 text-sm text-center">
                Message sent successfully 🚀
              </p>
            )}
          </form>
        </div>

        <footer className="mt-20 text-slate-600 text-sm">
          <p>© 2026 Anubhav Maurya. Built with React & Tailwind.</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact;
