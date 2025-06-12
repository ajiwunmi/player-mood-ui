// tailwind.config.js
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
			  dark: "#0F172A",       // background
			  card: "#1E293B",       // card surfaces
			  accent: "#3B82F6",     // buttons/links
			  muted: "#94A3B8",      // text-muted
			  light: "#F8FAFC",      // light text
			},
			fontFamily: {
			  sans: ['"Poppins"', 'sans-serif'],
			},
		  },
	},
	plugins: [],
};
