---
permalink: /
title: ""
excerpt: ""
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<!-- Hero Section -->
<section class="editorial-grid mb-40" id="hero">
  <div class="col-span-12 lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
    <p class="font-label text-primary font-medium tracking-[0.2em] uppercase mb-4">USTC Engineering Science</p>
    <h1 class="font-headline text-6xl lg:text-9xl leading-none mb-8 -ml-1">林正阅 <br/><span class="italic text-on-surface-variant" style="opacity:0.7;">Zhengyue Lin</span></h1>
    <p class="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
      <span class="lang-en">Researcher focused on <span class="text-primary font-medium">Condensed Matter Physics</span> and <span class="text-primary font-medium">AI for Science</span>. Exploring heat transport theory and computational materials through the lens of modern intelligence.</span>
      <span class="lang-zh">研究方向为<span class="text-primary font-medium">凝聚态物理热输运理论</span>与<span class="text-primary font-medium">AI for Science</span>，致力于通过现代人工智能方法探索热输运理论与计算材料科学。</span>
    </p>
    <div class="flex flex-wrap gap-8 mb-10 items-center">
      {% if site.author.github %}
      <a class="flex items-center gap-2 group transition-all hover:text-primary" href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener">
        <span class="material-symbols-outlined text-lg" style="opacity:0.6;">code</span>
        <span class="font-label text-xs uppercase tracking-[0.2em] font-medium">GitHub</span>
      </a>
      {% endif %}
      {% if site.author.researchgate %}
      <a class="flex items-center gap-2 group transition-all hover:text-primary" href="{{ site.author.researchgate }}" target="_blank" rel="noopener">
        <span class="material-symbols-outlined text-lg" style="opacity:0.6;">biotech</span>
        <span class="font-label text-xs uppercase tracking-[0.2em] font-medium">ResearchGate</span>
      </a>
      {% endif %}
      {% if site.author.orcid %}
      <a class="flex items-center gap-2 group transition-all hover:text-primary" href="{{ site.author.orcid }}" target="_blank" rel="noopener">
        <span class="material-symbols-outlined text-lg" style="opacity:0.6;">school</span>
        <span class="font-label text-xs uppercase tracking-[0.2em] font-medium">ORCID</span>
      </a>
      {% endif %}
      {% if site.author.email %}
      <a class="flex items-center gap-2 group transition-all hover:text-primary" href="mailto:{{ site.author.email }}">
        <span class="material-symbols-outlined text-lg" style="opacity:0.6;">mail</span>
        <span class="font-label text-xs uppercase tracking-[0.2em] font-medium">Email</span>
      </a>
      {% endif %}
    </div>
    <div class="flex gap-4">
      <span class="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-label text-xs tracking-wider">
        <span class="lang-en">Heat Transport Theory</span><span class="lang-zh">热输运理论</span>
      </span>
      <span class="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-label text-xs tracking-wider">AI for Science</span>
    </div>
  </div>
  <div class="col-span-12 lg:col-span-5 order-1 lg:order-2 mb-12 lg:mb-0">
    <div class="relative group">
      <div class="absolute -inset-6 bg-surface-container-low rounded-2xl -z-10"></div>
      <img alt="林正阅" class="w-full aspect-[4/5] object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" src="{{ site.author.avatar }}"/>
    </div>
  </div>
</section>

