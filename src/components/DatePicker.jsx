export default function DatePicker({ date, setDate }) {
	return (
		<input
			type="date"
			className="mb-4 p-2 border rounded w-full"
			value={date}
			onChange={(e) => setDate(e.target.value)}
		/>
	);
}
