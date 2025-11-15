import { useState } from 'react';
import { Mail, Send, Github, Linkedin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm actively seeking internship or entry-level opportunities in AI/Machine Learning, Front-end Development, 
                QA, or UI/UX. Let's discuss how I can contribute to your team!
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether it's collaborating on innovative projects, exploring new opportunities, or just having a 
                conversation about technology and design, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:stephankestroy@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-cyan-400">stephankestroy@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+94702036472"
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-violet-500/10 to-pink-500/10 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-violet-500 to-pink-500 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-violet-400">+94 70 20 364 72</p>
                </div>
              </a>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/KestroyStephan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-gradient-to-r from-violet-500/10 to-pink-500/10 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20">
              <h4 className="text-lg mb-3">Based in Sri Lanka</h4>
              <p className="text-gray-400 text-sm">
                Currently studying at Horizon Campus, Malabe, Sri Lanka. Open to remote opportunities and 
                willing to relocate for the right position.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
            <form
              onSubmit={handleSubmit}
              className="relative p-8 bg-gray-900 rounded-2xl border border-gray-800 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white py-6 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 Kestroy Stephan. Built with React, TypeScript & Tailwind CSS</p>
          <p className="text-sm mt-2">BSc (Hons) in Information Technology · Horizon Campus, Sri Lanka</p>
        </div>
      </div>
    </section>
  );
}