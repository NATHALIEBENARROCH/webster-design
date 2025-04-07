import React from "react";
import { motion } from "framer-motion";

const Star = ({ delay, left, top }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="absolute w-6 h-6 z-10"
    style={{ left, top, position: "absolute" }}
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2, delay }}
  >
    <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2" />
  </motion.svg>
);

const CloudSweep = () => (
  <motion.img
    src="/images/clouds.png" // replace with your PNG path
    alt="Clouds sweeping across the sky"
    className="absolute top-0 left-0 w-[600px] h-auto z-20 pointer-events-none"
    initial={{ x: 600 }}
    animate={{ x: -600 }}
    transition={{ duration: 6, ease: "easeInOut" }}
  />
);

const LogoExplosion = () => (
  <>
    {/* Logo sweeps in from the right and lands centered */}
    <motion.div
      className="absolute top-[40px] left-1/2 z-30"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: "-50%", opacity: 1 }}
      transition={{ delay: 5.5, duration: 0.8, ease: "easeOut" }}
    >
      <img
        src="/images/logo.png"
        alt="Webster Design Logo"
        className="w-72 h-auto"
      />
    </motion.div>

    {/* Sparkles, floating near center but separate from layout */}
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute z-40 text-black"
        style={{
          top: `${120 + Math.random() * 40}px`,
          left: `calc(50% + ${Math.random() * 60 - 30}px)`, // offset left and right
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 6.3 + i * 0.1, duration: 0.3 }}
      >
        💥
      </motion.div>
    ))}
  </>
);

export default function WebsterLanding() {
  return (
    <div className="min-h-screen w-full relative font-sans overflow-hidden bg-white">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/sunlit.jpg')",
        }}
      ></div>

      <CloudSweep />

      {/* Star Cluster 1 */}
      {[...Array(4)].map((_, i) => (
        <Star
          key={`group1-${i}`}
          delay={6.5 + Math.random() * 0.5} // first group right after logo
          left={`${Math.random() * 100}%`}
          top={`calc(1in + ${72 + Math.random() * 192}px)`}
        />
      ))}

      {/* Star Cluster 2 */}
      {[...Array(4)].map((_, i) => (
        <Star
          key={`group2-${i}`}
          delay={7.5 + Math.random() * 0.5} // second group comes a second later
          left={`${Math.random() * 100}%`}
          top={`calc(1in + ${72 + Math.random() * 192}px)`}
        />
      ))}

      {/* Star Cluster 3 */}
      {[...Array(4)].map((_, i) => (
        <Star
          key={`group3-${i}`}
          delay={8.5 + Math.random() * 0.5} // third group finishes the sweep
          left={`${Math.random() * 100}%`}
          top={`calc(1in + ${72 + Math.random() * 192}px)`}
        />
      ))}

      <div className="relative z-20 flex flex-col justify-center items-center min-h-screen px-4 text-center">
        <LogoExplosion />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-black p-6 transform -translate-x-[1in]"
        >
          <motion.h1
            className="text-xl md:text-3xl italic mb-4 mt-[2in] text-left w-full max-w-md -translate-x-[2in]"
            initial={{ opacity: 0, x: -292 }} // <- change from -100 to -292 (~-3in total)
            animate={{ opacity: 1, x: -140 }} // <- ends exactly at current position
            transition={{ delay: 10.7, duration: 1, ease: "easeOut" }}
          >
            I used to dream up stars...
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}
