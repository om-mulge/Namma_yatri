import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { STATIONS, getTrainsForStation } from "@/data/trains";
import { TrainCard } from "@/components/TrainCard";
import { PhoneFrame } from "@/components/PhoneFrame";

export const Route = createFileRoute("/trains/$stationId")({
  component: TrainListScreen,
  head: ({ params }) => {
    const station = STATIONS.find((s) => s.id === params.stationId);
    const name = station?.name ?? "Trains";
    return {
      meta: [
        { title: `${name} · Next 3 Trains · Namma-Platform` },
        {
          name: "description",
          content: `Live platform numbers and coach positions for the next 3 trains at ${name}.`,
        },
      ],
    };
  },
});

function TrainListScreen() {
  const { stationId } = Route.useParams();
  const station = STATIONS.find((s) => s.id === stationId) ?? STATIONS[0];
  const trains = getTrainsForStation(stationId).slice(0, 3);

  return (
    <PhoneFrame>
      <div className="px-5 pt-8 pb-10">
        <div className="flex items-center justify-between">
          <Link
            to="/stations"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Stations
          </Link>
          <button
            onClick={() => location.reload()}
            className="p-2 rounded-full hover:bg-card transition-colors"
            aria-label="Refresh"
          >
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>

        <motion.header
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-3"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            {station.code} · Live
          </p>
          <h1 className="text-display text-3xl font-extrabold mt-1 leading-tight">
            {station.name}
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">{station.nameKn}</p>
          <p className="text-xs text-muted-foreground mt-3">
            Next 3 trains · ಮುಂದಿನ 3 ರೈಲುಗಳು
          </p>
        </motion.header>

        <div className="mt-5 space-y-4">
          {trains.map((t, i) => (
            <TrainCard key={t.id} train={t} index={i} />
          ))}
        </div>

        <p className="text-center text-[10px] text-muted-foreground mt-8">
          Information shown is for demonstration purposes.
        </p>
      </div>
    </PhoneFrame>
  );
}