<template>
  <article class="article">
    <h1>{{ article?.title }}</h1>
    <div class="meta">
      <span>{{ article?.date }}</span>
    </div>
    <ContentRenderer :value="article" />
  </article>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: article } = await useAsyncData(`article-${route.params.slug}`, () =>
  queryContent('/articles').where({ slug: route.params.slug }).findOne()
)
</script>