/** @type {import('tailwindcss').Config} */

import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: ["./src/**/*.jsx"],
  darkMode : false,
  theme: {
    extend: {
      fontFamily :
      {
        Protest : ["Protest Strike", "sans-serif"],
      },
      colors: {
        priBack: '#FFD700', //Gold
        secBack: '#008080', //Teal
        priFront: '#B76E79', // Rose Gold
        secFront: '#98FF98', //Mint
      },
    },
  },
  variants : {
    extend : {}
  },
  plugins: [],
}
) 
