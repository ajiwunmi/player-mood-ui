import { useState } from "react";
import { LuSmile, LuMeh, LuFrown } from "react-icons/lu";
import { postMood } from "../Api";

export default function MoodCard() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const handleMoodSubmit = async (emoji) => {
    setIsSubmitting(true);
    setMessage("Mood is submitting...");
    setError(null);

    try {
      await postMood(emoji);
      setSubmitted(true);
      setMessage("✅ Mood submitted. Thank you!");
      setTimeout(() => {
        setSubmitted(false);
        setMessage("");
      }, 3000);
    } catch {
      setError("❌ Failed to submit mood. Please try again.");
      setMessage("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card p-6 rounded-2xl shadow w-full max-w-2xl min-h-[300px] text-center">
      {!submitted && !isSubmitting && (
        <>
          <h3 className="text-xl font-semibold mb-4">How do you feel after training?</h3>
          <div className="flex justify-center gap-8 text-5xl mb-4">
            <button
              onClick={() => handleMoodSubmit("happy")}
              className="hover:scale-110 transition-transform text-green-400"
              title="Happy"
            >
              <LuSmile />
            </button>
            <button
              onClick={() => handleMoodSubmit("neutral")}
              className="hover:scale-110 transition-transform text-yellow-400"
              title="Neutral"
            >
              <LuMeh />
            </button>
            <button
              onClick={() => handleMoodSubmit("sad")}
              className="hover:scale-110 transition-transform text-red-400"
              title="Sad"
            >
              <LuFrown />
            </button>
          </div>
        </>
      )}

      {isSubmitting && <p className="text-white-500 text-lg mt-2">{message}</p>}
      {submitted && !isSubmitting && (
        <p className="text-green-500 text-lg mt-2">{message}</p>
      )}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
