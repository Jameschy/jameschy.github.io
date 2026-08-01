<template>
  <div class="home-page">
    <!-- ====== Hero 区域 ====== -->
    <section class="hero">
      <div class="hero-bg">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
        <div class="particles">
          <span v-for="i in 20" :key="i" class="particle" :style="particleStyle(i)"></span>
        </div>
      </div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span> Nuxt 4 驱动
        </div>
        <h1 class="hero-title">
          <span class="title-line">詹姆斯的博客</span>
          <span class="title-sub">记录思考，分享技术</span>
        </h1>
        <p class="hero-desc">
          <span class="typing-text">{{ displayedText }}</span><span class="cursor">|</span>
        </p>
        <div class="hero-actions">
          <NuxtLink to="/articles" class="btn-primary">
            <span>浏览文章</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </NuxtLink>
          <NuxtLink to="/resume" class="btn-secondary">
            <span>我的简历</span>
          </NuxtLink>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-num">{{ posts?.length || 0 }}</span>
            <span class="stat-label">篇文章</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">{{ tagCount }}</span>
            <span class="stat-label">个标签</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">10+</span>
            <span class="stat-label">年经验</span>
          </div>
        </div>
      </div>
      <div class="scroll-indicator" @click="scrollToPosts">
        <span>向下滚动</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
      </div>
    </section>

    <!-- ====== 精选轮播 ====== -->
    <section class="featured-section" v-if="posts?.length">
      <div class="section-head">
        <h2 class="section-title">
          <span class="title-icon">✨</span> 精选文章
        </h2>
        <NuxtLink to="/articles" class="view-all">查看全部 →</NuxtLink>
      </div>
      <div class="carousel-wrap">
        <button class="carousel-btn prev" @click="prevSlide" :disabled="currentSlide === 0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="carousel-track" ref="carouselTrack">
          <div class="carousel-slide" v-for="(post, idx) in posts" :key="post._path" :class="{ active: idx === currentSlide }">
            <div class="featured-card" :style="{ animationDelay: (idx - currentSlide) * 0.1 + 's' }">
              <div class="card-glow"></div>
              <div class="card-content">
                <div class="card-meta">
                  <span class="card-date">{{ formatDate(post.date) }}</span>
                  <span class="card-tag" v-if="post.tags?.[0]">{{ post.tags[0] }}</span>
                </div>
                <h3 class="card-title">
                  <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
                </h3>
                <p class="card-desc">{{ post.description || '点击阅读全文...' }}</p>
                <NuxtLink :to="post._path" class="card-link">
                  阅读文章
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-btn next" @click="nextSlide" :disabled="currentSlide >= (posts?.length || 1) - 1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
      <div class="carousel-dots">
        <button v-for="(_, idx) in posts" :key="idx" class="dot" :class="{ active: idx === currentSlide }" @click="currentSlide = idx"></button>
      </div>
    </section>

    <!-- ====== 文章列表 ====== -->
    <section class="posts-section" ref="postsSection">
      <div class="section-head">
        <h2 class="section-title">
          <span class="title-icon">📝</span> 最新文章
        </h2>
      </div>
      <div class="posts-grid" v-if="posts?.length">
        <article v-for="(post, idx) in posts" :key="post._path" class="post-card" :style="{ animationDelay: idx * 0.08 + 's' }">
          <div class="post-card-inner">
            <div class="post-date-badge">
              <span class="post-day">{{ getDay(post.date) }}</span>
              <span class="post-month">{{ getMonth(post.date) }}</span>
            </div>
            <div class="post-info">
              <h3 class="post-title">
                <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
              </h3>
              <p class="post-desc" v-if="post.description">{{ post.description }}</p>
              <div class="post-tags" v-if="post.tags?.length">
                <span v-for="tag in post.tags" :key="tag" class="post-tag">{{ tag }}</span>
              </div>
            </div>
            <NuxtLink :to="post._path" class="post-arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </NuxtLink>
          </div>
        </article>
      </div>
      <div v-else class="empty-state">
        <div class="empty-icon">📭</div>
        <p>还没有文章，在 <code>content/</code> 目录下创建吧</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

useHead({ title: '詹姆斯的博客 - 记录日常开发idea' })

// 获取文章数据
const { data: posts } = await useAsyncData('home-posts', () =>
  queryContent('/').sort({ date: -1 }).find()
)

// 计算标签数量
const tagCount = computed(() => {
  const tags = new Set<string>()
  posts.value?.forEach(p => p.tags?.forEach((t: string) => tags.add(t)))
  return tags.size
})

// 打字机效果
const fullText = '记录日常开发idea、遇到的问题、解决方法、学习进度等！'
const displayedText = ref('')
let typeTimer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  let idx = 0
  typeTimer = setInterval(() => {
    if (idx <= fullText.length) {
      displayedText.value = fullText.slice(0, idx)
      idx++
    } else {
      clearInterval(typeTimer!)
    }
  }, 80)
})

onUnmounted(() => {
  if (typeTimer) clearInterval(typeTimer)
})

// 轮播
const currentSlide = ref(0)
const carouselTrack = ref<HTMLElement | null>(null)

