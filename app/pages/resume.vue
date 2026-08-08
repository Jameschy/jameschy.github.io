<template>
  <div class="pt-10">
    <div class="h-[50px]"></div>
    <div class="flex justify-center gap-3 mt-6 mb-6 max-w-[1400px] mx-auto">
      <button class="tool-btn" @click="toggleMode">{{ isDouble ? r.singleMode : r.doubleMode }}</button>
      <button class="tool-btn" @click="printResume">{{ r.print }}</button>
      <button class="tool-btn" @click="downloadPDF">{{ r.download }}</button>
      <button class="tool-btn" @click="resumeLang = resumeLang === 'zh' ? 'en' : 'zh'">{{ resumeLang === 'zh' ? 'English' : '中文' }}</button>
    </div>
    <div ref="resumeWrap" class="resume-wrap" :class="isDouble ? 'double-mode' : 'single-mode'">
      <div class="a4-row">

        <div class="a4-page">
          <div class="page-content">
            <div class="header-wrap">
              <div class="avatar-box"><img src="/static/img/qj.jpg" alt="avatar" /></div>
              <div class="header-info">
                <h1>{{ r.name }}</h1>
                <div class="header-contact">
                  <p v-for="line in r.header" :key="line" v-html="line"></p>
                </div>
              </div>
            </div>
            <div class="section-title"><div class="title-blue-bar"></div><span>{{ r.advantagesTitle }}</span></div>
            <div class="edu-content"><p v-for="(p, i) in r.advantages" :key="i" :style="i > 0 ? 'margin-top:8px' : ''">{{ p }}</p></div>
            <div class="section-title"><div class="title-blue-bar"></div><span>{{ r.experienceTitle }}</span></div>
            <div class="item-head"><span>{{ r.honglajiao }}</span><span>2023.08-2026.06</span></div>
            <div class="sub-title">{{ r.dutiesLabel }}</div>
            <ul class="text-list"><li v-for="item in r.honglajiaoDuties" :key="item">{{ item }}</li></ul>
          </div>
          <div class="page-num">{{ r.page }} 1</div>
        </div>
        <div class="a4-page">
          <div class="page-content">
            <div class="section-title"><div class="title-blue-bar"></div><span>{{ r.experienceTitle }} ({{ r.continued }})</span></div>
            <div class="sub-title">{{ r.achievementsLabel }}</div>
            <ul class="text-list"><li v-for="item in r.honglajiaoAchievements" :key="item">{{ item }}</li></ul>
            <div class="item-head"><span>{{ r.jinzhu }}</span><span>2022.01-2023.05</span></div>
            <ul class="text-list"><li v-for="item in r.jinzhuDuties" :key="item">{{ item }}</li></ul>
            <div class="item-head"><span>{{ r.dongjia }}</span><span>2021.08-2021.12</span></div>
            <ul class="text-list"><li v-for="item in r.dongjiaDuties" :key="item">{{ item }}</li></ul>
            <div class="item-head"><span>{{ r.wuyou }}</span><span>2021.04-2021.08</span></div>
            <div class="sub-title">{{ r.dutiesLabel }}</div><ul class="text-list"><li v-for="item in r.wuyouDuties" :key="item">{{ item }}</li></ul>
            <div class="sub-title">{{ r.achievementsLabel }}</div><ul class="text-list"><li v-for="item in r.wuyouAchievements" :key="item">{{ item }}</li></ul>
            <div class="item-head"><span>{{ r.xiaosi }}</span><span>2021.02-2021.04</span></div>
            <ul class="text-list"><li v-for="item in r.xiaosiDuties" :key="item">{{ item }}</li></ul>
            <div class="item-head"><span>{{ r.dingye }}</span><span>2019.04-2021.01</span></div>
            <div class="sub-title">{{ r.dutiesLabel }}</div><ul class="text-list"><li v-for="item in r.dingyeDuties" :key="item">{{ item }}</li></ul>
            <div class="sub-title">{{ r.achievementsLabel }}</div><ul class="text-list"><li v-for="item in r.dingyeAchievements" :key="item">{{ item }}</li></ul>
          </div>
          <div class="page-num">{{ r.page }} 2</div>
        </div>

        <div class="a4-page">
          <div class="page-content">
            <div class="item-head"><span>{{ r.heima }}</span><span>2018.02-2019.03</span></div>
            <ul class="text-list"><li v-for="item in r.heimaDuties" :key="item">{{ item }}</li></ul>
            <div class="item-head"><span>{{ r.szwindow }}</span><span>2016.09-2017.12</span></div>
            <ul class="text-list"><li v-for="item in r.szwindowDuties" :key="item">{{ item }}</li></ul>
            <div class="item-head"><span>{{ r.huaxing }}</span><span>2014.10-2016.06</span></div>
            <ul class="text-list"><li v-for="item in r.huaxingDuties" :key="item">{{ item }}</li></ul>
            <div class="section-title"><div class="title-blue-bar"></div><span>{{ r.projectsTitle }}</span></div>
            <div v-for="proj in r.projects" :key="proj.name">
              <div class="item-head"><span>{{ proj.name }} &nbsp;&nbsp; {{ proj.role }}</span><span>{{ proj.time }}</span></div>
              <ul v-if="proj.items" class="text-list"><li v-for="item in proj.items" :key="item">{{ item }}</li></ul>
              <div v-else class="edu-content">{{ proj.desc }}</div>
            </div>
          </div><div class="page-num">{{ r.page }} 3</div>
        </div>
        <div class="a4-page">
          <div class="page-content">
            <div class="section-title"><div class="title-blue-bar"></div><span>{{ r.projectsTitle }} ({{ r.continued }})</span></div>
            <div v-for="proj in r.projects2" :key="proj.name">
              <div class="item-head"><span>{{ proj.name }} &nbsp;&nbsp; {{ proj.role }}</span><span>{{ proj.time }}</span></div>
              <ul v-if="proj.items" class="text-list"><li v-for="item in proj.items" :key="item">{{ item }}</li></ul>
              <div v-else class="edu-content" :style="proj.desc ? 'padding:0 8px 6px;color:#374151;' : ''">{{ proj.desc }}</div>
            </div>
            <div class="section-title"><div class="title-blue-bar"></div><span>{{ r.educationTitle }}</span></div>
            <div class="edu-head"><span>2011-2014</span><span>{{ r.school }}</span><span>{{ r.major }}</span></div>
            <!-- <div class="edu-content"><p>{{ r.eduHonors }}</p></div> -->
            <div class="section-title"><div class="title-blue-bar"></div><span>{{ r.certsTitle }}</span></div>
            <div class="edu-content">{{ r.certs }}</div>
          </div><div class="page-num">{{ r.page }} 4</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'

