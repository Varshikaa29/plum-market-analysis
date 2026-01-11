<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plum: The Clean Beauty & Fragrance Disruption</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .tab-content { display: none; }
        .tab-content.active { display: block; }
        .tab-button.active { 
            color: #ffffff; 
            background-color: #5a308c;
            border-radius: 9999px;
            box-shadow: 0 10px 15px -3px rgba(90, 48, 140, 0.3);
        }
        .bg-plum { background-color: #5a308c; }
        .text-plum { color: #5a308c; }
        .bg-vanilla { background-color: #FFF9C4; }
        .bg-rumba { background-color: #E0F7FA; }
        .bg-velvet { background-color: #FCE4EC; }
        
        @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(2deg); }
            100% { transform: translateY(0px) rotate(0deg); }
        }
        .float-anim { animation: float 4s ease-in-out infinite; }

        .gradient-text {
            background: linear-gradient(to right, #5a308c, #d53f8c, #ed64a6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .scroll-reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }
        .scroll-reveal.visible {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body class="bg-[#faf5ff] text-slate-900 selection:bg-pink-200 overflow-x-hidden">

    <!-- Navbar -->
    <nav id="navbar" class="fixed top-0 w-full z-50 transition-all duration-300 py-4">
        <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-plum rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-purple-200 rotate-3 transition-transform hover:rotate-0">P</div>
                <div class="leading-tight">
                    <span class="block text-2xl font-black tracking-tighter text-plum">PLUM</span>
                    <span class="block text-[10px] font-bold tracking-[.3em] text-pink-500 uppercase">Chemistry with Heart</span>
                </div>
            </div>
            <div class="hidden md:flex gap-2 bg-white/60 backdrop-blur-md p-1.5 rounded-full border border-white/40 shadow-sm">
                <button onclick="switchTab('journey')" class="tab-button active px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-all">Journey</button>
                <button onclick="switchTab('disruption')" class="tab-button px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-all">Strategy</button>
                <button onclick="switchTab('numbers')" class="tab-button px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-all">Growth</button>
            </div>
            <button class="bg-plum text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-pink-600 transition-all shadow-lg active:scale-95">
                Download Study
            </button>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="pt-40 pb-24 px-6 relative">
        <div class="absolute top-0 left-0 w-full h-full -z-10">
            <div class="absolute top-20 right-[15%] w-[500px] h-[500px] bg-pink-300/10 rounded-full blur-[120px]"></div>
            <div class="absolute bottom-10 left-[10%] w-[400px] h-[400px] bg-cyan-300/10 rounded-full blur-[100px]"></div>
        </div>

        <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div class="space-y-10">
                <div class="inline-flex items-center gap-2 bg-white border border-purple-100 text-plum px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                    ✨ 2024 Market Analysis
                </div>
                <h1 class="text-7xl lg:text-9xl font-black leading-[0.85] text-slate-900">
                    Goodness <br><span class="gradient-text">Scales.</span>
                </h1>
                <p class="text-xl text-slate-600 leading-relaxed font-medium max-w-lg border-l-8 border-plum pl-8">
                    How Plum disrupted a crowded beauty market by trading celebrity vanity for <span class="text-plum font-bold">real results</span> and "Mood-first" fragrances.
                </p>
                <div class="flex flex-wrap gap-4">
                    <div class="bg-white px-6 py-4 rounded-[2rem] shadow-xl border border-purple-50 flex items-center gap-4 transition-transform hover:-translate-y-2">
                        <div class="w-12 h-12 bg-vanilla rounded-2xl flex items-center justify-center text-2xl">🍦</div>
                        <div>
                            <div class="text-xs font-black text-slate-400 uppercase">Top Seller</div>
                            <div class="font-black text-plum">Vanilla Vibes</div>
                        </div>
                    </div>
                    <div class="bg-white px-6 py-4 rounded-[2rem] shadow-xl border border-purple-50 flex items-center gap-4 transition-transform hover:-translate-y-2">
                        <div class="w-12 h-12 bg-rumba rounded-2xl flex items-center justify-center text-2xl">🌊</div>
                        <div>
                            <div class="text-xs font-black text-slate-400 uppercase">Iconic</div>
                            <div class="font-black text-cyan-600">Hawaiian Rumba</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative flex justify-center lg:justify-end">
                <div class="w-[380px] h-[500px] bg-gradient-to-tr from-plum to-pink-500 rounded-[5rem] rotate-2 relative shadow-[0_50px_100px_-20px_rgba(90,48,140,0.3)] overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&w=800&q=80" 
                         alt="Plum Product Aesthetics" 
                         class="w-full h-full object-cover mix-blend-overlay opacity-90 group-hover:scale-105 transition-transform duration-1000">
                    <div class="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-plum via-plum/20 to-transparent">
                        <div class="space-y-2">
                            <h2 class="text-white text-5xl font-black italic">₹400Cr+</h2>
                            <p class="text-pink-200 font-black uppercase tracking-[0.2em] text-xs">Current Annual Revenue</p>
                        </div>
                    </div>
                </div>
                <!-- Floating Mini Stats -->
                <div class="absolute -left-10 top-1/2 -translate-y-1/2 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-purple-50 float-anim hidden xl:block">
                    <div class="text-3xl font-black text-plum">1.2M+</div>
                    <div class="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Plumsters Community</div>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Dynamic Section -->
    <main class="max-w-7xl mx-auto px-6 py-12">
        
        <!-- JOURNEY TAB -->
        <section id="journey" class="tab-content active space-y-24 scroll-reveal">
            <div class="text-center space-y-4">
                <h2 class="text-5xl font-black text-plum italic">The Evolution Timeline</h2>
                <p class="text-slate-500 font-bold uppercase tracking-widest text-xs">A decade of chemistry with heart</p>
            </div>

            <div class="relative space-y-32">
                <div class="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-plum via-pink-400 to-yellow-300 hidden md:block"></div>
                
                <!-- Milestone 1 -->
                <div class="flex flex-col md:flex-row items-center gap-12 group">
                    <div class="flex-1 md:text-right">
                        <span class="px-4 py-1 bg-plum text-white rounded-full text-xs font-black mb-4 inline-block">2013</span>
                        <h3 class="text-3xl font-black text-slate-800 mb-4">The Clean Seed</h3>
                        <p class="text-slate-600 font-medium leading-relaxed">Shankar Prasad founds Plum as India's first 100% vegan, cruelty-free brand. No parabens, no phthalates, just "Goodness that delivers".</p>
                    </div>
                    <div class="w-16 h-16 rounded-[2rem] bg-white border-4 border-plum flex items-center justify-center z-10 shadow-2xl group-hover:rotate-45 transition-transform">🌱</div>
                    <div class="flex-1 hidden md:block"></div>
                </div>

                <!-- Milestone 2 -->
                <div class="flex flex-col md:flex-row items-center gap-12 group">
                    <div class="flex-1 hidden md:block"></div>
                    <div class="w-16 h-16 rounded-[2rem] bg-white border-4 border-pink-500 flex items-center justify-center z-10 shadow-2xl group-hover:-rotate-45 transition-transform">🧁</div>
                    <div class="flex-1">
                        <span class="px-4 py-1 bg-pink-500 text-white rounded-full text-xs font-black mb-4 inline-block">2020</span>
                        <h3 class="text-3xl font-black text-slate-800 mb-4">BodyLovin' Disruption</h3>
                        <p class="text-slate-600 font-medium leading-relaxed">The fragrance pivot. By launching "Vanilla Vibes", they tapped into a Gen-Z craving for gourmand (edible) scents, disrupting boring florals.</p>
                    </div>
                </div>

                <!-- Milestone 3 -->
                <div class="flex flex-col md:flex-row items-center gap-12 group">
                    <div class="flex-1 md:text-right">
                        <span class="px-4 py-1 bg-cyan-500 text-white rounded-full text-xs font-black mb-4 inline-block">2022</span>
                        <h3 class="text-3xl font-black text-slate-800 mb-4">Series C Scaling</h3>
                        <p class="text-slate-600 font-medium leading-relaxed">Raised $35M led by A91 Partners. Rapid expansion from online-only to 1,000+ towns and 15,000+ retail outlets across India.</p>
                    </div>
                    <div class="w-16 h-16 rounded-[2rem] bg-white border-4 border-cyan-400 flex items-center justify-center z-10 shadow-2xl group-hover:rotate-45 transition-transform">🚀</div>
                    <div class="flex-1 hidden md:block"></div>
                </div>

                <!-- Milestone 4 -->
                <div class="flex flex-col md:flex-row items-center gap-12 group pb-12">
                    <div class="flex-1 hidden md:block"></div>
                    <div class="w-16 h-16 rounded-[2rem] bg-white border-4 border-yellow-400 flex items-center justify-center z-10 shadow-2xl group-hover:-rotate-45 transition-transform">🌍</div>
                    <div class="flex-1">
                        <span class="px-4 py-1 bg-yellow-400 text-slate-900 rounded-full text-xs font-black mb-4 inline-block">2024</span>
                        <h3 class="text-3xl font-black text-slate-800 mb-4">Global Goodness</h3>
                        <p class="text-slate-600 font-medium leading-relaxed">Plum enters global markets (UAE, US) and achieves a high repeat rate of 65% across its top fragrance SKUs.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- DISRUPTION TAB -->
        <section id="disruption" class="tab-content space-y-24 scroll-reveal">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="space-y-12">
                    <div class="text-left space-y-4">
                        <h2 class="text-5xl font-black text-plum italic">The Disruption Framework</h2>
                        <p class="text-slate-500 font-bold tracking-widest text-xs uppercase">Why Plum won the shelf war</p>
                    </div>

                    <div class="space-y-8">
                        <div class="bg-white p-10 rounded-[3.5rem] shadow-xl border border-slate-100 group hover:shadow-2xl transition-all">
                            <h4 class="text-2xl font-black text-plum mb-4 flex items-center gap-3">
                                <span class="w-8 h-8 bg-vanilla rounded-lg flex items-center justify-center text-sm">1</span>
                                Mood-Based Fragrancing
                            </h4>
                            <p class="text-slate-600 font-medium">While legacy brands sold "Rose" or "Jasmine" (The Note), Plum sold "Vanilla Vibes" or "Hawaiian Rumba" (The Mood). They successfully connected scent to emotional escapism.</p>
                        </div>

                        <div class="bg-white p-10 rounded-[3.5rem] shadow-xl border border-slate-100 group hover:shadow-2xl transition-all">
                            <h4 class="text-2xl font-black text-pink-500 mb-4 flex items-center gap-3">
                                <span class="w-8 h-8 bg-velvet rounded-lg flex items-center justify-center text-sm">2</span>
                                Price Democratization
                            </h4>
                            <p class="text-slate-600 font-medium">They launched Eau De Parfum (EDP) concentrations at deodorant price points. Their 15ml pocket perfumes at ₹299 became the entry gateway for Gen-Z.</p>
                        </div>
                    </div>
                </div>

                <div class="bg-plum p-16 rounded-[5rem] text-white relative overflow-hidden">
                    <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-pink-500/20 rounded-full blur-[80px]"></div>
                    <div class="relative z-10 space-y-10">
                        <h3 class="text-4xl font-black leading-tight italic">Content as a <br>Business Moat.</h3>
                        <p class="text-purple-100 text-lg leading-relaxed font-medium">
                            Instead of standard celebrity endorsements, Plum built a community of 1.2M+ "Plumsters". 
                        </p>
                        <div class="grid grid-cols-2 gap-6">
                            <div class="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/20">
                                <div class="text-3xl font-black">6K+</div>
                                <div class="text-[10px] text-purple-200 uppercase font-bold tracking-widest mt-2">Monthly UGC Videos</div>
                            </div>
                            <div class="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/20">
                                <div class="text-3xl font-black">65%</div>
                                <div class="text-[10px] text-purple-200 uppercase font-bold tracking-widest mt-2">Organic Repeat Rate</div>
                            </div>
                        </div>
                        <div class="pt-8">
                            <button class="w-full bg-white text-plum py-5 rounded-3xl font-black uppercase text-xs tracking-widest hover:bg-pink-100 transition-colors">View Marketing Case Study</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- NUMBERS TAB -->
        <section id="numbers" class="tab-content space-y-20 scroll-reveal">
            <div class="text-center space-y-4">
                <h2 class="text-5xl font-black text-plum italic">Growth Metrics</h2>
                <p class="text-slate-500 font-bold uppercase tracking-widest text-xs">The Hard Truth behind the Scent</p>
            </div>

            <div class="grid md:grid-cols-4 gap-8">
                <div class="bg-white p-12 rounded-[4rem] shadow-2xl text-center border-b-8 border-plum">
                    <div class="text-5xl font-black text-plum mb-4">₹400Cr</div>
                    <div class="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-tight">Current Estimated ARR (FY24)</div>
                </div>
                <div class="bg-white p-12 rounded-[4rem] shadow-2xl text-center border-b-8 border-pink-500">
                    <div class="text-5xl font-black text-pink-500 mb-4">15K+</div>
                    <div class="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-tight">Physical Retail Points</div>
                </div>
                <div class="bg-white p-12 rounded-[4rem] shadow-2xl text-center border-b-8 border-cyan-500">
                    <div class="text-5xl font-black text-cyan-500 mb-4">50%</div>
                    <div class="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-tight">Fragrance Segment Growth</div>
                </div>
                <div class="bg-white p-12 rounded-[4rem] shadow-2xl text-center border-b-8 border-yellow-400">
                    <div class="text-5xl font-black text-yellow-500 mb-4">350+</div>
                    <div class="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-tight">Unique Product SKUs</div>
                </div>
            </div>

            <div class="bg-white p-16 md:p-24 rounded-[5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] border border-slate-100">
                <div class="grid lg:grid-cols-2 gap-20 items-center">
                    <div class="space-y-8">
                        <h3 class="text-4xl font-black text-plum italic">The Omnichannel Masterstroke</h3>
                        <p class="text-slate-600 font-medium text-lg leading-relaxed">
                            Plum realized that while people *buy* online, they *trial* offline. By securing shelf space in every Shoppers Stop, Lifestyle, and Nykaa On-Trend, they solved the biggest friction in fragrance: **Scent Discovery.**
                        </p>
                        <div class="space-y-6 pt-4">
                            <div>
                                <div class="flex justify-between text-xs font-black uppercase tracking-widest mb-3">Brand Recognition (Online)</div>
                                <div class="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div class="h-full bg-gradient-to-r from-plum to-pink-500 w-[92%] rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-xs font-black uppercase tracking-widest mb-3">Tier 2/3 Market Share</div>
                                <div class="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div class="h-full bg-gradient-to-r from-pink-500 to-yellow-400 w-[68%] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-8">
                        <div class="bg-vanilla h-48 rounded-[3rem] flex flex-col items-center justify-center p-8 text-center group transition-transform hover:-translate-y-2">
                            <span class="text-3xl mb-2">🍦</span>
                            <span class="font-black text-yellow-900 text-sm">Best Retention SKU</span>
                        </div>
                        <div class="bg-rumba h-48 rounded-[3rem] flex flex-col items-center justify-center p-8 text-center group transition-transform hover:-translate-y-2 mt-8">
                            <span class="text-3xl mb-2">🌊</span>
                            <span class="font-black text-cyan-900 text-sm">Most Gifted SKU</span>
                        </div>
                        <div class="bg-velvet h-48 rounded-[3rem] flex flex-col items-center justify-center p-8 text-center group transition-transform hover:-translate-y-2 -mt-8">
                            <span class="text-3xl mb-2">💖</span>
                            <span class="font-black text-pink-900 text-sm">Highest UGC Driver</span>
                        </div>
                        <div class="bg-purple-100 h-48 rounded-[3rem] flex flex-col items-center justify-center p-8 text-center group transition-transform hover:-translate-y-2">
                            <span class="text-3xl mb-2">🧴</span>
                            <span class="font-black text-plum text-sm">Daily Essential</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <!-- Detailed Analysis Footer (Completing the case study) -->
    <section class="max-w-7xl mx-auto px-6 pb-24 scroll-reveal">
        <div class="p-16 md:p-24 bg-plum rounded-[5rem] text-white relative overflow-hidden shadow-2xl">
            <div class="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
                <h2 class="text-5xl font-black italic">The Conclusion: Strategy is Scented.</h2>
                <p class="text-xl text-purple-100 font-medium leading-relaxed">
                    Plum’s success wasn't an accident. It was the result of combining <span class="text-white font-bold">Scientific Integrity</span> (Skincare roots) with <span class="text-white font-bold">Pop-Culture Playfulness</span> (Fragrance pivot). By building a brand that smells like a dessert but performs like a pharma-grade product, they carved a niche that global giants simply couldn't replicate in India.
                </p>
                <div class="pt-10 flex flex-col md:flex-row gap-6 justify-center items-center">
                    <div class="flex items-center gap-4 bg-white/10 px-8 py-5 rounded-3xl border border-white/20">
                        <div class="text-3xl">🎯</div>
                        <div class="text-left">
                            <div class="font-black">Target: Gen-Z / Millennials</div>
                            <div class="text-[10px] text-purple-200 uppercase font-bold">Psychographic Mapping</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 bg-white/10 px-8 py-5 rounded-3xl border border-white/20">
                        <div class="text-3xl">🏁</div>
                        <div class="text-left">
                            <div class="font-black">Goal: ₹1,000 Cr Milestone</div>
                            <div class="text-[10px] text-purple-200 uppercase font-bold">Projected FY26</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-slate-900 text-white py-24 px-6 rounded-t-[5rem]">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">
            <div class="space-y-8">
                <div class="flex items-center gap-3">
                    <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-plum font-black text-3xl rotate-6 transition-transform hover:rotate-0">P</div>
                    <span class="text-3xl font-black tracking-tighter">PLUM <span class="text-pink-500 italic">STRATEGY</span></span>
                </div>
                <p class="text-slate-400 font-medium max-w-sm text-lg">Detailed business analysis of India's favorite clean-beauty disruptor. Analyzing growth, distribution, and psychology.</p>
                <div class="flex gap-4">
                    <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-plum transition-colors cursor-pointer text-xl">in</div>
                    <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-plum transition-colors cursor-pointer text-xl">ig</div>
                    <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-plum transition-colors cursor-pointer text-xl">tw</div>
                </div>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-3 gap-12">
                <div class="space-y-6">
                    <div class="text-xs font-black uppercase tracking-[.4em] text-pink-400 opacity-50">Analysis</div>
                    <p class="text-slate-300 font-bold hover:text-white cursor-pointer transition-colors" onclick="switchTab('journey')">Evolution</p>
                    <p class="text-slate-300 font-bold hover:text-white cursor-pointer transition-colors" onclick="switchTab('disruption')">Marketing</p>
                    <p class="text-slate-300 font-bold hover:text-white cursor-pointer transition-colors" onclick="switchTab('numbers')">Financials</p>
                </div>
                <div class="space-y-6">
                    <div class="text-xs font-black uppercase tracking-[.4em] text-pink-400 opacity-50">Company</div>
                    <p class="text-slate-300 font-bold hover:text-white cursor-pointer transition-colors">About Case</p>
                    <p class="text-slate-300 font-bold hover:text-white cursor-pointer transition-colors">Methodology</p>
                    <p class="text-slate-300 font-bold hover:text-white cursor-pointer transition-colors">Press</p>
                </div>
                <div class="space-y-6 hidden md:block">
                    <div class="text-xs font-black uppercase tracking-[.4em] text-pink-400 opacity-50">Support</div>
                    <p class="text-slate-300 font-bold hover:text-white cursor-pointer transition-colors">Privacy</p>
                    <p class="text-slate-300 font-bold hover:text-white cursor-pointer transition-colors">Terms</p>
                </div>
            </div>
        </div>
        <div class="max-w-7xl mx-auto border-t border-white/5 mt-24 pt-12 text-center text-xs font-black uppercase tracking-[.5em] opacity-30 italic">
            Beauty Disruption Series • Vol 1: PLUM COSMETICS
        </div>
    </footer>

    <script>
        // Tab Management
        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');

            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
                if (btn.innerText.toLowerCase().includes(tabId.substring(0, 3))) {
                    btn.classList.add('active');
                }
            });

            // Smooth Scroll to Top of Main
            window.scrollTo({ top: 550, behavior: 'smooth' });
        }

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('bg-white/80', 'backdrop-blur-xl', 'shadow-2xl', 'py-2');
                nav.classList.remove('py-4');
            } else {
                nav.classList.remove('bg-white/80', 'backdrop-blur-xl', 'shadow-2xl', 'py-2');
                nav.classList.add('py-4');
            }

            // Scroll Reveal Logic
            document.querySelectorAll('.scroll-reveal').forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.9) {
                    el.classList.add('visible');
                }
            });
        });

        // Initialize scroll reveal
        window.dispatchEvent(new Event('scroll'));
    </script>
</body>
</html>
