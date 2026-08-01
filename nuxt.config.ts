// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    highlight: {
      theme: 'github-dark',
      langs: ['javascript', 'typescript', 'html', 'css', 'bash', 'json', 'vue']
    },
    markdown: {
      toc: { depth: 3, searchDepth: 3 },
      anchorLinks: true
    }
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: { DEFAULT: '#6366f1', dark: '#4f46e5', light: '#a5b4fc' },
            accent: '#f59e0b',
            surface: '#1e293b',
            bg: '#0f172a',
          },
          animation: {
            'orb-float': 'orbFloat 12s ease-in-out infinite',
            'fade-in-up': 'fadeInUp 0.6s ease-out',
            'particle-rise': 'particleRise 10s linear infinite',
            'bounce-slow': 'bounce 2s ease-in-out infinite',
            'blink': 'blink 1s step-end infinite',
            'pulse-slow': 'pulse 2s ease-in-out infinite',
            'slide-in': 'slideIn 0.3s ease-out',
          },
          keyframes: {
            orbFloat: {
              '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
              '25%': { transform: 'translate(30px, -30px) scale(1.05)' },
              '50%': { transform: 'translate(-20px, 20px) scale(0.95)' },
              '75%': { transform: 'translate(-30px, -10px) scale(1.02)' },
            },
            fadeInUp: {
              '0%': { opacity: '0', transform: 'translateY(40px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            particleRise: {
              '0%': { transform: 'translateY(0) scale(0)', opacity: '0' },
              '10%': { opacity: '1' },
              '90%': { opacity: '1' },
              '100%': { transform: 'translateY(-110vh) scale(1)', opacity: '0' },
            },
            blink: {
              '0%, 100%': { opacity: '1' },
              '50%': { opacity: '0' },
            },
            pulse: {
              '0%, 100%': { opacity: '1' },
              '50%': { opacity: '0.4' },
            },
            slideIn: {
              '0%': { opacity: '0', transform: 'translateX(40px)' },
              '100%': { opacity: '1', transform: 'translateX(0)' },
            },
          },
        },
      },
    },
  },
})