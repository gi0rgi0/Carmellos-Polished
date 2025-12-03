module.exports={
  content:["./src/**/*.{js,jsx}"],
  theme:{
    extend:{
      colors:{ gold:"#D4AF37" },
      fontFamily:{ serif:["Playfair Display","serif"], sans:["Inter","sans-serif"] },
      animation:{
        fade:"fadeIn 1s ease-out forwards",
        slideUp:"slideUp 1.2s ease-out forwards"
      },
      keyframes:{
        fadeIn:{ "0%":{opacity:0},"100%":{opacity:1}},
        slideUp:{ "0%":{opacity:0, transform:"translateY(20px)"}, "100%":{opacity:1, transform:"translateY(0)"}}
      }
    }
  },
  plugins:[]
};