import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SOCIALS, CONTACT_EMAIL } from "../data/site";

const Eyebrow = ({ children, light }) => (
  <p className={`text-xs tracking-[0.3em] uppercase mb-4 ${light ? "text-white/60" : "text-webster"}`}>
    {children}
  </p>
);

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

/* ---------- NAV ---------- */
const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Story", href: "#story" },
  { label: "Mission", href: "#mission" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-4 inset-x-4 z-[100] flex justify-center"
      initial={false}
      animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-black/10 rounded-full pl-4 pr-2 py-2 shadow-sm max-w-full">
        <a href="#top" className="flex items-center shrink-0">
          <img src="/images/logo-mark.png" alt="The Webster Design" className="h-7 w-auto object-contain object-left" />
        </a>
        <ul className="hidden md:flex items-center gap-1 ml-4">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="px-3 py-1.5 text-sm rounded-full hover:bg-black/5 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-block ml-2 bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-webster transition-colors"
        >
          Start a project ✦
        </a>
        <button
          className="md:hidden ml-auto px-3 py-1.5 text-sm rounded-full border border-black/15"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <ul className="md:hidden absolute top-16 inset-x-0 bg-white rounded-3xl border border-black/10 shadow-lg p-3">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 font-display text-2xl italic">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </motion.header>
  );
};

