---
permalink: /
title: ""
excerpt: ""
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<!-- ==================== HERO SECTION ==================== -->
<section id="hero" class="relative min-h-[85vh] flex items-center overflow-hidden">
  <!-- Subtle gradient overlay -->
  <div class="absolute inset-0 bg-gradient-to-br from-surface via-surface to-surface-container-low opacity-80"></div>
  <!-- Decorative accent glow -->
  <div class="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
  <div class="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

  <div class="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

      <!-- Left: text content (7 cols) -->
      <div class="lg:col-span-7 space-y-8">
        <!-- Greeting label -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container border border-outline-variant/30">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span class="font-inter text-xs tracking-widest uppercase text-on-surface-variant">USTC &middot; 工程科学学院</span>
        </div>

        <!-- Name -->
        <h1 class="font-newsreader text-5xl md:text-6xl lg:text-7xl font-bold text-on-surface leading-tight">
          林正阅
        </h1>

        <!-- Subtitle -->
        <p class="font-newsreader text-xl md:text-2xl italic text-primary">
          凝聚态物理 &amp; AI for Science
        </p>

        <!-- Bio -->
        <p class="font-inter text-base md:text-lg text-on-surface-variant leading-relaxed max-w-xl">
          我目前就读于<span class="text-on-surface font-medium">中国科学技术大学</span>的工程科学学院，导师为<span class="text-on-surface font-medium">马浩教授</span>。我的研究兴趣聚焦于凝聚态物理的热输运理论以及 AI for Science 领域，致力于探索物理学与人工智能的交叉前沿。
        </p>

        <!-- CTA buttons -->
        <div class="flex flex-wrap gap-4 pt-2">
          <a href="#academic"
             target="_self"
             class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-inter text-sm font-semibold rounded-lg hover:bg-primary-fixed transition-all duration-200 no-underline shadow-lg shadow-primary/20">
            <span class="material-symbols-outlined" style="font-size: 18px;">school</span>
            查看学术档案
          </a>
          <a href="mailto:linzhengyue@mail.ustc.edu.cn"
             class="inline-flex items-center gap-2 px-6 py-3 border border-outline-variant text-on-surface-variant font-inter text-sm font-medium rounded-lg hover:border-primary hover:text-primary transition-all duration-200 no-underline">
            <span class="material-symbols-outlined" style="font-size: 18px;">mail</span>
            联系我
          </a>
        </div>
      </div>

      <!-- Right: portrait (5 cols) -->
      <div class="lg:col-span-5 flex justify-center lg:justify-end">
        <div class="relative group">
          <!-- Decorative ring -->
          <div class="absolute -inset-4 rounded-full border border-outline-variant/20 group-hover:border-primary/30 transition-colors duration-500"></div>
          <div class="absolute -inset-8 rounded-full border border-outline-variant/10 group-hover:border-primary/15 transition-colors duration-700"></div>
          <!-- Avatar image -->
          <img src="images/android-chrome-512x512.png"
               alt="林正阅"
               class="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl shadow-black/30 ring-2 ring-surface-container-high grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" />
        </div>
      </div>

    </div>
  </div>
</section>


<!-- ==================== RESEARCH DIRECTIONS ==================== -->
<section id="research" class="py-24 md:py-32">
  <div class="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16">

    <!-- Section header -->
    <div class="mb-16 md:mb-20">
      <p class="font-inter text-xs tracking-widest uppercase text-primary mb-3">Research Directions</p>
      <h2 class="font-newsreader text-3xl md:text-4xl font-bold text-on-surface">研究方向</h2>
      <div class="mt-4 w-16 h-0.5 bg-primary/40"></div>
    </div>

    <!-- Cards grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

      <!-- Card 1: Thermal Transport -->
      <div class="group relative p-8 rounded-2xl bg-surface-container border border-outline-variant/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
        <div class="flex items-start justify-between mb-6">
          <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
            <span class="material-symbols-outlined" style="font-size: 24px;">thermostat</span>
          </div>
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-inter font-medium bg-primary/10 text-primary">
            进行中
          </span>
        </div>
        <h3 class="font-newsreader text-xl font-bold text-on-surface mb-3">热输运理论</h3>
        <p class="font-inter text-sm text-on-surface-variant leading-relaxed">
          聚焦凝聚态物理中的热输运现象，研究声子、电子等准粒子的输运机制，探索热导率的微观理论框架与计算方法。
        </p>
      </div>

      <!-- Card 2: AI for Science -->
      <div class="group relative p-8 rounded-2xl bg-surface-container border border-outline-variant/20 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5">
        <div class="flex items-start justify-between mb-6">
          <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 text-secondary">
            <span class="material-symbols-outlined" style="font-size: 24px;">smart_toy</span>
          </div>
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-inter font-medium bg-secondary/10 text-secondary">
            进行中
          </span>
        </div>
        <h3 class="font-newsreader text-xl font-bold text-on-surface mb-3">AI for Science</h3>
        <p class="font-inter text-sm text-on-surface-variant leading-relaxed">
          利用机器学习与深度学习方法解决科学问题，探索人工智能在物理学研究中的应用，推动数据驱动的科学发现范式。
        </p>
      </div>

      <!-- Card 3: Academic Exploration -->
      <div class="group relative p-8 rounded-2xl bg-surface-container border border-outline-variant/20 hover:border-tertiary/30 transition-all duration-300 hover:shadow-lg hover:shadow-tertiary/5">
        <div class="flex items-start justify-between mb-6">
          <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-tertiary/10 text-tertiary">
            <span class="material-symbols-outlined" style="font-size: 24px;">explore</span>
          </div>
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-inter font-medium bg-tertiary/10 text-tertiary">
            探索中
          </span>
        </div>
        <h3 class="font-newsreader text-xl font-bold text-on-surface mb-3">学术探索</h3>
        <p class="font-inter text-sm text-on-surface-variant leading-relaxed">
          持续关注凝聚态物理与计算科学的交叉领域，积极探索新的研究方向与学术合作机会，拓展学科视野。
        </p>
      </div>

    </div>
  </div>
