// 5. ✅ Update App.jsx
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayerView from "./pages/PlayerView";
import CoachView from "./pages/CoachView";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<PlayerView />} />
            <Route path="/player" element={<PlayerView />} />
            <Route path="/coach" element={<CoachView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
