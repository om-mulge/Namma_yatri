import { motion } from "framer-motion";
import { Coach, COACH_COLORS } from "@/data/trains";

export function CoachLayout({ coaches }: { coaches: Coach[] }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Coach Position
        </p>
        <p className="text-[10px] text-muted-foreground">← Front · Rear →</p>
      </div>
      <div className="overflow-x-auto scrollbar-hide -mx-1 px-1 pb-2">
        <div className="flex items-center gap-2 min-w-max">
          {coaches.map((c, i) => {
            const color = COACH_COLORS[c.type];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, type: "spring", stiffness: 220, damping: 18 }}
                className={`${color.bg} text-white text-xs font-bold px-3.5 py-2.5 rounded-xl shadow-card whitespace-nowrap min-w-[52px] text-center`}
              >
                {c.label}
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1">
        {Object.entries(COACH_COLORS).map(([k, v]) => (
          <div key={k} className="flex items-center gap-1.5">
            <span className={`${v.bg} h-2.5 w-2.5 rounded-full`} />
            <span className="text-[10px] text-muted-foreground">{v.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}