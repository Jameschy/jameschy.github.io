<template>
  <div class="layout">
    <!-- 顶部导航栏 -->
    <header class="header" :class="{ scrolled: isScrolled }">
      <div class="header-inner">
        <NuxtLink to="/" class="logo">
          <span class="logo-icon">⚡</span>
          <span class="logo-text">詹姆斯</span>
        </NuxtLink>
        <nav class="nav">
          <NuxtLink to="/" class="nav-link">首页</NuxtLink>
          <NuxtLink to="/articles" class="nav-link">文章</NuxtLink>
          <NuxtLink to="/resume" class="nav-link">简历</NuxtLink>
          <NuxtLink to="/about" class="nav-link">关于</NuxtLink>
        </nav>
        <button class="mobile-menu-btn" @click="menuOpen = !menuOpen">
          <span></span><span></span><span></span>
        </button>
      </div>
      <!-- 移动端菜单 -->
      <div class="mobile-menu" :class="{ open: menuOpen }">
        <NuxtLink to="/" @click="menuOpen = false">首页</NuxtLink>
        <NuxtLink to="/articles" @click="menuOpen = false">文章</NuxtLink>
        <NuxtLink to="/resume" @click="menuOpen = false">简历</NuxtLink>
        <NuxtLink to="/about" @click="menuOpen = false">关于</NuxtLink>
      </div>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <p class="footer-name">⚡ 詹姆斯的博客</p>
          <p class="footer-desc">记录日常开发idea、遇到的问题、解决方法、学习进度等！</p>
        </div>
        <div class="footer-links">
          <a href="https://github.com/jameschy" target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.cnblogs.com/chig/" target="_blank" rel="noopener">博客园</a>
          <NuxtLink to="/resume">简历</NuxtLink>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© {{ new Date().getFullYear() }} 詹姆斯的博客 · Powered by Nuxt 4</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style>
/* 全局样式重置 */
*, *::before, *::after {
  margin: 0; padding: 0; box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: #0f172a;
  color: #f1f5f9;
  -webkit-font-smoothing: antialiased;
}
a { color: inherit; text-decoration: none; }
</style>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ====== Header ====== */
.header {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 0 24px;
  transition: all 0.3s ease;
  background: transparent;
}
.header.scrolled {
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(99, 102, 241, 0.15);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}
.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}
.logo {
  display: flex; align-items: center; gap: 8px;
  font-size: 20px; font-weight: 700;
  color: #fff;
  text-decoration: none;
}
.logo-icon { font-size: 24px; }
.nav { display: flex; gap: 4px; }
.nav-link {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  color: #94a3b8;
  transition: all 0.2s;
}
.nav-link:hover { color: #fff; background: rgba(99, 102, 241, 0.1); }
.nav-link.router-link-active { color: #a5b4fc; background: rgba(99, 102, 241, 0.15); }

/* 移动端菜单按钮 */
.mobile-menu-btn {
  display: none;
  flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer;
  padding: 4px;
}
.mobile-menu-btn span {
  display: block;
  width: 24px; height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s;
}
.mobile-menu {
  display: none;
  flex-direction: column;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 12px;
  padding: 8px;
  margin-top: 8px;
}
.mobile-menu.open { display: flex; }
.mobile-menu a {
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 16px;
  color: #94a3b8;
  transition: all 0.2s;
}
.mobile-menu a:hover { color: #fff; background: rgba(99, 102, 241, 0.1); }

/* ====== Main ====== */
.main {
  flex: 1;
  padding-top: 0;
}

/* ====== Footer ====== */
.footer {
  border-top: 1px solid rgba(99, 102, 241, 0.1);
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(10px);
  padding: 48px 24px 24px;
}
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
}
.footer-name {
  font-size: 18px; font-weight: 700;
  color: #fff; margin-bottom: 8px;
}
.footer-desc {
  font-size: 14px; color: #64748b;
  max-width: 320px;
}
.footer-links {
  display: flex; gap: 24px;
}
.footer-links a {
  font-size: 14px; color: #94a3b8;
  transition: color 0.2s;
}
.footer-links a:hover { color: #a5b4fc; }
.footer-bottom {
  max-width: 1200px;
  margin: 32px auto 0;
  padding-top: 16px;
  border-top: 1px solid rgba(99, 102, 241, 0.08);
  text-align: center;
  font-size: 13px; color: #475569;
}

@media (max-width: 768px) {
  .nav { display: none; }
  .mobile-menu-btn { display: flex; }
  .footer-inner { flex-direction: column; text-align: center; }
  .footer-desc { max-width: 100%; }
  .footer-links { justify-content: center; }
}
</style>