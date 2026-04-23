/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1a1a2e",
        gold: "#C9A961",
        mist: "#f5f5f5",
        sand: "#efe8dc",
        emerald: "#1d7c61",
        plum: "#5f4350"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(26, 26, 46, 0.12)",
        edge: "0 0 0 1px rgba(201, 169, 97, 0.35)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(201, 169, 97, 0.38), transparent 38%), radial-gradient(circle at top right, rgba(255, 255, 255, 0.12), transparent 28%), linear-gradient(135deg, #1a1a2e 0%, #272743 56%, #1e1f34 100%)"
      }
    }
  },
  plugins: []
};
