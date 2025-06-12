import { useState, useEffect } from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import { getMoods, getMoodHistory } from "../Api";
import { format } from "date-fns";
import StatCard from "../components/StatCard";
import MoodTable from "../components/MoodTable";
import DatePicker from '../components/DatePicker';
import MoodTrendChart from "../components/MoodTrendChart";


Chart.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement);

export default function CoachView() {
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [counts, setCounts] = useState({ happy: 0, neutral: 0, sad: 0 });
  const [history, setHistory] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getMoods(date);
        const responseMood = res;
       
        const historyRes = await getMoodHistory(date);
        
        setCounts(res.data);
        setSubmissions(res.data); // assuming backend provides this
        
        const moodData = Array.isArray(historyRes?.data?.data) ? historyRes.data.data : [];
        setHistory(moodData);
        

      } catch (e) {
        console.error(e);
      }
    };
    load();
    const id = setInterval(load, 10000);
    return () => clearInterval(id);
  }, [date]);

  const total = counts.happy + counts.neutral + counts.sad;
  const mostCommon =
    counts.happy >= counts.neutral && counts.happy >= counts.sad
      ? "Happy"
      : counts.neutral >= counts.sad
      ? "Neutral"
      : "Sad";

  return (
    <div className="p-6 max-w-7xl mx-auto text-light space-y-6">
      <h1 className="text-3xl font-bold mb-4">Coach Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-4">
        <StatCard title="Total Submissions" value={total} />
        <StatCard title="Most Common Mood" value={mostCommon} />
        <StatCard title="Last Updated" value={new Date().toLocaleTimeString()} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card p-4 rounded-2xl shadow">
          <h2 className="text-xl mb-2 font-semibold">Mood Distribution</h2>
          <Doughnut
            data={{
              labels: ["Happy", "Neutral", "Sad"],
              datasets: [
                {
                  data: [counts.happy, counts.neutral, counts.sad],
                  backgroundColor: ["#3B82F6", "#94A3B8", "#EF4444"],
                  borderWidth: 2,
                },
              ],
            }}
          />
        </div>

        <div className="bg-card p-4 rounded-2xl shadow">
          <h2 className="text-xl mb-2 font-semibold">Mood Trend</h2>
         
          {/* <Line
  data={{
    labels: history.map((entry) => entry.time),
    datasets: [
      {
        label: "Happy",
        data: history.map((entry) => entry.happy),
        borderColor: "#3B82F6",
      },
      {
        label: "Neutral",
        data: history.map((entry) => entry.neutral),
        borderColor: "#94A3B8",
      },
      {
        label: "Sad",
        data: history.map((entry) => entry.sad),
        borderColor: "#EF4444",
      },
    ],
  }}
  options={{ responsive: true }}
/> */}

{history.length > 0 ? (
  <MoodTrendChart history={history} />
) : (
  <p className="text-muted-foreground text-sm mt-4">No mood data yet.</p>
)}


        </div>
      </div>

      <MoodTable submissions={submissions} />
    </div>
  );
}