useHead({ title: '戚键 - 全栈工程师 | Qi Jian - Full-Stack Engineer' })

const resumeWrap = ref<HTMLElement | null>(null)
const isDouble = ref(false)
const resumeLang = ref<'zh' | 'en'>('zh')

function toggleMode() { isDouble.value = !isDouble.value }
function printResume() { window.print() }

async function downloadPDF() {
  const wrap = resumeWrap.value
  if (!wrap) return
  const wasDouble = isDouble.value
  if (wasDouble) isDouble.value = false
  await nextTick()
  wrap.classList.add('pdf-generating')
  const pages = wrap.querySelectorAll('.a4-page')
  if (pages.length === 0) { alert('未找到简历页面！'); wrap.classList.remove('pdf-generating'); if (wasDouble) isDouble.value = true; return }
  try {
    const html2canvas = (await import('html2canvas')).default
    const { jsPDF } = await import('jspdf')
    const pdf = new jsPDF('p', 'mm', 'a4')
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i] as HTMLElement
      const rect = page.getBoundingClientRect()
      const canvas = await html2canvas(page, {
        scale: 3,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: rect.width,
        height: rect.height,
        imageTimeout: 15000,
        removeContainer: false,
        allowTaint: true,
        foreignObjectRendering: false
      })
      const imgData = canvas.toDataURL('image/png', 1.0)
      if (i > 0) pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297)
    }
    pdf.save(resumeLang.value === 'zh' ? 'JamesChy_全栈工程师简历.pdf' : 'JamesChy_FullStack_Resume.pdf')
  } catch (err) { console.error('PDF生成失败:', err); alert('生成PDF失败，请重试。') }
  finally { wrap.classList.remove('pdf-generating'); if (wasDouble) isDouble.value = true }
}

