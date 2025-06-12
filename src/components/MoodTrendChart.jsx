// components/MoodTrendChart.jsx
import { Line } from "react-chartjs-2";

export default function MoodTrendChart({ history }) {
  const labels = history.map((entry) => entry.time);
  const happy = history.map((entry) => entry.happy);
  const neutral = history.map((entry) => entry.neutral);
  const sad = history.map((entry) => entry.sad);

  return (
    <div className="bg-card p-4 rounded-2xl shadow mt-6">
      <h2 className="text-xl mb-2 font-semibold">Mood Trend</h2>
      <Line
        data={{
          labels,
          datasets: [
            { label: "Happy", data: happy, borderColor: "#3B82F6", tension: 0.3 },
            { label: "Neutral", data: neutral, borderColor: "#94A3B8", tension: 0.3 },
            { label: "Sad", data: sad, borderColor: "#EF4444", tension: 0.3 },
          ],
        }}
        options={{
          responsive: true,
          scales: {
            y: { beginAtZero: true },
          },
        }}
      />
    </div>
  );
}
