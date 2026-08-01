<template>
  <div class="layout">
    <!-- 顶部导航栏 -->
    <header class="header">
      <div class="container">
        <div class="logo">
          <NuxtLink to="/">詹姆斯的博客</NuxtLink>
        </div>
        <nav class="nav">
        <NuxtLink to="/">首页</NuxtLink>
        <NuxtLink to="/articles">文章</NuxtLink>
        <NuxtLink to="/resume">简历</NuxtLink>
        <NuxtLink to="/about">关于</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- 主内容区 -->
    <main class="main">
      <div class="container">
        <slot />
      </div>
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <p>© {{ new Date().getFullYear() }} 詹姆斯的博客 · Powered by Nuxt4</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 顶部导航 */
.header {
  background: #fff;
  border-bottom: 1px solid #eaecef;
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo a {
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 24px;
  margin-top: 8px;
}

.nav a {
  color: #666;
  text-decoration: none;
  font-size: 15px;
  transition: color 0.2s;
}

.nav a:hover,
.nav a.router-link-active {
  color: #3eaf7c;
}

/* 主内容 */
.main {
  flex: 1;
  padding: 40px 0;
}

/* 页脚 */
.footer {
  background: #f6f8fa;
  border-top: 1px solid #eaecef;
  padding: 24px 0;
  text-align: center;
  color: #999;
  font-size: 14px;
}

.footer p {
  margin: 0;
}
</style>