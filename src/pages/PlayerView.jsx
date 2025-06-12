import WelcomeCard from "../components/WelcomeCard";
import MoodCard from "../components/MoodCard";

export default function PlayerView() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center px-4 py-10">
      <WelcomeCard />
      <MoodCard />
    </div>
  );
}