<!-- Education & Core Vision -->
<section class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-40" id="education">
  <div class="lg:col-span-8 bg-surface-container-low p-12 rounded-2xl dark-card-bg">
    <div class="flex items-center gap-4 mb-10">
      <span class="material-symbols-outlined text-primary text-3xl">school</span>
      <h2 class="font-headline text-4xl">
        <span class="lang-en">Academic Background</span><span class="lang-zh">学术背景</span>
      </h2>
    </div>
    <div class="space-y-12">
      <div class="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div>
          <h3 class="font-headline text-3xl mb-2">
            <span class="lang-en">University of Science and Technology of China</span><span class="lang-zh">中国科学技术大学</span>
          </h3>
          <p class="font-body text-lg text-on-surface-variant italic mb-4">
            <span class="lang-en">School of Engineering Science · 中国科学技术大学工程科学学院</span>
            <span class="lang-zh">工程科学学院</span>
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="dark-chip text-xs font-mono uppercase px-3 py-1 rounded" style="background:rgba(0,88,188,0.1);color:#0058bc;">
              <span class="lang-en">Undergraduate</span><span class="lang-zh">本科在读</span>
            </span>
            <span class="dark-chip text-xs font-mono uppercase px-3 py-1 rounded" style="background:rgba(0,88,188,0.1);color:#0058bc;">
              <span class="lang-en">Condensed Matter Physics</span><span class="lang-zh">凝聚态物理</span>
            </span>
            <span class="dark-chip text-xs font-mono uppercase px-3 py-1 rounded" style="background:rgba(0,88,188,0.1);color:#0058bc;">AI for Science</span>
          </div>
        </div>
        <span class="font-mono text-sm text-primary bg-primary-fixed px-4 py-2 rounded-full whitespace-nowrap">2024.09 — Present</span>
      </div>
    </div>
  </div>
  <div class="lg:col-span-4 bg-primary text-on-primary p-12 rounded-2xl flex flex-col justify-between group overflow-hidden relative">
    <span class="material-symbols-outlined text-6xl absolute -top-4 -right-4 rotate-12 transition-transform group-hover:scale-125" style="opacity:0.2;">auto_awesome</span>
    <span class="material-symbols-outlined text-5xl">lightbulb</span>
    <div>
      <h2 class="font-headline text-4xl mb-6" style="color:inherit;">Core Vision</h2>
      <p class="font-body text-lg leading-relaxed" style="color:rgba(255,255,255,0.9);">
        <span class="lang-en">Bridging fundamental physics and scalable artificial intelligence to accelerate material discovery and thermal management technologies.</span>
        <span class="lang-zh">将基础物理与可扩展的人工智能相结合，加速材料发现与热管理技术的研究进程。</span>
      </p>
    </div>
  </div>
</section>

