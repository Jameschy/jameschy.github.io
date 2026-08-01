<template>
  <div class="flex h-[calc(100vh-64px)] relative" style="margin-top: 64px">
    <!-- ====== 左侧：开发流程导航 ====== -->
    <aside class="shrink-0 border-r overflow-y-auto flex flex-col transition-all duration-300"
      :class="sidebarCollapsed ? 'w-0 overflow-hidden border-r-0' : 'w-72'"
      :style="{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }">
      <!-- 项目信息头部 -->
      <div class="p-4 border-b sticky top-0 z-10 backdrop-blur-sm" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-surface)' }">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-lg">{{ project?.icon || '🚀' }}</span>
          <span class="text-sm font-bold truncate" :style="{ color: 'var(--c-text)' }">{{ project?.title }}</span>
          <button class="ml-auto flex items-center justify-center w-6 h-6 rounded hover:opacity-70 shrink-0"
            :style="{ color: 'var(--c-text-muted)' }" @click="sidebarCollapsed = true" title="折叠">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 19l-7-7 7-7M18 19l-7-7 7-7"/></svg>
          </button>
        </div>
        <NuxtLink to="/projects" class="text-xs hover:underline" :style="{ color: 'var(--c-primary-light)' }">← 返回项目列表</NuxtLink>
      </div>

      <!-- 开发流程步骤 -->
      <nav class="flex-1 overflow-y-auto py-2">
        <template v-if="processSteps.length">
          <div class="px-4 py-2">
            <div class="text-xs font-semibold mb-3" :style="{ color: 'var(--c-text-muted)' }">📋 开发流程</div>
            <!-- 时间线 -->
            <div class="relative">
              <div v-for="(step, i) in processSteps" :key="i" class="relative flex gap-3 pb-5 group">
                <!-- 时间线竖线 -->
                <div class="flex flex-col items-center">
                  <div class="w-2.5 h-2.5 rounded-full border-2 shrink-0 transition-all duration-200 z-10"
                    :class="activeStep === i ? 'scale-125' : ''"
                    :style="activeStep === i
                      ? { background: 'var(--c-primary)', borderColor: 'var(--c-primary-light)' }
                      : { background: 'var(--c-surface)', borderColor: 'var(--c-border)' }" />
                  <div v-if="i < processSteps.length - 1" class="w-px flex-1 min-h-[20px]"
                    :style="{ background: activeStep > i ? 'var(--c-primary)' : 'var(--c-border)' }" />
                </div>
                <!-- 步骤内容 -->
                <button class="text-left flex-1 pb-1 cursor-pointer" @click="activeStep = i">
                  <div class="text-xs font-medium" :style="{ color: activeStep === i ? 'var(--c-primary-light)' : 'var(--c-text)' }">
                    {{ step.title }}
                  </div>
                  <div class="text-xs mt-0.5" :style="{ color: 'var(--c-text-muted)' }">{{ step.time }}</div>
                </button>
              </div>
            </div>
          </div>
        </template>
        <div v-else class="px-4 py-6 text-center text-xs" :style="{ color: 'var(--c-text-muted)' }">
          <p>暂无开发流程</p>
        </div>
      </nav>

      <!-- 底部链接 -->
      <div v-if="project" class="p-4 border-t space-y-2" :style="{ borderColor: 'var(--c-border)' }">
        <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener"
          class="flex items-center gap-1.5 text-xs font-medium hover:underline" :style="{ color: 'var(--c-primary-light)' }">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          在线演示
        </a>
        <a v-if="project.source" :href="project.source" target="_blank" rel="noopener"
          class="flex items-center gap-1.5 text-xs font-medium hover:underline" :style="{ color: 'var(--c-text-muted)' }">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          源代码
        </a>
      </div>
    </aside>

    <!-- 折叠展开按钮 -->
    <button v-if="sidebarCollapsed" class="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-16 rounded-r-lg shadow-md transition-all duration-200 hover:w-10"
      :style="{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text-muted)', borderLeft: 'none' }"
      @click="sidebarCollapsed = false" title="展开">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 5l7 7-7 7M6 5l7 7-7 7"/></svg>
    </button>

    <!-- ====== 右侧：项目内容 ====== -->
    <main class="flex-1 overflow-y-auto transition-colors duration-500" :style="{ background: 'var(--c-bg)' }">
      <div v-if="project" class="max-w-3xl mx-auto px-8 py-10">
        <!-- 项目头部 -->
        <header class="mb-8 pb-6 border-b" :style="{ borderColor: 'var(--c-border)' }">
          <div class="flex items-center gap-3 mb-2">
            <h1 class="text-3xl font-bold" :style="{ color: 'var(--c-text)' }">{{ project.title }}</h1>
            <span v-if="project.status" class="px-2 py-0.5 rounded-full text-xs font-medium text-white"
              :style="{ background: project.status === '开发中' ? '#f59e0b' : '#22c55e' }">{{ project.status }}</span>
          </div>
          <p class="text-sm mb-3" :style="{ color: 'var(--c-text-muted)' }">{{ project.description }}</p>
          <div class="flex flex-wrap gap-1.5">
            <span v-for="tech in project.techs" :key="tech" class="text-xs px-2 py-0.5 rounded-full"
              :style="{ background: 'rgba(99,102,241,0.12)', color: 'var(--c-primary-light)' }">{{ tech }}</span>
          </div>
        </header>

        <!-- 当前步骤描述 -->
        <div v-if="processSteps[activeStep]" class="mb-8 p-4 rounded-xl border" :style="{ background: 'rgba(99,102,241,0.04)', borderColor: 'rgba(99,102,241,0.2)' }">
          <div class="text-xs font-semibold mb-1" :style="{ color: 'var(--c-primary-light)' }">
            {{ activeStep + 1 }}. {{ processSteps[activeStep].title }}
            <span class="ml-2 font-normal" :style="{ color: 'var(--c-text-muted)' }">{{ processSteps[activeStep].time }}</span>
          </div>
          <p class="text-sm" :style="{ color: 'var(--c-text-muted)' }">{{ processSteps[activeStep].desc }}</p>
        </div>

        <!-- 项目正文 -->
        <div class="prose max-w-none" :style="{ color: 'var(--c-text)' }">
          <ContentRenderer :value="project" />
        </div>
      </div>

      <div v-else class="flex flex-col items-center justify-center h-full text-center">
        <div class="text-5xl mb-3">🚧</div>
        <p :style="{ color: 'var(--c-text-muted)' }">项目未找到</p>
        <NuxtLink to="/projects" class="mt-3 text-sm font-medium" :style="{ color: 'var(--c-primary-light)' }">← 返回项目列表</NuxtLink>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: project } = await useAsyncData(`project-${route.params.slug}`, () =>
  queryContent(route.path).findOne()
)

const sidebarCollapsed = ref(false)
const activeStep = ref(0)

onMounted(() => {
  if (window.innerWidth < 768) sidebarCollapsed.value = true
})

interface ProcessStep {
  title: string
  time: string
  desc: string
}

const processSteps = computed<ProcessStep[]>(() => {
  return (project.value as any)?.process || []
})

useSeoMeta({
  title: () => project.value?.title || '项目详情',
  description: () => project.value?.description || project.value?.title || '',
  ogTitle: () => project.value?.title || '',
  ogDescription: () => project.value?.description || '',
})
</script>