import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS, CONSTELLATION_LINES } from "../data/site";

const STAR_PATH = "M12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9Z";

const ProjectStar = ({ project, index, active, setActive }) => {
  const isActive = active === index;
  const labelLeft = project.x > 70;

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} — view on Behance`}
      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group outline-none"
      style={{ left: `${project.x}%`, top: `${project.y}%` }}
      initial={{ opacity: 0, scale: 0, rotate: -90 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: 0.15 * index, type: "spring", stiffness: 160, damping: 12 }}
      onMouseEnter={() => setActive(index)}
      onMouseLeave={() => setActive(null)}
      onFocus={() => setActive(index)}
      onBlur={() => setActive(null)}
    >
      {/* halo */}
      <motion.span
        className="absolute inset-0 -m-4 rounded-full bg-webster/20 blur-md"
        animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1.4 : 0.6 }}
        transition={{ duration: 0.3 }}
      />
      <motion.svg
        viewBox="0 0 24 24"
        className="relative w-7 h-7 md:w-9 md:h-9"
        animate={{
          scale: isActive ? 1.5 : [1, 1.12, 1],
          rotate: isActive ? 72 : 0,
        }}
        transition={
          isActive
            ? { type: "spring", stiffness: 300, damping: 14 }
            : { duration: 2.4 + (index % 4) * 0.5, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <path
          d={STAR_PATH}
          fill={isActive ? "#0A0FFA" : "#fff"}
          stroke={isActive ? "#0A0FFA" : "#000"}
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* number, always visible */}
      <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[10px] tracking-widest text-black/50 font-medium">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* title on hover */}
      <motion.span
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-display italic text-lg md:text-2xl text-black bg-white/85 backdrop-blur px-3 py-1 rounded-full shadow-sm ${
          labelLeft ? "right-full mr-4" : "left-full ml-4"
        }`}
        initial={false}
        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : labelLeft ? 10 : -10 }}
        transition={{ duration: 0.25 }}
      >
        {project.title} <span className="not-italic text-webster">↗</span>
      </motion.span>
    </motion.a>
  );
};

const Constellation = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="work" className="relative bg-white py-12 md:py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-webster mb-3">The work</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              We are The Websters.
              <br />
              The Web is our <em className="text-webster">universe.</em>
            </h2>
            <p className="mt-3 font-display italic text-2xl md:text-3xl text-black/70">
              Every star is a story. Pick one and wander in.
            </p>
          </motion.div>
          <motion.p
            className="max-w-xs text-black/60 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.9 }}
          >
            Brands, rebrands, apps, web windows and social media, from Paris to Los Angeles
            and Montréal. Hover a star, then click to open the full project.
          </motion.p>
        </div>

        {/* the sky */}
        <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/8] rounded-[2rem] border border-black/10 bg-[radial-gradient(ellipse_at_top,_#f4f5ff_0%,_#ffffff_70%)]">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {CONSTELLATION_LINES.map(([a, b], i) => {
              const A = PROJECTS[a];
              const B = PROJECTS[b];
              if (!A || !B) return null;
              const lit = active === a || active === b;
              return (
                <motion.line
                  key={i}
                  x1={A.x}
                  y1={A.y}
                  x2={B.x}
                  y2={B.y}
                  stroke={lit ? "#0A0FFA" : "#000"}
                  strokeOpacity={lit ? 0.9 : 0.35}
                  strokeWidth={lit ? 2 : 1.2}
                  strokeDasharray="4 4"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 1 + i * 0.12, duration: 0.8, ease: "easeInOut" }}
                />
              );
            })}
          </svg>

          {PROJECTS.map((p, i) => (
            <ProjectStar key={p.href} project={p} index={i} active={active} setActive={setActive} />
          ))}
        </div>

        {/* compact index list: phones only, where you can't hover a star */}
        <ol className="md:hidden mt-8 grid grid-cols-2 gap-x-6 border-t border-black/10">
          {PROJECTS.map((p, i) => (
            <li key={p.href} className="border-b border-black/10">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`flex items-baseline gap-2 py-2 transition-colors ${
                  active === i ? "text-webster" : "text-black hover:text-webster"
                }`}
              >
                <span className="text-[10px] tracking-widest text-black/40 w-5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-base italic flex-1 min-w-0">{p.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Constellation;
