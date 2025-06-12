import { LuSmile, LuMeh, LuFrown } from "react-icons/lu";

const moodIcons = {
  happy: <LuSmile className="text-4xl text-yellow-400" />,
  neutral: <LuMeh className="text-4xl text-gray-500" />,
  sad: <LuFrown className="text-4xl text-blue-400" />,
};

export default function EmojiButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center bg-[--color-card] text-[--color-light] rounded-xl shadow-md p-4 transition-all hover:scale-105 active:scale-95"
    >
      {moodIcons[label] || <div className="text-3xl">❓</div>}
      <span className="mt-2 text-sm capitalize">{label}</span>
    </button>
  );
}
