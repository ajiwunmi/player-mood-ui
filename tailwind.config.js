// tailwind.config.js
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					light: "#E0F2FE",
					DEFAULT: "#3B82F6",
					dark: "#1E40AF",
				},
				accent: {
					DEFAULT: "#F472B6",
					light: "#FCE7F3",
					dark: "#BE185D",
				},
				background: {
					DEFAULT: "#F8FAFC",
					dark: "#1E293B",
				},
				surface: {
					DEFAULT: "#FFFFFF",
					dark: "#334155",
				},
				success: {
					DEFAULT: "#22C55E",
					light: "#DCFCE7",
				},
				error: {
					DEFAULT: "#EF4444",
					light: "#FEE2E2",
				},
				warning: {
					DEFAULT: "#FACC15",
					light: "#FEF9C3",
				},
				info: {
					DEFAULT: "#38BDF8",
					light: "#E0F2FE",
				},
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
			borderRadius: {
				xl: "1rem",
			},
			boxShadow: {
				soft: "0 4px 12px rgba(0, 0, 0, 0.06)",
			},
		},
	},
	plugins: [],
};
