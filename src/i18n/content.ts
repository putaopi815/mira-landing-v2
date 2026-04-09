export type Locale = "en" | "zh";

/** Stable keys for footer columns (labels come from `columnTitles`). */
export const footerColumnKeys = ["Product", "Company", "Legal"] as const;
export type FooterColumnKey = (typeof footerColumnKeys)[number];

const en = {
  nav: {
    product: "Product",
    technology: "Technology",
    about: "About",
    getStarted: "Get Started",
    toggleMenu: "Toggle menu",
    closeMenu: "Close menu",
    mobileSheetTitle: "Navigate",
    langEn: "English",
    langZh: "中文",
    langSwitch: "Language",
  },
  hero: {
    tag: "AI Recruiting Platform",
    titleLine1: "Your AI Recruiting",
    titleLine2: "Team.",
    titleAccent: "Always On.",
    subtitle:
      "Three AI agents analyze demand, scan the market, and source talent — in parallel, around the clock. You get a curated shortlist, not a pile of resumes.",
    ctaTrial: "Start Free Trial",
    ctaDemo: "Book a Demo",
    noCard: "No credit card required",
  },
  pain: {
    tag: "The Problem",
    headingBold: "$250 Billion.",
    headingRest: "Still Powered by Spreadsheets and Gut Feel.",
    intro:
      "White-collar recruiting is one of the largest professional services markets in the world. Yet the entire industry still runs on manual effort. Three problems keep it stuck:",
    items: [
      {
        stat: "2-3 hrs/day",
        title: "2-3 Hours a Day, Searching",
        body: "Recruiters spend a quarter of their workday on sourcing — scrolling, filtering, scanning profiles. Most of that effort produces nothing usable.",
      },
      {
        stat: "6-month window",
        title: "Markets Move Faster Than People Learn",
        body: "A hot sector has a six-month window. By the time a recruiter maps the talent landscape, the opportunity has shifted.",
      },
      {
        stat: "Zero retained",
        title: "When a Recruiter Leaves, Their Knowledge Leaves Too",
        body: "Years of industry insight, candidate relationships, and pattern recognition — none of it stays in the system. Every departure resets the clock.",
      },
    ],
    takeawayLabel: "Takeaway",
    takeawayTitle: "The prize is huge — the model still isn’t.",
    takeawayBodyBefore: "Even at",
    takeawayBodyAfter:
      " globally, recruiting mostly scales by adding people, not by compounding systems — so the ceiling stays stubbornly human.",
  },
  solution: {
    tag: "The Solution",
    heading: "Not Another Search Box.",
    headingAccent: "A Team.",
    intro:
      "Mira is a team of AI agents that works like a real recruiting team. Three specialists with different perspectives — analyzing, scouting, debating — to deliver candidates who actually fit.",
    agents: [
      {
        name: "Demand Agent",
        role: "Demand Analyst",
        description:
          "Breaks down the job requirement. Benchmarks it against real market data. Tells you when the brief is unrealistic — before you waste a week searching.",
      },
      {
        name: "Market Agent",
        role: "Market Scout",
        description:
          "Scans hiring trends, competitor moves, and talent flow signals. Knows which companies are growing, shrinking, or about to restructure.",
      },
      {
        name: "Talent Agent",
        role: "Talent Finder",
        description:
          "Searches across LinkedIn, GitHub, Twitter, and more. Merges identities across platforms. Builds a full picture of every candidate.",
      },
    ],
    roundtable: "Roundtable",
    coordinator: "Coordinator",
    roundtableBody:
      "Brings the three agents together. Surfaces disagreements, runs structured debates, and produces a shortlist with clear reasoning — not a black-box output.",
  },
  how: {
    tag: "How It Works",
    heading: "Three Agents. One Shortlist.",
    headingRest: "Zero Guesswork.",
    steps: [
      {
        label: "You Submit",
        title: "Drop in a job requirement",
        body: "Paste a JD, describe the role in your own words, or upload a brief. Mira takes it from there.",
      },
      {
        label: "Agents Work",
        title: "Three perspectives, running in parallel",
        body: "Demand analyzes the role. Market scans the landscape. Talent searches for people. They start at the same time and adjust as insights come in.",
      },
      {
        label: "Roundtable",
        title: "They debate. You decide.",
        body: "When agents disagree — on a candidate's fit, on market timing, on whether to relax a requirement — they hash it out. You see the reasoning and the final shortlist.",
      },
    ],
    chatHeader: "Roundtable — Live Discussion",
    chat: [
      {
        agent: "Market",
        message:
          "Meta just announced a FAIR restructure. Three team members in the target profile may be affected. Competition for these candidates will spike within 48 hours.",
      },
      {
        agent: "Talent",
        message: "Adjusting to urgent priority. Also flagging a former colleague in the same group — adding to search.",
      },
      {
        agent: "Demand",
        message:
          "If these candidates become available, the original salary range may not be competitive. Recommend increasing budget ceiling by 15%.",
      },
    ],
  },
  technology: {
    tag: "Technology",
    heading: "Recruiting Is a Reasoning Problem.",
    headingAccent: "We Built a Reasoning Engine.",
    intro:
      'Traditional recruiting tools match keywords. But hiring decisions aren\'t keyword problems. "3 years of experience" requires arithmetic. "0-to-1 experience" requires semantic understanding. "Public company background" requires world knowledge. MRE handles all of them.',
    mreLabel: "Core Engine",
    mreTitle: "MRE — Reasoning-First Matching",
    mreBody:
      "Our proprietary embedding model trained with reinforcement learning for recruiting-specific reasoning. Not a wrapper around GPT. A purpose-built engine for understanding what jobs really need and which people truly match.",
    traditional: "Traditional",
    traditionalExample:
      '"3 years RLHF experience" → keyword match → misses most qualified candidates',
    mreBadge: "MRE",
    mreExample:
      'Understands "3 years" is arithmetic, "RLHF" includes related skills → finds truly matching candidates',
    brightLabel: "BRIGHT Benchmark",
    brightCaption:
      "Worldwide among all embedding models on BRIGHT, the academic benchmark for reasoning-intensive retrieval.",
    dataLabel: "Data Intelligence",
    dataTitle: "Every Platform. One Profile.",
    dataBody:
      "Mira aggregates data from public sources, proprietary databases, and your private talent pool. Cross-platform identity mapping connects LinkedIn, GitHub, and social presence into a single picture.",
    platforms: ["LinkedIn", "GitHub", "Twitter", "Custom DB"],
    foundationLabel: "Foundation",
    foundationTitle: "Research-Backed",
    foundationBody:
      "4 published papers on arXiv covering reasoning-aware retrieval, test-time inference for embedding models, and recruiting-specific benchmarks.",
    papers: [
      "Reasoning-Aware Retrieval",
      "Test-Time Inference",
      "Recruiting Benchmarks",
      "Embedding RL",
    ],
  },
  social: {
    tag: "Traction",
    heading: "Not a Concept.",
    headingAccent: "Already Working.",
    stats: [
      { label: "Internal users", sub: "actively using Mira" },
      { label: "Worldwide", sub: "on BRIGHT benchmark" },
      { label: "Papers", sub: "published on arXiv" },
      { label: "Years of R&D", sub: "since 2022" },
    ],
    footnoteBefore: "Built by the AI team at ",
    footnoteAfter:
      " — one of China's largest publicly listed staffing firms — with firsthand access to real recruiting workflows, real consultants, and real placements.",
    careerIntl: "Career International",
  },
  digital: {
    tag: "Vision",
    heading: "Stop Selling Hours.",
    headingAccent: "Start Building Assets.",
    intro:
      "Sourcing is just the beginning. Mira is building toward a future where every recruiter owns a digital twin — an AI version of themselves that carries their expertise, works around the clock, and gets better with every placement.",
    points: [
      {
        title: "Your Skills, Preserved",
        body: "Train your digital twin with your industry knowledge, selection criteria, and judgment calls. Your expertise becomes a durable, compounding asset.",
      },
      {
        title: "24/7, Without Burnout",
        body: "Your digital twin sources candidates while you sleep, screens profiles while you're in meetings, and follows up while you focus on closing.",
      },
      {
        title: "From Sourcing to Full-Cycle",
        body: "Today: AI-powered sourcing. Next: outreach, screening, interview coordination. The goal: a complete recruiting platform.",
      },
    ],
    roadmapTitle: "Platform Roadmap",
    roadmap: [
      { phase: "Now", label: "Sourcing" },
      { phase: "Next", label: "Outreach" },
      { phase: "Then", label: "Screening" },
      { phase: "Vision", label: "Full-Cycle" },
    ],
  },
  finalCta: {
    title: "Your Next Great Hire Is Already Out There.",
    titleAccent: "Let Mira Find Them.",
    subtitle:
      "Three AI agents. Reasoning-first matching. Candidates who actually fit. Start sourcing smarter — in minutes.",
    ctaTrial: "Start Free Trial",
    ctaDemo: "Book a Demo",
    finePrint: "No credit card required · Free to start · Cancel anytime",
  },
  footer: {
    tagline: "AI recruiting that actually recruits.",
    columnTitles: {
      Product: "Product",
      Company: "Company",
      Legal: "Legal",
    },
    columns: {
      Product: ["Product", "Technology", "Pricing", "Changelog"],
      Company: ["About", "Careers", "Blog", "Contact"],
      Legal: ["Privacy Policy", "Terms of Service"],
    },
    copyright: "© 2025 Mira. All rights reserved.",
    social: ["Twitter", "LinkedIn", "GitHub"],
  },
};

