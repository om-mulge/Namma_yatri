import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, ChevronRight, Search } from "lucide-react";
import { useState } from "react";
import { STATIONS } from "@/data/trains";
import { PhoneFrame } from "@/components/PhoneFrame";

export const Route = createFileRoute("/stations")({
  component: StationsScreen,
  head: () => ({
    meta: [
      { title: "Select Your Station · Namma-Platform" },
      {
        name: "description",
        content: "Pick your railway station to see the next 3 trains, platforms, and coach positions.",
      },
    ],
  }),
});

function StationsScreen() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const filtered = STATIONS.filter(
    (s) =>
      s.name.toLowerCase().includes(q.toLowerCase()) ||
      s.nameKn.includes(q) ||
      s.code.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <PhoneFrame>
      <div className="px-6 pt-10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Namma-Platform
          </p>
          <h1 className="text-display text-3xl font-extrabold mt-1">Select Your Station</h1>
          <p className="text-sm text-muted-foreground mt-1">ನಿಮ್ಮ ನಿಲ್ದಾಣ ಆಯ್ಕೆಮಾಡಿ</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-6 relative"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search stations…"
            className="w-full bg-card border border-border rounded-2xl py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/60"
          />
        </motion.div>

        <ul className="mt-5 space-y-3">
          {filtered.map((s, i) => (
            <motion.li
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.06, type: "spring", stiffness: 220, damping: 22 }}
            >
              <motion.button
                whileTap={{ scale: 0.97 }}
                whileHover={{ y: -2 }}
                onClick={() => navigate({ to: "/trains/$stationId", params: { stationId: s.id } })}
                className="w-full bg-card border border-border/60 rounded-2xl px-4 py-4 flex items-center gap-4 text-left shadow-card hover:border-secondary/50 transition-colors"
              >
                <div className="bg-primary/30 text-secondary p-3 rounded-xl">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-display font-bold text-base truncate">{s.name}</p>
                    <span className="text-[10px] font-mono bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
                      {s.code}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{s.nameKn}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </motion.button>
            </motion.li>
          ))}
          {filtered.length === 0 && (
            <li className="text-center text-sm text-muted-foreground py-10">No stations found.</li>
          )}
        </ul>
      </div>
    </PhoneFrame>
  );
}