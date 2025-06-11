import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PlayerView from "./pages/_1PlayerView";
import CoachView from "./pages/CoachView";

export default function App() {
	return (
		<BrowserRouter>
			<nav className="p-4 bg-gray-100 flex space-x-4">
				<Link to="/" className="text-blue-600">
					Player
				</Link>
				<Link to="/coach" className="text-blue-600">
					Coach
				</Link>
			</nav>
			<Routes>
				<Route path="/" element={<PlayerView />} />
				<Route path="/coach" element={<CoachView />} />
			</Routes>
		</BrowserRouter>
	);
}
