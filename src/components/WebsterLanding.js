import React from "react";
import { motion } from "framer-motion";

// ⭐ Stars for the "connect the stars" constellation: one per column so they
// spread across the whole width, at varied heights for an open, airy shape.
const STAR_CONFIGS = Array.from({ length: 12 }).map((_, i) => ({
  delay: 6.5 + Math.random() * 2,
  left: 4 + i * (92 / 11) + (Math.random() - 0.5) * 3,
  top: 30 + Math.random() * 190,
}));

// ⭐ Stars under the logo: spread evenly across the width (one per column),
// with a few "double stars" — a twin tucked right next to its partner.
const HERO_STAR_COUNT = 22;
const HERO_STARS = Array.from({ length: HERO_STAR_COUNT }).flatMap((_, i) => {
  const col = 95 / HERO_STAR_COUNT;
  const star = {
    delay: 6.5 + Math.random() * 2,
    left: 1 + i * col + Math.random() * col * 0.7,
    top: 145 + Math.random() * 90,
  };
  const isDouble = i % 5 === 2; // about every fifth star gets a twin
  if (!isDouble) return [star];
  const twin = {
    delay: star.delay + 0.3,
    left: star.left + 0.6 + Math.random() * 0.6,
    top: star.top + (Math.random() > 0.5 ? 10 : -10) + Math.random() * 8,
  };
  return [star, twin];
});

// ☁ Cloud-like connections: each star joins its neighbour with a soft arc
// that billows upward, like the bumps on a cloud outline.
const CLOUD_ARCS = STAR_CONFIGS.slice(0, -1).map((a, i) => {
  const b = STAR_CONFIGS[i + 1];
  const mx = (a.left + b.left) / 2;
  const lift = 28 + Math.random() * 30;
  const my = Math.min(a.top, b.top) - lift;
  return `M ${a.left} ${a.top} Q ${mx} ${my} ${b.left} ${b.top}`;
});

// ⭐️ Floating Star Animation
const Star = ({ delay, left, top }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="absolute w-6 h-6 z-20"
    // centered on its point, so connecting lines hit the middle of the star
    style={{ left: `${left}%`, top: `${top}px`, marginLeft: -12, marginTop: -12 }}
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2, delay }}
  >
    <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2" />
  </motion.svg>
);

const CloudSweep = () => (
  <motion.img
    src="/images/clouds.png"
    alt="Clouds sweeping across the sky"
    className="absolute top-0 left-0 w-[600px] h-auto z-30 pointer-events-none"
    initial={{ x: 600 }}
    animate={{ x: -600 }}
    transition={{ duration: 7, ease: "easeInOut" }}
  />
);

const LogoExplosion = () => {
  const sparkles = Array.from({ length: 40 }, () => {
    const angle = Math.random() * 2 * Math.PI;
    const distance = 60 + Math.random() * 90;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    const delay = Math.random() * 0.4;
    return { x, y, delay };
  });

  return (
    <div className="absolute top-[64px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[50] w-72 h-40 flex items-center justify-center">
      {sparkles.map((sparkle, i) => (
        <motion.img
          key={i}
          src="/images/sparkle.png"
          alt="Sparkle"
          className="absolute z-[60] w-6 h-6 pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 1, scale: 0 }}
          animate={{ x: sparkle.x, y: sparkle.y, scale: 1, opacity: 0 }}
          transition={{
            delay: 5.0 + sparkle.delay,
            duration: 2.4,
            ease: "easeOut",
          }}
        />
      ))}
      <motion.div
        className="z-[55]"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 5.5, duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/images/logo-mark.png"
          alt="The Webster Design"
          className="w-72 md:w-80 h-auto mx-auto"
        />
        <p className="mt-2 text-center whitespace-nowrap font-medium text-black text-lg md:text-2xl tracking-tight">
          Creators of bold &amp; beautiful web windows.
        </p>
      </motion.div>
    </div>
  );
};

const WebsterLanding = () => {
  return (
    <section id="top" className="min-h-screen w-full relative font-sans overflow-hidden bg-white">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[1]"
        style={{ backgroundImage: "url('/images/sunlit.jpg')" }}
      ></div>

      <CloudSweep />

      {HERO_STARS.map((star, i) => (
        <Star
          key={`top-star-${i}`}
          delay={star.delay}
          left={star.left}
          top={star.top}
        />
      ))}

      <LogoExplosion />

      <div className="relative z-[40] flex flex-col justify-start items-start min-h-screen px-8 pt-[225px] md:pt-[245px] text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-black p-6 max-w-md"
        >
          <motion.h1
            className="font-display text-2xl md:text-4xl italic mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 10.7, duration: 1, ease: "easeOut" }}
          >
            I used to dream up stars...
          </motion.h1>

          <motion.img
            src="/images/tree.png"
            alt="Tree"
            className="w-64 h-auto -mt-[0.5in] scale-100"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 10.7, duration: 1, ease: "easeOut" }}
          />
        </motion.div>

        <div className="relative w-full h-64 -mt-16 z-[30]">
          <svg
            className="absolute inset-0 w-full h-full overflow-visible z-10"
            viewBox="0 0 100 256"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {CLOUD_ARCS.map((d, i) => (
              <motion.path
                key={`arc-${i}`}
                d={d}
                fill="none"
                stroke="black"
                strokeOpacity="0.55"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeDasharray="1 7"
                vectorEffect="non-scaling-stroke"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 14.8 + i * 0.3, duration: 0.9, ease: "easeOut" }}
              />
            ))}
          </svg>
          {STAR_CONFIGS.map((star, i) => (
            <Star key={`bottom-star-${i}`} delay={star.delay + 6} left={star.left} top={star.top} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 14.2, duration: 1.5, ease: "easeOut" }}
          className="text-black p-6 max-w-md ml-auto text-right"
        >
          <motion.h2
            className="font-display text-2xl md:text-4xl italic mb-4"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 14.2, duration: 1, ease: "easeOut" }}
          >
            Then I learned to connect the stars{" "}
            <span className="not-italic">(with code)</span>
          </motion.h2>

          <motion.img
            src="/images/tree.png"
            alt="Tree"
            className="w-64 h-auto -mt-[0.5in] ml-auto scale-[3]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 16, duration: 1, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WebsterLanding;
