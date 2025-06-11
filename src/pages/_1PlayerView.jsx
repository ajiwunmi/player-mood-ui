import { useState } from "react";
import EmojiButton from "../components/EmojiButton";
import ThankYouMessage from "../components/ThankYouMessage";
import { postMood } from "../Api";

export default function PlayerView() {
	const [sent, setSent] = useState(false);
	const handleMood = async (emoji) => {
		try {

            alert("Submitting mood: " + emoji);
            console.log("Submitting mood:", emoji);
			await postMood(emoji);
          	setSent(true);
			setTimeout(() => setSent(false), 2000);
		} catch (e) {
			console.error(e);
			alert("Error submitting mood" + e.message);
		}
	};
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			{sent ? (
				<ThankYouMessage />
			) : (
				<div className="flex space-x-8">
					<EmojiButton
						emoji="😃"
						label="happy"
						onClick={() => handleMood("happy")}
					/>
					<EmojiButton
						emoji="😐"
						label="neutral"
						onClick={() => handleMood("neutral")}
					/>
					<EmojiButton
						emoji="😞"
						label="sad"
						onClick={() => handleMood("sad")}
					/>
				</div>
			)}
		</div>
	);
}
