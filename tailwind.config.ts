// --- tailwind.config.ts (TEST İÇİN BASİTLEŞTİRİLMİŞ HALİ) ---
import type { Config } from "tailwindcss";

const config: Config = {
  // DİKKAT: Content yolunu basitleştirdik.
  // Bu, 'src' klasörü içindeki tüm alt klasörlerdeki tüm ilgili dosyalara bak demektir.
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;