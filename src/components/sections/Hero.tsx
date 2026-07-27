"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bot, BarChart3, ShieldCheck, Send, Check, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

export default function Hero() {
    const { t, language } = useLanguage();
    const [activeTab, setActiveTab] = useState<"chat" | "dashboard">("chat");
    const [chatStep, setChatStep] = useState(0);

    // Auto-advance chat simulation steps
    useEffect(() => {
        if (activeTab !== "chat") return;
        
        const timer = setInterval(() => {
            setChatStep((prev) => (prev + 1) % 5);
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


    return (
        <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-background">
            {/* Textured background and ambient blobs */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-10 right-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-secondary/15 rounded-full blur-[100px] lg:blur-[140px]" />
                <div className="absolute bottom-10 left-0 w-[250px] lg:w-[500px] h-[250px] lg:h-[500px] bg-primary/10 rounded-full blur-[100px] lg:blur-[140px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Hero Text */}
                    <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
                        {/* Live Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm font-semibold text-primary">
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                            <span>{t.hero.badge}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight">
                            {t.hero.titlePrefix} <br className="hidden sm:inline" />
                            <span className="text-primary font-serif font-extrabold block mt-2">
                                {t.hero.titleHighlight}
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed text-balance">
                            {t.hero.description}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a
                                href="https://ceramix.lanna-ai.com"
                                className="w-full sm:w-auto px-8 py-3.5 text-white bg-primary rounded-full font-bold hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5"
                            >
                                {t.hero.getStarted}
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#features"
                                className="w-full sm:w-auto px-8 py-3.5 text-foreground bg-white border border-muted rounded-full font-semibold hover:bg-muted/50 transition-all text-center"
                            >
                                {t.hero.explore}
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Interactive Mockup Panel */}
                    <div className="lg:col-span-6 relative w-full max-w-2xl mx-auto lg:max-w-none">
                        {/* Decorative clay border container */}
                        <div className="relative rounded-2xl bg-white border border-muted p-2 shadow-xl shadow-foreground/5 overflow-hidden">
                            {/* Tabs Header */}
                            <div className="flex border-b border-muted bg-muted/20 p-1.5 rounded-t-xl gap-2">
                                <button
                                    onClick={() => { setActiveTab("chat"); setChatStep(0); }}
                                    className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                                        activeTab === "chat"
                                            ? "bg-white text-primary shadow-sm border border-muted"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    <Bot className="w-4 h-4" />
                                    {mockupT.chatTab}
                                </button>
                                <button
                                    onClick={() => setActiveTab("dashboard")}
                                    className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                                        activeTab === "dashboard"
                                            ? "bg-white text-primary shadow-sm border border-muted"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    <BarChart3 className="w-4 h-4" />
                                    {mockupT.dashTab}
                                </button>
                            </div>

                            {/* Tab Body */}
                            <div className="bg-white min-h-[380px] p-4 flex flex-col justify-between">
                                <AnimatePresence mode="wait">
                                    {activeTab === "chat" ? (
                                        <motion.div
                                            key="chat"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex flex-col h-[340px] justify-between"
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
                                            <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-xs select-none">
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
                                                            <div className="relative rounded-lg overflow-hidden border border-muted shadow-sm aspect-video bg-muted">
                                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                                <img
                                                                    src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80"
                                                                    alt="Ceramic Celadon Cup with Gold Trim Preview"
                                                                    className="object-cover w-full h-full"
                                                                />
                                                                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/60 text-[9px] text-white font-bold backdrop-blur-sm">
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
                                                <button aria-hidden="true" className="p-2 bg-primary rounded-full text-white">
                                                    <Send className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="dashboard"
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
