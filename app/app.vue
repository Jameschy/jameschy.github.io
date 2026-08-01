<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* ====== 全局主题 CSS 变量 ====== */
:root {
  --c-bg: #0f172a;
  --c-surface: #1e293b;
  --c-text: #f1f5f9;
  --c-text-muted: #94a3b8;
  --c-border: #334155;
  --c-primary: #6366f1;
  --c-primary-light: #a5b4fc;
  --c-primary-dark: #4f46e5;
  --c-accent: #f59e0b;
  --c-hero-from: #0f172a;
  --c-hero-via: #1e1b4b;
  --c-hero-to: #0f172a;
  --c-hero-text: #f1f5f9;
  --c-hero-text-muted: #94a3b8;
  --c-card-shadow: rgba(99, 102, 241, 0.1);
  --c-header-bg: rgba(15, 23, 42, 0.85);
  --c-btn-secondary-bg: rgba(255, 255, 255, 0.05);
  --c-btn-secondary-hover: rgba(255, 255, 255, 0.1);
  --c-orb-1: rgba(99, 102, 241, 0.3);
  --c-orb-2: rgba(245, 158, 11, 0.2);
  --c-orb-3: rgba(99, 102, 241, 0.25);
}

/* 早上 04-09: 浅蓝色 */
[data-theme="morning"] {
  --c-bg: #e8f4fd;
  --c-surface: #ffffff;
  --c-text: #1e293b;
  --c-text-muted: #64748b;
  --c-border: #bae6fd;
  --c-primary: #0284c7;
  --c-primary-light: #38bdf8;
  --c-primary-dark: #0369a1;
  --c-accent: #f59e0b;
  --c-hero-from: #e0f2fe;
  --c-hero-via: #bae6fd;
  --c-hero-to: #e0f2fe;
  --c-hero-text: #0c4a6e;
  --c-hero-text-muted: #64748b;
  --c-card-shadow: rgba(2, 132, 199, 0.1);
  --c-header-bg: rgba(232, 244, 253, 0.85);
  --c-btn-secondary-bg: rgba(0, 0, 0, 0.04);
  --c-btn-secondary-hover: rgba(0, 0, 0, 0.08);
  --c-orb-1: rgba(56, 189, 248, 0.3);
  --c-orb-2: rgba(245, 158, 11, 0.15);
  --c-orb-3: rgba(2, 132, 199, 0.2);
}

/* 白天 09-16: 白色 */
[data-theme="day"] {
  --c-bg: #ffffff;
  --c-surface: #f8fafc;
  --c-text: #1e293b;
  --c-text-muted: #64748b;
  --c-border: #e2e8f0;
  --c-primary: #6366f1;
  --c-primary-light: #a5b4fc;
  --c-primary-dark: #4f46e5;
  --c-accent: #f59e0b;
  --c-hero-from: #f8fafc;
  --c-hero-via: #e0e7ff;
  --c-hero-to: #f8fafc;
  --c-hero-text: #1e293b;
  --c-hero-text-muted: #64748b;
  --c-card-shadow: rgba(99, 102, 241, 0.08);
  --c-header-bg: rgba(255, 255, 255, 0.85);
  --c-btn-secondary-bg: rgba(0, 0, 0, 0.04);
  --c-btn-secondary-hover: rgba(0, 0, 0, 0.08);
  --c-orb-1: rgba(99, 102, 241, 0.2);
  --c-orb-2: rgba(245, 158, 11, 0.1);
  --c-orb-3: rgba(99, 102, 241, 0.15);
}

/* 黄昏 16-20: 橙黄色 */
[data-theme="dusk"] {
  --c-bg: #fff7ed;
  --c-surface: #ffffff;
  --c-text: #1e293b;
  --c-text-muted: #64748b;
  --c-border: #fed7aa;
  --c-primary: #ea580c;
  --c-primary-light: #fb923c;
  --c-primary-dark: #c2410c;
  --c-accent: #f59e0b;
  --c-hero-from: #fff7ed;
  --c-hero-via: #fed7aa;
  --c-hero-to: #fff7ed;
  --c-hero-text: #7c2d12;
  --c-hero-text-muted: #64748b;
  --c-card-shadow: rgba(234, 88, 12, 0.1);
  --c-header-bg: rgba(255, 247, 237, 0.85);
  --c-btn-secondary-bg: rgba(0, 0, 0, 0.04);
  --c-btn-secondary-hover: rgba(0, 0, 0, 0.08);
  --c-orb-1: rgba(251, 146, 60, 0.3);
  --c-orb-2: rgba(245, 158, 11, 0.2);
  --c-orb-3: rgba(234, 88, 12, 0.2);
}

/* 全局过渡 */
body {
  background: var(--c-bg);
  color: var(--c-text);
  transition: background 0.6s ease, color 0.6s ease;
}
</style>