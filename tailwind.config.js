module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{astro,js,ts,jsx,tsx,vue,svelte}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['"Author"',"sans-serif"],
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        "dark": {
          "primary": "#e95374",
          "primary-focus": "#d94f6d",
          "primary-content": "#fff",
          "secondary": "#f9cb33",
          "secondary-focus": "#f3c52e",
          "secondary-content": "#000",
          "accent": "#2e97f3",
          "accent-focus": "#2a92ed",
          "accent-content": "#fff",
          "base-100": "#16121a",
          "base-200": "#1a161f",
          "base-300": "#201926",
          "base-content": "#ffffff",
          "neutral": "#1a161f",
          "neutral-focus": "#201926",
          "neutral-content": "#ffffff",
          "info": "#247cd9",
          "success": "#32a57b",
          "warning": "#f9cb33",
          "error": "#c55757",
          "--rounded-box": ".3rem",
          "--rounded-btn": ".3rem",
          "--rounded-badge": ".1rem",
          "--tab-radius": ".3rem",
          "--btn-text-case": "normal-case"
        },
      },
      {
        "light": {
          "base-100": "#ffffff",
          "base-200": "#eeeeee",
          "base-300": "#dddddd",
          "base-content": "#000000",
        },
      }
    ]
  }
}