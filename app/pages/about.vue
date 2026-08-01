<template>
  <div class="min-h-screen pt-24 pb-16 px-6 transition-colors duration-500" :style="{ background: 'var(--c-bg)', color: 'var(--c-text)' }">
    <div class="max-w-3xl mx-auto">
      <!-- ====== 头部 ====== -->
      <div class="text-center mb-16 animate-fade-in-up">
        <div class="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 shadow-lg"
          :style="{ borderColor: 'var(--c-primary-light)' }">
          <img src="/static/img/qj.jpg" alt="头像" class="w-full h-full object-cover" />
        </div>
        <h1 class="text-3xl font-bold mb-2">戚键</h1>
        <p class="text-lg" :style="{ color: 'var(--c-primary-light)' }">全栈工程师 · 前端开发 · 独立站开发</p>
        <p class="text-sm mt-2" :style="{ color: 'var(--c-text-muted)' }">深圳 · 8年Web开发经验</p>
      </div>

      <!-- ====== 个人介绍 ====== -->
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
          <span class="w-1 h-5 rounded-full inline-block" :style="{ background: 'var(--c-primary)' }"></span>
          关于我
        </h2>
        <div class="space-y-3 text-sm leading-relaxed" :style="{ color: 'var(--c-text-muted)' }">
          <p>拥有8年Web开发、2年技术主管经验，深耕网站建设及运维，擅长各类前端网站、后台系统建设及配套开发。熟练运用 Shopify、WordPress、帝国CMS 等主流建站系统，可独立完成海外独立站从技术选型、环境部署、页面开发、响应式适配，到支付接口对接、广告渠道联调、安全防护、SEO优化的全流程落地。</p>
          <p>精通 PHP、JavaScript、CSS，熟练掌握 Vue、Tailwind、Bootstrap、Nuxt、ECharts、UniApp、ThinkPHP 等前后端框架，同时熟练使用 AI 工具辅助开发，依托 AI 赋能快速上手新技术。熟悉 Linux、MySQL、Git 版本管理，熟悉 Python 数据爬取、清洗与可视化分析，具备专业 SEO 优化能力。</p>
          <p>兼具团队管理与项目统筹能力，擅长任务拆解、进度管控、代码评审及安全运维，搭建过技术规范与容灾备份体系，可独立胜任全栈开发及独立站全链路工作。</p>
        </div>
      </section>

      <!-- ====== 技能标签 ====== -->
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
          <span class="w-1 h-5 rounded-full inline-block" :style="{ background: 'var(--c-primary)' }"></span>
          技术栈
        </h2>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in skills" :key="skill" class="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
            :style="{ background: 'rgba(99,102,241,0.1)', color: 'var(--c-primary-light)', border: '1px solid rgba(99,102,241,0.2)' }">{{ skill }}</span>
        </div>
      </section>

      <!-- ====== 关于本站 ====== -->
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
          <span class="w-1 h-5 rounded-full inline-block" :style="{ background: 'var(--c-primary)' }"></span>
          关于本站
        </h2>
        <div class="p-5 rounded-xl border" :style="{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }">
          <p class="text-sm leading-relaxed mb-3" :style="{ color: 'var(--c-text-muted)' }">
            本站基于 <strong :style="{ color: 'var(--c-primary-light)' }">Nuxt 4</strong> + <strong :style="{ color: 'var(--c-primary-light)' }">Tailwind CSS</strong> 构建，使用 Nuxt Content 管理文章和项目内容，通过 GitHub Actions 自动部署到 GitHub Pages。
          </p>
          <p class="text-sm leading-relaxed" :style="{ color: 'var(--c-text-muted)' }">
            记录日常开发 Idea、遇到的问题、解决方法、学习进度等，涵盖前端、后端、Linux 运维、SEO 优化等方向。
          </p>
        </div>
      </section>

      <!-- ====== 简历入口 ====== -->
      <div class="text-center">
        <NuxtLink to="/resume"
          class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style="background: linear-gradient(135deg, #6366f1, #4f46e5); color: #fff; box-shadow: 0 4px 20px rgba(99,102,241,0.35);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          查看完整简历
        </NuxtLink>
        <p class="text-xs mt-3" :style="{ color: 'var(--c-text-muted)' }">支持在线预览 · 打印 · PDF 下载</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '关于我',
  description: '戚键，全栈工程师，8年Web开发经验，擅长前端、后端、独立站开发。',
})

const skills = [
  'PHP', 'JavaScript', 'TypeScript', 'Vue', 'Nuxt', 'Tailwind CSS',
  'Bootstrap', 'UniApp', 'ThinkPHP', 'Webman', 'Laravel', 'ECharts',
  'WordPress', 'Shopify', 'Linux', 'MySQL', 'Nginx', 'Docker',
  'Git', 'Python', 'SEO', 'AI 辅助开发',
]
</script>