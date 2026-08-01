<template>
  <article v-if="article" class="max-w-3xl mx-auto px-6 py-12">
    <h1 class="text-3xl font-bold mb-4" :style="{ color: 'var(--c-text)' }">{{ article.title }}</h1>
    <div class="text-sm mb-8" :style="{ color: 'var(--c-text-muted)' }">
      <time>{{ formatDate(article.date) }}</time>
      <span v-if="article.tags?.length" class="ml-4">
        <span v-for="tag in article.tags" :key="tag" class="inline-block px-2 py-0.5 rounded-full text-xs ml-1"
          :style="{ background: 'rgba(99,102,241,0.15)', color: 'var(--c-primary-light)' }">{{ tag }}</span>
      </span>
    </div>
    <div class="prose max-w-none" :style="{ color: 'var(--c-text)' }">
      <ContentRenderer :value="article" />
    </div>
  </article>
  <div v-else class="text-center py-20" :style="{ color: 'var(--c-text-muted)' }">
    <div class="text-5xl mb-4">📄</div>
    <p>文章未找到</p>
    <NuxtLink to="/" class="inline-block mt-4" :style="{ color: 'var(--c-primary-light)' }">← 返回首页</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: article } = await useAsyncData(`article-${route.params.slug}`, () =>
  queryContent('/articles').where({ slug: route.params.slug }).findOne()
)

function formatDate(d?: string) { return d ? new Date(d).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }) : '' }
</script>