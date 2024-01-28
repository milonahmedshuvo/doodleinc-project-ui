/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   
  ],
  theme: {
    
    extend: {
      colors :{
        indigo: "#32292F",
        white: "#FFFFFF"
      },
    },
  },
  
}

