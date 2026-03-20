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
    <h1 class="font-headline text-6xl lg:text-9xl leading-none mb-8 -ml-1">林正阅 <br/><span class="italic text-on-surface-variant/70">Zhengyue Lin</span></h1>
    <p class="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
      Researcher focused on <span class="text-primary font-medium">Condensed Matter Physics</span> and <span class="text-primary font-medium">AI for Science</span>. Exploring heat transport theory and computational materials through the lens of modern intelligence.
    </p>
    <div class="flex flex-wrap gap-8 mb-10 items-center">
      {% if site.author.github %}
      <a class="flex items-center gap-2 group transition-all hover:text-primary" href="https://github.com/{{ site.author.github }}">
        <span class="material-symbols-outlined text-lg opacity-60 group-hover:opacity-100 transition-opacity">code</span>
        <span class="font-label text-xs uppercase tracking-[0.2em] font-medium">GitHub</span>
      </a>
      {% endif %}
      {% if site.author.researchgate %}
      <a class="flex items-center gap-2 group transition-all hover:text-primary" href="{{ site.author.researchgate }}">
        <span class="material-symbols-outlined text-lg opacity-60 group-hover:opacity-100 transition-opacity">biotech</span>
        <span class="font-label text-xs uppercase tracking-[0.2em] font-medium">ResearchGate</span>
      </a>
      {% endif %}
      {% if site.author.orcid %}
      <a class="flex items-center gap-2 group transition-all hover:text-primary" href="{{ site.author.orcid }}">
        <span class="material-symbols-outlined text-lg opacity-60 group-hover:opacity-100 transition-opacity">school</span>
        <span class="font-label text-xs uppercase tracking-[0.2em] font-medium">ORCID</span>
      </a>
      {% endif %}
      {% if site.author.email %}
      <a class="flex items-center gap-2 group transition-all hover:text-primary" href="mailto:{{ site.author.email }}">
        <span class="material-symbols-outlined text-lg opacity-60 group-hover:opacity-100 transition-opacity">mail</span>
        <span class="font-label text-xs uppercase tracking-[0.2em] font-medium">Email</span>
      </a>
      {% endif %}
    </div>
    <div class="flex gap-4">
      <span class="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-label text-xs tracking-wider">热输运理论</span>
      <span class="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-label text-xs tracking-wider">AI for Science</span>
    </div>
  </div>
  <div class="col-span-12 lg:col-span-5 order-1 lg:order-2 mb-12 lg:mb-0">
    <div class="relative group">
      <div class="absolute -inset-6 bg-surface-container-low rounded-2xl -z-10 group-hover:bg-surface-container transition-colors duration-500"></div>
      <img alt="林正阅" class="w-full aspect-[4/5] object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" src="{{ site.author.avatar }}"/>
    </div>
  </div>
</section>

<!-- Education & Core Vision -->
<section class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-40" id="education">
  <div class="lg:col-span-8 bg-surface-container-low p-12 rounded-2xl">
    <div class="flex items-center gap-4 mb-10">
      <span class="material-symbols-outlined text-primary text-3xl">school</span>
      <h2 class="font-headline text-4xl">Academic Background</h2>
    </div>
    <div class="space-y-12">
      <div class="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div>
          <h3 class="font-headline text-3xl mb-2">University of Science and Technology of China</h3>
          <p class="font-body text-lg text-on-surface-variant italic mb-4">School of Engineering Science · 中国科学技术大学工程科学学院</p>
          <div class="flex flex-wrap gap-2">
            <span class="text-xs font-mono uppercase bg-primary/10 text-primary px-3 py-1 rounded">Undergraduate</span>
            <span class="text-xs font-mono uppercase bg-primary/10 text-primary px-3 py-1 rounded">Condensed Matter Physics</span>
            <span class="text-xs font-mono uppercase bg-primary/10 text-primary px-3 py-1 rounded">AI for Science</span>
          </div>
        </div>
        <span class="font-mono text-sm text-primary bg-primary-fixed px-4 py-2 rounded-full whitespace-nowrap">2024.09 — Present</span>
      </div>
    </div>
  </div>
  <div class="lg:col-span-4 bg-primary text-on-primary p-12 rounded-2xl flex flex-col justify-between group overflow-hidden relative">
    <span class="material-symbols-outlined text-6xl opacity-20 absolute -top-4 -right-4 rotate-12 transition-transform group-hover:scale-125">auto_awesome</span>
    <span class="material-symbols-outlined text-5xl">lightbulb</span>
    <div>
      <h2 class="font-headline text-4xl mb-6">Core Vision</h2>
      <p class="font-body text-lg text-on-primary/90 leading-relaxed">
        Bridging fundamental physics and scalable artificial intelligence to accelerate material discovery and thermal management technologies.
      </p>
    </div>
  </div>
