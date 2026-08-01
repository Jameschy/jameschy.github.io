<template>
  <div class="overflow-x-hidden">
    <!-- ====== Hero ====== -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700"
      :style="{ background: `linear-gradient(135deg, var(--c-hero-from) 0%, var(--c-hero-via) 50%, var(--c-hero-to) 100%)` }">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute w-[500px] h-[500px] rounded-full blur-[80px] -top-[10%] -left-[5%] animate-orb-float"
          :style="{ background: `radial-gradient(circle, var(--c-orb-1), transparent)` }" />
        <div class="absolute w-[400px] h-[400px] rounded-full blur-[80px] -bottom-[10%] -right-[5%] animate-orb-float"
          :style="{ background: `radial-gradient(circle, var(--c-orb-2), transparent)`, animationDelay: '-4s' }" />
        <div class="absolute w-[350px] h-[350px] rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orb-float"
          :style="{ background: `radial-gradient(circle, var(--c-orb-3), transparent)`, animationDelay: '-8s' }" />
      </div>

      <div class="absolute inset-0 pointer-events-none">
        <span v-for="i in 20" :key="i" class="absolute bottom-0 rounded-full animate-particle-rise"
          :style="{
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 8 + 's',
            animationDuration: 8 + Math.random() * 12 + 's',
            width: 2 + Math.random() * 4 + 'px',
            height: 2 + Math.random() * 4 + 'px',
            opacity: 0.3 + Math.random() * 0.5,
            background: 'var(--c-primary-light)',
          }" />
      </div>

      <div class="relative z-10 text-center max-w-4xl px-6 animate-fade-in-up">
        <div class="inline-flex items-center gap-2 rounded-full px-5 py-1.5 text-sm mb-8 backdrop-blur-xl transition-colors duration-500"
          :style="{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', color: 'var(--c-primary-light)' }">
          <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow" />
          {{ t('hero.badge') }}
        </div>

        <h1 class="mb-6">
          <span class="block text-[clamp(36px,8vw,64px)] font-extrabold leading-tight bg-gradient-to-r from-white via-[var(--c-primary-light)] to-[var(--c-accent)] bg-clip-text text-transparent">
            {{ t('site.title') }}
          </span>
          <span class="block text-[clamp(18px,3vw,24px)] font-normal mt-2 transition-colors duration-500"
            :style="{ color: 'var(--c-hero-text-muted)' }">
            {{ t('site.subtitle') }}
          </span>
        </h1>

        <p class="text-lg mb-10 min-h-[28px] transition-colors duration-500" :style="{ color: 'var(--c-hero-text-muted)' }">
          <span>{{ displayedText }}</span><span class="font-light animate-blink" :style="{ color: 'var(--c-primary)' }">|</span>
        </p>

        <div class="flex gap-4 justify-center flex-wrap mb-12">
          <NuxtLink to="/articles" class="inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            :style="{ background: 'linear-gradient(135deg, var(--c-primary), var(--c-primary-dark))', boxShadow: '0 4px 20px var(--c-card-shadow)' }">
            <span>{{ t('hero.articles') }}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </NuxtLink>
          <NuxtLink to="/resume" class="inline-flex items-center gap-2 px-8 py-3.5 font-semibold rounded-full backdrop-blur-xl transition-all duration-300 hover:border-[var(--c-primary)]"
            :style="{ background: 'var(--c-btn-secondary-bg)', color: 'var(--c-text)', border: '1px solid var(--c-border)' }">
            <span>{{ t('hero.resume') }}</span>
          </NuxtLink>
        </div>

        <div class="flex items-center justify-center">
          <div class="text-center px-7">
            <span class="block text-3xl font-extrabold bg-gradient-to-r from-[var(--c-primary)] to-[var(--c-primary-light)] bg-clip-text text-transparent">{{ posts?.length || 0 }}</span>
            <span class="text-sm transition-colors duration-500" :style="{ color: 'var(--c-text-muted)' }">{{ t('hero.posts') }}</span>
          </div>
          <div class="w-px h-10" :style="{ background: 'var(--c-border)' }"></div>
          <div class="text-center px-7">
            <span class="block text-3xl font-extrabold bg-gradient-to-r from-[var(--c-primary)] to-[var(--c-primary-light)] bg-clip-text text-transparent">{{ tagCount }}</span>
            <span class="text-sm transition-colors duration-500" :style="{ color: 'var(--c-text-muted)' }">{{ t('hero.tags') }}</span>
          </div>
          <div class="w-px h-10" :style="{ background: 'var(--c-border)' }"></div>
          <div class="text-center px-7">
            <span class="block text-3xl font-extrabold bg-gradient-to-r from-[var(--c-primary)] to-[var(--c-primary-light)] bg-clip-text text-transparent">10+</span>
            <span class="text-sm transition-colors duration-500" :style="{ color: 'var(--c-text-muted)' }">{{ t('hero.exp') }}</span>
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sm cursor-pointer animate-bounce-slow transition-colors duration-500"
        :style="{ color: 'var(--c-text-muted)' }" @click="scrollToPosts">
        <span>{{ t('hero.scroll') }}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
      </div>
    </section>

    <!-- ====== 精选轮播 ====== -->
    <section v-if="posts?.length" class="max-w-5xl mx-auto px-6 py-20">
      <div class="flex items-center justify-between mb-10">
        <h2 class="flex items-center gap-2.5 text-2xl font-bold" :style="{ color: 'var(--c-text)' }">
          <span class="text-3xl">✨</span> {{ t('featured.title') }}
        </h2>
        <NuxtLink to="/articles" class="text-sm font-medium transition-colors" :style="{ color: 'var(--c-primary-light)' }">{{ t('featured.viewAll') }}</NuxtLink>
      </div>

      <div class="flex items-center gap-4 relative">
        <button class="shrink-0 w-11 h-11 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all z-10" :style="{ border: '1px solid var(--c-border)', background: 'var(--c-surface)', color: 'var(--c-text)' }" :disabled="currentSlide === 0" @click="prevSlide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        <div class="flex-1 overflow-hidden relative min-h-[280px]">
          <div v-for="(post, idx) in posts" :key="post._path"
            class="absolute inset-0 transition-all duration-500 ease-out"
            :class="idx === currentSlide ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-10 pointer-events-none'">
            <div class="relative rounded-2xl p-9 overflow-hidden h-full transition-colors duration-500"
              :style="{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }">
              <div class="absolute -top-1/2 -right-1/5 w-[300px] h-[300px] pointer-events-none"
                :style="{ background: `radial-gradient(circle, var(--c-card-shadow), transparent)` }" />
              <div class="relative z-10">
                <div class="flex items-center gap-3 mb-4">
                  <span class="text-sm" :style="{ color: 'var(--c-text-muted)' }">{{ formatDate(post.date) }}</span>
                  <span v-if="post.tags?.[0]" class="text-xs px-2.5 py-1 rounded-full" :style="{ background: 'rgba(99,102,241,0.15)', color: 'var(--c-primary-light)' }">{{ post.tags[0] }}</span>
                </div>
                <h3 class="text-2xl font-bold mb-3" :style="{ color: 'var(--c-text)' }">
                  <NuxtLink :to="post._path" class="hover:underline">{{ post.title }}</NuxtLink>
                </h3>
                <p class="text-sm leading-relaxed mb-5" :style="{ color: 'var(--c-text-muted)' }">{{ post.description || '...' }}</p>
                <NuxtLink :to="post._path" class="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all"
                  :style="{ color: 'var(--c-primary-light)' }">
                  {{ t('featured.read') }}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <button class="shrink-0 w-11 h-11 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all z-10" :style="{ border: '1px solid var(--c-border)', background: 'var(--c-surface)', color: 'var(--c-text)' }" :disabled="currentSlide >= (posts?.length || 1) - 1" @click="nextSlide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>

      <div class="flex justify-center gap-2 mt-6">
        <button v-for="(_, idx) in posts" :key="idx" class="h-2.5 rounded-full border-none cursor-pointer transition-all duration-300"
          :style="{ background: idx === currentSlide ? 'var(--c-primary)' : 'var(--c-border)' }"
          :class="idx === currentSlide ? 'w-7 rounded-xl' : 'w-2.5'" @click="currentSlide = idx" />
      </div>
    </section>

    <!-- ====== 文章列表 ====== -->
    <section ref="postsSection" class="max-w-4xl mx-auto px-6 pb-20">
      <h2 class="flex items-center gap-2.5 text-2xl font-bold mb-10" :style="{ color: 'var(--c-text)' }">
        <span class="text-3xl">📝</span> {{ t('posts.title') }}
      </h2>

      <div v-if="posts?.length" class="flex flex-col gap-4">
        <article v-for="(post, idx) in posts" :key="post._path" class="group" :style="{ animationDelay: idx * 0.08 + 's' }">
          <div class="flex items-center gap-5 rounded-2xl p-5 cursor-default transition-all duration-300 hover:translate-x-1.5 hover:shadow-lg"
            :style="{
              background: 'var(--c-surface)',
              border: '1px solid var(--c-border)',
              boxShadow: '0 4px 20px var(--c-card-shadow)',
            }">
            <div class="shrink-0 w-14 text-center rounded-xl py-2"
              :style="{ background: 'linear-gradient(135deg, var(--c-primary), var(--c-primary-dark))' }">
              <span class="block text-xl font-extrabold text-white leading-none">{{ getDay(post.date) }}</span>
              <span class="block text-xs text-white/80 mt-0.5">{{ getMonth(post.date) }}</span>
            </div>

            <div class="flex-1 min-w-0">
              <h3 class="text-lg font-semibold mb-1.5" :style="{ color: 'var(--c-text)' }">
                <NuxtLink :to="post._path" class="hover:underline">{{ post.title }}</NuxtLink>
              </h3>
              <p v-if="post.description" class="text-sm mb-2 truncate" :style="{ color: 'var(--c-text-muted)' }">{{ post.description }}</p>
              <div v-if="post.tags?.length" class="flex gap-1.5 flex-wrap">
                <span v-for="tag in post.tags" :key="tag" class="text-xs px-2 py-0.5 rounded-full" :style="{ background: 'rgba(99,102,241,0.1)', color: 'var(--c-primary-light)' }">{{ tag }}</span>
              </div>
            </div>

            <NuxtLink :to="post._path" class="shrink-0 group-hover:translate-x-1 transition-all" :style="{ color: 'var(--c-text-muted)' }">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </NuxtLink>
          </div>
        </article>
      </div>

      <div v-else class="text-center py-20" :style="{ color: 'var(--c-text-muted)' }">
        <div class="text-5xl mb-4">📭</div>
        <p>{{ t('posts.empty') }}，<code class="px-2 py-0.5 rounded text-sm" :style="{ background: 'var(--c-surface)', color: 'var(--c-primary-light)' }">content/</code> {{ t('posts.emptyHint') }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Jameschy Blog - 个人技术博客',
  description: '分享前端开发、Linux运维、PHP、Nuxt等技术的个人博客，记录学习与成长。',
  ogTitle: 'Jameschy Blog - 个人技术博客',
  ogDescription: '分享前端开发、Linux运维、PHP、Nuxt等技术的个人博客。',
  ogImage: '/static/img/og-image.jpg',
  ogUrl: 'https://jameschy.github.io',
})
import { ref, onMounted, onUnmounted } from 'vue'

