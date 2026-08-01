<template>
  <div class="min-h-screen flex flex-col" style="background:var(--c-bg);color:var(--c-text);transition:background 0.6s,color 0.6s">
    <!-- ====== 全局控制栏 ====== -->
    <div class="fixed top-0 inset-x-0 z-[101] h-8 flex items-center justify-end gap-3 px-4 text-xs backdrop-blur-sm transition-colors duration-500"
      style="background:var(--c-header-bg);border-bottom:1px solid var(--c-border)">
      <!-- 时区主题指示 -->
      <div class="flex items-center gap-1.5" style="color:var(--c-text-muted)">
        <span>{{ themeIcon }}</span>
        <span>{{ t('theme.' + theme) || themeLabel }}</span>
      </div>
      <div class="w-px h-4" style="background:var(--c-border)"></div>
      <!-- 语言切换 -->
      <button class="flex items-center gap-1 px-1.5 py-0.5 rounded hover:opacity-80 transition-opacity" style="color:var(--c-text-muted)" @click="toggleLocale">
        <span>{{ locale === 'zh' ? '🌐 中文' : '🌐 EN' }}</span>
      </button>
    </div>

    <!-- ====== 导航栏 ====== -->
    <header class="fixed top-8 inset-x-0 z-50 px-6 transition-all duration-300" :class="isScrolled ? 'backdrop-blur-xl border-b shadow-lg' : 'bg-transparent'" :style="isScrolled ? `background:var(--c-header-bg);border-color:var(--c-border);box-shadow:0 4px 20px ${getShadowColor()}` : ''">
      <div class="max-w-6xl mx-auto flex items-center justify-between h-16">
        <NuxtLink to="/" class="flex items-center gap-2 text-xl font-bold no-underline" style="color:var(--c-text)">
          <span class="text-2xl">⚡</span> {{ t('site.title') }}
        </NuxtLink>

        <nav class="hidden md:flex gap-1">
          <NuxtLink to="/" class="nav-link" :style="navStyle">{{ t('nav.home') }}</NuxtLink>
          <NuxtLink to="/articles" class="nav-link" :style="navStyle">{{ t('nav.articles') }}</NuxtLink>
          <NuxtLink to="/projects" class="nav-link" :style="navStyle">{{ t('nav.projects') }}</NuxtLink>
          <NuxtLink to="/about" class="nav-link" :style="navStyle">{{ t('nav.about') }}</NuxtLink>
        </nav>

        <button class="md:hidden flex flex-col gap-1.5 p-1" @click="menuOpen = !menuOpen">
          <span class="block w-6 h-0.5 rounded-sm transition-all" :style="{ background: 'var(--c-text)' }" :class="menuOpen ? 'rotate-45 translate-y-2' : ''" />
          <span class="block w-6 h-0.5 rounded-sm transition-all" :style="{ background: 'var(--c-text)' }" :class="menuOpen ? 'opacity-0' : ''" />
          <span class="block w-6 h-0.5 rounded-sm transition-all" :style="{ background: 'var(--c-text)' }" :class="menuOpen ? '-rotate-45 -translate-y-2' : ''" />
        </button>
      </div>

      <div v-if="menuOpen" class="md:hidden rounded-xl p-2 mt-2 backdrop-blur-xl" :style="{ background: 'var(--c-header-bg)', border: '1px solid var(--c-border)' }">
        <NuxtLink to="/" class="block px-4 py-3 rounded-lg transition-colors" :style="{ color: 'var(--c-text-muted)' }" @click="menuOpen = false">{{ t('nav.home') }}</NuxtLink>
        <NuxtLink to="/articles" class="block px-4 py-3 rounded-lg transition-colors" :style="{ color: 'var(--c-text-muted)' }" @click="menuOpen = false">{{ t('nav.articles') }}</NuxtLink>
        <NuxtLink to="/projects" class="block px-4 py-3 rounded-lg transition-colors" :style="{ color: 'var(--c-text-muted)' }" @click="menuOpen = false">{{ t('nav.projects') }}</NuxtLink>
        <NuxtLink to="/about" class="block px-4 py-3 rounded-lg transition-colors" :style="{ color: 'var(--c-text-muted)' }" @click="menuOpen = false">{{ t('nav.about') }}</NuxtLink>
      </div>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <!-- 页脚 -->
    <footer class="border-t pt-12 pb-6 px-6 backdrop-blur-sm" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-surface)' }">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div>
          <p class="text-lg font-bold mb-2" style="color:var(--c-text)">⚡ {{ t('site.title') }}</p>
          <p class="text-sm max-w-xs" style="color:var(--c-text-muted)">{{ t('footer.desc') }}</p>
        </div>
        <div class="flex gap-6">
          <a href="https://github.com/jameschy" target="_blank" rel="noopener" class="text-sm transition-colors" style="color:var(--c-text-muted)">GitHub</a>
          <a href="https://www.cnblogs.com/chig/" target="_blank" rel="noopener" class="text-sm transition-colors" style="color:var(--c-text-muted)">博客园</a>
          <NuxtLink to="/resume" class="text-sm transition-colors" style="color:var(--c-text-muted)">{{ t('nav.resume') }}</NuxtLink>
        </div>
      </div>
      <div class="max-w-6xl mx-auto mt-8 pt-4 border-t text-center text-xs" :style="{ borderColor: 'var(--c-border)', color: 'var(--c-text-muted)' }">
        © {{ new Date().getFullYear() }} {{ t('site.title') }} · {{ t('footer.powered') }}
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
const { current: theme, icon: themeIcon, label: themeLabel } = useTimeTheme()

const isScrolled = ref(false)
const menuOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => { isScrolled.value = window.scrollY > 50 })
})

function toggleLocale() {
  setLocale(locale.value === 'zh' ? 'en' : 'zh')
}

function getShadowColor() {
  return 'rgba(0,0,0,0.1)'
}

const navStyle = computed(() => ({
  color: 'var(--c-text-muted)',
}))
</script>

<style scoped>
.nav-link {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
}
.nav-link:hover {
  color: var(--c-text) !important;
  background: rgba(99, 102, 241, 0.1);
}
.nav-link.router-link-active {
  color: var(--c-primary-light) !important;
  background: rgba(99, 102, 241, 0.15);
}
</style>