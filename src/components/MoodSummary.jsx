import { LuSmile, LuMeh, LuFrown } from "react-icons/lu";

export default function MoodSummary({ counts }) {
  const moods = [
    { label: "Happy", icon: <LuSmile size={28} />, count: counts.happy },
    { label: "Neutral", icon: <LuMeh size={28} />, count: counts.neutral },
    { label: "Sad", icon: <LuFrown size={28} />, count: counts.sad },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mt-4 text-center">
      {moods.map(({ label, icon, count }) => (
        <div
          key={label}
          className="bg-[--color-card] text-[--color-light] p-4 rounded-xl shadow-md flex flex-col items-center justify-center"
        >
          <div className="text-[--color-accent]">{icon}</div>
          <p className="mt-2 text-sm text-muted">{label}</p>
          <p className="mt-1 text-xl font-bold">{count}</p>
        </div>
      ))}
    </div>
  );
}