const data = {
  zh: {
    print: '打印', download: '下载',singleMode: '单排', doubleMode: '双排',
    name: '戚键',
    header: ['男 | 籍贯：湖北黄冈', '电话：13268367002 | 邮箱：chig@foxmail.com', '标签：全栈工程师 | 前端开发 | 独立站开发', '意向：全职 | 期望薪资：25K-35k | 期望城市：深圳', '博客：<a href="https://www.cnblogs.com/chig/">https://www.cnblogs.com/chig/</a>'],
    advantagesTitle: '个人优势',
    advantages: [
      '本人拥有8年Web开发、2年技术主管经验，深耕网站建设及运维，擅长各类前端网站、后台系统建设及配套开发，实战经验丰富。熟练运用Shopify、WordPress、帝国CMS、织梦等主流建站系统，可独立完成海外独立从技术选型、环境部署、页面开发、响应式适配，到支付接口对接、广告渠道联调、安全防护、seo优化的全流程落地，熟悉英法葡西日韩越等多语言版本开发，主导多款海外品牌独立站顺利上线运营。',
      '精通PHP、JavaScript、CSS，熟练掌握Vue、Tailwind、Bootstrap、Nuxt、echarts、UniApp、Thinkphp等前后端框架，同时熟练使用Trae、Copilot、Claude等AI工具辅助功能开发，依托AI赋能快速上手新技术，独立完成基于Nuxt4、Webman等前沿框架的项目开发，大幅提升研发效率。熟悉Linux、MySQL、Git版本管理，熟悉Python数据爬取、清洗与可视化分析，具备专业SEO优化能力。',
      '兼具团队管理与项目统筹能力，擅长任务拆解、进度管控、代码评审及安全运维，搭建过技术规范与容灾备份体系，可独立胜任全栈开发及独立站全链路工作。',
    ],
    experienceTitle: '工作经历', dutiesLabel: '工作内容', achievementsLabel: '工作业绩', continued: '续',
    honglajiao: '深圳市红辣椒网络科技有限公司   全栈工程师',
    honglajiaoDuties: ['负责公司web官网，落地页等前端技术开发(vue)','负责App数据运营后台开发(thinkphp)','负责公司英文独立站开发(wordpress)','负责公司直播web前端开发(nuxt4)','负责公司比分h5项目开发(uniapp)','负责海外站点数据分析系统可视化开发(webman)','负责其他前端部分、服务器运营部分开发或维护','负责各个运营后台可视化数据图表开发(echarts)','负责运营部门所需数据算法开发(Python)','负责保证数据后台数据同步、计算、存储等稳定'],
    honglajiaoAchievements: ['运用thinkphp框架，独立开发了3套数据展示后台','实现多套数据库数据交互计算算法确定，以及数据输出，图表开发等','实现多套数据库数据实时同步计算，并写入数据后台数据库，实现连续4个月无人维护稳定运行，实现6个月稳定计算无异常波动','所开发的数据后台，对运营投放、预算支出、方案调整提供坚实支撑','基于nuxt3开发直播Web端，完善APP网页配套能力'],
    jinzhu: '上饶市金蛛网络科技有限公司   技术合伙人', jinzhuDuties: ['办公网络环境搭建、全站开发迭代、SEO技术培训','对外技术对接、网站安全巡检、故障应急处理'],
    dongjia: '深圳市董家科技有限公司   前端开发工程师', dongjiaDuties: ['WordPress独立站搭建、支付/广告接口联调','对接Facebook/Google广告，落地页开发与订单统计'],
    wuyou: '深圳市无忧无虑网络科技有限公司   技术合伙人', wuyouDuties: ['全站开发、安防反渗透、对外技术指导、SEO统筹、财务报表管理'],
    wuyouAchievements: ['搭建5台服务器集群，完成15个网站前后端、容灾迁移','定制多款CMS专用SEO插件，抵御10次服务器渗透','广告埋点开发，完成项目站点交割迁移'],
    xiaosi: '深圳小思科技有限公司   前端开发工程师', xiaosiDuties: ['Shopify独立站搭建、支付/物流/BBS系统对接','多部门订单数据同步、境外广告技术支持'],
    dingye: '深圳鼎业广告传媒有限公司   技术主管', dingyeDuties: ['团队任务分配、Git代码规范、全品类CMS建站维护','反CC/镜像/渗透防护、服务器容灾备份机制搭建'],
    dingyeAchievements: ['交付多门户/下载站，建立完整运维规范，全年站点安全稳定'],
    heima: '深圳黑马纵腾网络科技有限公司   前端开发工程师', heimaDuties: ['电商模块化模板、APP网页化、数据可视化后台开发'],
    szwindow: '深圳之窗网络有限公司   Web前端', szwindowDuties: ['PC/移动端改版、专题开发、Linux运维、全站SEO优化'],
    huaxing: '深圳华星光电有限公司   电气工程师', huaxingDuties: ['自动化设备维护、日韩厂商对接、跨部门协调'],
    projectsTitle: '项目经历',
    projects: [
      { name: '下载站自动化流程系统', role: '全栈开发架构师', time: '2026.06-2026.07',  items: ['ECMS + Python + Deepseek，开发批量采集定时任务+自动转写+自动发布流程','成功实现每日发布5000条以下任意数量的工作流，大幅提升内容生产效率']},
      { name: '电商批量铺货系统', role: '全栈开发工程师', time: '2026.06-2026.06', items: ['ThinkPHP8 + LayUI + Python，从立项开发到上线仅用3天','实现商品批量采集、智能定价、一键上架全流程自动化']},
      { name: 'App推广落地页管理后台', role: '全栈开发工程师', time: '2026.02-2026.03', items: ['Webman + LayUI，管理多个推广落地页生成、更新、上包、更包等操作'] },
      { name: '闪电web海外版', role: '全栈开发', time: '2025.11-2026.02', items: ['WordPress + WooCommerce，中英国际化，插件开发'] },
      { name: '闪电web直播', role: '前端开发工程师', time: '2025.07-2025.09', items: ['Nuxt3+Tailwind SSR多端直播，中英越国际化，模块化迭代'] },
      { name: '闪电直播H5', role: '前端开发工程师', time: '2025.03-2025.05', items: ['Uniapp + Vue3 + TypeScript 同步闪电APP'] },
      { name: 'App运营可视化后台', role: '全栈开发工程师', time: '2023.11-2024.02', items: ['独立全流程开发数据平台，留存/付费/用户画像统计，7个月无人稳定运行'] },
      { name: '自动化百度采集器', role: '技术合伙人', time: '2022.01-2023.05', items: ['Python爬虫站群系统，十万级数据处理，3个月站点权重3'] },
      { name: 'Odinlake人体工学独立站', role: '独立站工程师', time: '2021.08-2021.12', items: ['WordPress多语言站，页面测速提升至A级，上线即获询盘'] },
    ],
    projects2: [
      { name: 'Fezen Shopify小家电站', role: '', time: '2021.01-2021.04', items: ['Shopify模板、支付、安全体系搭建，一月交付投放'] },
      { name: '51下载站（帝国CMS）', role: '', time: '2020.05-2020.12', items: ['下载门户全站开发，防采集防DDOS安全体系'] },
      { name: '红辣椒游戏官网平台', role: '', time: '2020.07-2020.08', desc: '帝国CMS游戏下载站，2周完成前后端、会员、备份模块' },
      { name: '鼎业广告管理系统', role: '', time: '2019.06-2019.09', desc: '广告投放与数据分析后台全栈开发' },
      { name: 'NightsWeb', role: '前端开发', time: '2019.02-2019.05', items: ['视频播放、列表跳转等前端交互开发'] },
      { name: '黑马后台电商模板模块化开发', role: '架构设计', time: '2018.10-2018.12', items: ['多设备自适应外贸建站模板，快速批量搭建站点'] },
      { name: 'Nights APP官网', role: '前端开发者', time: '2018.11', desc: '仿抖音海外版Web官网，兼容IE8，多端适配，视频动态监控' },
      { name: '深圳之窗年度改版', role: '前端开发', time: '2017.08-2017.09', desc: '门户网站全站重构，对接CMSTOP后台，SEO优化运维' },
      { name: '深圳之窗移动端', role: '原型+前端', time: '2017.03-2017.05', desc: 'Vue重构移动端，语音转换、视频接入，修复历史BUG' },
      { name: '深圳之窗车辆违章查询模块', role: '', time: '2016.11-2016.12', desc: '便民查询前端开发与维护' },
    ],
    educationTitle: '教育经历', school: '武汉职业技术大学', major: '电子信息工程技术',
    // eduHonors: '班级副班长，在校荣誉：优秀共青团员、电竞大赛优秀奖、马拉松团体季军',
    certsTitle: '资格证书', certs: '驾驶证C2、电工一级', page: '第',
  },
  en: {
    print: 'Print', download: 'Download',singleMode: 'Single', doubleMode: 'Double',
    name: 'Qi Jian',
    header: ['Male | Hubei, China', 'Phone: +86 13268367002 | Email: chig@foxmail.com', 'Tags: Full-Stack Engineer | Frontend Dev | E-commerce Dev', 'Status: Full-time | Salary: 25K-35K | Location: Shenzhen', 'Blog: <a href="https://www.cnblogs.com/chig/">https://www.cnblogs.com/chig/</a>'],
    advantagesTitle: 'Professional Summary',
    advantages: [
      '8 years of web development and 2 years of tech lead experience, specializing in website development and operations. Proficient in Shopify, WordPress, DedeCMS, and other mainstream CMS platforms. Capable of independently handling the full lifecycle of overseas e-commerce sites — from tech selection, environment setup, and responsive development to payment integration, ad channel configuration, security hardening, and SEO optimization. Experienced in multi-language development (EN/FR/PT/ES/JP/KR/VI).',
      'Proficient in PHP, JavaScript, CSS. Experienced with Vue, Tailwind, Bootstrap, Nuxt, ECharts, UniApp, ThinkPHP, and other frameworks. Skilled in using AI tools (Trae, Copilot, Claude) to accelerate development. Familiar with Linux, MySQL, Git, Python data scraping and visualization, and professional SEO techniques.',
      'Experienced in team management and project coordination. Skilled in task decomposition, progress tracking, code review, and security operations. Built technical standards and disaster recovery systems. Capable of independently handling full-stack development and end-to-end e-commerce site delivery.',
    ],
    experienceTitle: 'Work Experience', dutiesLabel: 'Responsibilities', achievementsLabel: 'Achievements', continued: 'Cont.',
    honglajiao: 'Shenzhen Red Pepper Network Technology    Full-Stack Engineer',
    honglajiaoDuties: ['Frontend development for company website and landing pages (Vue)','App data operations backend (ThinkPHP)','English e-commerce site development (WordPress)','Live streaming web frontend (Nuxt 4)','Sports score H5 project (UniApp)','Overseas data analytics system (Webman)','Other frontend and server maintenance','Operations dashboard with data visualization (ECharts)','Data algorithms for operations team (Python)','Ensuring data sync, computation, and storage stability'],
    honglajiaoAchievements: ['Independently developed 3 data visualization backends using ThinkPHP','Implemented cross-database data computation and chart development','Real-time data sync across multiple databases with 4+ months of unattended stable operation','Data insights provided solid support for ad spend and strategy adjustments','Developed live streaming web client with Nuxt 3'],
    jinzhu: 'Shangrao Jinzhu Network Technology    Tech Co-founder', jinzhuDuties: ['Office network setup, full-site development, SEO training','External tech coordination, security audits, incident response'],
    dongjia: 'Shenzhen Dongjia Technology    Frontend Developer', dongjiaDuties: ['WordPress e-commerce site setup, payment/ad API integration','Facebook/Google Ads integration, landing page development, order tracking'],
    wuyou: 'Shenzhen Wuyouwulv Network Technology    Tech Co-founder', wuyouDuties: ['Full-site development, security & anti-penetration, tech guidance, SEO, financial reporting'],
    wuyouAchievements: ['Built 5-server cluster, completed 15 websites with disaster recovery migration','Developed custom CMS SEO plugins, defended against 10 server penetration attempts','Ad tracking implementation, project migration and handover'],
    xiaosi: 'Shenzhen Xiaosi Technology    Frontend Developer', xiaosiDuties: ['Shopify store setup, payment/logistics/BBS system integration','Cross-department order data sync, overseas ad tech support'],
    dingye: 'Shenzhen Dingye Advertising Media    Tech Lead', dingyeDuties: ['Team task allocation, Git standards, CMS website maintenance','Anti-CC/mirror/penetration protection, server disaster recovery setup'],
    dingyeAchievements: ['Delivered multiple portals and download sites, established complete ops standards, year-round security stability'],
    heima: 'Shenzhen Heima Zongteng Network Technology    Frontend Developer', heimaDuties: ['E-commerce modular templates, app webification, data visualization dashboard'],
    szwindow: 'Shenzhen Window Network    Web Frontend', szwindowDuties: ['PC/Mobile redesign, special projects, Linux ops, site-wide SEO'],
    huaxing: 'Shenzhen Huaxing Optoelectronics    Electrical Engineer', huaxingDuties: ['Automation equipment maintenance, Japan/Korea vendor coordination, cross-department communication'],
    projectsTitle: 'Project Experience',
    projects: [
      { name: 'Download Site Automation System', role: 'Full-Stack Architect', time: '2026.06-2026.07', items: ['ECMS + Python + Deepseek, developed batch scraping, scheduled tasks, auto-transcription & auto-publishing workflow', 'Successfully implemented daily publishing of up to 5000 posts with customizable workflow automation'] },
      { name: 'E-commerce Bulk Listing System', role: 'Full-Stack Engineer', time: '2026.06-2026.06', items: ['ThinkPHP8 + LayUI + Python, from project initiation to launch in just 3 days', 'Implemented product bulk scraping, intelligent pricing, and one-click listing automation'] },
      { name: 'App Landing Page Management Backend', role: 'Full-Stack Engineer', time: '2026.02-2026.03', items: ['Webman + LayUI, managed landing page generation, updates, and app packaging'] },
      { name: 'Lightning Web International', role: 'Full-Stack Dev', time: '2025.11-2026.02', items: ['WordPress + WooCommerce, CN/EN i18n, plugin development'] },
      { name: 'Lightning Web Live', role: 'Frontend Engineer', time: '2025.07-2025.09', items: ['Nuxt 3 + Tailwind SSR multi-platform live streaming, CN/EN/VI i18n'] },
      { name: 'Lightning Live H5', role: 'Frontend Engineer', time: '2025.03-2025.05', items: ['UniApp + Vue 3 + TypeScript, synced with Lightning App'] },
      { name: 'App Operations Analytics Dashboard', role: 'Full-Stack Engineer', time: '2023.11-2024.02', items: ['Independent full-cycle data platform: retention, revenue, user profiling, 7 months stable'] },
      { name: 'Automated Baidu Scraper', role: 'Tech Co-founder', time: '2022.01-2023.05', items: ['Python crawler site cluster system, 100K+ data processing, site weight 3 in 3 months'] },
      { name: 'Odinlake Ergonomic E-commerce Site', role: 'E-commerce Engineer', time: '2021.08-2021.12', items: ['WordPress multi-language site, page speed grade A, inquiries on launch'] },

    ],
    projects2: [
      { name: 'Fezen Shopify Small Appliance Store', role: '', time: '2021.01-2021.04', items: ['Shopify template, payment, security setup, delivered in 1 month'] },
      { name: '51 Download Site (DedeCMS)', role: '', time: '2020.05-2020.12', items: ['Download portal full-site development, anti-scraping & anti-DDOS security'] },
      { name: 'Red Pepper Game Portal', role: '', time: '2020.07-2020.08', desc: 'DedeCMS game download site, frontend/backend/membership/backup in 2 weeks' },
      { name: 'Dingye Ad Management System', role: '', time: '2019.06-2019.09', desc: 'Ad delivery and data analytics backend full-stack development' },
      { name: 'NightsWeb', role: 'Frontend Dev', time: '2019.02-2019.05', items: ['Video playback, list navigation, and frontend interaction development'] },
      { name: 'Heima E-commerce Template System', role: 'Architecture Design', time: '2018.10-2018.12', items: ['Multi-device adaptive e-commerce templates, rapid bulk site deployment'] },
      { name: 'Nights APP Official Website', role: 'Frontend Developer', time: '2018.11', desc: 'TikTok-style overseas web portal, IE8 compatible, multi-device, video monitoring' },
      { name: 'Shenzhen Window Annual Redesign', role: 'Frontend Dev', time: '2017.08-2017.09', desc: 'Portal full-site refactoring, CMSTOP integration, SEO optimization' },
      { name: 'Shenzhen Window Mobile', role: 'Prototype + Frontend', time: '2017.03-2017.05', desc: 'Vue mobile refactoring, voice conversion, video integration, bug fixes' },
      { name: 'Shenzhen Window Traffic Violation Query', role: '', time: '2016.11-2016.12', desc: 'Public utility query frontend development and maintenance' },
    ],
    educationTitle: 'Education', school: 'Wuhan Polytechnic University', major: 'Electronic Information Engineering',
    // eduHonors: 'Class Vice Monitor. Honors: Outstanding Communist Youth League Member, Esports Competition Award, Marathon Team Bronze',
    certsTitle: 'Certifications', certs: "Driver's License C2, Electrician Level 1", page: 'Page ',
  },
}

