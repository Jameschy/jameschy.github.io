<template>
  <div class="min-h-screen pt-24 pb-16 px-6 transition-colors duration-500" :style="{ background: 'var(--c-bg)', color: 'var(--c-text)' }">
    <div class="max-w-3xl mx-auto">
      <!-- ====== 头部 ====== -->
      <div class="text-center mb-16 animate-fade-in-up">
        <div class="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 shadow-lg"
          :style="{ borderColor: 'var(--c-primary-light)' }">
          <img src="/static/img/qj.jpg" alt="avatar" class="w-full h-full object-cover" />
        </div>
        <h1 class="text-3xl font-bold mb-2">{{ t('about.name') }}</h1>
        <p class="text-lg" :style="{ color: 'var(--c-primary-light)' }">{{ t('about.title') }}</p>
        <p class="text-sm mt-2" :style="{ color: 'var(--c-text-muted)' }">{{ t('about.location') }}</p>
      </div>

      <!-- ====== 个人介绍 ====== -->
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
          <span class="w-1 h-5 rounded-full inline-block" :style="{ background: 'var(--c-primary)' }"></span>
          {{ t('about.aboutMe') }}
        </h2>
        <div class="space-y-3 text-sm leading-relaxed" :style="{ color: 'var(--c-text-muted)' }">
          <p>{{ t('about.intro1') }}</p>
          <p>{{ t('about.intro2') }}</p>
          <p>{{ t('about.intro3') }}</p>
        </div>
      </section>

      <!-- ====== 技能标签 ====== -->
      <section class="mb-12">
        <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
          <span class="w-1 h-5 rounded-full inline-block" :style="{ background: 'var(--c-primary)' }"></span>
          {{ t('about.skills') }}
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
          {{ t('about.aboutSite') }}
        </h2>
        <div class="p-5 rounded-xl border" :style="{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }">
          <p class="text-sm leading-relaxed mb-3" :style="{ color: 'var(--c-text-muted)' }">
            {{ t('about.siteBuilt') }}
          </p>
          <p class="text-sm leading-relaxed" :style="{ color: 'var(--c-text-muted)' }">
            {{ t('about.siteDesc') }}
          </p>
        </div>
      </section>

      <!-- ====== 简历入口 ====== -->
      <div class="text-center">
        <NuxtLink to="/resume"
          class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style="background: linear-gradient(135deg, #6366f1, #4f46e5); color: #fff; box-shadow: 0 4px 20px rgba(99,102,241,0.35);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          {{ t('about.viewResume') }}
        </NuxtLink>
        <p class="text-xs mt-3" :style="{ color: 'var(--c-text-muted)' }">{{ t('about.resumeHint') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()

useSeoMeta({
  title: () => locale.value === 'en' ? 'About Me' : '关于我',
  description: () => locale.value === 'en' ? 'Qi Jian, Full-Stack Engineer with 10 years of web development experience.' : '戚键，全栈工程师，10年Web开发经验，擅长前端、后端、独立站开发。',
})

const skills = [
  'PHP', 'JavaScript', 'TypeScript', 'Vue', 'Nuxt', 'Tailwind CSS',
  'Bootstrap', 'UniApp', 'ThinkPHP', 'Webman', 'Laravel', 'ECharts',
  'WordPress', 'Shopify', 'Linux', 'MySQL', 'Nginx', 'Docker',
  'Git', 'Python', 'SEO', 'AI 辅助开发',
]
</script>