</section>

<!-- Academic Honors -->
<section class="mb-40" id="honors">
  <div class="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-outline-variant/15 pb-12">
    <div>
      <p class="font-label text-primary text-sm tracking-[0.3em] uppercase mb-4">Distinction</p>
      <h2 class="font-headline text-6xl italic">Academic Honors</h2>
    </div>
    <p class="font-body text-on-surface-variant max-w-sm mt-6 md:mt-0 text-lg italic opacity-80">Acknowledging academic excellence, rigorous modeling, and competitive achievements.</p>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
    <div class="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-outline-variant/15 hover:bg-surface-container-low transition-all duration-500 px-4">
      <div class="flex items-center gap-8">
        <span class="font-mono text-surface-container-highest text-6xl group-hover:text-primary/40 transition-colors">01</span>
        <div>
          <h3 class="font-headline text-3xl group-hover:italic transition-all">Math Modeling Competition</h3>
          <p class="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-2">Provincial 1st Prize · 全国大学生数学建模竞赛 省一等奖</p>
        </div>
      </div>
      <span class="font-mono text-sm mt-4 md:mt-0 opacity-40">2025</span>
    </div>
    <div class="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-outline-variant/15 hover:bg-surface-container-low transition-all duration-500 px-4">
      <div class="flex items-center gap-8">
        <span class="font-mono text-surface-container-highest text-6xl group-hover:text-primary/40 transition-colors">02</span>
        <div>
          <h3 class="font-headline text-3xl group-hover:italic transition-all">Math Competition</h3>
          <p class="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-2">Anhui 3rd Prize · 第17届大学生数学竞赛 安徽赛区三等奖</p>
        </div>
      </div>
      <span class="font-mono text-sm mt-4 md:mt-0 opacity-40">2025</span>
    </div>
    <div class="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-outline-variant/15 hover:bg-surface-container-low transition-all duration-500 px-4">
      <div class="flex items-center gap-8">
        <span class="font-mono text-surface-container-highest text-6xl group-hover:text-primary/40 transition-colors">03</span>
        <div>
          <h3 class="font-headline text-3xl group-hover:italic transition-all">BYD Scholarship</h3>
          <p class="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-2">Academic Excellence · 比亚迪奖学金</p>
        </div>
      </div>
      <span class="font-mono text-sm mt-4 md:mt-0 opacity-40">2025</span>
    </div>
    <div class="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-outline-variant/15 hover:bg-surface-container-low transition-all duration-500 px-4">
      <div class="flex items-center gap-8">
        <span class="font-mono text-surface-container-highest text-6xl group-hover:text-primary/40 transition-colors">04</span>
        <div>
          <h3 class="font-headline text-3xl group-hover:italic transition-all">Yuanjian Scholarship</h3>
          <p class="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-2">Distinguished Merit · 远见奖学金</p>
        </div>
      </div>
      <span class="font-mono text-sm mt-4 md:mt-0 opacity-40">2024</span>
    </div>
    <div class="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-outline-variant/15 hover:bg-surface-container-low transition-all duration-500 px-4">
      <div class="flex items-center gap-8">
        <span class="font-mono text-surface-container-highest text-6xl group-hover:text-primary/40 transition-colors">05</span>
        <div>
          <h3 class="font-headline text-3xl group-hover:italic transition-all">Chemistry Olympiad (CChO)</h3>
          <p class="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-2">Guangdong Provincial 1st Prize · 第37届中国化学奥林匹克 广东省一等奖</p>
        </div>
      </div>
      <span class="font-mono text-sm mt-4 md:mt-0 opacity-40">2023</span>
    </div>
    <div class="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-outline-variant/15 hover:bg-surface-container-low transition-all duration-500 px-4">
      <div class="flex items-center gap-8">
        <span class="font-mono text-surface-container-highest text-6xl group-hover:text-primary/40 transition-colors">06</span>
        <div>
          <h3 class="font-headline text-3xl group-hover:italic transition-all">Chemistry Olympiad (CChO)</h3>
          <p class="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-2">Guangdong Provincial 1st Prize · 第36届中国化学奥林匹克 广东省一等奖</p>
        </div>
      </div>
      <span class="font-mono text-sm mt-4 md:mt-0 opacity-40">2022</span>
    </div>
  </div>
