/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js,tsx}',
    './components/*.{html,js,tsx}',
    './pages/**/*.{html,js,tsx}',
    './pages/*.{html,js,tsx}'],
  theme: {
    screens: {
      xss: '360px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '4px',
      '5': '32px',
      '6': '48px',
      '44': '44px',
      '18': '18px',
      '10': '100px',
      '20': '200px',
      '52': '208px',
      '70': '70px',
      '80': '80px',
      '126': '126px',
      '1080': '1080px',
      '380': '380px',
      '24': '24px'
    },
    extend: {
      colors: {
        "lightbg": "#E5E5E5",
        "text-color": "#373737",
        "disabled-color": "#817F7F",
        "border-color": "#00712F",
        "green-pressed": "rgba(0, 200, 83, 0.5)",
        "green": "#00C853",
        "white": "#ffffff",
        "red": "crimson"
      }
    },
  },
  plugins: [],
}