<!-- Academic Honors -->
<section class="mb-40" id="honors">
  <div class="flex flex-col md:flex-row justify-between items-end mb-20 pb-12" style="border-bottom:1px solid rgba(193,198,215,0.15);">
    <div>
      <p class="font-label text-primary text-sm tracking-[0.3em] uppercase mb-4">Distinction</p>
      <h2 class="font-headline text-6xl italic">
        <span class="lang-en">Academic Honors</span><span class="lang-zh">荣誉奖项</span>
      </h2>
    </div>
    <p class="font-body text-on-surface-variant max-w-sm mt-6 md:mt-0 text-lg italic" style="opacity:0.8;">
      <span class="lang-en">Acknowledging academic excellence, rigorous modeling, and competitive achievements.</span>
      <span class="lang-zh">学术卓越、竞赛成就与科研建模能力的认可。</span>
    </p>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
    <!-- 01 Math Modeling -->
    <div class="group flex flex-col md:flex-row md:items-center justify-between py-12 px-4 transition-all duration-500" style="border-bottom:1px solid rgba(193,198,215,0.15);">
      <div class="flex items-center gap-8">
        <span class="honor-num font-mono text-6xl" style="color:#e4e2e1;">01</span>
        <div>
          <h3 class="font-headline text-3xl group-hover:italic transition-all">
            <span class="lang-en">Math Modeling Competition</span><span class="lang-zh">全国大学生数学建模竞赛</span>
          </h3>
          <p class="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-2">
            <span class="lang-en">Provincial 1st Prize · 省一等奖</span><span class="lang-zh">省一等奖</span>
          </p>
        </div>
      </div>
      <span class="font-mono text-sm mt-4 md:mt-0" style="opacity:0.4;">2025</span>
    </div>
    <!-- 02 Math Competition -->
    <div class="group flex flex-col md:flex-row md:items-center justify-between py-12 px-4 transition-all duration-500" style="border-bottom:1px solid rgba(193,198,215,0.15);">
      <div class="flex items-center gap-8">
        <span class="honor-num font-mono text-6xl" style="color:#e4e2e1;">02</span>
        <div>
          <h3 class="font-headline text-3xl group-hover:italic transition-all">
            <span class="lang-en">Math Competition</span><span class="lang-zh">大学生数学竞赛</span>
          </h3>
          <p class="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-2">
            <span class="lang-en">Anhui 3rd Prize · 第17届 安徽赛区三等奖</span><span class="lang-zh">第17届 安徽赛区三等奖</span>
          </p>
        </div>
      </div>
      <span class="font-mono text-sm mt-4 md:mt-0" style="opacity:0.4;">2025</span>
    </div>
    <!-- 03 BYD Scholarship -->
    <div class="group flex flex-col md:flex-row md:items-center justify-between py-12 px-4 transition-all duration-500" style="border-bottom:1px solid rgba(193,198,215,0.15);">
      <div class="flex items-center gap-8">
        <span class="honor-num font-mono text-6xl" style="color:#e4e2e1;">03</span>
        <div>
          <h3 class="font-headline text-3xl group-hover:italic transition-all">
            <span class="lang-en">BYD Scholarship</span><span class="lang-zh">比亚迪奖学金</span>
          </h3>
          <p class="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-2">
            <span class="lang-en">Academic Excellence</span><span class="lang-zh">学术卓越</span>
          </p>
        </div>
      </div>
      <span class="font-mono text-sm mt-4 md:mt-0" style="opacity:0.4;">2025</span>
    </div>
    <!-- 04 Yuanjian Scholarship -->
    <div class="group flex flex-col md:flex-row md:items-center justify-between py-12 px-4 transition-all duration-500" style="border-bottom:1px solid rgba(193,198,215,0.15);">
      <div class="flex items-center gap-8">
        <span class="honor-num font-mono text-6xl" style="color:#e4e2e1;">04</span>
        <div>
          <h3 class="font-headline text-3xl group-hover:italic transition-all">
            <span class="lang-en">Yuanjian Scholarship</span><span class="lang-zh">远见奖学金</span>
          </h3>
          <p class="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-2">
            <span class="lang-en">Distinguished Merit</span><span class="lang-zh">杰出表现</span>
          </p>
        </div>
      </div>
      <span class="font-mono text-sm mt-4 md:mt-0" style="opacity:0.4;">2024</span>
    </div>
    <!-- 05 CChO 37th -->
    <div class="group flex flex-col md:flex-row md:items-center justify-between py-12 px-4 transition-all duration-500" style="border-bottom:1px solid rgba(193,198,215,0.15);">
      <div class="flex items-center gap-8">
        <span class="honor-num font-mono text-6xl" style="color:#e4e2e1;">05</span>
        <div>
          <h3 class="font-headline text-3xl group-hover:italic transition-all">
            <span class="lang-en">Chemistry Olympiad (CChO)</span><span class="lang-zh">中国化学奥林匹克</span>
          </h3>
          <p class="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-2">
            <span class="lang-en">Guangdong Provincial 1st Prize · 第37届 广东省一等奖</span><span class="lang-zh">第37届 广东省一等奖</span>
          </p>
        </div>
      </div>
      <span class="font-mono text-sm mt-4 md:mt-0" style="opacity:0.4;">2023</span>
    </div>
    <!-- 06 CChO 36th -->
    <div class="group flex flex-col md:flex-row md:items-center justify-between py-12 px-4 transition-all duration-500" style="border-bottom:1px solid rgba(193,198,215,0.15);">
      <div class="flex items-center gap-8">
        <span class="honor-num font-mono text-6xl" style="color:#e4e2e1;">06</span>
        <div>
          <h3 class="font-headline text-3xl group-hover:italic transition-all">
            <span class="lang-en">Chemistry Olympiad (CChO)</span><span class="lang-zh">中国化学奥林匹克</span>
          </h3>
          <p class="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-2">
            <span class="lang-en">Guangdong Provincial 1st Prize · 第36届 广东省一等奖</span><span class="lang-zh">第36届 广东省一等奖</span>
          </p>
        </div>
      </div>
      <span class="font-mono text-sm mt-4 md:mt-0" style="opacity:0.4;">2022</span>
    </div>
  </div>
