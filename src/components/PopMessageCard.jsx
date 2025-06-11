// components/PopMessageCard.jsx
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function PopMessageCard({
	title,
	message,
	icon,
	color = "green",
}) {
	const colors = {
		green: "bg-green-100 text-green-800",
		red: "bg-red-100 text-red-800",
		blue: "bg-blue-100 text-blue-800",
		yellow: "bg-yellow-100 text-yellow-800",
		gray: "bg-gray-100 text-gray-800",
	};

	const Icon = icon || <IoMdCheckmarkCircleOutline className="text-3xl" />;

	return (
		<div
			className={`rounded-xl shadow-lg p-5 max-w-sm mx-auto ${colors[color]} flex items-center space-x-4`}
		>
			<div>{Icon}</div>
			<div>
				<h3 className="text-lg font-semibold">{title}</h3>
				<p className="text-sm">{message}</p>
			</div>
		</div>
	);
}
