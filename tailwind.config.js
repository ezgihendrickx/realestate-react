module.exports = {
  darkMode: "class",
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "cook-together": "url('../img/cooktogether.png')",
      }),
    },
  },
  variants: {},
  plugins: [],
};
