import React from "react";
import { motion } from "framer-motion";

// ⭐ Generate consistent star config shared between top and bottom
const STAR_CONFIGS = Array.from({ length: 12 }).map(() => ({
  delay: 6.5 + Math.random() * 2,
  left: Math.random() * 100,
  top: 72 + Math.random() * 192,
}));

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
    style={{ left: `${left}%`, top: `${top}px` }}
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
    transition={{ duration: 6, ease: "easeInOut" }}
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
    <div className="absolute top-[0.5in] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[50] w-72 h-40 flex items-center justify-center">
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
          src="/images/logo.png"
          alt="Webster Design Logo"
          className="w-72 h-auto"
        />
      </motion.div>
    </div>
  );
};

const ConnectingLine = ({ x1, y1, x2, y2, delay }) => (
  <motion.svg
    className="absolute z-10"
    style={{ left: 0, top: 0 }}
    width="100%"
    height="100%"
  >
    <motion.line
      x1={`${x1}%`}
      y1={y1}
      x2={`${x2}%`}
      y2={y2}
      stroke="black"
      strokeDasharray="4"
      strokeWidth="2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.6 }}
    />
  </motion.svg>
);

const WebsterLanding = () => {
  return (
    <div className="min-h-screen w-full relative font-sans overflow-hidden bg-white">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[1]"
        style={{ backgroundImage: "url('/images/sunlit.jpg')" }}
      ></div>

      <CloudSweep />

      {STAR_CONFIGS.map((star, i) => (
        <Star
          key={`top-star-${i}`}
          delay={star.delay}
          left={star.left}
          top={star.top}
        />
      ))}

      <LogoExplosion />

      <div className="relative z-[40] flex flex-col justify-start items-start min-h-screen px-8 pt-[35vh] text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-black p-6 max-w-md"
        >
          <motion.h1
            className="text-xl md:text-3xl italic mb-4"
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
          {STAR_CONFIGS.map((star, i) => (
            <React.Fragment key={`bottom-star-${i}`}>
              <Star delay={star.delay + 6} left={star.left} top={star.top} />
              {i % 2 === 0 && i < STAR_CONFIGS.length - 1 && (
                <ConnectingLine
                  x1={star.left}
                  y1={star.top}
                  x2={STAR_CONFIGS[i + 1].left}
                  y2={STAR_CONFIGS[i + 1].top}
                  delay={star.delay + 6.3}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 14.2, duration: 1.5, ease: "easeOut" }}
          className="text-black p-6 max-w-md ml-auto text-right"
        >
          <motion.h2
            className="text-xl md:text-3xl italic mb-4"
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
    </div>
  );
};

export default WebsterLanding;
