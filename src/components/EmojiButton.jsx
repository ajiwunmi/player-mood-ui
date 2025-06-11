// export default function EmojiButton({ emoji, label, onClick }) {
// 	return (
// 		<button
// 			onClick={onClick}
// 			aria-label={label}
// 			className="text-4xl p-4 rounded-full hover:bg-gray-200 transition"
// 		>
// 			{emoji}
// 		</button>
// 	);
// }
// export default function EmojiButton({ emoji, label, onClick }) {
// 	const moodColors = {
// 		happy: "bg-green-100 hover:bg-green-200 text-green-600",
// 		neutral: "bg-gray-100 hover:bg-gray-200 text-gray-600",
// 		sad: "bg-red-100 hover:bg-red-200 text-red-600",
// 	};

// 	return (
// 		<button
// 			onClick={onClick}
// 			className={`text-5xl p-6 rounded-full shadow transition transform hover:scale-110 active:scale-95 ${moodColors[label]}`}
// 			aria-label={label}
// 		>
// 			{emoji}
// 		</button>
// 	);
// }
  // components/EmojiButton.js
// components/EmojiButton.jsx
// import {
// 	HiOutlineEmojiHappy,
// 	HiOutlineFaceFrown,
// 	HiOutlineFaceSmile,
//   } from "react-icons/hi2" // Hi2 has better icon support for faces
  
//   const moodIcons = {
// 	happy: <HiOutlineFaceSmile className="text-4xl text-yellow-400" />,
// 	neutral: <HiOutlineEmojiHappy className="text-4xl text-gray-500" />,
// 	sad: <HiOutlineFaceFrown className="text-4xl text-blue-400" />,
//   }
  
//   export default function EmojiButton({ label, onClick }) {
// 	return (
// 	  <button
// 		onClick={onClick}
// 		className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 transition-all hover:scale-105 active:scale-95"
// 	  >
// 		{moodIcons[label] || <div className="text-3xl">❓</div>}
// 		<span className="mt-2 text-sm text-gray-700 capitalize">{label}</span>
// 	  </button>
// 	)
//   }
  
// components/EmojiButton.jsx
import {
	LuSmile,
	LuMeh,
	LuFrown,
  } from "react-icons/lu"
  
  const moodIcons = {
	happy: <LuSmile className="text-4xl text-yellow-400" />,
	neutral: <LuMeh className="text-4xl text-gray-500" />,
	sad: <LuFrown className="text-4xl text-blue-400" />,
  }
  
  export default function EmojiButton({ label, onClick }) {
	return (
	  <button
		onClick={onClick}
		className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 transition-all hover:scale-105 active:scale-95"
	  >
		{moodIcons[label] || <div className="text-3xl">❓</div>}
		<span className="mt-2 text-sm text-gray-700 capitalize">{label}</span>
	  </button>
	)
  }
  