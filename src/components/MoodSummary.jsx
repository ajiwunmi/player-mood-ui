export default function MoodSummary({ counts }) {
	return (
		<div className="flex justify-around text-center text-xl mt-6 space-x-4">
			<div className="bg-green-100 p-4 rounded shadow text-green-700 w-24">
				<div className="text-3xl">😃</div>
				<div className="text-lg font-semibold">{counts.happy}</div>
			</div>
			<div className="bg-gray-100 p-4 rounded shadow text-gray-700 w-24">
				<div className="text-3xl">😐</div>
				<div className="text-lg font-semibold">{counts.neutral}</div>
			</div>
			<div className="bg-red-100 p-4 rounded shadow text-red-700 w-24">
				<div className="text-3xl">😞</div>
				<div className="text-lg font-semibold">{counts.sad}</div>
			</div>
		</div>
	);
}