const { t } = useI18n()
useHead({ title: computed(() => `${t('site.title')} - ${t('site.subtitle')}`) })

const { data: posts } = await useAsyncData('home-posts', () =>
  queryContent('/').sort({ date: -1 }).find()
)

const tagCount = computed(() => {
  const tags = new Set<string>()
  posts.value?.forEach((p: any) => p.tags?.forEach((tag: string) => tags.add(tag)))
  return tags.size
})

const fullText = computed(() => t('site.desc'))
const displayedText = ref('')
let timer: ReturnType<typeof setInterval> | null = null
onMounted(() => {
  let i = 0
  const text = fullText.value
  timer = setInterval(() => {
    if (i <= text.length) displayedText.value = text.slice(0, i++)
    else clearInterval(timer!)
  }, 80)
})
onUnmounted(() => { if (timer) clearInterval(timer) })

const currentSlide = ref(0)
function nextSlide() { if (posts.value && currentSlide.value < posts.value.length - 1) currentSlide.value++ }
function prevSlide() { if (currentSlide.value > 0) currentSlide.value-- }

const postsSection = ref<HTMLElement | null>(null)
function scrollToPosts() { postsSection.value?.scrollIntoView({ behavior: 'smooth' }) }

function formatDate(d?: string) { return d ? new Date(d).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }) : '' }
function getDay(d?: string) { return d ? new Date(d).getDate().toString().padStart(2, '0') : '' }
function getMonth(d?: string) { return d ? (new Date(d).getMonth() + 1) + '月' : '' }
</script>