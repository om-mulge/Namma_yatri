import { motion } from "framer-motion";
import { Volume2, Clock, MapPin } from "lucide-react";
import { Train } from "@/data/trains";
import { CoachLayout } from "./CoachLayout";
import { toast } from "sonner";

export function TrainCard({ train, index }: { train: Train; index: number }) {
  const handleAnnounce = () => {
    toast.success(`Playing announcement for ${train.name}`, {
      description: `Platform ${train.platform} · ${train.arrivesIn}`,
    });
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const u = new SpeechSynthesisUtterance(
        `Attention passengers. ${train.name}, train number ${train.number}, to ${train.destination}, will arrive on platform ${train.platform} in ${train.arrivesIn}.`,
      );
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.12, type: "spring", stiffness: 180, damping: 22 }}
      className="bg-card rounded-3xl p-5 shadow-card border border-border/60"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
            #{train.number}
          </p>
          <h3 className="text-display text-xl font-bold leading-tight mt-0.5 truncate">
            {train.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">{train.nameKn}</p>
          <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {train.destination}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" /> {train.arrivesIn}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center bg-gradient-accent text-secondary-foreground rounded-2xl px-3 py-2 shadow-glow shrink-0">
          <span className="text-[9px] font-bold uppercase tracking-widest">Platform</span>
          <span className="text-display text-4xl font-black leading-none mt-0.5">
            {train.platform}
          </span>
        </div>
      </div>

      <div className="mt-5">
        <CoachLayout coaches={train.coaches} />
      </div>

      <motion.button
        whileTap={{ scale: 0.96 }}
        whileHover={{ scale: 1.01 }}
        onClick={handleAnnounce}
        className="mt-5 w-full bg-gradient-accent text-secondary-foreground font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-glow active:shadow-card transition-shadow"
        aria-label={`Play announcement for ${train.name}`}
      >
        <Volume2 className="h-5 w-5" />
        Play Announcement
      </motion.button>
    </motion.article>
  );
}