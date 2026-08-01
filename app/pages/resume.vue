<template>
  <div class="resume">
    <!-- 头部：头像 + 标题 -->
    <div class="header">
      <div class="avatar">
        <img src="/static/img/qj.jpg" alt="头像" />
      </div>
      <h1>James Chy</h1>
      <p class="subtitle">高级前端开发工程师 · 深圳</p>
    </div>

    <!-- 个人简介 -->
    <section class="section">
      <h2>👨‍💻 个人简介</h2>
      <p>你好，我是 James，一名来自深圳的前端开发工程师，拥有 10 年开发经验（含 2 年管理经验）。</p>
      <p>专注于 Web 前端技术栈，热爱折腾各种新技术，也喜欢记录开发过程中遇到的问题和解决方案。</p>
    </section>

    <!-- 技术栈 -->
    <section class="section">
      <h2>🛠 技术栈</h2>
      <div class="tags">
        <span class="tag">Vue / Nuxt</span>
        <span class="tag">React</span>
        <span class="tag">JavaScript / TypeScript</span>
        <span class="tag">Node.js</span>
        <span class="tag">WordPress</span>
        <span class="tag">Element UI</span>
        <span class="tag">跨境独立站开发</span>
        <span class="tag">SEO 优化</span>
      </div>
    </section>

    <!-- 工作经历 -->
    <section class="section">
      <h2>💼 工作经历</h2>
      <p><strong>深圳市红辣椒网络科技有限公司</strong></p>
      <p>2016 - 2026.05 · 高级前端开发工程师 / 前端组长</p>
      <p>负责公司核心产品前端架构设计与技术选型，带领前端团队完成多个大型项目，主导前端工程化建设与技术栈升级。</p>
    </section>

    <!-- 关于本站 -->
    <section class="section">
      <h2>📝 关于本站</h2>
      <p>本博客基于 <strong>Nuxt4 + @nuxt/content</strong> 构建，用于记录日常开发心得、技术笔记、学习总结。</p>
      <p>从 Hexo 迁移而来，保留了所有历史文章。</p>
    </section>

    <!-- 联系方式 -->
    <section class="section">
      <h2>📬 联系方式</h2>
      <ul class="contact-list">
        <li>GitHub：<a href="https://github.com/jameschy" target="_blank">jameschy</a></li>
        <li>邮箱：your-email@example.com</li>
        <li>所在地：广东深圳</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.resume {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  color: #2c3e50;
}

/* 头部头像区域 */
.header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 32px;
  border-bottom: 2px solid #3eaf7c;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px;
  border: 4px solid #f0f7f4;
  box-shadow: 0 2px 12px rgba(62, 175, 124, 0.2);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header h1 {
  font-size: 32px;
  margin: 0 0 8px;
  color: #2c3e50;
}

.subtitle {
  color: #3eaf7c;
  font-size: 16px;
  margin: 0;
  font-weight: 500;
}

/* 通用 section（与 res.html 保持一致） */
.section {
  margin-bottom: 36px;
}

.section h2 {
  font-size: 22px;
  margin-bottom: 16px;
  color: #3eaf7c;
}

.section p {
  margin: 8px 0;
  color: #34495e;
}

/* 标签样式（与 res.html 保持一致） */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}

.tag {
  background: #f0f7f4;
  color: #3eaf7c;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
}

/* 联系方式（与 res.html 保持一致） */
.contact-list {
  list-style: none;
  padding: 0;
}

.contact-list li {
  padding: 6px 0;
}

.contact-list a {
  color: #3eaf7c;
  text-decoration: none;
}

.contact-list a:hover {
  text-decoration: underline;
}
</style>