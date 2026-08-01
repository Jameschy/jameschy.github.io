// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  content: {
    // 文章存放目录
    sources: {
      content: {
        driver: 'fs',
        base: './content/articles'
      }
    },
    // Markdown 解析配置
    markdown: {
      toc: { depth: 3, searchDepth: 3 },
      anchorLinks: true
    },
    highlight: {
      theme: 'github-dark',
      langs: ['javascript', 'typescript', 'html', 'css', 'bash', 'json', 'vue']
    }
  }
})
