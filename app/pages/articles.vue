<template>
  <div class="flex h-[calc(100vh-64px)] relative" style="margin-top: 64px">
    <!-- ====== 左侧导航栏 ====== -->
    <aside class="shrink-0 border-r overflow-y-auto flex flex-col transition-all duration-300 ease-in-out"
      :class="sidebarCollapsed ? 'w-0 overflow-hidden border-r-0' : 'w-80'"
      :style="{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }">
      <!-- Tab 切换 -->
      <div class="p-4 border-b sticky top-0 z-10 backdrop-blur-sm" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-surface)' }">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-xs font-semibold" :style="{ color: 'var(--c-text-muted)' }">导航</span>
          <button class="ml-auto flex items-center justify-center w-6 h-6 rounded hover:opacity-70 transition-opacity shrink-0"
            :style="{ color: 'var(--c-text-muted)' }" @click="sidebarCollapsed = true" title="折叠侧边栏">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 19l-7-7 7-7M18 19l-7-7 7-7"/></svg>
          </button>
        </div>
        <div class="flex items-center gap-1 p-1 rounded-lg" :style="{ background: 'var(--c-bg)' }">
          <button class="flex-1 text-xs font-medium py-1.5 rounded-md transition-all duration-200"
            :style="viewMode === 'time' ? { background: 'var(--c-primary)', color: '#fff' } : { color: 'var(--c-text-muted)' }"
            @click="viewMode = 'time'">按时间</button>
          <button class="flex-1 text-xs font-medium py-1.5 rounded-md transition-all duration-200"
            :style="viewMode === 'category' ? { background: 'var(--c-primary)', color: '#fff' } : { color: 'var(--c-text-muted)' }"
            @click="viewMode = 'category'">按分类</button>
        </div>
      </div>

      <!-- ====== 按时间视图 ====== -->
      <nav v-if="viewMode === 'time'" class="flex-1 overflow-y-auto py-2">
        <template v-if="timeGroups.length">
          <div v-for="group in timeGroups" :key="group.key">
            <button class="flex items-center justify-between w-full px-4 py-2.5 text-left hover:opacity-80 transition-opacity"
              :style="{ color: 'var(--c-text)' }" @click="toggleExpand(group.key)">
              <span class="text-sm font-semibold">{{ group.key }}</span>
              <div class="flex items-center gap-2">
                <span class="text-xs px-1.5 py-0.5 rounded-full" :style="{ background: 'rgba(99,102,241,0.1)', color: 'var(--c-primary-light)' }">{{ group.posts.length }}</span>
                <svg class="w-3 h-3 transition-transform duration-200" :class="expanded.has(group.key) ? 'rotate-90' : ''"
                  :style="{ color: 'var(--c-text-muted)' }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
              </div>
            </button>
            <div v-if="expanded.has(group.key)" class="pb-2">
              <NuxtLink v-for="post in group.posts" :key="post._path" :to="post._path"
                class="block pl-8 pr-4 py-2.5 transition-all duration-200 group"
                :style="route.path === post._path
                  ? { background: 'rgba(99,102,241,0.08)', borderLeft: '3px solid var(--c-primary)' }
                  : { borderLeft: '3px solid transparent' }">
                <div class="text-sm truncate" :style="{ color: 'var(--c-text)' }">{{ post.title }}</div>
                <div class="text-xs mt-0.5" :style="{ color: 'var(--c-text-muted)' }">{{ getDay(post.date) }}</div>
              </NuxtLink>
            </div>
          </div>
        </template>
        <div v-else class="text-center py-10 text-sm" :style="{ color: 'var(--c-text-muted)' }">
          <div class="text-3xl mb-2">📭</div><p>暂无文章</p>
        </div>
      </nav>

      <!-- ====== 按分类视图 ====== -->
      <nav v-else class="flex-1 overflow-y-auto py-2">
        <template v-if="categoryGroups.length">
          <div v-for="cat in categoryGroups" :key="cat.key">
            <button class="flex items-center justify-between w-full px-4 py-2.5 text-left hover:opacity-80 transition-opacity"
              :style="{ color: 'var(--c-text)' }" @click="toggleExpand(cat.key)">
              <span class="text-sm font-semibold">{{ cat.emoji }} {{ cat.label }}</span>
              <div class="flex items-center gap-2">
                <span class="text-xs px-1.5 py-0.5 rounded-full" :style="{ background: 'rgba(99,102,241,0.1)', color: 'var(--c-primary-light)' }">{{ cat.posts.length }}</span>
                <svg class="w-3 h-3 transition-transform duration-200" :class="expanded.has(cat.key) ? 'rotate-90' : ''"
                  :style="{ color: 'var(--c-text-muted)' }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
              </div>
            </button>
            <div v-if="expanded.has(cat.key)" class="pb-2">
              <NuxtLink v-for="post in cat.posts" :key="post._path" :to="post._path"
                class="block pl-8 pr-4 py-2.5 transition-all duration-200 group"
                :style="route.path === post._path
                  ? { background: 'rgba(99,102,241,0.08)', borderLeft: '3px solid var(--c-primary)' }
                  : { borderLeft: '3px solid transparent' }">
                <div class="text-sm truncate" :style="{ color: 'var(--c-text)' }">{{ post.title }}</div>
                <div class="text-xs mt-0.5" :style="{ color: 'var(--c-text-muted)' }">{{ getShortDate(post.date) }}</div>
              </NuxtLink>
            </div>
          </div>
        </template>
        <div v-else class="text-center py-10 text-sm" :style="{ color: 'var(--c-text-muted)' }">
          <div class="text-3xl mb-2">📭</div><p>暂无文章</p>
        </div>
      </nav>

      <div class="p-4 border-t text-xs" :style="{ borderColor: 'var(--c-border)', color: 'var(--c-text-muted)' }">
        <span>共 {{ posts?.length || 0 }} 篇文章</span>
      </div>
    </aside>

    <!-- 折叠状态展开按钮 -->
    <button v-if="sidebarCollapsed" class="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-16 rounded-r-lg shadow-md transition-all duration-200 hover:w-10"
      :style="{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text-muted)', borderLeft: 'none' }"
      @click="sidebarCollapsed = false" title="展开侧边栏">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 5l7 7-7 7M6 5l7 7-7 7"/></svg>
    </button>

    <!-- ====== 右侧阅读区 ====== -->
    <main class="flex-1 overflow-y-auto transition-colors duration-500" :style="{ background: 'var(--c-bg)' }">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '文章列表',
  description: '浏览所有技术文章，按时间或分类筛选。',
})
import { categories } from '~/config/categories'

