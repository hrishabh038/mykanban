import { motion } from "framer-motion";

const PageLoading = () => {
  const text = "Learning Hub";

  return (
    <div className="z-50 fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-neutral-950 text-neutral-100 px-4">

      {/* Letter-by-letter wave animation */}
      <div className="bbh-bartle-regular flex flex-row flex-wrap items-center gap-1 text-sm sm:text-[16px] text-neutral-100">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            animate={{ y: [0, -6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: index * 0.1,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      {/* Optional Loading Text */}
      <motion.p
        className="mt-6 text-sm sm:text-base text-neutral-300"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default PageLoading;
