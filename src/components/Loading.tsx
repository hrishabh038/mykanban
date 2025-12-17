import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex items-center justify-center space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="block w-2 h-2 rounded-full bg-neutral-100"
          animate={{ y: [0, -4, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1,
            delay: i * 0.15,
          }}
        />
      ))}
    </div>
  );
};

export default Loading;
