import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TrainFront } from "lucide-react";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: SplashScreen,
});

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate({ to: "/stations" }), 2200);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8">
      <div className="relative w-full max-w-[420px] h-[min(900px,95vh)] rounded-[2.5rem] overflow-hidden border border-border shadow-card flex flex-col items-center justify-center text-center px-8"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, oklch(0.32 0.12 262) 0%, oklch(0.16 0.05 260) 60%, oklch(0.1 0.04 258) 100%)",
        }}
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="relative"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-3xl bg-gradient-accent blur-2xl"
          />
          <div className="relative bg-gradient-accent text-secondary-foreground p-6 rounded-3xl shadow-glow">
            <TrainFront className="h-14 w-14" strokeWidth={2.2} />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-display text-4xl font-extrabold mt-8 text-foreground"
        >
          Namma-Platform
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-base text-muted-foreground mt-2"
        >
          ನಮ್ಮ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="text-sm text-muted-foreground/80 mt-4"
        >
          Your Smart Station Guide
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 flex gap-1.5"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
              className="h-1.5 w-1.5 rounded-full bg-secondary"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