</section>


<!-- ==================== ACADEMIC BACKGROUND ==================== -->
<section id="academic" class="py-24 md:py-32 bg-surface-container-low">
  <div class="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

      <!-- Left: sticky heading -->
      <div class="lg:col-span-4">
        <div class="lg:sticky lg:top-32">
          <p class="font-inter text-xs tracking-widest uppercase text-primary mb-3">Academic Foundations</p>
          <h2 class="font-newsreader text-3xl md:text-4xl font-bold text-on-surface mb-4">学术背景</h2>
          <div class="w-16 h-0.5 bg-primary/40 mb-6"></div>
          <p class="font-inter text-sm text-on-surface-variant leading-relaxed">
            扎实的物理学与工程科学基础，在中国顶尖学府系统接受科研训练。
          </p>
        </div>
      </div>

      <!-- Right: timeline entries -->
      <div class="lg:col-span-8">
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-4 top-0 bottom-0 w-px bg-outline-variant/30"></div>

          <!-- Entry: USTC -->
          <div class="relative pl-12 pb-12">
            <!-- Timeline dot -->
            <div class="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-surface-container-low"></div>

            <div class="p-6 md:p-8 rounded-2xl bg-surface-container border border-outline-variant/20">
              <div class="flex flex-wrap items-center gap-3 mb-4">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-inter font-medium bg-primary/10 text-primary">
                  本科在读
                </span>
                <span class="font-inter text-xs text-on-surface-variant">2024.09 - 至今</span>
              </div>

              <div class="flex items-center gap-3 mb-3">
                <img src="images/ustc.png" alt="USTC" class="w-8 h-8 object-contain" />
                <div>
                  <h3 class="font-newsreader text-lg font-bold text-on-surface">中国科学技术大学</h3>
                  <p class="font-inter text-sm text-on-surface-variant">工程科学学院</p>
                </div>
              </div>

              <div class="mt-4 pt-4 border-t border-outline-variant/20">
                <div class="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span class="material-symbols-outlined" style="font-size: 16px;">person</span>
                  <span class="font-inter">导师：<span class="text-on-surface font-medium">马浩教授</span></span>
                </div>
                <div class="flex items-center gap-2 text-sm text-on-surface-variant mt-2">
                  <span class="material-symbols-outlined" style="font-size: 16px;">location_on</span>
                  <span class="font-inter">中国 安徽 合肥</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


<!-- ==================== HONORS & AWARDS ==================== -->
<section id="honors" class="py-24 md:py-32">
  <div class="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16">

    <!-- Section header -->
    <div class="mb-16 md:mb-20">
      <p class="font-inter text-xs tracking-widest uppercase text-primary mb-3">Honors &amp; Awards</p>
      <h2 class="font-newsreader text-3xl md:text-4xl font-bold text-on-surface">荣誉奖项</h2>
      <div class="mt-4 w-16 h-0.5 bg-primary/40"></div>
    </div>

    <!-- Honors grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

      <!-- Honor 1 -->
      <div class="relative p-8 rounded-2xl bg-surface-container border border-outline-variant/20 border-l-4 border-l-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
        <span class="font-newsreader text-5xl font-bold text-primary/15 absolute top-4 right-6 select-none">01</span>
        <div class="relative">
          <span class="font-inter text-xs text-on-surface-variant">2025</span>
          <h3 class="font-newsreader text-lg font-bold text-on-surface mt-2 mb-3">数学建模省一等奖</h3>
          <p class="font-inter text-sm text-on-surface-variant leading-relaxed">
            全国大学生数学建模竞赛省级一等奖，展现了扎实的数理建模与问题求解能力。
          </p>
        </div>
      </div>

      <!-- Honor 2 -->
      <div class="relative p-8 rounded-2xl bg-surface-container border border-outline-variant/20 border-l-4 border-l-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
        <span class="font-newsreader text-5xl font-bold text-primary/15 absolute top-4 right-6 select-none">02</span>
        <div class="relative">
          <span class="font-inter text-xs text-on-surface-variant">2025</span>
          <h3 class="font-newsreader text-lg font-bold text-on-surface mt-2 mb-3">比亚迪奖学金</h3>
          <p class="font-inter text-sm text-on-surface-variant leading-relaxed">
            获得比亚迪奖学金资助，表彰在学业和科研方面的突出表现与发展潜力。
          </p>
        </div>
      </div>

      <!-- Honor 3 -->
      <div class="relative p-8 rounded-2xl bg-surface-container border border-outline-variant/20 border-l-4 border-l-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
        <span class="font-newsreader text-5xl font-bold text-primary/15 absolute top-4 right-6 select-none">03</span>
        <div class="relative">
          <span class="font-inter text-xs text-on-surface-variant">2024</span>
          <h3 class="font-newsreader text-lg font-bold text-on-surface mt-2 mb-3">远见奖学金</h3>
          <p class="font-inter text-sm text-on-surface-variant leading-relaxed">
            获得远见奖学金，肯定了在学术追求与前沿视野方面的持续努力。
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


