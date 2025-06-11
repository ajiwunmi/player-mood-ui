import { useState, useEffect } from "react";
import MoodSummary from "../components/MoodSummary";
import DatePicker from "../components/DatePicker";
import { getMoods } from "../api";
import { format } from "date-fns";

export default function CoachView() {
	const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));
	const [counts, setCounts] = useState({ happy: 0, neutral: 0, sad: 0 });

	useEffect(() => {
		const load = async () => {
			try {
				const res = await getMoods(date);
				setCounts(res.data);
			} catch (e) {
				console.error(e);
			}
		};
		load();
		const id = setInterval(load, 10000);
		return () => clearInterval(id);
	}, [date]);

	return (
		<div className="p-4 max-w-md mx-auto">
			<h1 className="text-2xl mb-4">Coach Dashboard</h1>
			<DatePicker date={date} setDate={setDate} />
			<MoodSummary counts={counts} />
		</div>
	);
}
