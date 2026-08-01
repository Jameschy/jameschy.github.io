export type Locale = 'zh' | 'en'

const messages: Record<Locale, Record<string, string>> = {
  zh: {
    'site.title': '詹姆斯的博客',
    'site.subtitle': '记录思考，分享技术',
    'site.desc': '记录日常开发idea、遇到的问题、解决方法、学习进度等！',
    'hero.badge': 'Nuxt 4 驱动',
    'hero.articles': '浏览文章',
    'hero.resume': '我的简历',
    'hero.posts': '篇文章',
    'hero.tags': '个标签',
    'hero.exp': '年经验',
    'hero.scroll': '向下滚动',
    'featured.title': '精选文章',
    'featured.viewAll': '查看全部 →',
    'featured.read': '阅读文章',
    'posts.title': '最新文章',
    'posts.empty': '还没有文章',
    'posts.emptyHint': '目录下创建吧',
    'nav.home': '首页',
    'nav.articles': '文章',
    'nav.resume': '简历',
    'nav.about': '关于',
    'footer.desc': '记录日常开发idea、遇到的问题、解决方法、学习进度等！',
    'footer.powered': 'Powered by Nuxt 4',
    'theme.morning': '早上',
    'theme.day': '白天',
    'theme.dusk': '黄昏',
    'theme.night': '晚上',
  },
  en: {
    'site.title': "James's Blog",
    'site.subtitle': 'Record Thoughts, Share Tech',
    'site.desc': 'Record daily dev ideas, problems, solutions, and learning progress!',
    'hero.badge': 'Powered by Nuxt 4',
    'hero.articles': 'Browse Articles',
    'hero.resume': 'My Resume',
    'hero.posts': 'articles',
    'hero.tags': 'tags',
    'hero.exp': 'yrs exp',
    'hero.scroll': 'Scroll Down',
    'featured.title': 'Featured',
    'featured.viewAll': 'View All →',
    'featured.read': 'Read More',
    'posts.title': 'Latest Posts',
    'posts.empty': 'No articles yet',
    'posts.emptyHint': 'directory to get started',
    'nav.home': 'Home',
    'nav.articles': 'Articles',
    'nav.resume': 'Resume',
    'nav.about': 'About',
    'footer.desc': 'Record daily dev ideas, problems, solutions, and learning progress!',
    'footer.powered': 'Powered by Nuxt 4',
    'theme.morning': 'Morning',
    'theme.day': 'Daytime',
    'theme.dusk': 'Dusk',
    'theme.night': 'Night',
  },
}

const locale = ref<Locale>('zh')

export function useI18n() {
  if (import.meta.client) {
    const saved = localStorage.getItem('blog-locale') as Locale | null
    if (saved === 'zh' || saved === 'en') locale.value = saved
  }

  function t(key: string): string {
    return messages[locale.value]?.[key] ?? key
  }

  function setLocale(l: Locale) {
    locale.value = l
    if (import.meta.client) localStorage.setItem('blog-locale', l)
  }

  return { locale: readonly(locale), t, setLocale }
}