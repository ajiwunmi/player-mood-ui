import { IoMdAlert } from "react-icons/io";

export default function PopMessageCard({ title, message, color = "blue" }) {
  const colorClass = {
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    blue: "bg-blue-100 text-blue-800",
  }[color];

  return (
    <div className={`rounded-xl p-4 shadow-md ${colorClass}`}>
      <div className="flex items-center gap-2">
        <IoMdAlert className="text-2xl" />
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
}