</section>

<!-- Publications -->
<section class="mb-40" id="publications">
  <h2 class="font-headline text-5xl mb-16 text-center">
    <span class="lang-en">Publications &amp; Intellectual Property</span><span class="lang-zh">论文与专利</span>
  </h2>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <!-- Scholarly Works -->
    <div class="dark-card-bg rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow pub-card-border" style="background:#f6f3f2;border-top:8px solid #0058bc;">
      <div class="flex justify-between items-center mb-10">
        <h3 class="font-label font-bold text-sm uppercase tracking-[0.2em] text-primary">
          <span class="lang-en">Scholarly Works</span><span class="lang-zh">学术论文</span>
        </h3>
        <span class="material-symbols-outlined" style="color:rgba(0,88,188,0.5);">menu_book</span>
      </div>
      <div class="space-y-8">
        <div class="dark-card-inner rounded-xl p-8" style="background:#fcf9f8;border:1px solid rgba(193,198,215,0.1);">
          <p class="font-body text-on-surface-variant text-center py-8 italic">
            <span class="lang-en">No publications yet</span><span class="lang-zh">暂无发表论文</span>
          </p>
        </div>
      </div>
    </div>
    <!-- Patents -->
    <div class="dark-card-bg rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow pub-card-border-secondary" style="background:rgba(228,226,225,0.3);border-top:8px solid #515f74;">
      <div class="flex justify-between items-center mb-10">
        <h3 class="font-label font-bold text-sm uppercase tracking-[0.2em] text-secondary">
          <span class="lang-en">Patent Portfolio</span><span class="lang-zh">专利</span>
        </h3>
        <span class="material-symbols-outlined" style="color:rgba(81,95,116,0.5);">verified</span>
      </div>
      <div class="space-y-8">
        <div class="dark-card-inner rounded-xl p-8" style="background:#fcf9f8;border:1px solid rgba(193,198,215,0.1);">
          <p class="font-body text-on-surface-variant text-center py-8 italic">
            <span class="lang-en">No patents yet</span><span class="lang-zh">暂无专利</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Conferences & Projects -->
<section class="mb-40" id="projects">
  <div class="flex justify-between items-end mb-16">
    <h2 class="font-headline text-5xl">
      <span class="lang-en">Conferences &amp; Projects</span><span class="lang-zh">学术会议与项目</span>
    </h2>
    <div style="height:1px;background:rgba(193,198,215,0.3);flex-grow:1;margin:0 2.5rem 1rem;" class="hidden md:block"></div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div class="dark-card-bg p-12 rounded-2xl" style="background:#f6f3f2;">
      <div class="flex items-center gap-3 mb-6">
        <span class="material-symbols-outlined text-primary">hub</span>
        <h3 class="font-headline text-2xl">
          <span class="lang-en">Academic Conferences</span><span class="lang-zh">学术会议</span>
        </h3>
      </div>
      <p class="font-body text-on-surface-variant leading-relaxed italic">
        <span class="lang-en">No conference experience yet</span><span class="lang-zh">暂无学术会议经历</span>
      </p>
    </div>
    <div class="dark-card-bg p-12 rounded-2xl" style="background:#f6f3f2;">
      <div class="flex items-center gap-3 mb-6">
        <span class="material-symbols-outlined text-secondary">terminal</span>
        <h3 class="font-headline text-2xl">
          <span class="lang-en">Projects &amp; Initiatives</span><span class="lang-zh">项目经历</span>
        </h3>
      </div>
      <p class="font-body text-on-surface-variant leading-relaxed italic">
        <span class="lang-en">No project experience yet</span><span class="lang-zh">暂无项目经历</span>
      </p>
    </div>
  </div>
</section>
