/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        StyreneAWebBoldItalic: 'StyreneAWeb-BoldItalic, sans-serif',
        AdineuePROCyrBoldWeb: 'AdineuePROCyr-BoldWeb, sans-serif',
        AdineuePROCyrLightWeb: 'AdineuePROCyr-LightWeb, sans-serif',
        StyreneAWebLight: 'StyreneAWeb-Light, sans-serif',
        StyreneAWebBlackItalic: 'StyreneAWeb-BlackItalic, sans-serif',
        StyreneAWebBold: 'StyreneAWeb-Bold, sans-serif',
        StyreneAWebBlack: 'StyreneAWeb-Black, sans-serif',
        StyreneAWebItalic: 'StyreneAWeb-Italic, sans-serif',
        StyreneAWebMedium: 'StyreneAWeb-Medium, sans-serif',
        StyreneAWebThinItalic: 'StyreneAWeb-ThinItalic, sans-serif',
        StyreneAWebRegular: 'StyreneAWeb-Regular, sans-serif',
        StyreneAWebLightItalic: 'StyreneAWeb-LightItalic, sans-serif',
        StyreneAWebMediumItalic: 'StyreneAWeb-MediumItalic, sans-serif',
        StyreneAWebThin: 'StyreneAWeb-Thin, sans-serif',
      },
      colors: {
        primary: {
          1: "#2c2c3a",
          2: "#353545",
          3: "#457188",
          4: "#d8ff20",
        }
      }
    },
  },
  plugins: [
    require("tw-elements/dist/plugin")
  ],
}
