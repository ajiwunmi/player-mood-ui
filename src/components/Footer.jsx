// 4. ✅ Create Footer.jsx
// src/components/Footer.jsx
import { FaFootballBall, FaBasketballBall, FaRunning, FaSwimmer } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-card text-light py-6 px-4 mt-16">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div>
          <FaFootballBall className="mx-auto mb-2" />
          <p>Football</p>
        </div>
        <div>
          <FaBasketballBall className="mx-auto mb-2" />
          <p>Basketball</p>
        </div>
        <div>
          <FaRunning className="mx-auto mb-2" />
          <p>Running</p>
        </div>
        <div>
          <FaSwimmer className="mx-auto mb-2" />
          <p>Swimming</p>
        </div>
      </div>
    </footer>
  );
}
