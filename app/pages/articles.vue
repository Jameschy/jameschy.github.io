<template>
  <div class="flex h-[calc(100vh-64px)]" style="margin-top: 64px">
    <!-- ====== 左侧导航栏 ====== -->
    <aside class="w-80 shrink-0 border-r overflow-y-auto flex flex-col transition-colors duration-500"
      :style="{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }">
      <!-- Tab 切换 -->
      <div class="p-4 border-b sticky top-0 z-10 backdrop-blur-sm" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-surface)' }">
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
            <!-- 年月分组标题 -->
            <button class="flex items-center justify-between w-full px-4 py-2.5 text-left hover:opacity-80 transition-opacity"
              :style="{ color: 'var(--c-text)' }"
              @click="toggleExpand(group.key)">
              <span class="text-sm font-semibold">{{ group.key }}</span>
              <div class="flex items-center gap-2">
                <span class="text-xs px-1.5 py-0.5 rounded-full" :style="{ background: 'rgba(99,102,241,0.1)', color: 'var(--c-primary-light)' }">{{ group.posts.length }}</span>
                <svg class="w-3 h-3 transition-transform duration-200" :class="expanded.has(group.key) ? 'rotate-90' : ''"
                  :style="{ color: 'var(--c-text-muted)' }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </div>
            </button>
            <!-- 文章列表 -->
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
            <!-- 分类标题 -->
            <button class="flex items-center justify-between w-full px-4 py-2.5 text-left hover:opacity-80 transition-opacity"
              :style="{ color: 'var(--c-text)' }"
              @click="toggleExpand(cat.key)">
              <span class="text-sm font-semibold">{{ cat.emoji }} {{ cat.label }}</span>
              <div class="flex items-center gap-2">
                <span class="text-xs px-1.5 py-0.5 rounded-full" :style="{ background: 'rgba(99,102,241,0.1)', color: 'var(--c-primary-light)' }">{{ cat.posts.length }}</span>
                <svg class="w-3 h-3 transition-transform duration-200" :class="expanded.has(cat.key) ? 'rotate-90' : ''"
                  :style="{ color: 'var(--c-text-muted)' }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </div>
            </button>
            <!-- 文章列表 -->
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

      <!-- 底部统计 -->
      <div class="p-4 border-t text-xs" :style="{ borderColor: 'var(--c-border)', color: 'var(--c-text-muted)' }">
        <span>共 {{ posts?.length || 0 }} 篇文章</span>
      </div>
    </aside>

    <!-- ====== 右侧阅读区 ====== -->
    <main class="flex-1 overflow-y-auto transition-colors duration-500" :style="{ background: 'var(--c-bg)' }">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import { categories } from '~/config/categories'

const route = useRoute()
const viewMode = ref<'time' | 'category'>('time')
const expanded = ref(new Set<string>())

const { data: posts } = await useAsyncData('articles-list', () =>
  queryContent('/articles').sort({ date: -1 }).find()
)

// 按时间分组
const timeGroups = computed(() => {
  if (!posts.value) return []
  const map = new Map<string, any[]>()
  for (const p of posts.value) {
    const key = getYearMonth(p.date)
    if (!map.has(key)) map.set(key, [])
    map.get(key)!.push(p)
  }
  // 自动展开第一个分组
  const groups = Array.from(map.entries()).map(([key, posts]) => ({ key, posts }))
  onMounted(() => {
    if (groups.length && expanded.value.size === 0) {
      expanded.value.add(groups[0].key)
    }
  })
  return groups
})

// 按分类分组
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
  onMounted(() => {
    if (list.length && expanded.value.size === 0) {
      expanded.value.add(list[0].key)
    }
  })
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