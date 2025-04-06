import React from "react";
import { motion } from "framer-motion";

export default function WebsterLanding() {
  return (
    <div className="min-h-screen w-full relative font-sans">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/sunlit.jpg')",
        }}
      ></div>

      {/* Animated Stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full z-10"
          initial={{
            opacity: 0,
            y: -50,
            x: 50 + i * 60, // Spread them out horizontally
          }}
          animate={{
            opacity: 1,
            y: 300 + Math.random() * 200, // Drop to a random lower position
          }}
          transition={{
            duration: 2 + Math.random(),
            delay: i * 0.4,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-black backdrop-blur-sm bg-white/60 p-6 rounded-xl shadow-md"
        >
          <h1 className="text-xl md:text-3xl italic mb-4">
            I used to dream about the stars...
          </h1>
          <h1 className="text-xl md:text-3xl italic mb-4">
            Now, I connect them.
          </h1>
          <h1 className="text-xl md:text-3xl font-bold">
            To build bold and beautiful windows to the web.
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
