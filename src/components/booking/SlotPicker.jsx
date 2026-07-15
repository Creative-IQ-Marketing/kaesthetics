import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fetchSlots } from "../../services/bookingApi";
import { TIMEZONE } from "../../config/booking";

const DAYS_TO_SHOW = 14;

function buildDateList() {
  const dates = [];
  const now = new Date();
  for (let i = 0; i < DAYS_TO_SHOW; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    d.setHours(0, 0, 0, 0);
    dates.push(d);
  }
  return dates;
}

function localDateKey(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function dayLabel(d) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  if (d.getTime() === today.getTime()) return "Today";
  if (d.getTime() === tomorrow.getTime()) return "Tomorrow";
  return d.toLocaleDateString("en-US", { weekday: "short" });
}

function formatTime(iso) {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: TIMEZONE,
  });
}

function extractSlots(data) {
  const all = [];
  for (const [key, val] of Object.entries(data)) {
    if (key === "traceId") continue;
    if (val?.slots) all.push(...val.slots);
  }
  return all;
}

const SlotPicker = ({ selectedSlot, onSelect }) => {
  const dates = useRef(buildDateList()).current;
  const [activeDate, setActiveDate] = useState(dates[0]);
  const [slotsByDate, setSlotsByDate] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  const key = localDateKey(activeDate);

  useEffect(() => {
    let cancelled = false;

    if (slotsByDate[key]) return;

    setLoading(true);
    setError(null);

    const start = new Date(activeDate);
    const end = new Date(activeDate);
    end.setDate(end.getDate() + 1);

    fetchSlots(start, end)
      .then((data) => {
        if (cancelled) return;
        const slots = extractSlots(data);
        setSlotsByDate((prev) => ({ ...prev, [key]: slots }));
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [key]);

  const slots = slotsByDate[key] || [];

  const scrollDates = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  return (
    <div className="space-y-5">
      {/* Date strip */}
      <div className="relative">
        <button
          type="button"
          onClick={() => scrollDates(-1)}
          className="absolute -left-1 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ka-primary shadow-md transition hover:bg-ka-cream"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-2 overflow-x-auto px-8 py-1"
        >
          {dates.map((d) => {
            const dk = localDateKey(d);
            const isActive = dk === key;
            return (
              <button
                key={dk}
                type="button"
                onClick={() => setActiveDate(d)}
                className={`flex shrink-0 flex-col items-center rounded-xl px-3.5 py-2.5 text-center transition-all ${
                  isActive
                    ? "bg-ka-primary text-white shadow-md"
                    : "border border-ka-sand bg-white text-ka-primary hover:bg-ka-cream"
                }`}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wide opacity-70">
                  {dayLabel(d)}
                </span>
                <span className="mt-0.5 text-lg font-bold leading-tight">
                  {d.getDate()}
                </span>
                <span className="text-[10px] uppercase opacity-60">
                  {d.toLocaleDateString("en-US", { month: "short" })}
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => scrollDates(1)}
          className="absolute -right-1 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ka-primary shadow-md transition hover:bg-ka-cream"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Time slots */}
      <div className="min-h-[120px]">
        {loading ? (
          <div className="flex items-center justify-center py-10">
            <div className="h-6 w-6 animate-spin rounded-full border-[3px] border-ka-sand border-t-ka-accent" />
          </div>
        ) : error ? (
          <p className="py-8 text-center text-sm text-red-500">{error}</p>
        ) : slots.length === 0 ? (
          <p className="py-8 text-center text-sm text-ka-muted">
            No availability on this day — try another date.
          </p>
        ) : (
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {slots.map((slot) => {
              const iso = slot.startTime || slot;
              const isSelected = selectedSlot === iso;
              return (
                <button
                  key={iso}
                  type="button"
                  onClick={() => onSelect(iso)}
                  className={`rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-ka-primary text-white shadow-md ring-2 ring-ka-accent ring-offset-2"
                      : "border border-ka-sand bg-white text-ka-primary hover:border-ka-accent hover:bg-ka-cream"
                  }`}
                >
                  {formatTime(iso)}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SlotPicker;
