<template>
  <div class="min-h-screen pt-24 pb-16 px-6 transition-colors duration-500" :style="{ background: 'var(--c-bg)', color: 'var(--c-text)' }">
    <div class="max-w-6xl mx-auto">
      <!-- 页头 -->
      <div class="text-center mb-16 animate-fade-in-up">
        <h1 class="text-4xl font-bold mb-4">🛠️ 项目作品</h1>
        <p class="text-lg max-w-xl mx-auto" :style="{ color: 'var(--c-text-muted)' }">这里展示我独立开发或参与的项目，涵盖前端、后端、全栈等方向。</p>
      </div>

      <!-- 项目网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink v-for="project in projects" :key="project._path" :to="project._path"
          class="group rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 no-underline"
          :style="{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }">
          <!-- 封面 -->
          <div class="h-48 overflow-hidden relative" :style="{ background: project.color || 'linear-gradient(135deg, #6366f1, #a5b4fc)' }">
            <img v-if="project.image" :src="project.image" :alt="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div v-else class="flex items-center justify-center h-full">
              <span class="text-5xl">{{ project.icon || '🚀' }}</span>
            </div>
            <div v-if="project.status" class="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-medium text-white"
              :style="{ background: project.status === '开发中' ? '#f59e0b' : '#22c55e' }">{{ project.status }}</div>
          </div>
          <!-- 信息 -->
          <div class="p-5">
            <h3 class="text-lg font-bold mb-2" :style="{ color: 'var(--c-text)' }">{{ project.title }}</h3>
            <p class="text-sm mb-4 line-clamp-2" :style="{ color: 'var(--c-text-muted)' }">{{ project.description || project.title }}</p>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="tech in project.techs" :key="tech" class="text-xs px-2 py-0.5 rounded-full"
                :style="{ background: 'rgba(99,102,241,0.1)', color: 'var(--c-primary-light)' }">{{ tech }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div v-if="!projects?.length" class="text-center py-20">
        <div class="text-5xl mb-4">🚧</div>
        <p :style="{ color: 'var(--c-text-muted)' }">项目正在整理中，敬请期待...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '项目作品',
  description: 'Jameschy 的个人项目作品展示，涵盖前端、后端、全栈开发。',
})

const { data: projects } = await useAsyncData('projects-list', () =>
  queryContent('/projects').sort({ date: -1 }).find()
)
</script>