// 3. ✅ Create Navbar.jsx
// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-card text-light py-4 px-8 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold">MoodTracker</div>
      <div className="flex gap-6 text-sm">
        <Link to="/player" className="hover:text-accent">Player</Link>
        <Link to="/coach" className="hover:text-accent">Coach</Link>
      </div>
    </nav>
  );
}