/* ---------- MARQUEE ---------- */
export const Marquee = () => {
  const words = ["Websites that move", "Brand storytelling", "Rebrands", "Motion", "EN / FR copy", "Paris → Montréal"];
  const row = [...words, ...words];
  return (
    <div className="bg-black text-white py-5 overflow-hidden border-t border-white/10" aria-hidden="true">
      <motion.div
        className="flex gap-10 whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {row.map((w, i) => (
          <span key={i} className="font-display italic text-2xl md:text-4xl flex items-center gap-10">
            {w} <span className="text-webster not-italic">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

/* ---------- STORY ---------- */
const CHAPTERS = [
  {
    n: "I",
    title: "Fashion",
    text: "Born in Casablanca, I started in fashion: runway shows, then work with manufacturers and importers in Casablanca and Los Angeles, and styling shoots and campaigns in Paris. That's where I learned a brand is a feeling you can walk into.",
  },
  {
    n: "II",
    title: "Montréal",
    text: "Then came the brands: rebrands for retailers, healthcare, wine, tech. Logos, voices, whole visual worlds built from a single spark.",
  },
  {
    n: "III",
    title: "The Webster",
    text: "Today I connect those stars with code. Websites that breathe, drift and sparkle — so your story doesn't just sit on a screen. It moves.",
  },
];

export const Story = () => (
  <section id="story" className="relative bg-[#fafaf7] py-16 md:py-24 px-6 md:px-12 overflow-hidden">
    <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5 md:sticky md:top-32 self-start">
        <Reveal>
          <Eyebrow>The story</Eyebrow>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Hi, I'm <em>Nathalie.</em>
          </h2>
          <p className="mt-6 text-black/70 leading-relaxed max-w-sm">
            Creative director, copywriter and stargazer. Founder of The Webster Design — a tiny
            boutique studio making bold & beautiful web windows.
          </p>
        </Reveal>
      </div>
      <div className="md:col-span-7 space-y-6">
        {CHAPTERS.map((c, i) => (
          <Reveal key={c.n} delay={i * 0.1}>
            <motion.article
              whileHover={{ x: 8 }}
              className="group bg-white border border-black/10 rounded-3xl p-8 md:p-10 hover:border-webster transition-colors"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-display text-webster text-2xl">{c.n}</span>
                <h3 className="font-display text-3xl md:text-4xl italic">{c.title}</h3>
              </div>
              <p className="mt-4 text-black/70 leading-relaxed text-lg">{c.text}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- MISSION ---------- */
export const Mission = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section id="mission" className="relative bg-webster text-white py-20 md:py-28 px-6 md:px-12 overflow-hidden">
      <motion.svg
        viewBox="0 0 24 24"
        className="absolute -right-24 -top-24 w-[28rem] h-[28rem] opacity-10"
        style={{ rotate }}
        aria-hidden="true"
      >
        <path d="M12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9Z" fill="white" />
      </motion.svg>
      <div className="relative max-w-5xl mx-auto">
        <Reveal>
          <Eyebrow light>The mission</Eyebrow>
          <h2 className="font-display text-4xl md:text-7xl leading-[1.02]">
            To turn websites into <em>windows</em> — places people want to lean in, linger, and
            remember.
          </h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            ["Bold", "No templates. Every site is drawn for one brand, one voice, one story."],
            ["Beautiful", "Fashion-trained eyes on every pixel, every word, every transition."],
            ["Moving", "Motion with meaning: animation that guides, delights and tells the story."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={0.15 * i}>
              <div className="border-t border-white/30 pt-6">
                <h3 className="font-display italic text-3xl">{t}</h3>
                <p className="mt-3 text-white/75 leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- SERVICES ---------- */
const SERVICES = [
  { t: "Websites that move", d: "Custom, animated sites in React — scroll stories, playful micro-interactions, fast and mobile-first." },
  { t: "Brand storytelling", d: "Naming, voice and narrative that make people feel something before they read a word." },
  { t: "Rebrands & identity", d: "Logos, palettes, type and the visual systems that hold them together." },
  { t: "Bilingual copy", d: "English & French copywriting for web, campaigns and social — written, not translated." },
];

const STEPS = [
  ["Dream", "We talk, sketch and find the star your brand is orbiting."],
  ["Connect", "Design, words and code come together, one constellation at a time."],
  ["Shine", "Launch, share, and watch your window light up."],
];

export const Services = () => (
  <section id="services" className="bg-white py-16 md:py-24 px-6 md:px-12">
    <div className="max-w-6xl mx-auto">
      <Reveal>
        <Eyebrow>What I make</Eyebrow>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl">
          Websites that <em className="text-webster">move.</em>
        </h2>
      </Reveal>

      <div className="mt-16 grid sm:grid-cols-2 gap-px bg-black/10 border border-black/10 rounded-3xl overflow-hidden">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.t}
            className="group relative bg-white p-8 md:p-12 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <span className="absolute inset-0 bg-black origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
            <div className="relative">
              <span className="text-xs tracking-widest text-black/40 group-hover:text-white/50 transition-colors">
                0{i + 1}
              </span>
              <h3 className="mt-6 font-display text-3xl md:text-4xl italic group-hover:text-white transition-colors">
                {s.t}
              </h3>
              <p className="mt-4 text-black/65 leading-relaxed group-hover:text-white/75 transition-colors">{s.d}</p>
              <span className="inline-block mt-6 text-webster text-2xl transition-transform duration-500 group-hover:rotate-[144deg] group-hover:scale-125">
                ✦
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24">
        <Reveal>
          <Eyebrow>How it goes</Eyebrow>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-10 mt-6">
          {STEPS.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.15}>
              <div className="flex gap-5">
                <span className="font-display text-6xl text-webster leading-none">{i + 1}</span>
                <div>
                  <h3 className="font-display italic text-3xl">{t}</h3>
                  <p className="mt-2 text-black/65 leading-relaxed">{d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------- CONTACT ---------- */
export const Contact = () => {
  const linkedin = SOCIALS.find((s) => s.label === "LinkedIn")?.href;
  const cta = CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : linkedin;

  return (
    <section
      id="contact"
      className="relative bg-black text-white py-20 md:py-28 px-6 md:px-12 overflow-hidden"
    >
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
          animate={{ opacity: [0.1, 0.9, 0.1] }}
          transition={{ duration: 2 + (i % 5), repeat: Infinity, delay: (i % 7) * 0.4 }}
        />
      ))}
      <div className="relative max-w-5xl mx-auto text-center">
        <Reveal>
          <Eyebrow light>Say hello</Eyebrow>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.95]">
            Got a dream? <br />
            <em>Let's make it move.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <motion.a
            href={cta}
            target={CONTACT_EMAIL ? undefined : "_blank"}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 mt-12 bg-webster text-white text-lg md:text-xl px-8 py-4 rounded-full shadow-[0_0_40px_rgba(10,15,250,0.6)]"
          >
            Start a project <span aria-hidden="true">✦</span>
          </motion.a>
        </Reveal>
        <Reveal delay={0.35}>
          <ul className="mt-14 flex flex-wrap justify-center gap-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2.5 rounded-full border border-white/25 hover:bg-white hover:text-black transition-colors"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export const Footer = () => (
  <div className="bg-black text-white/50 border-t border-white/10 px-6 md:px-12 py-8 text-sm">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-3">
      <span>© {new Date().getFullYear()} The Webster Design · Montréal</span>
      <span className="italic font-display text-base">Creators of bold & beautiful web windows.</span>
    </div>
  </div>
);
