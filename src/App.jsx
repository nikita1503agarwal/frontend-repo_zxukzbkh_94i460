import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function Nav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 flex items-center justify-between rounded-full border border-emerald-500/30 bg-black/40 px-4 py-2 backdrop-blur-md">
          <a href="#home" className="text-emerald-300 font-semibold tracking-wide">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399] mr-2" />
            Neonfolio
          </a>
          <div className="hidden gap-6 text-sm text-emerald-200/80 sm:flex">
            <a href="#about" className="hover:text-emerald-300 transition-colors">About</a>
            <a href="#projects" className="hover:text-emerald-300 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-emerald-300 transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1.5 text-emerald-200 ring-1 ring-inset ring-emerald-500/40 hover:bg-emerald-500/30 transition"
          >
            Let’s talk <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="relative h-[88vh] w-full">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BL9Cjn3fkAdLBhXm/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(600px 300px at 20% 20%, rgba(16,185,129,0.12), transparent 60%)',
      }} />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold leading-tight text-white sm:text-6xl"
          >
            Building sleek, modern web experiences with a neon touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-2xl text-emerald-200/80"
          >
            I’m a frontend-focused developer crafting responsive, accessible interfaces. I love motion, minimalism, and glowy green.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 font-medium text-black shadow-[0_0_24px_#34d399] hover:bg-emerald-300 transition"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-5 py-2.5 font-medium text-emerald-200 hover:bg-emerald-500/20 transition"
            >
              Contact Me
            </a>
          </motion.div>

          <div className="mt-8 flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-emerald-300 hover:text-white transition">
              <Github />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-emerald-300 hover:text-white transition">
              <Linkedin />
            </a>
            <a href="#contact" className="text-emerald-300 hover:text-white transition">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10 text-center">
      {eyebrow && <p className="text-emerald-300/80 tracking-widest uppercase text-xs mb-2">{eyebrow}</p>}
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      {subtitle && <p className="mt-2 text-emerald-200/80">{subtitle}</p>}
    </div>
  )
}

function About() {
  return (
    <section id="about" className="relative bg-black py-20">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(400px 200px at 80% 20%, rgba(16,185,129,0.08), transparent 60%)',
      }} />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionTitle
          eyebrow="About"
          title="Hi, I’m Alex — a UI engineer"
          subtitle="Focused on motion, performance, and clean, accessible design."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-emerald-500/30 bg-zinc-900/60 p-6 text-emerald-100 shadow-[0_0_24px_rgba(52,211,153,0.08)]">
            <p>
              I blend thoughtful UX with modern frontend stacks to deliver crisp, fast, and elegant web apps. From landing pages to data-heavy dashboards, I aim for delightful details and smooth interactions.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-500/30 bg-zinc-900/60 p-6 text-emerald-100 shadow-[0_0_24px_rgba(52,211,153,0.08)]">
            <ul className="grid grid-cols-2 gap-3 text-sm">
              <li className="text-emerald-300">• React</li>
              <li className="text-emerald-300">• TypeScript</li>
              <li className="text-emerald-300">• Tailwind</li>
              <li className="text-emerald-300">• Framer Motion</li>
              <li className="text-emerald-300">• FastAPI</li>
              <li className="text-emerald-300">• MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

const projects = [
  {
    title: 'Neon Dashboard',
    desc: 'A responsive analytics dashboard with animated charts and dark neon UI.',
    link: '#',
  },
  {
    title: 'Glow Landing',
    desc: 'Marketing microsite with 3D hero, parallax layers, and buttery transitions.',
    link: '#',
  },
  {
    title: 'Cyber Cards',
    desc: 'Interactive card gallery with keyboard navigation and focus states.',
    link: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="relative bg-black py-20">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(500px 240px at 20% 20%, rgba(16,185,129,0.08), transparent 60%)',
      }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Work"
          title="Selected Projects"
          subtitle="A few things I’ve designed and built recently."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-emerald-500/30 bg-zinc-900/60 p-6 text-emerald-100 shadow-[0_0_24px_rgba(52,211,153,0.08)]"
            >
              <div className="absolute -inset-px rounded-xl opacity-0 transition group-hover:opacity-100" style={{
                background: 'linear-gradient(120deg, rgba(34,197,94,0.15), rgba(20,184,166,0.15))',
                filter: 'blur(12px)'
              }} />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-emerald-200/80">{p.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-emerald-300 group-hover:text-white transition">
                  <span className="text-sm font-medium">Open</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative bg-black py-20">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(420px 220px at 80% 30%, rgba(16,185,129,0.08), transparent 60%)',
      }} />
      <div className="relative mx-auto max-w-4xl px-6">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s build something great"
          subtitle="I’m open to freelance, full-time roles, and collaborations."
        />

        <div className="rounded-2xl border border-emerald-500/30 bg-zinc-900/60 p-6 shadow-[0_0_24px_rgba(52,211,153,0.08)]">
          <form onSubmit={(e) => e.preventDefault()} className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm text-emerald-200/80">Name</label>
              <input className="w-full rounded-md border border-emerald-500/30 bg-black/40 px-3 py-2 text-emerald-100 outline-none placeholder:text-emerald-200/50 focus:ring-2 focus:ring-emerald-400/50" placeholder="Jane Doe" />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm text-emerald-200/80">Email</label>
              <input className="w-full rounded-md border border-emerald-500/30 bg-black/40 px-3 py-2 text-emerald-100 outline-none placeholder:text-emerald-200/50 focus:ring-2 focus:ring-emerald-400/50" placeholder="jane@email.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm text-emerald-200/80">Message</label>
              <textarea rows={4} className="w-full rounded-md border border-emerald-500/30 bg-black/40 px-3 py-2 text-emerald-100 outline-none placeholder:text-emerald-200/50 focus:ring-2 focus:ring-emerald-400/50" placeholder="Tell me about your project..." />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between">
              <div className="flex items-center gap-4 text-emerald-300">
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 hover:text-white transition"><Mail size={18}/> hello@example.com</a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition"><Github size={18}/> GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition"><Linkedin size={18}/> LinkedIn</a>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 font-medium text-black shadow-[0_0_24px_#34d399] hover:bg-emerald-300 transition">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-emerald-500/20 bg-black/80 py-8 text-center text-emerald-300">
        <p>
          © {new Date().getFullYear()} Neonfolio — Built with a neon green glow
        </p>
      </footer>
    </div>
  )
}
