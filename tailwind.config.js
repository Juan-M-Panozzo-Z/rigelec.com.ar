/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [{
      rigelec: {
        ...require("daisyui/src/theming/themes")["emerald"],
        primary: "#46bc5c",
        secondary: "#606062",
        mercadopago: "#00b1ea",
        gocuotas: "#ee2a7b"

      }
    }]
  },
    plugins: [require("daisyui")],
}
