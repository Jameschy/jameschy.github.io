<template>
  <div v-if="project" class="min-h-screen pt-24 pb-16 px-6 transition-colors duration-500" :style="{ background: 'var(--c-bg)', color: 'var(--c-text)' }">
    <div class="max-w-3xl mx-auto">
      <!-- 返回 -->
      <NuxtLink to="/projects" class="inline-flex items-center gap-1 text-sm mb-8 hover:underline" :style="{ color: 'var(--c-primary-light)' }">← 返回项目列表</NuxtLink>

      <!-- 头部 -->
      <div class="flex flex-col md:flex-row gap-6 mb-10">
        <div class="w-full md:w-72 h-48 rounded-xl overflow-hidden shrink-0" :style="{ background: project.color || 'linear-gradient(135deg, #6366f1, #a5b4fc)' }">
          <img v-if="project.image" :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
          <div v-else class="flex items-center justify-center h-full">
            <span class="text-6xl">{{ project.icon || '🚀' }}</span>
          </div>
        </div>
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <h1 class="text-3xl font-bold">{{ project.title }}</h1>
            <span v-if="project.status" class="px-2 py-0.5 rounded-full text-xs font-medium text-white"
              :style="{ background: project.status === '开发中' ? '#f59e0b' : '#22c55e' }">{{ project.status }}</span>
          </div>
          <p class="mb-4" :style="{ color: 'var(--c-text-muted)' }">{{ project.description }}</p>
          <div class="flex flex-wrap gap-1.5 mb-4">
            <span v-for="tech in project.techs" :key="tech" class="text-xs px-2 py-0.5 rounded-full"
              :style="{ background: 'rgba(99,102,241,0.1)', color: 'var(--c-primary-light)' }">{{ tech }}</span>
          </div>
          <div class="flex gap-4">
            <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-80"
              :style="{ background: 'var(--c-primary)' }">🔗 在线演示</a>
            <a v-if="project.source" :href="project.source" target="_blank" rel="noopener"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              :style="{ background: 'var(--c-bg)', color: 'var(--c-text)', border: '1px solid var(--c-border)' }">📦 源代码</a>
          </div>
        </div>
      </div>

      <!-- 正文 -->
      <div class="prose max-w-none" :style="{ color: 'var(--c-text)' }">
        <ContentRenderer :value="project" />
      </div>
    </div>
  </div>

  <div v-else class="min-h-screen pt-24 flex flex-col items-center justify-center text-center">
    <div class="text-5xl mb-3">🚧</div>
    <p :style="{ color: 'var(--c-text-muted)' }">项目未找到</p>
    <NuxtLink to="/projects" class="mt-3 text-sm font-medium" :style="{ color: 'var(--c-primary-light)' }">← 返回项目列表</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: project } = await useAsyncData(`project-${route.params.slug}`, () =>
  queryContent(route.path).findOne()
)

useSeoMeta({
  title: () => project.value?.title || '项目详情',
  description: () => project.value?.description || project.value?.title || '',
  ogTitle: () => project.value?.title || '',
  ogDescription: () => project.value?.description || '',
})
</script>