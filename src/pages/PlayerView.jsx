// playerView.js
import { useState } from "react";
import EmojiButton from "../components/EmojiButton";
import ThankYouMessage from "../components/ThankYouMessage";
import { postMood } from "../Api";
import PopMessageCard from "../components/PopMessageCard";
import { IoMdAlert } from "react-icons/io";

export default function PlayerView() {
	const [sent, setSent] = useState(false);

	const handleMood = async (emoji) => {
		try {
			alert("Submitting mood: " + emoji);
			
			await postMood(emoji);
			setSent(true);
			setTimeout(() => setSent(false), 2000);
		} catch (e) {
			console.error(e);
			alert("Error submitting mood" + e.message);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-mood-happy via-mood-relaxed to-mood-sad flex items-center justify-center p-4">
			<div className="w-full max-w-xs">
				{sent ? (
					// <ThankYouMessage />
					<PopMessageCard
						title="Success!"
						message="Your mood has been recorded."
						// icon={<IoMdAlert className="text-3xl text-red-500" />}
						color="green"
					/>
				) : (
					<div className="grid grid-cols-3 gap-4">
						<EmojiButton label="happy" onClick={() => handleMood("happy")} />
						<EmojiButton
							label="neutral"
							onClick={() => handleMood("neutral")}
						/>
						<EmojiButton label="sad" onClick={() => handleMood("sad")} />
					</div>
				)}
			</div>
		</div>
	);
}
