"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bot, BarChart3, ShieldCheck, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect, useRef } from "react";
import type { KeyboardEvent } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CeramicMark, InsightRing } from "@/components/visuals/CeramicVisuals";

gsap.registerPlugin(useGSAP);

export default function Hero() {
    const { t, language } = useLanguage();
    const [activeTab, setActiveTab] = useState<"chat" | "dashboard">("chat");
    const [chatStep, setChatStep] = useState(1);
    const heroRef = useRef<HTMLElement>(null);
    const chatTabRef = useRef<HTMLButtonElement>(null);
    const dashboardTabRef = useRef<HTMLButtonElement>(null);

    const activateTab = (tab: "chat" | "dashboard") => {
        setActiveTab(tab);
        if (tab === "chat") setChatStep(1);
        (tab === "chat" ? chatTabRef : dashboardTabRef).current?.focus();
    };

    const handleTabKeyDown = (
        event: KeyboardEvent<HTMLButtonElement>,
        currentTab: "chat" | "dashboard",
    ) => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;

        event.preventDefault();

        const nextTab =
            event.key === "Home"
                ? "chat"
                : event.key === "End"
                  ? "dashboard"
                  : currentTab === "chat"
                    ? "dashboard"
                    : "chat";

        activateTab(nextTab);
    };

    // Auto-advance chat simulation steps
    useEffect(() => {
        if (activeTab !== "chat") return;
        
        const timer = setInterval(() => {
            setChatStep((prev) => (prev >= 4 ? 1 : prev + 1));
        }, 3500);

        return () => clearInterval(timer);
    }, [activeTab]);

    // Translations for the interactive mockup
    const mockupT = {
        en: {
            chatTab: "AI Smart Agent",
            dashTab: "Sentiment Analytics",
            status: "Online",
            chatbotTitle: "Lanna Ceramics Support",
            webhookOk: "Secure Webhook Validated",
            customerMsg: "Do you have any celadon cups with gold borders?",
            botReply1: "Hello! Yes, we have our signature celadon stoneware. Let me generate a preview of a custom design with gold trim for you.",
            botReply2: "Generating preview using Gemini...",
            botReply3: "Here is your custom design mockup from our Chiang Mai workshop!",
            dashTitle: "Chiang Mai Workshop Dashboard",
            totalSales: "Total Sales",
            convRate: "Conversion Rate",
            sentiment: "Customer Sentiment",
            sentimentPos: "Positive (88%)",
            sentimentNeu: "Neutral (9%)",
            sentimentNeg: "Negative (3%)",
            liveFeed: "Live Conversation Stream",
            channelLine: "LINE OA",
            channelFb: "Facebook Messenger",
            channelIg: "Instagram Direct",
            statAutomated: "Automated",
            statHandedOver: "Live Support",
            inputPlaceholder: "Type a message..."
        },
        th: {
            chatTab: "แชทบอท AI อัจฉริยะ",
            dashTab: "วิเคราะห์ความรู้สึก",
            status: "ออนไลน์",
            chatbotTitle: "ลานนา เซรามิกส์ ซัพพอร์ต",
            webhookOk: "ความปลอดภัย Webhook ได้รับการยืนยัน",
            customerMsg: "มีแก้วเซลาดอนขอบทองไหมคะ",
            botReply1: "สวัสดีค่ะ! เรามีแก้วเซลาดอนอันเป็นเอกลักษณ์ค่ะ เดี๋ยวฉันสร้างภาพจำลองดีไซน์ขอบทองพิเศษให้คุณดูนะคะ",
            botReply2: "กำลังออกแบบดีไซน์จำลองด้วย Gemini...",
            botReply3: "นี่คือภาพจำลองแก้วเซลาดอนดีไซน์พิเศษจากเวิร์กชอปเชียงใหม่ของเราค่ะ!",
            dashTitle: "แดชบอร์ดสรุปยอดเวิร์กชอป",
            totalSales: "ยอดขายรวม",
            convRate: "อัตราปิดการขาย",
            sentiment: "วิเคราะห์ความรู้สึกของลูกค้า",
            sentimentPos: "เชิงบวก (88%)",
            sentimentNeu: "ทั่วไป (9%)",
            sentimentNeg: "เชิงลบ (3%)",
            liveFeed: "สตรีมบทสนทนาสด",
            channelLine: "LINE OA",
            channelFb: "Facebook Messenger",
            channelIg: "Instagram Direct",
            statAutomated: "ตอบกลับอัตโนมัติ",
            statHandedOver: "ส่งต่อแอดมิน",
            inputPlaceholder: "พิมพ์ข้อความ..."
        }
    }[language];

    useGSAP(
        () => {
            const media = gsap.matchMedia();

            media.add("(prefers-reduced-motion: no-preference)", () => {
                const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

                timeline
                    .from("[data-hero-badge]", { autoAlpha: 0, y: 18, duration: 0.5 })
                    .from("[data-hero-copy]", { autoAlpha: 0, y: 38, duration: 0.85, stagger: 0.1 }, "-=0.2")
                    .from("[data-hero-demo]", { autoAlpha: 0, y: 48, rotate: 1.5, duration: 1 }, "-=0.65")
                    .from("[data-hero-orbit]", { autoAlpha: 0, scale: 0.7, duration: 0.8, stagger: 0.12 }, "-=0.65");

                gsap.to("[data-hero-orbit='slow']", {
                    rotate: 360,
                    duration: 40,
                    repeat: -1,
                    ease: "none",
                    transformOrigin: "50% 50%",
                });

                gsap.to("[data-hero-vessel]", {
                    y: -10,
                    rotate: -1.5,
                    duration: 3.4,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            });

            return () => media.revert();
        },
        { scope: heroRef },
    );


    return (
        <section
            ref={heroRef}
            data-testid="hero-section"
            data-language={language}
            className="hero-studio relative overflow-hidden bg-background pb-20 pt-28 sm:pb-24 sm:pt-36 lg:min-h-[940px] lg:pb-32 lg:pt-40"
        >
            {/* Textured background and ambient blobs */}
            <div className="pointer-events-none absolute inset-0">
                <div className="clay-grid absolute inset-0 opacity-45" />
                <div className="absolute -right-24 top-24 h-[420px] w-[420px] rounded-full border border-primary/15 sm:h-[620px] sm:w-[620px]" />
                <div className="absolute -right-8 top-40 h-[300px] w-[300px] rounded-full border border-secondary/60 sm:h-[470px] sm:w-[470px]" />
                <div data-hero-orbit="slow" className="absolute -right-10 top-28 hidden h-[560px] w-[560px] lg:block">
                    <InsightRing className="h-full w-full text-primary/20" />
                </div>
                <div data-hero-vessel className="absolute right-[8%] top-28 hidden h-40 w-40 lg:block">
                    <CeramicMark className="h-full w-full text-primary/10" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
                    {/* Left Column: Hero Text */}
                    <div className="space-y-7 text-center lg:col-span-5 lg:text-left">
                        {/* Live Badge */}
                        <div data-hero-badge className="eyebrow-clay inline-flex items-center gap-2">
                            <span className="flex h-2 w-2 rounded-full bg-primary" />
                            <span>{t.hero.badge}</span>
                        </div>

                        {/* Title */}
                        <h1
                            data-hero-copy
                            className={`hero-title-contained ${language === "th" ? "hero-title-thai" : ""} max-w-[27rem] font-bold text-foreground ${
                                language === "th"
                                    ? "text-[clamp(2.25rem,10vw,4.5rem)] leading-[1.08] tracking-[-0.045em]"
                                    : "text-[clamp(2.7rem,4.8vw,4.8rem)] leading-[0.96] tracking-[-0.055em]"
                            }`}
                        >
                            {t.hero.titlePrefix} <br className="hidden sm:inline" />
                            <span className={`mt-3 block font-extrabold text-primary ${language === "en" ? "font-serif italic" : ""}`}>
                                {t.hero.titleHighlight}
                            </span>
                        </h1>

                        {/* Description */}
                        <p data-hero-copy className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
                            {t.hero.description}
                        </p>

                        {/* CTAs */}
                        <div data-hero-copy className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                            <a
                                href="https://ceramix.lanna-ai.com"
                                className="cta-clay group w-full sm:w-auto"
                            >
                                {t.hero.getStarted}
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#features"
                                className="cta-clay-secondary w-full text-center sm:w-auto"
                            >
                                {t.hero.explore}
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Interactive Mockup Panel */}
                    <div data-testid="hero-demo-column" data-hero-demo className="hero-demo-column hero-demo-gutter relative mx-auto w-full max-w-2xl lg:col-span-7 lg:max-w-none lg:pl-20">
                        <div data-hero-orbit className="absolute -left-8 -top-8 hidden h-24 w-24 rounded-full border-[12px] border-secondary/80 lg:block" aria-hidden="true" />
                        <div data-hero-orbit className="absolute -bottom-8 right-12 hidden h-16 w-16 rounded-full bg-accent/80 lg:block" aria-hidden="true" />
                        {/* Decorative clay border container */}
                        <div className="studio-demo-shell relative overflow-hidden">
                            {/* Tabs Header */}
                            <div role="tablist" aria-label="Lanna AI demo" className="studio-demo-tabs">
                                <button
                                    ref={chatTabRef}
                                    onClick={() => activateTab("chat")}
                                    onKeyDown={(event) => handleTabKeyDown(event, "chat")}
                                    role="tab"
                                    id="chat-tab"
                                    aria-controls="chat-panel"
                                    aria-selected={activeTab === "chat"}
                                    tabIndex={activeTab === "chat" ? 0 : -1}
                                    className={`studio-demo-tab ${
                                        activeTab === "chat"
                                            ? "studio-demo-tab-active"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    <Bot className="w-4 h-4" />
                                    {mockupT.chatTab}
                                </button>
                                <button
                                    ref={dashboardTabRef}
                                    onClick={() => activateTab("dashboard")}
                                    onKeyDown={(event) => handleTabKeyDown(event, "dashboard")}
                                    role="tab"
                                    id="dashboard-tab"
                                    aria-controls="dashboard-panel"
                                    aria-selected={activeTab === "dashboard"}
                                    tabIndex={activeTab === "dashboard" ? 0 : -1}
                                    className={`studio-demo-tab ${
                                        activeTab === "dashboard"
                                            ? "studio-demo-tab-active"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    <BarChart3 className="w-4 h-4" />
                                    {mockupT.dashTab}
                                </button>
                            </div>

                            {/* Tab Body */}
                            <div className="studio-demo-body">
                                <AnimatePresence mode="wait">
                                    {activeTab === "chat" ? (
                                        <motion.div
                                            key="chat"
                                            role="tabpanel"
                                            id="chat-panel"
                                            aria-labelledby="chat-tab"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex min-h-[430px] flex-col justify-between sm:min-h-[500px]"
                                        >
                                            {/* Chat Header */}
                                            <div className="flex items-center justify-between pb-3 border-b border-muted mb-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                                                        L
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xs font-bold text-foreground leading-none">{mockupT.chatbotTitle}</h4>
                                                        <span className="text-[10px] text-accent font-medium flex items-center gap-1 mt-0.5">
                                                            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                                                            {mockupT.status}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="text-[10px] text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full flex items-center gap-1 font-semibold">
                                                    <ShieldCheck className="w-3 h-3" />
                                                    {mockupT.webhookOk}
                                                </div>
                                            </div>

                                            {/* Chat Messages Log */}
                                            <div className="flex-1 space-y-3 pr-1 text-xs select-none">
                                                {/* Customer message - steps 1+ */}
                                                {chatStep >= 1 && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="flex justify-end"
                                                    >
                                                        <div className="bg-muted text-foreground px-3 py-2 rounded-2xl rounded-tr-none max-w-[80%]">
                                                            {mockupT.customerMsg}
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {/* Bot reply 1 - steps 2+ */}
                                                {chatStep >= 2 && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="flex justify-start gap-2"
                                                    >
                                                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-[9px] font-bold shrink-0 mt-0.5">
                                                            AI
                                                        </div>
                                                        <div className="bg-primary/5 border border-primary/10 text-foreground px-3 py-2 rounded-2xl rounded-tl-none max-w-[80%] space-y-1">
                                                            <p>{mockupT.botReply1}</p>
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {/* Typing Indicator - step 3 */}
                                                {chatStep === 3 && (
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        className="flex justify-start gap-2 items-center"
                                                    >
                                                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-[9px] font-bold shrink-0">
                                                            AI
                                                        </div>
                                                        <div className="bg-primary/5 border border-primary/10 px-3 py-2 rounded-2xl rounded-tl-none text-muted-foreground text-[10px] flex items-center gap-1 font-semibold">
                                                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-100" />
                                                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-200" />
                                                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-300" />
                                                            <span>{mockupT.botReply2}</span>
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {/* Image preview - step 4 */}
                                                {chatStep >= 4 && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 15 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="flex justify-start gap-2"
                                                    >
                                                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-[9px] font-bold shrink-0 mt-0.5">
                                                            AI
                                                        </div>
                                                        <div className="bg-primary/5 border border-primary/10 text-foreground p-2 rounded-2xl rounded-tl-none max-w-[80%] space-y-2">
                                                            <p>{mockupT.botReply3}</p>
                                                            <div className="relative aspect-video max-h-[190px] overflow-hidden rounded-lg border border-muted bg-muted shadow-sm sm:max-h-[220px]">
                                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                                <img
                                                                    src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80"
                                                                    alt="Ceramic Celadon Cup with Gold Trim Preview"
                                                                    className="h-full w-full object-cover"
                                                                />
                                                                <div className="absolute right-2 top-2 rounded-full bg-foreground/80 px-2 py-0.5 text-[9px] font-bold text-background backdrop-blur-sm">
                                                                    Gemini AI
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </div>

                                            {/* Chat Input Field Mockup */}
                                            <div className="mt-3 flex items-center gap-2 border-t border-muted pt-3">
                                                <div className="flex-1 bg-muted/50 rounded-full px-4 py-2 text-xs text-muted-foreground border border-muted">
                                                    {mockupT.inputPlaceholder}
                                                </div>
                                                <button aria-label={language === "en" ? "Send message" : "ส่งข้อความ"} className="p-2 bg-primary rounded-full text-white">
                                                    <Send className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="dashboard"
                                            role="tabpanel"
                                            id="dashboard-panel"
                                            aria-labelledby="dashboard-tab"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="space-y-4 text-xs select-none"
                                        >
                                            <div className="pb-3 border-b border-muted flex justify-between items-center">
                                                <h4 className="font-bold text-foreground">{mockupT.dashTitle}</h4>
                                                <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                                                    Live Dashboard
                                                </span>
                                            </div>

                                            {/* Key Metrics row */}
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="bg-muted/30 border border-muted p-2.5 rounded-xl">
                                                    <span className="text-[10px] text-muted-foreground block font-medium mb-1">{mockupT.totalSales}</span>
                                                    <div className="flex items-baseline gap-1.5">
                                                        <span className="text-base font-bold text-foreground">฿48,250</span>
                                                        <span className="text-[9px] font-bold text-accent">+18.5%</span>
                                                    </div>
                                                </div>
                                                <div className="bg-muted/30 border border-muted p-2.5 rounded-xl">
                                                    <span className="text-[10px] text-muted-foreground block font-medium mb-1">{mockupT.convRate}</span>
                                                    <div className="flex items-baseline gap-1.5">
                                                        <span className="text-base font-bold text-foreground">24.8%</span>
                                                        <span className="text-[9px] font-bold text-accent">+4.2%</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Sentiment Gauge */}
                                            <div className="bg-muted/30 border border-muted p-3 rounded-xl space-y-2">
                                                <span className="text-[10px] text-muted-foreground block font-medium">{mockupT.sentiment}</span>
                                                <div className="space-y-1.5">
                                                    <div className="flex justify-between text-[9px] font-semibold text-foreground">
                                                        <span>{mockupT.sentimentPos}</span>
                                                        <span>{mockupT.sentimentNeu}</span>
                                                        <span>{mockupT.sentimentNeg}</span>
                                                    </div>
                                                    <div className="h-2 rounded-full overflow-hidden flex">
                                                        <div className="h-full bg-accent" style={{ width: "88%" }} />
                                                        <div className="h-full bg-secondary" style={{ width: "9%" }} />
                                                        <div className="h-full bg-primary" style={{ width: "3%" }} />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Platform Webhook verification log */}
                                            <div className="space-y-2">
                                                <span className="text-[10px] text-muted-foreground block font-medium">{mockupT.liveFeed}</span>
                                                <div className="space-y-1.5">
                                                    <div className="flex items-center justify-between bg-muted/15 border border-muted/50 p-2 rounded-lg text-[10px]">
                                                        <div className="flex items-center gap-2">
                                                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                                            <span className="font-semibold text-foreground">{mockupT.channelLine}</span>
                                                            <span className="text-muted-foreground">Order Qualified</span>
                                                        </div>
                                                        <span className="text-[9px] text-accent font-bold px-1.5 py-0.5 bg-accent/10 rounded">{mockupT.statAutomated}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between bg-muted/15 border border-muted/50 p-2 rounded-lg text-[10px]">
                                                        <div className="flex items-center gap-2">
                                                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                                            <span className="font-semibold text-foreground">{mockupT.channelFb}</span>
                                                            <span className="text-muted-foreground">Gemini Preview Rendered</span>
                                                        </div>
                                                        <span className="text-[9px] text-accent font-bold px-1.5 py-0.5 bg-accent/10 rounded">{mockupT.statAutomated}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between bg-muted/15 border border-muted/50 p-2 rounded-lg text-[10px]">
                                                        <div className="flex items-center gap-2">
                                                            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                                                            <span className="font-semibold text-foreground">{mockupT.channelIg}</span>
                                                            <span className="text-muted-foreground">Custom Clay Pot Inquiry</span>
                                                        </div>
                                                        <span className="text-[9px] text-secondary-hover font-bold px-1.5 py-0.5 bg-secondary/10 rounded">{mockupT.statHandedOver}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