const zh: typeof en = {
  nav: {
    product: "产品",
    technology: "技术",
    about: "关于",
    getStarted: "立即开始",
    toggleMenu: "展开菜单",
    closeMenu: "关闭菜单",
    mobileSheetTitle: "导航",
    langEn: "English",
    langZh: "中文",
    langSwitch: "语言",
  },
  hero: {
    tag: "AI 招聘平台",
    titleLine1: "你的 AI 招聘",
    titleLine2: "团队。",
    titleAccent: "全天候在线。",
    subtitle:
      "三位 AI 智能体并行分析需求、扫描市场、寻访人才，7×24 小时运转。你拿到的是精选短名单，而不是简历堆。",
    ctaTrial: "免费试用",
    ctaDemo: "预约演示",
    noCard: "无需绑定信用卡",
  },
  pain: {
    tag: "痛点",
    headingBold: "2500 亿美元市场。",
    headingRest: "却仍靠表格与直觉在运转。",
    intro:
      "白领招聘是全球最大的专业服务市场之一，但整个行业仍高度依赖人工。三大问题让行业停滞不前：",
    items: [
      {
        stat: "每天 2–3 小时",
        title: "每天 2–3 小时，都在搜人",
        body: "招聘顾问约四分之一的时间花在寻访上——刷列表、筛简历、看主页，大量精力换不来可用结果。",
      },
      {
        stat: "约 6 个月窗口",
        title: "市场比人学得更快",
        body: "热门赛道往往只有半年窗口。等顾问把人才地图摸清楚，机会早已转移。",
      },
      {
        stat: "零沉淀",
        title: "人走，经验也走",
        body: "多年行业洞察、候选人关系与判断模式都无法留在系统里。每一次离职都像按下重置键。",
      },
    ],
    takeawayLabel: "小结",
    takeawayTitle: "蛋糕很大——模式还没跟上。",
    takeawayBodyBefore: "即便全球规模已达 ",
    takeawayBodyAfter:
      "，招聘仍主要靠加人而不是沉淀系统——天花板依然被「人力」牢牢按住。",
  },
  solution: {
    tag: "方案",
    heading: "不是又一个搜索框。",
    headingAccent: "而是一支队伍。",
    intro:
      "Mira 是一支像真实招聘团队一样协作的 AI 智能体队伍。三位专家视角各异——分析、侦察、辩论——只为交付真正匹配的人选。",
    agents: [
      {
        name: "需求智能体",
        role: "需求分析",
        description:
          "拆解岗位要求，用真实市场对标，并在你白忙一周之前告诉你：这份 brief 是否不切实际。",
      },
      {
        name: "市场智能体",
        role: "市场侦察",
        description:
          "扫描招聘趋势、竞品动向与人才流动信号，判断哪些公司在扩张、收缩或即将重组。",
      },
      {
        name: "人才智能体",
        role: "人才寻访",
        description:
          "跨 LinkedIn、GitHub、社交平台等检索，合并多平台身份，拼出每位候选人的完整画像。",
      },
    ],
    roundtable: "圆桌",
    coordinator: "协调",
    roundtableBody:
      "把三位智能体拉到一起：呈现分歧、结构化辩论，并输出附带清晰推理的短名单——而不是黑盒结果。",
  },
  how: {
    tag: "如何运作",
    heading: "三位智能体。一份短名单。",
    headingRest: "少猜、多准。",
    steps: [
      {
        label: "你提交",
        title: "丢进一条招聘需求",
        body: "粘贴 JD、用自然语言描述岗位，或上传 brief。剩下的交给 Mira。",
      },
      {
        label: "智能体协作",
        title: "三种视角，并行推进",
        body: "需求分析拆解岗位，市场扫描版图，人才执行搜索。同时启动，并随新洞察持续调整。",
      },
      {
        label: "圆桌",
        title: "他们辩论，你来拍板",
        body: "当智能体在匹配度、市场时机或是否放宽条件上产生分歧时，会充分讨论。你能看到推理过程与最终短名单。",
      },
    ],
    chatHeader: "圆桌 — 实时讨论",
    chat: [
      {
        agent: "市场",
        message:
          "Meta 刚宣布 FAIR 重组，目标画像中约有三名成员可能受影响。这些候选人的竞争将在 48 小时内明显加剧。",
      },
      {
        agent: "人才",
        message: "已按紧急优先级调整检索。同时标记到同组前同事一名，已加入搜索范围。",
      },
      {
        agent: "需求",
        message:
          "若这些候选人进入市场，原薪酬区间可能缺乏竞争力。建议将预算上限上调约 15%。",
      },
    ],
  },
  technology: {
    tag: "技术",
    heading: "招聘本质是推理问题。",
    headingAccent: "我们造了推理引擎。",
    intro:
      "传统工具在做关键词匹配，但录用决策不是关键词题。「3 年经验」要算术；「0 到 1」要语义；「上市公司背景」要世界知识。MRE 一并覆盖。",
    mreLabel: "核心引擎",
    mreTitle: "MRE — 推理优先匹配",
    mreBody:
      "专为招聘推理训练的专有嵌入模型，结合强化学习微调。不是简单包一层 GPT，而是为「岗位真正需要什么、谁真正匹配」而打造。",
    traditional: "传统方式",
    traditionalExample: "「3 年 RLHF」→ 关键词命中 → 漏掉大量合适人选",
    mreBadge: "MRE",
    mreExample: "理解「3 年」是算术、「RLHF」包含相关技能 → 找到真正匹配的人",
    brightLabel: "BRIGHT 基准",
    brightCaption:
      "在全球各类嵌入模型中位居前列；BRIGHT 是面向重推理检索的学术基准。",
    dataLabel: "数据智能",
    dataTitle: "全平台数据，一张画像。",
    dataBody:
      "Mira 聚合公开来源、专有数据库与私有人才池。跨平台身份映射把 LinkedIn、GitHub 与社交足迹连成一体。",
    platforms: ["LinkedIn", "GitHub", "Twitter", "自定义库"],
    foundationLabel: "基础",
    foundationTitle: "研究支撑",
    foundationBody:
      "已在 arXiv 发表 4 篇论文，涵盖推理感知检索、嵌入模型测试时推理与招聘向基准等方向。",
    papers: ["推理感知检索", "测试时推理", "招聘基准", "嵌入 RL"],
  },
  social: {
    tag: "进展",
    heading: "不是概念验证。",
    headingAccent: "已经落地。",
    stats: [
      { label: "内部用户", sub: "正在使用 Mira" },
      { label: "全球排名", sub: "BRIGHT 基准" },
      { label: "论文", sub: "已发布于 arXiv" },
      { label: "研发积累", sub: "自 2022 年起" },
    ],
    footnoteBefore: "由",
    footnoteAfter:
      " AI 团队打造——中国领先的上市人力资源公司之一——深度贴近真实招聘流程、顾问作业与成单场景。",
    careerIntl: "科锐国际",
  },
  digital: {
    tag: "愿景",
    heading: "别只卖时间。",
    headingAccent: "开始沉淀资产。",
    intro:
      "寻访只是起点。Mira 正走向这样一个未来：每位顾问拥有自己的数字分身——承载专业判断、724 运转，并在每一次成单中不断变强。",
    points: [
      {
        title: "能力被保留",
        body: "用行业认知、筛选标准与判断习惯训练你的数字分身，让经验变成可复利、可传承的资产。",
      },
      {
        title: "724，不靠透支",
        body: "你休息时它在寻访，你开会时它在筛简历，你专注关单时它在跟进。",
      },
      {
        title: "从访寻到全流程",
        body: "今天：AI 驱动寻访。下一步：触达、筛选、面试协调。目标：完整招聘平台。",
      },
    ],
    roadmapTitle: "产品路线图",
    roadmap: [
      { phase: "当前", label: "寻访" },
      { phase: "下一步", label: "触达" },
      { phase: "随后", label: "筛选" },
      { phase: "愿景", label: "全流程" },
    ],
  },
  finalCta: {
    title: "下一位理想人选，也许已经在市场里。",
    titleAccent: "让 Mira 找到 TA。",
    subtitle: "三位智能体、推理优先匹配、真正契合的候选人。几分钟内，开启更聪明的寻访。",
    ctaTrial: "免费试用",
    ctaDemo: "预约演示",
    finePrint: "无需信用卡 · 免费开始 · 随时取消",
  },
  footer: {
    tagline: "会真正「招聘」的 AI。",
    columnTitles: {
      Product: "产品",
      Company: "公司",
      Legal: "法律",
    },
    columns: {
      Product: ["产品", "技术", "定价", "更新日志"],
      Company: ["关于", "招聘", "博客", "联系"],
      Legal: ["隐私政策", "服务条款"],
    },
    copyright: "© 2025 Mira. 保留所有权利。",
    social: ["Twitter", "LinkedIn", "GitHub"],
  },
};

export const messages: Record<Locale, typeof en> = { en, zh };

export type Messages = typeof en;
