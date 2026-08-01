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
    'nav.projects': '项目',
    'nav.about': '关于',
    'footer.desc': '记录日常开发idea、遇到的问题、解决方法、学习进度等！',
    'footer.powered': 'Powered by Nuxt 4',
    'theme.morning': '早上',
    'theme.day': '白天',
    'theme.dusk': '黄昏',
    'theme.night': '晚上',

    // ====== 中文部分，theme.night 后面追加 ======
    'about.name': '戚键',
    'about.title': '全栈工程师 · 前端开发 · 独立站开发',
    'about.location': '深圳 · 10年Web开发经验',
    'about.aboutMe': '关于我',
    'about.skills': '技术栈',
    'about.aboutSite': '关于本站',
    'about.intro1': '拥有10年Web开发、2年技术主管经验，深耕网站建设及运维，擅长各类前端网站、后台系统建设及配套开发。熟练运用 Shopify、WordPress、帝国CMS 等主流建站系统，可独立完成海外独立站从技术选型、环境部署、页面开发、响应式适配，到支付接口对接、广告渠道联调、安全防护、SEO优化的全流程落地。',
    'about.intro2': '精通 PHP、JavaScript、CSS，熟练掌握 Vue、Tailwind、Bootstrap、Nuxt、ECharts、UniApp、ThinkPHP 等前后端框架，同时熟练使用 AI 工具辅助开发，依托 AI 赋能快速上手新技术。熟悉 Linux、MySQL、Git 版本管理，熟悉 Python 数据爬取、清洗与可视化分析，具备专业 SEO 优化能力。',
    'about.intro3': '兼具团队管理与项目统筹能力，擅长任务拆解、进度管控、代码评审及安全运维，搭建过技术规范与容灾备份体系，可独立胜任全栈开发及独立站全链路工作。',
    'about.siteBuilt': '本站基于 Nuxt 4 + Tailwind CSS 构建，使用 Nuxt Content 管理文章和项目内容，通过 GitHub Actions 自动部署到 GitHub Pages。',
    'about.siteDesc': '记录日常开发 Idea、遇到的问题、解决方法、学习进度等，涵盖前端、后端、Linux 运维、SEO 优化等方向。',
    'about.viewResume': '查看完整简历',
    'about.resumeHint': '支持在线预览 · 打印 · PDF 下载',


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
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'footer.desc': 'Record daily dev ideas, problems, solutions, and learning progress!',
    'footer.powered': 'Powered by Nuxt 4',
    'theme.morning': 'Morning',
    'theme.day': 'Daytime',
    'theme.dusk': 'Dusk',
    'theme.night': 'Night',

    // ====== 英文部分，theme.night 后面追加 ======
    'about.name': 'James Chy',
    'about.title': 'Full-Stack Engineer · Frontend Dev · E-commerce Dev',
    'about.location': 'Shenzhen · 10 Years Web Development',
    'about.aboutMe': 'About Me',
    'about.skills': 'Tech Stack',
    'about.aboutSite': 'About This Site',
    'about.intro1': 'With 10 years of web development and 2 years of tech lead experience, I specialize in website development and operations. Proficient in Shopify, WordPress, and other mainstream CMS platforms, I can independently handle the full lifecycle of overseas e-commerce sites — from tech selection, environment setup, and responsive development to payment integration, ad channel configuration, security hardening, and SEO optimization.',
    'about.intro2': 'Proficient in PHP, JavaScript, and CSS. Experienced with Vue, Tailwind, Bootstrap, Nuxt, ECharts, UniApp, ThinkPHP, and other frontend/backend frameworks. Skilled in leveraging AI tools to accelerate development and quickly adopt new technologies. Familiar with Linux, MySQL, Git, Python data scraping and visualization, and professional SEO techniques.',
    'about.intro3': 'Experienced in team management and project coordination. Skilled in task decomposition, progress tracking, code review, and security operations. Built technical standards and disaster recovery systems. Capable of independently handling full-stack development and end-to-end e-commerce site delivery.',
    'about.siteBuilt': 'Built with Nuxt 4 + Tailwind CSS. Content managed via Nuxt Content. Automatically deployed to GitHub Pages via GitHub Actions.',
    'about.siteDesc': 'Documenting daily development ideas, challenges, solutions, and learning progress — covering frontend, backend, Linux operations, and SEO optimization.',
    'about.viewResume': 'View Full Resume',
    'about.resumeHint': 'Online preview · Print · PDF download',
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