<!-- ==================== PUBLICATIONS & PATENTS ==================== -->
<section id="publications" class="py-24 md:py-32 bg-surface-container-low">
  <div class="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16">

    <!-- Section header -->
    <div class="mb-16 md:mb-20">
      <p class="font-inter text-xs tracking-widest uppercase text-primary mb-3">Publications &amp; Patents</p>
      <h2 class="font-newsreader text-3xl md:text-4xl font-bold text-on-surface">论文与专利</h2>
      <div class="mt-4 w-16 h-0.5 bg-primary/40"></div>
    </div>

    <!-- Placeholder card -->
    <div class="max-w-2xl">
      <div class="p-8 md:p-10 rounded-2xl bg-surface-container border border-outline-variant/20 border-dashed">
        <div class="flex items-center gap-4 mb-6">
          <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-surface-container-high text-on-surface-variant">
            <span class="material-symbols-outlined" style="font-size: 24px;">edit_note</span>
          </div>
          <div>
            <h3 class="font-newsreader text-lg font-bold text-on-surface">即将发表</h3>
            <p class="font-inter text-xs text-on-surface-variant">研究成果整理中</p>
          </div>
        </div>
        <p class="font-inter text-sm text-on-surface-variant leading-relaxed">
          目前正在积极推进研究工作，相关论文与专利成果将在完成后陆续更新。敬请关注本页面的最新动态。
        </p>
        <div class="mt-6 flex items-center gap-2 text-xs text-on-surface-variant">
          <span class="material-symbols-outlined" style="font-size: 14px;">schedule</span>
          <span class="font-inter">持续更新中</span>
        </div>
      </div>
    </div>

  </div>
</section>


<!-- ==================== FOOTER ==================== -->
<footer class="py-16 md:py-20 border-t border-outline-variant/20">
  <div class="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16">

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

      <!-- Left: branding -->
      <div>
        <h3 class="font-newsreader text-2xl font-bold text-on-surface mb-3">林正阅</h3>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="font-inter text-xs px-3 py-1 rounded-full bg-surface-container text-on-surface-variant">物理学者</span>
          <span class="font-inter text-xs px-3 py-1 rounded-full bg-surface-container text-on-surface-variant">AI 研究者</span>
          <span class="font-inter text-xs px-3 py-1 rounded-full bg-surface-container text-on-surface-variant">工程科学</span>
        </div>
        <p class="font-inter text-sm text-on-surface-variant">
          中国科学技术大学 &middot; 工程科学学院
        </p>
      </div>

      <!-- Right: links -->
      <div class="flex flex-wrap gap-6 md:justify-end items-start">
        <a href="https://github.com/stellariums"
           class="inline-flex items-center gap-2 font-inter text-sm text-on-surface-variant hover:text-primary transition-colors duration-200 no-underline">
          <span class="material-symbols-outlined" style="font-size: 18px;">code</span>
          GitHub
        </a>
        <a href="https://orcid.org/0009-0003-1192-679X"
           class="inline-flex items-center gap-2 font-inter text-sm text-on-surface-variant hover:text-primary transition-colors duration-200 no-underline">
          <span class="material-symbols-outlined" style="font-size: 18px;">fingerprint</span>
          ORCID
        </a>
        <a href="https://www.researchgate.net/profile/Zhengyue-Lin"
           class="inline-flex items-center gap-2 font-inter text-sm text-on-surface-variant hover:text-primary transition-colors duration-200 no-underline">
          <span class="material-symbols-outlined" style="font-size: 18px;">science</span>
          ResearchGate
        </a>
        <a href="mailto:linzhengyue@mail.ustc.edu.cn"
           class="inline-flex items-center gap-2 font-inter text-sm text-on-surface-variant hover:text-primary transition-colors duration-200 no-underline">
          <span class="material-symbols-outlined" style="font-size: 18px;">mail</span>
          Email
        </a>
      </div>

    </div>

    <!-- Divider -->
    <div class="border-t border-outline-variant/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="font-inter text-xs text-on-surface-variant">
        &copy; 2025 林正阅. All rights reserved.
      </p>
      <p class="font-inter text-xs text-on-surface-variant">
        中国科学技术大学 &middot; 安徽合肥
      </p>
    </div>

  </div>
</footer>
