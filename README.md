# Player Mood Board – Client End

A responsive React + Vite app where soccer players can submit their post-training mood using emojis. Coaches can view a live dashboard of team sentiment in real-time.

---

## Features

### Player View

- Mobile-first interface
- One-tap emoji mood selection: 😃 😐 😞
- Animated thank-you feedback
- No login required

### Coach View

- Live dashboard with counts of submitted moods
- Auto-refreshes every 10 seconds
- Optional date picker for past mood summaries

---

## Tech Stack

| Layer      | Tool            |
| ---------- | --------------- |
| Framework  | React 18 + Vite |
| Styling    | Tailwind CSS    |
| API Client | Axios           |
| Date Utils | date-fns        |
| Routing    | React Router v6 |

---

## Project Structure

frontend/

├── public/

├── src/

│   ├── components/       # Reusable UI parts

│   │   ├── EmojiButton.jsx

│   │   ├── ThankYouMessage.jsx

│   │   ├── MoodSummary.jsx

│   │   └── DatePicker.jsx

│   ├── pages/            # Views

│   │   ├── PlayerView.jsx

│   │   └── CoachView.jsx

│   ├── api.js            # API functions

│   ├── App.jsx           # Routing setup

│   ├── index.js          # App entry point

│   └── index.css         # Tailwind + animations

├── tailwind.config.js

├── postcss.config.js

└── package.json

## Getting Started

### 1. Clone the project

```
git clone https://github.com/your-username/player-mood-board.git
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app locally

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173/)

---

## API Integration

This app communicates with a PHP backend via REST:

### POST `/mood`

```json
{ "emoji": "happy" | "neutral" | "sad" }
```

### GET `/moods?date=YYYY-MM-DD`

```json
{ "happy": 4, "neutral": 2, "sad": 1 }
```

> ℹ️ Ensure the `baseURL` in `src/api.js` matches your backend server.

---

## Styling & UX

* **Tailwind CSS** for clean mobile-first layout
* **Emoji-based UI** with smooth transitions
* **Animated thank-you screen** for players
* **Responsive dashboard** for coaches

---

## Dependencies

```bash
npm install react react-dom react-router-dom axios date-fns
npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss
```

Run Tailwind setup:

```bash
npx tailwindcss init -p
```

---

## Testing Checklist

* [X] Mood submission works on mobile
* [X] Thank-you screen appears
* [X] Coach dashboard updates every 10 seconds
* [X] Date picker fetches correct historical data
* [X] Fully responsive on all screen sizes

---


## License

MIT — Free to use and modify.

---
