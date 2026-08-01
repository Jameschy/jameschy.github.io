// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  content: {
    // 代码高亮
    highlight: {
      theme: 'github-dark',
      langs: ['javascript', 'typescript', 'html', 'css', 'bash', 'json', 'vue']
    },
    // Markdown 配置
    markdown: {
      toc: { depth: 3, searchDepth: 3 },
      anchorLinks: true
    }
  }
})