// export default function ThankYouMessage() {
// 	return (
// 		<div className="text-center animate-fade-in scale-105">
// 			<p className="text-2xl font-semibold text-green-600">
// 				Thanks for sharing! ⚽
// 			</p>
// 			<p className="text-4xl mt-4 animate-bounce">🎉</p>
// 		</div>
// 	);
// }
// components/ThankYouMessage.js
export default function ThankYouMessage() {
	return (
		<div className="bg-white rounded-xl p-6 shadow-md text-center">
			<h2 className="text-xl font-semibold text-mood-relaxed mb-2">Thanks!</h2>
			<p className="text-gray-600">Your mood has been submitted 🎉</p>
		</div>
	)
}
