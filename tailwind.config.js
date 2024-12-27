/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "SoftBlue": "hsl(231, 69%, 60%)",
        "SoftRed": "hsl(0, 94%, 66%)",
        "GrayishBlue": "hsl(229, 8%, 60%)",
        "VeryDarkBlue": "hsl(229, 31%, 21%)",
      },
      fontFamily: {
        Rubik: ["Rubik", "serif"]
      },

    },
    
  },
   variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  
  plugins: [],
}

