import { LuSmile, LuMeh, LuFrown } from "react-icons/lu";

const moodIcons = {
  happy: <LuSmile className="text-green-400 text-2xl" />,
  neutral: <LuMeh className="text-yellow-400 text-2xl" />,
  sad: <LuFrown className="text-red-400 text-2xl" />,
};

const moodLabels = {
  happy: "Happy",
  neutral: "Neutral",
  sad: "Sad",
};

export default function MoodTable( data ) {
  

  const moods = ["happy", "neutral", "sad"];

  return (
    <div className="mt-8 bg-card rounded-xl shadow-lg overflow-hidden">
      <table className="w-full text-left text-light">
        <thead className="bg-dark text-muted text-sm uppercase tracking-wider">
          <tr>
            <th className="px-6 py-4">Mood</th>
            <th className="px-6 py-4">Icon</th>
            <th className="px-6 py-4 text-right">Count</th>
          </tr>
        </thead>
        <tbody>
          {moods.map((mood) => (
            <tr key={mood} className="border-b border-muted/20 hover:bg-dark/30 transition">
              <td className="px-6 py-4 font-medium">{moodLabels[mood]}</td>
              <td className="px-6 py-4">{moodIcons[mood]}</td>
              <td className="px-6 py-4 text-right text-lg font-semibold text-white">
                {data.submissions?.[mood] ?? 0}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
