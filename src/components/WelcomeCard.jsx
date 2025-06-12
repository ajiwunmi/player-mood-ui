export default function WelcomeCard() {
    return (
      <div
        className="w-full max-w-2xl rounded-2xl overflow-hidden bg-cover bg-center mb-10 shadow-xl"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1599058917212-d750089bc09b?auto=format&fit=crop&w=1200&q=80')",
        }}
      >
        <div className="bg-card/70 backdrop-blur-md p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Welcome to Player Mood Tracker
          </h2>
          <p className="text-muted text-sm sm:text-base">
            Feel free to register how you feel about today's training.
          </p>
        </div>
      </div>
    );
  }
  