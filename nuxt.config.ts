// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],

  // ====== 全局 SEO ======
  site: {
    url: 'https://jameschy.github.io',
    name: 'Jameschy Blog',
  },
  app: {
    head: {
      titleTemplate: '%s - Jameschy Blog',
      htmlAttrs: { lang: 'zh-CN' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Jameschy 的个人博客，分享前端开发、Linux运维、PHP等技术文章。' },
        { name: 'keywords', content: '博客,前端,Linux,PHP,Nuxt,Vue,SEO' },
        { name: 'author', content: 'Jameschy' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Jameschy Blog' },
        { property: 'og:image', content: '/static/img/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://jameschy.github.io' },
      ],
    },
  },

  // GitHub Pages 静态生成
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      failOnError: false,
    },
  },

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
          },
          keyframes: {
            orbFloat: {
              '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
              '25%': { transform: 'translate(30px, -30px) scale(1.05)' },
              '50%': { transform: 'translate(-20px, 20px) scale(0.95)' },
              '75%': { transform: 'translate(-30px, -10px) scale(1.02)' },
            },
            particleRise: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '20%': { opacity: '1' }, '100%': { transform: 'translateY(-100vh)', opacity: '0' } },
            fadeInUp: { '0%': { transform: 'translateY(30px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
            blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
          },
        },
      },
    },
  },
})