</section>

<!-- Publications -->
<section class="mb-40" id="publications">
  <h2 class="font-headline text-5xl mb-16 text-center">Publications & Intellectual Property</h2>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <!-- Scholarly Works -->
    <div class="bg-surface-container-low rounded-2xl p-10 border-t-8 border-primary shadow-sm hover:shadow-md transition-shadow">
      <div class="flex justify-between items-center mb-10">
        <h3 class="font-label font-bold text-sm uppercase tracking-[0.2em] text-primary">Scholarly Works</h3>
        <span class="material-symbols-outlined text-primary/50">menu_book</span>
      </div>
      <div class="space-y-8">
        <div class="bg-surface p-8 rounded-xl border border-outline-variant/10">
          <p class="font-body text-on-surface-variant text-center py-8 italic">暂无发表论文</p>
        </div>
      </div>
    </div>
    <!-- Patents -->
    <div class="bg-surface-container-highest/30 rounded-2xl p-10 border-t-8 border-secondary shadow-sm hover:shadow-md transition-shadow">
      <div class="flex justify-between items-center mb-10">
        <h3 class="font-label font-bold text-sm uppercase tracking-[0.2em] text-secondary">Patent Portfolio</h3>
        <span class="material-symbols-outlined text-secondary/50">verified</span>
      </div>
      <div class="space-y-8">
        <div class="bg-surface p-8 rounded-xl border border-outline-variant/10">
          <p class="font-body text-on-surface-variant text-center py-8 italic">暂无专利</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Conferences & Projects -->
<section class="mb-40" id="projects">
  <div class="flex justify-between items-end mb-16">
    <h2 class="font-headline text-5xl">Conferences & Projects</h2>
    <div class="hidden md:block h-[1px] bg-outline-variant/30 flex-grow mx-10 mb-4"></div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div class="bg-surface-container-low p-12 rounded-2xl">
      <div class="flex items-center gap-3 mb-6">
        <span class="material-symbols-outlined text-primary">hub</span>
        <h3 class="font-headline text-2xl">Academic Conferences</h3>
      </div>
      <p class="font-body text-on-surface-variant leading-relaxed italic">暂无学术会议经历</p>
    </div>
    <div class="bg-surface-container-low p-12 rounded-2xl">
      <div class="flex items-center gap-3 mb-6">
        <span class="material-symbols-outlined text-secondary">terminal</span>
        <h3 class="font-headline text-2xl">Projects & Initiatives</h3>
      </div>
      <p class="font-body text-on-surface-variant leading-relaxed italic">暂无项目经历</p>
    </div>
  </div>
</section>
