// postcss.config.mjs - YENİ VE DOĞRU HALİ
const config = {
  plugins: {
    // Hatanın bize söylediği gibi, 'tailwindcss' yerine bu yeni paketi kullanıyoruz.
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};

export default config;