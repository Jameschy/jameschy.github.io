export interface Category {
  key: string
  label: string
  tags: string[]  // 匹配文章的哪些标签
}

export const categories: Category[] = [
  { key: 'php', label: 'PHP', tags: ['PHP', 'php', 'ThinkPHP', 'Laravel', 'Webman', 'EasyAdmin'] },
  { key: 'frontend', label: '前端', tags: ['前端', 'Vue', 'React', 'Nuxt', 'JavaScript', 'TypeScript', 'CSS', 'Tailwind', 'UniApp', 'jQuery'] },
  { key: 'linux', label: 'Linux', tags: ['Linux', '服务器', '运维', 'Nginx', 'Docker', 'Shell'] },
  { key: 'python', label: 'Python', tags: ['Python', '爬虫', '数据分析'] },
  { key: 'seo', label: 'SEO', tags: ['SEO', '优化', '独立站'] },
  { key: 'wordpress', label: 'WordPress', tags: ['WordPress', 'WooCommerce', 'Shopify'] },
  { key: 'java', label: 'Java', tags: ['Java', 'Spring'] },
  { key: 'other', label: '杂项', tags: [] }, // 兜底：不匹配以上任何标签的
]