const r = computed(() => data[resumeLang.value])
</script>

<style scoped>
@keyframes pageFadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes cardSlide { 0% { opacity: 0; transform: translateX(-10px); } 100% { opacity: 1; transform: translateX(0); } }

.tool-btn { padding: 8px 16px; border: none; border-radius: 8px; background: #217bdd; color: #fff; font-size: 14px; cursor: pointer; transition: all 0.25s ease; box-shadow: 0 2px 6px rgba(33,123,221,0.25); }
.tool-btn:hover { background: #1960b3; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(33,123,221,0.35); }
.tool-btn:active { transform: translateY(0); }

.resume-wrap { display: flex; flex-direction: column; gap: 32px; }
.resume-wrap.single-mode .a4-row { flex-direction: column; align-items: center; gap: 32px; }
.resume-wrap.double-mode .a4-row { flex-direction: row; gap: 40px; }

/* .a4-row { display: flex; flex-wrap: nowrap; gap: 40px; justify-content: center; } */
.a4-row { 
  display: flex; 
  flex-wrap: wrap;  /* ✅ 允许换行 - 每行显示2个，超出自动换行 */
  gap: 32px;        /* ✅ 调整间距为32px，更紧凑 */
  justify-content: center; 
}

/* 双排模式专用样式 */
.resume-wrap.double-mode .a4-row { 
  flex-direction: row; 
  flex-wrap: wrap;   /* ✅ 明确启用换行 */
  gap: 32px;         /* ✅ 统一间距 */
  justify-content: center; 
}
.a4-page { width: 210mm; height: 297mm; flex-shrink: 0; overflow-y: auto; background: #fff; border-radius: 12px; padding: 12mm; box-shadow: 0 8px 30px rgba(0,0,0,0.07); position: relative; display: flex; flex-direction: column; }
.a4-page::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, #217bdd, #639df0); }
.page-content { flex: 1; }
.page-num { width: 100%; text-align: center; font-size: 12px; color: #999; padding-top: 8px; margin-top: auto; border-top: 1px solid #eee; }
.a4-page::-webkit-scrollbar { width: 4px; }
.a4-page::-webkit-scrollbar-thumb { background: #c5d8f2; border-radius: 4px; }

.header-wrap { display: flex; gap: 24px; margin-bottom: 30px; align-items: flex-start; flex-direction: row-reverse; animation: cardSlide 0.6s ease-out; }
.avatar-box { height: 165px; width: auto; border: 1px solid #ccc; border-radius: 6px; overflow: hidden; box-shadow: 0 3px 10px rgba(0,0,0,0.08); transition: transform 0.3s ease; }
.avatar-box:hover { transform: scale(1.02); }
.avatar-box img { height: 100%; width: auto; object-fit: cover; display: block; }
.header-info { flex: 1; text-align: left; }
.header-info h1 { font-size: 32px; color: #111827; margin-bottom: 10px; text-align: left; letter-spacing: 1px; }
.header-contact { font-size: 15px; color: #374151; line-height: 1.8; text-align: left; }
.header-contact a { color: #217bdd; text-decoration: none; }

.section-title { display: flex; align-items: center; background: linear-gradient(90deg, #f0f6ff, #f7faff); height: 36px; margin: 26px 0 12px; border-radius: 6px; transition: background 0.3s ease; }
.section-title:hover { background: linear-gradient(90deg, #e6f0ff, #eff7ff); }
.title-blue-bar { background: linear-gradient(180deg, #217bdd, #4b93e8); height: 100%; width: 6px; border-radius: 3px; margin-right: 8px; }
.section-title span { font-size: 18px; font-weight: bold; color: #1f2937; }

.edu-content { font-size: 14px; line-height: 1.65; padding: 0 8px; color: #374151; text-align: left; }
.text-list { padding-left: 26px; font-size: 14px; line-height: 1.7; color: #374151; text-align: left; }
.text-list li { list-style-type: circle; margin: 6px 0; text-align: left; transition: padding-left 0.2s ease; }
.text-list li:hover { padding-left: 4px; color: #217bdd; }
.item-head { display: flex; justify-content: space-between; padding: 6px 8px; font-size: 15px; margin-top: 8px; text-align: left; font-weight: 500; color: #1f2937; }
.sub-title { font-weight: bold; margin: 10px 0 4px 8px; font-size: 15px; text-align: left; color: #334155; }
.edu-head { display: flex; justify-content: space-between; padding: 0 8px 6px; font-size: 15px; }

.pdf-generating .header-wrap { animation: none !important; transform: none !important; opacity: 1 !important; filter: none !important; -webkit-font-smoothing: antialiased !important; -moz-osx-font-smoothing: grayscale !important; text-rendering: optimizeLegibility !important; }
.pdf-generating .avatar-box { transform: none !important; image-rendering: -webkit-optimize-contrast !important; image-rendering: crisp-edges !important; }
.pdf-generating .avatar-box img { image-rendering: -webkit-optimize-contrast !important; image-rendering: crisp-edges !important; }
.pdf-generating .header-info h1 { font-weight: 700 !important; text-shadow: none !important; -webkit-text-stroke: 0 !important; letter-spacing: normal !important; }
.pdf-generating .header-contact { font-weight: 400 !important; text-shadow: none !important; }
.pdf-generating * { animation: none !important; transition: none !important; box-shadow: none !important; }

@media print {
  body * { visibility: hidden; }
  .resume-wrap, .resume-wrap * { visibility: visible; }
  .resume-wrap { position: absolute; left: 0; top: 0; width: 100%; display: flex !important; flex-direction: column !important; gap: 0 !important; }
  .a4-row { flex-direction: column !important; gap: 0 !important; page-break-after: always; }
  .a4-page { width: 210mm !important; height: 297mm !important; box-shadow: none !important; border-radius: 0 !important; margin: 0 !important; page-break-inside: avoid; overflow: hidden !important; }
  .a4-page::before { display: none !important; }
  .tool-btn { display: none !important; }
  .pt-10 > div:not(.resume-wrap) { display: none !important; }
}
</style>