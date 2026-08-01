<template>
  <article v-if="article" class="max-w-3xl mx-auto px-8 py-10">
    <!-- 文章头部 -->
    <header class="mb-8 pb-6 border-b" :style="{ borderColor: 'var(--c-border)' }">
      <h1 class="text-3xl font-bold mb-3" :style="{ color: 'var(--c-text)' }">{{ article.title }}</h1>
      <div class="flex items-center gap-3 text-sm" :style="{ color: 'var(--c-text-muted)' }">
        <time>{{ formatDate(article.date) }}</time>
        <span v-if="article.tags?.length" class="flex gap-1.5">
          <span v-for="tag in article.tags" :key="tag" class="px-2 py-0.5 rounded-full text-xs"
            :style="{ background: 'rgba(99,102,241,0.12)', color: 'var(--c-primary-light)' }">{{ tag }}</span>
        </span>
      </div>
    </header>

    <!-- 文章正文 -->
    <div class="prose max-w-none" :style="{ color: 'var(--c-text)' }">
      <ContentRenderer :value="article" />
    </div>

    <!-- 文章底部导航 -->
    <div class="mt-12 pt-6 border-t flex justify-between" :style="{ borderColor: 'var(--c-border)' }">
      <NuxtLink to="/articles" class="text-sm font-medium hover:underline" :style="{ color: 'var(--c-primary-light)' }">
        ← 返回文章列表
      </NuxtLink>
      <NuxtLink to="/" class="text-sm font-medium hover:underline" :style="{ color: 'var(--c-primary-light)' }">
        回到首页
      </NuxtLink>
    </div>
  </article>

  <div v-else class="flex flex-col items-center justify-center h-full text-center">
    <div class="text-5xl mb-3">📄</div>
    <p :style="{ color: 'var(--c-text-muted)' }">文章未找到</p>
    <NuxtLink to="/articles" class="mt-3 text-sm font-medium" :style="{ color: 'var(--c-primary-light)' }">← 返回文章列表</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: article } = await useAsyncData(`article-${route.params.slug}`, () =>
  queryContent('/articles').where({ slug: route.params.slug }).findOne()
)

function formatDate(d?: string) { return d ? new Date(d).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }) : '' }
</script>