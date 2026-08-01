<template>
  <div class="home">
    <h1>詹姆斯的博客</h1>
    <p class="desc">记录日常开发idea、遇到的问题、解决方法、学习进度等！</p>
    <h2>最新文章</h2>
    <ul class="post-list">
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
        <span class="date">{{ post.date }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/').sort({ date: -1 }).find()
)
</script>