const route = useRoute()
const viewMode = ref<'time' | 'category'>('time')
const expanded = ref(new Set<string>())
const sidebarCollapsed = ref(false)
// 移动端默认折叠
onMounted(() => {
  if (window.innerWidth < 768) sidebarCollapsed.value = true
})

const { data: posts } = await useAsyncData('articles-list', () =>
  queryContent('/articles').sort({ date: -1 }).find()
)

const timeGroups = computed(() => {
  if (!posts.value) return []
  const map = new Map<string, any[]>()
  for (const p of posts.value) {
    const key = getYearMonth(p.date)
    if (!map.has(key)) map.set(key, [])
    map.get(key)!.push(p)
  }
  const groups = Array.from(map.entries()).map(([key, posts]) => ({ key, posts }))

  return groups
})

const categoryEmojis: Record<string, string> = {
  php: '🐘', frontend: '🎨', linux: '🐧', python: '🐍',
  seo: '🔍', wordpress: '📦', java: '☕', other: '📁',
}
const categoryGroups = computed(() => {
  if (!posts.value) return []
  const list = categories.map(cat => {
    const matched = cat.key === 'other'
      ? posts.value!.filter((p: any) => {
          const allTags = categories.filter(c => c.key !== 'other').flatMap(c => c.tags)
          return !p.tags?.some((t: string) => allTags.includes(t))
        })
      : posts.value!.filter((p: any) => p.tags?.some((t: string) => cat.tags.includes(t)))
    return { ...cat, posts: matched, emoji: categoryEmojis[cat.key] || '📁' }
  }).filter(c => c.posts.length > 0)
  return list
})

function toggleExpand(key: string) {
  if (expanded.value.has(key)) expanded.value.delete(key)
  else expanded.value.add(key)
}

function getYearMonth(d?: string): string {
  if (!d) return '未知'
  const date = new Date(d)
  return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0')
}
function getDay(d?: string): string {
  if (!d) return ''
  return (new Date(d).getMonth() + 1) + '月' + new Date(d).getDate() + '日'
}
function getShortDate(d?: string): string {
  if (!d) return ''
  return (new Date(d).getMonth() + 1) + '/' + new Date(d).getDate()
}
</script>