function nextSlide() {
  if (posts.value && currentSlide.value < posts.value.length - 1) {
    currentSlide.value++
  }
}
function prevSlide() {
  if (currentSlide.value > 0) currentSlide.value--
}

// 滚动到文章区
function scrollToPosts() {
  document.getElementById('posts')?.scrollIntoView({ behavior: 'smooth' })
}

// 格式化工具
function formatDate(dateStr?: string): string {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}
function getDay(dateStr?: string): string {
  if (!dateStr) return ''
  return new Date(dateStr).getDate().toString().padStart(2, '0')
}
function getMonth(dateStr?: string): string {
  if (!dateStr) return ''
  return (new Date(dateStr).getMonth() + 1) + '月'
}

// 粒子随机样式
function particleStyle(i: number) {
  return {
    left: Math.random() * 100 + '%',
    animationDelay: Math.random() * 8 + 's',
    animationDuration: 8 + Math.random() * 12 + 's',
    width: 2 + Math.random() * 4 + 'px',
    height: 2 + Math.random() * 4 + 'px',
    opacity: 0.3 + Math.random() * 0.5,
  }
}
</script>

<style scoped>
/* ====== 基础变量 ====== */
.home-page {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --primary-light: #a5b4fc;
  --accent: #f59e0b;
  --bg: #0f172a;
  --surface: #1e293b;
  --text: #f1f5f9;
  --text-muted: #94a3b8;
  --border: #334155;
  color: var(--text);
  overflow-x: hidden;
}

/* ====== Hero ====== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
}
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: orbFloat 12s ease-in-out infinite;
}
.orb-1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(99,102,241,0.3), transparent);
  top: -10%; left: -5%;
  animation-delay: 0s;
}
.orb-2 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(245,158,11,0.2), transparent);
  bottom: -10%; right: -5%;
  animation-delay: -4s;
}
.orb-3 {
  width: 350px; height: 350px;
  background: radial-gradient(circle, rgba(99,102,241,0.25), transparent);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -8s;
}
@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30px, -30px) scale(1.05); }
  50% { transform: translate(-20px, 20px) scale(0.95); }
  75% { transform: translate(-30px, -10px) scale(1.02); }
}

.particles {
  position: absolute; inset: 0;
}
.particle {
  position: absolute; bottom: -10px;
  background: var(--primary-light);
  border-radius: 50%;
  animation: particleRise linear infinite;
}
@keyframes particleRise {
  0% { transform: translateY(0) scale(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-110vh) scale(1); opacity: 0; }
}

.hero-content {
  position: relative; z-index: 1;
  text-align: center;
  max-width: 720px;
  padding: 0 24px;
  animation: fadeInUp 1s ease-out;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(99,102,241,0.15);
  border: 1px solid rgba(99,102,241,0.3);
  border-radius: 50px;
  padding: 6px 20px;
  font-size: 14px;
  color: var(--primary-light);
  margin-bottom: 32px;
  backdrop-filter: blur(10px);
}
.badge-dot {
  width: 8px; height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.hero-title {
  margin-bottom: 24px;
}
.title-line {
  display: block;
  font-size: clamp(36px, 8vw, 64px);
  font-weight: 800;
  background: linear-gradient(135deg, #fff 0%, #a5b4fc 50%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  margin-bottom: 8px;
}
.title-sub {
  display: block;
  font-size: clamp(18px, 3vw, 24px);
  color: var(--text-muted);
  font-weight: 400;
}

.hero-desc {
  font-size: 18px;
  color: var(--text-muted);
  margin-bottom: 40px;
  min-height: 28px;
}
.cursor {
  animation: blink 1s step-end infinite;
  color: var(--primary);
  font-weight: 300;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-actions {
  display: flex; gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 48px;
}
.btn-primary, .btn-secondary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 32px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}
.btn-primary {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: #fff;
  box-shadow: 0 4px 20px rgba(99,102,241,0.4);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(99,102,241,0.5);
}
.btn-secondary {
  background: rgba(255,255,255,0.05);
  color: var(--text);
  border: 1px solid var(--border);
  backdrop-filter: blur(10px);
}
.btn-secondary:hover {
  background: rgba(255,255,255,0.1);
  border-color: var(--primary);
}

.hero-stats {
  display: flex; align-items: center; justify-content: center; gap: 0;
}
.stat-item {
  text-align: center;
  padding: 0 28px;
}
.stat-num {
  display: block;
  font-size: 32px;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #a5b4fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stat-label {
  font-size: 14px;
  color: var(--text-muted);
}
.stat-divider {
  width: 1px; height: 40px;
  background: var(--border);
}

.scroll-indicator {
  position: absolute; bottom: 32px; left: 50%;
  transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  color: var(--text-muted);
  font-size: 13px;
  cursor: pointer;
  animation: bounce 2s ease-in-out infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}

/* ====== 精选轮播 ====== */
.featured-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 24px 40px;
}
.section-head {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 40px;
}
.section-title {
  display: flex; align-items: center; gap: 10px;
  font-size: 28px; font-weight: 700; color: var(--text);
}
.title-icon { font-size: 32px; }
.view-all {
  color: var(--primary-light);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.2s;
}
.view-all:hover { color: #fff; }

.carousel-wrap {
  display: flex; align-items: center; gap: 16px;
  position: relative;
}
.carousel-btn {
  flex-shrink: 0;
  width: 44px; height: 44px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s;
  z-index: 2;
}
.carousel-btn:hover:not(:disabled) {
  background: var(--primary);
  border-color: var(--primary);
}
.carousel-btn:disabled {
  opacity: 0.3; cursor: not-allowed;
}
.carousel-track {
  flex: 1; overflow: hidden;
  position: relative;
  min-height: 280px;
}
.carousel-slide {
  position: absolute; inset: 0;
  opacity: 0;
  transform: translateX(40px);
  transition: all 0.5s ease;
  pointer-events: none;
}
.carousel-slide.active {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

.featured-card {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 36px;
  overflow: hidden;
  height: 100%;
}
.card-glow {
  position: absolute;
  top: -50%; right: -20%;
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(99,102,241,0.1), transparent);
  pointer-events: none;
}
.card-content { position: relative; z-index: 1; }
.card-meta {
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 16px;
}
.card-date { font-size: 14px; color: var(--text-muted); }
.card-tag {
  font-size: 12px;
  padding: 3px 10px;
  border-radius: 50px;
  background: rgba(99,102,241,0.15);
  color: var(--primary-light);
}
.card-title {
  font-size: 24px; font-weight: 700; margin-bottom: 12px;
}
.card-title a {
  color: var(--text); text-decoration: none;
  transition: color 0.2s;
}
.card-title a:hover { color: var(--primary-light); }
.card-desc {
  font-size: 15px; color: var(--text-muted);
  line-height: 1.7; margin-bottom: 20px;
}
.card-link {
  display: inline-flex; align-items: center; gap: 6px;
  color: var(--primary-light);
  text-decoration: none;
  font-size: 14px; font-weight: 600;
  transition: gap 0.2s;
}
.card-link:hover { gap: 10px; }

.carousel-dots {
  display: flex; justify-content: center; gap: 8px;
  margin-top: 24px;
}
.dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  border: none;
  background: var(--border);
  cursor: pointer;
  transition: all 0.3s;
}
.dot.active {
  background: var(--primary);
  width: 28px;
  border-radius: 12px;
}

