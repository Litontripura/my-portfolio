/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#4db5ff",
        
"secondary": "#2c2c6c",
        
"accent": "#1f1f38",
        
"neutral": "#043254",
        

        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