/* ====== 文章列表 ====== */
.posts-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}
.posts-grid {
  display: flex; flex-direction: column; gap: 16px;
}
.post-card {
  animation: fadeInUp 0.5s ease-out both;
  opacity: 0;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.post-card-inner {
  display: flex; align-items: center; gap: 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px 24px;
  transition: all 0.3s ease;
  cursor: default;
}
.post-card-inner:hover {
  border-color: var(--primary);
  transform: translateX(6px);
  box-shadow: 0 8px 30px rgba(99,102,241,0.1);
}
.post-date-badge {
  flex-shrink: 0;
  width: 56px;
  text-align: center;
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  border-radius: 12px;
  padding: 8px 0;
}
.post-day {
  display: block;
  font-size: 22px; font-weight: 800;
  color: #fff; line-height: 1;
}
.post-month {
  display: block;
  font-size: 12px; color: rgba(255,255,255,0.8);
  margin-top: 2px;
}
.post-info { flex: 1; min-width: 0; }
.post-title {
  font-size: 17px; font-weight: 600; margin-bottom: 6px;
}
.post-title a {
  color: var(--text); text-decoration: none;
  transition: color 0.2s;
}
.post-title a:hover { color: var(--primary-light); }
.post-desc {
  font-size: 14px; color: var(--text-muted);
  margin-bottom: 8px;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.post-tags { display: flex; gap: 6px; flex-wrap: wrap; }
.post-tag {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 50px;
  background: rgba(99,102,241,0.1);
  color: var(--primary-light);
}
.post-arrow {
  flex-shrink: 0;
  color: var(--text-muted);
  transition: all 0.2s;
  text-decoration: none;
  display: flex;
}
.post-card-inner:hover .post-arrow {
  color: var(--primary);
  transform: translateX(4px);
}

/* ====== 空状态 ====== */
.empty-state {
  text-align: center; padding: 80px 0;
  color: var(--text-muted);
}
.empty-icon { font-size: 48px; margin-bottom: 16px; }
.empty-state code {
  background: var(--surface); color: var(--primary-light);
  padding: 2px 8px; border-radius: 4px; font-size: 14px;
}

/* ====== 响应式 ====== */
@media (max-width: 768px) {
  .hero-stats { flex-direction: column; gap: 16px; }
  .stat-divider { width: 40px; height: 1px; }
  .carousel-wrap { flex-direction: column; }
  .carousel-btn { display: none; }
  .post-card-inner { flex-direction: column; align-items: flex-start; }
  .post-date-badge { flex-direction: row; width: auto; display: flex; gap: 4px; align-items: baseline; padding: 4px 12px; }
  .post-day { font-size: 16px; }
}
</style>