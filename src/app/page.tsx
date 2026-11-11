"use client";

import { useEffect, useState } from "react";
import {
  Microscope,
  Dna,
  Brain,
  Heart,
  Activity,
  Atom,
  Stethoscope,
  Syringe,
  Beaker,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Languages,
  ShieldPlus,
  Droplet,
  Venus,
  Mars,
  FlaskConical,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LanguageSwitcher } from "@/components/medical/language-switcher";
import { ThemeToggle } from "@/components/medical/theme-toggle";
import { ChatAssistant } from "@/components/medical/chat-assistant";
import { DnaLogo } from "@/components/medical/dna-logo";
import { DnaHelix3D } from "@/components/medical/dna-helix-3d";
import { AuroraBackground } from "@/components/medical/aurora-background";
import { TiltCard } from "@/components/medical/tilt-card";
import { MedicalImageComponent } from "@/components/medical/medical-image";
import {
  ENDOCRINE_SYSTEM_IMG,
  HEART_IMG,
  BRAIN_IMG,
  THYROID_IMG,
  ADRENAL_IMG,
  PANCREAS_IMG,
  DNA_IMG,
  CELL_IMG,
  RESPIRATORY_IMG,
  DIGESTIVE_IMG,
  PITUITARY_IMG,
  STEROID_IMG,
  MALE_SYMBOL_IMG,
  FEMALE_SYMBOL_IMG,
} from "@/lib/medical-images";
import { useLangStore, useLangHydrated } from "@/lib/lang-store";
import { getTranslation, isRTL, type HormoneGroup } from "@/lib/i18n";

const GROUP_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  butterfly: Activity,
  triangle: Atom,
  droplet: Droplet,
  venus: Venus,
};

export default function Home() {
  const hydrated = useLangHydrated();
  const { lang: storedLang, setLang } = useLangStore();
  const lang = hydrated ? storedLang : "ar";
  const t = getTranslation(lang);
  const dir = isRTL(lang) ? "rtl" : "ltr";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = dir;
  }, [lang, dir]);

  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  const navItems = [
    { href: "#home", label: t.nav.home },
    { href: "#hormones", label: t.nav.hormones },
    { href: "#labs", label: t.nav.labs },
    { href: "#sexHormones", label: t.nav.sexHormones },
    { href: "#assistant", label: t.nav.assistant },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <div
      dir={dir}
      className="relative min-h-screen flex flex-col bg-background mesh-bg overflow-x-hidden"
    >
      {/* ============== HEADER (mobile-friendly) ============== */}
      <header className="sticky top-0 z-50 border-b border-primary/15 glass">
        <div className="container mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
          <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between gap-2 sm:gap-4">
            <a href="#home" className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 group shrink-0">
              <motion.div
                initial={{ rotate: -10, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                whileHover={{ rotate: 8, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <DnaLogo className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-xl sm:rounded-2xl shadow-lg shadow-primary/30" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base lg:text-xl font-extrabold tracking-tight gradient-text leading-none">
                  {t.meta.siteName}
                </span>
                <span className="text-[9px] sm:text-[10px] lg:text-xs text-muted-foreground font-medium hidden sm:block">
                  {t.meta.tagline}
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-accent/40 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 start-2 end-2 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <ThemeToggle />
              <LanguageSwitcher />
              {/* Mobile menu button */}
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden rounded-full border-primary/30 bg-card/80 backdrop-blur h-9 w-9"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile slide-down nav menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between p-4 border-b border-primary/15">
              <span className="font-bold gradient-text">{t.meta.siteName}</span>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: dir === "rtl" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-4 text-base font-medium text-foreground hover:bg-accent/40 rounded-xl flex items-center justify-between"
                >
                  {item.label}
                  <ArrowIcon className="h-4 w-4 text-primary opacity-50" />
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============== HERO ============== */}
      <section id="home" className="relative overflow-hidden">
        <AuroraBackground />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center lg:text-start order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Badge
                  variant="outline"
                  className="mb-4 sm:mb-5 inline-flex items-center gap-1.5 rounded-full border-primary/40 bg-accent/40 px-3 sm:px-4 py-1.5 text-primary shadow-sm text-xs sm:text-sm"
                >
                  <Microscope className="h-3.5 w-3.5" />
                  {t.hero.badge}
                </Badge>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] sm:leading-[1.05]">
                <motion.span
                  className="block gradient-text"
                  initial={{ opacity: 0, x: dir === "rtl" ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                >
                  {t.hero.title1}
                </motion.span>
                <motion.span
                  className="block mt-2 sm:mt-3 text-foreground text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {t.hero.title2}
                </motion.span>
              </h1>

              <motion.p
                className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {t.hero.subtitle}
              </motion.p>

              <motion.div
                className="mt-6 sm:mt-9 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  size="sm"
                  className="sm:size-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-xl shadow-primary/30 px-5 sm:px-6 group h-10 sm:h-11"
                  asChild
                >
                  <a href="#assistant">
                    <Sparkles className="h-4 w-4 group-hover:rotate-12 transition" />
                    {t.hero.cta1}
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="sm:size-lg rounded-full border-primary/40 text-primary hover:bg-accent/40 gap-2 px-5 sm:px-6 h-10 sm:h-11"
                  variant="outline"
                  asChild
                >
                  <a href="#hormones">
                    <ArrowIcon className="h-4 w-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition" />
                    {t.hero.cta2}
                  </a>
                </Button>
              </motion.div>

              <motion.div
                className="mt-8 sm:mt-12 grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {t.hero.stats.map((s, i) => (
                  <div
                    key={i}
                    className="rounded-xl sm:rounded-2xl border border-primary/15 glass p-2 sm:p-4 text-center hover:border-primary/40 transition"
                  >
                    <div className="text-xl sm:text-2xl lg:text-4xl font-extrabold shimmer">{s.value}</div>
                    <div className="text-[9px] sm:text-[10px] lg:text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="relative flex items-center justify-center order-1 lg:order-2"
            >
              <TiltCard
                max={18}
                perspective={1200}
                scale={1.04}
                className="w-full max-w-xs sm:max-w-md aspect-square rounded-[2rem] sm:rounded-[2.5rem] glow-ring"
              >
                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] border border-primary/25 glass-strong shadow-2xl shadow-primary/30 p-4 sm:p-6 lg:p-8 h-full overflow-hidden">
                  <div className="absolute inset-4 rounded-[1.5rem] sm:rounded-[2rem] border border-primary/15 opacity-50" />
                  <div className="absolute inset-8 rounded-[1rem] sm:rounded-[1.5rem] border border-accent/20 opacity-30" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <DnaHelix3D className="w-full h-full" />
                  </div>

                  <motion.div
                    className="absolute top-4 sm:top-6 start-3 sm:start-6 rounded-xl sm:rounded-2xl bg-primary/20 backdrop-blur px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold text-primary flex items-center gap-1.5 float-anim shadow-lg shadow-primary/20"
                    style={{ transform: "translateZ(60px)" }}
                  >
                    <Dna className="h-3 sm:h-3.5 w-3 sm:w-3.5" /> DNA
                  </motion.div>
                  <motion.div
                    className="absolute bottom-4 sm:bottom-6 end-3 sm:end-6 rounded-xl sm:rounded-2xl bg-accent/60 backdrop-blur px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold text-accent-foreground flex items-center gap-1.5 float-anim shadow-lg"
                    style={{ transform: "translateZ(60px)", animationDelay: "1.5s" }}
                  >
                    <Atom className="h-3 sm:h-3.5 w-3 sm:w-3.5" /> Hormone
                  </motion.div>
                  <motion.div
                    className="absolute top-1/2 end-2 sm:end-4 rounded-xl sm:rounded-2xl glass px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold flex items-center gap-1.5 float-anim shadow-md"
                    style={{ transform: "translateZ(80px)", animationDelay: "0.8s" }}
                  >
                    <Heart className="h-3 sm:h-3.5 w-3 sm:w-3.5 text-rose-500" /> Gland
                  </motion.div>
                  <motion.div
                    className="absolute bottom-8 sm:bottom-12 start-2 sm:start-4 rounded-xl sm:rounded-2xl glass px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold flex items-center gap-1.5 float-anim shadow-md"
                    style={{ transform: "translateZ(70px)", animationDelay: "2.2s" }}
                  >
                    <Brain className="h-3 sm:h-3.5 w-3 sm:w-3.5 text-purple-500" /> Brain
                  </motion.div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>

        <div className="section-divider" />
      </section>

      {/* ============== ENDOCRINE OVERVIEW with REAL IMAGES ============== */}
      <section id="overview" className="py-12 sm:py-16 lg:py-24 relative">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t.sections.overview.title}
            subtitle={t.sections.overview.subtitle}
            icon={<Stethoscope className="h-5 w-5" />}
          />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mt-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: dir === "rtl" ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 sm:space-y-5 order-2 lg:order-1"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">{t.overview.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{t.overview.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {[
                  { n: "1", label: t.overview.glandLabels.hypothalamus + " / " + t.overview.glandLabels.pituitary },
                  { n: "2", label: t.overview.glandLabels.thyroid },
                  { n: "3", label: t.overview.glandLabels.parathyroid },
                  { n: "4", label: t.overview.glandLabels.adrenal },
                  { n: "6", label: t.overview.glandLabels.pancreas },
                  { n: "7/8", label: t.overview.glandLabels.ovaries + " / " + t.overview.glandLabels.testes },
                  { n: "9", label: t.overview.glandLabels.pineal },
                ].map((g) => (
                  <div
                    key={g.n}
                    className="rounded-lg sm:rounded-xl border border-primary/15 glass p-2 sm:p-3 text-xs"
                  >
                    <span className="block text-primary font-bold text-sm sm:text-base mb-0.5">{g.n}</span>
                    <span className="text-muted-foreground text-[10px] sm:text-xs">{g.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: dir === "rtl" ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <TiltCard max={8} perspective={1200} className="rounded-2xl sm:rounded-3xl glow-ring">
                <Card className="rounded-2xl sm:rounded-3xl border-primary/15 glass p-2 sm:p-4 relative overflow-hidden">
                  <MedicalImageComponent
                    image={ENDOCRINE_SYSTEM_IMG}
                    aspect="tall"
                    rounded="xl"
                    showCaption
                    imgClassName="drop-shadow-2xl"
                  />
                </Card>
              </TiltCard>
            </motion.div>
          </div>

          {/* Gland detail cards with REAL IMAGES */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-12">
            <GlandImageCard title={t.overview.glandLabels.hypothalamus + " / " + t.overview.glandLabels.pituitary} image={PITUITARY_IMG} />
            <GlandImageCard title={t.overview.glandLabels.thyroid} image={THYROID_IMG} />
            <GlandImageCard title={t.overview.glandLabels.adrenal} image={ADRENAL_IMG} />
            <GlandImageCard title={t.overview.glandLabels.pancreas} image={PANCREAS_IMG} />
            <GlandImageCard title="Steroid Hormone Molecule" image={STEROID_IMG} />
            <GlandImageCard title="DNA Double Helix" image={DNA_IMG} />
          </div>

          {/* Additional anatomy images */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-5">
            <GlandImageCard title="Human Heart" image={HEART_IMG} compact />
            <GlandImageCard title="Human Brain" image={BRAIN_IMG} compact />
            <GlandImageCard title="Respiratory System" image={RESPIRATORY_IMG} compact />
            <GlandImageCard title="Digestive System" image={DIGESTIVE_IMG} compact />
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-divider" />
      </div>

      {/* ============== HORMONE ENCYCLOPEDIA (Tabs - mobile scrollable) ============== */}
      <section id="hormones" className="py-12 sm:py-16 lg:py-24 relative">
        <AuroraBackground className="opacity-50" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <SectionHeader
            title={t.sections.hormones.title}
            subtitle={t.sections.hormones.subtitle}
            icon={<Dna className="h-5 w-5" />}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 sm:mt-10"
          >
            <Tabs defaultValue={t.hormoneGroups[0].id} className="w-full">
              {/* Mobile: scrollable horizontal tabs; Desktop: full wrap */}
              <TabsList className="flex w-full h-auto gap-1 bg-card/60 backdrop-blur border border-primary/15 rounded-2xl p-1.5 overflow-x-auto justify-start sm:justify-center no-scrollbar">
                {t.hormoneGroups.map((g) => {
                  const Icon = GROUP_ICONS[g.icon] || Beaker;
                  return (
                    <TabsTrigger
                      key={g.id}
                      value={g.id}
                      className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-3 sm:px-4 py-2 text-xs sm:text-sm flex items-center gap-1.5 shrink-0 whitespace-nowrap"
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0" />
                      <span className="hidden md:inline">{g.name}</span>
                      <span className="md:hidden">{g.name.split(" ")[0]}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {t.hormoneGroups.map((group) => (
                <TabsContent key={group.id} value={group.id} className="mt-4 sm:mt-6">
                  {/* Mobile: 1 column; sm: 2 cols; lg: 3 cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
                    {group.hormones.map((h, i) => (
                      <HormoneCard
                        key={i}
                        hormone={h}
                        fields={t.hormoneFields}
                        delay={i * 0.05}
                      />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-divider" />
      </div>

      {/* ============== LAB ANALYSIS ============== */}
      <section
        id="labs"
        className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-accent/15 via-transparent to-transparent relative"
      >
        <AuroraBackground className="opacity-50" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <SectionHeader
            title={t.sections.labs.title}
            subtitle={t.sections.labs.subtitle}
            icon={<FlaskConical className="h-5 w-5" />}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mt-8 sm:mt-10">
            {t.labMethods.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <TiltCard max={6} perspective={1000} className="h-full rounded-2xl sm:rounded-3xl glow-ring">
                  <Card className="h-full rounded-2xl sm:rounded-3xl border-primary/15 glass p-4 sm:p-5 hover:border-primary/40 transition">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-primary/15 text-primary shrink-0">
                        <FlaskConical className="h-4 sm:h-5 w-4 sm:w-5" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold leading-tight flex-1">{m.name}</h3>
                    </div>
                    <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed mb-3">{m.description}</p>
                    <div className="rounded-lg bg-accent/20 p-2 sm:p-2.5">
                      <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-relaxed">{m.use}</p>
                    </div>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-divider" />
      </div>

      {/* ============== SEX HORMONES with REAL GENDER SYMBOLS ============== */}
      <section id="sexHormones" className="py-12 sm:py-16 lg:py-24 relative">
        <AuroraBackground className="opacity-70" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <SectionHeader
            title={t.sections.sexHormones.title}
            subtitle={t.sections.sexHormones.subtitle}
            icon={<Venus className="h-5 w-5" />}
          />

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10">
            {/* Male - with REAL image */}
            <motion.div
              initial={{ opacity: 0, x: dir === "rtl" ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <TiltCard max={10} perspective={1100} className="rounded-2xl sm:rounded-3xl glow-ring h-full">
                <Card className="h-full rounded-2xl sm:rounded-3xl border-blue-400/30 glass p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                  <div className="absolute -end-10 -top-10 h-32 sm:h-40 w-32 sm:w-40 rounded-full bg-blue-500/20 blur-3xl" />
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div style={{ transform: "translateZ(40px)" }} className="mb-4 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32">
                      <MedicalImageComponent
                        image={MALE_SYMBOL_IMG}
                        aspect="square"
                        rounded="full"
                      />
                    </div>
                    <Badge variant="outline" className="mb-2 border-blue-400/40 text-blue-600 dark:text-blue-400">
                      <Mars className="h-3 w-3" /> ♂ Male
                    </Badge>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">{t.sexHormonesContent.male.title}</h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground mb-3 sm:mb-4">{t.sexHormonesContent.male.primary}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-3 sm:mb-4">
                      {t.sexHormonesContent.male.hormones.map((h, i) => (
                        <Badge key={i} variant="secondary" className="bg-blue-500/15 text-blue-700 dark:text-blue-300 rounded-full text-[10px] px-2 py-0.5">
                          {h}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">{t.sexHormonesContent.male.role}</p>
                  </div>
                </Card>
              </TiltCard>
            </motion.div>

            {/* Female - with REAL image */}
            <motion.div
              initial={{ opacity: 0, x: dir === "rtl" ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <TiltCard max={10} perspective={1100} className="rounded-2xl sm:rounded-3xl glow-ring h-full">
                <Card className="h-full rounded-2xl sm:rounded-3xl border-pink-400/30 glass p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                  <div className="absolute -end-10 -top-10 h-32 sm:h-40 w-32 sm:w-40 rounded-full bg-pink-500/20 blur-3xl" />
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div style={{ transform: "translateZ(40px)" }} className="mb-4 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32">
                      <MedicalImageComponent
                        image={FEMALE_SYMBOL_IMG}
                        aspect="square"
                        rounded="full"
                      />
                    </div>
                    <Badge variant="outline" className="mb-2 border-pink-400/40 text-pink-600 dark:text-pink-400">
                      <Venus className="h-3 w-3" /> ♀ Female
                    </Badge>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">{t.sexHormonesContent.female.title}</h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground mb-3 sm:mb-4">{t.sexHormonesContent.female.primary}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-3 sm:mb-4">
                      {t.sexHormonesContent.female.hormones.map((h, i) => (
                        <Badge key={i} variant="secondary" className="bg-pink-500/15 text-pink-700 dark:text-pink-300 rounded-full text-[10px] px-2 py-0.5">
                          {h}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">{t.sexHormonesContent.female.role}</p>
                  </div>
                </Card>
              </TiltCard>
            </motion.div>
          </div>

          {/* Cycle explanation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-4 sm:mt-6"
          >
            <Card className="rounded-2xl sm:rounded-3xl border-primary/15 glass p-4 sm:p-6 lg:p-8 relative overflow-hidden">
              <div className="absolute inset-0 mesh-bg opacity-30" />
              <div className="relative z-10">
                <h3 className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2">
                  <Venus className="h-4 w-4 text-pink-500" />
                  {t.sexHormonesContent.cycleTitle}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{t.sexHormonesContent.cycleDescription}</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-divider" />
      </div>

      {/* ============== AI ASSISTANT ============== */}
      <section id="assistant" className="py-12 sm:py-16 lg:py-24 relative">
        <AuroraBackground className="opacity-70" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <SectionHeader
            title={t.sections.assistant.title}
            subtitle={t.sections.assistant.subtitle}
            icon={<Sparkles className="h-5 w-5" />}
          />
          <div className="grid lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-10 mt-8 sm:mt-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: dir === "rtl" ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-4 sm:space-y-5"
            >
              <Card className="rounded-2xl sm:rounded-3xl border-primary/15 glass p-4 sm:p-6 relative overflow-hidden">
                <div className="absolute -end-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30 shrink-0"
                  >
                    <Stethoscope className="h-5 sm:h-6 w-5 sm:w-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold">{t.chat.title}</h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{t.chat.subtitle}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 relative z-10">
                  {t.chat.welcome}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 relative z-10">
                  {["Hormones", "Glands", "Lab Tests", "Disorders", "Treatments"].map((tag, i) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Badge variant="secondary" className="bg-accent/40 text-accent-foreground rounded-full px-2 sm:px-3 py-1 text-[10px] sm:text-xs">
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>

              <Card className="rounded-2xl sm:rounded-3xl border-primary/15 bg-accent/20 backdrop-blur p-3 sm:p-5">
                <div className="flex items-start gap-3">
                  <ShieldPlus className="h-4 sm:h-5 w-4 sm:w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">{t.chat.disclaimer}</p>
                </div>
              </Card>

              <Card className="rounded-2xl sm:rounded-3xl border-primary/15 glass p-3 sm:p-5">
                <h4 className="text-xs sm:text-sm font-bold mb-3 flex items-center gap-2">
                  <Languages className="h-4 w-4 text-primary" />
                  {lang === "en" ? "Try a different language" : lang === "ar" ? "جرّب لغة مختلفة" : "زمانێکی دی بکار بهێنە"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { code: "en" as const, name: "English" },
                    { code: "ar" as const, name: "العربية" },
                    { code: "ku" as const, name: "کوردی" },
                  ].map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.code)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium border transition ${
                        lang === l.code
                          ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/30"
                          : "bg-card border-primary/25 text-muted-foreground hover:border-primary/50 hover:text-primary"
                      }`}
                    >
                      {l.name}
                    </button>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: dir === "rtl" ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <ChatAssistant />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer
        id="contact"
        className="mt-auto border-t border-primary/15 bg-gradient-to-b from-transparent via-accent/15 to-accent/30 relative"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10">
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <DnaLogo className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl sm:rounded-2xl shadow-md" />
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-extrabold gradient-text leading-none">{t.meta.siteName}</span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground">{t.meta.tagline}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-md">{t.footer.aboutText}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground/80 italic flex items-start gap-1.5">
                <ShieldPlus className="h-3.5 w-3.5 shrink-0 mt-0.5 text-primary" />
                {t.footer.disclaimer}
              </p>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-bold mb-3 text-foreground">{t.footer.quickLinks}</h4>
              <ul className="space-y-2">
                {navItems.filter(n => n.href !== "#home").map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition flex items-center gap-1.5 group"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary/50 group-hover:w-3 transition-all" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-bold mb-3 text-foreground">{t.footer.contact}</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                  <span>
                    <span className="block text-[10px] sm:text-xs text-muted-foreground/70">{t.footer.address}</span>
                    {t.footer.addressValue}
                  </span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <span className="block text-[10px] sm:text-xs text-muted-foreground/70">{t.footer.phone}</span>
                    <a href="tel:07501522006" dir="ltr" className="hover:text-primary transition">
                      0750 152 2006
                    </a>
                  </span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <span className="block text-[10px] sm:text-xs text-muted-foreground/70">{t.footer.email}</span>
                    <a href="mailto:shadiarumar@gmail.com" dir="ltr" className="hover:text-primary transition break-all">
                      shadiarumar@gmail.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[10px] sm:text-xs text-muted-foreground text-center sm:text-start">
              © {new Date().getFullYear()} {t.meta.siteName}. {t.footer.rights}
            </p>
            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-muted-foreground">
              <Syringe className="h-3.5 w-3.5 text-primary" />
              <span>Endocrinology Department</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Hormone Card (expandable, mobile-optimized) ---------- */
function HormoneCard({
  hormone,
  fields,
  delay = 0,
}: {
  hormone: HormoneGroup["hormones"][number];
  fields: ReturnType<typeof getTranslation>["hormoneFields"];
  delay?: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <TiltCard max={4} perspective={1200} className="h-full rounded-2xl sm:rounded-3xl glow-ring">
        <Card
          className="h-full rounded-2xl sm:rounded-3xl border-primary/15 glass overflow-hidden cursor-pointer hover:border-primary/40 transition"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="p-3 sm:p-5">
            <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
              <h3 className="text-xs sm:text-sm font-bold leading-tight">{hormone.name}</h3>
              <ChevronDown
                className={`h-4 w-4 text-primary shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
              />
            </div>
            <p className="text-[10px] sm:text-[11px] text-primary font-semibold mb-1">{fields.source}: <span className="text-muted-foreground font-normal">{hormone.source}</span></p>
            <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed line-clamp-2">{hormone.function}</p>
            <p className="text-[9px] sm:text-[10px] text-muted-foreground/70 mt-2 italic">{fields.learnMore}</p>
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-primary/15 bg-accent/10"
              >
                <div className="p-3 sm:p-5 space-y-2 sm:space-y-3">
                  <HormoneField label={fields.function} value={hormone.function} icon={<Activity className="h-3 w-3" />} />
                  <HormoneField label={fields.labTest} value={hormone.labTest} icon={<FlaskConical className="h-3 w-3" />} />
                  <HormoneField label={fields.benefits} value={hormone.benefits} icon={<Sparkles className="h-3 w-3" />} color="text-emerald-600 dark:text-emerald-400" />
                  <HormoneField label={fields.excess} value={hormone.excess} icon={<ArrowRight className="h-3 w-3" />} color="text-rose-600 dark:text-rose-400" />
                  <HormoneField label={fields.deficiency} value={hormone.deficiency} icon={<ArrowLeft className="h-3 w-3" />} color="text-amber-600 dark:text-amber-400" />
                  <HormoneField label={fields.treatment} value={hormone.treatment} icon={<Syringe className="h-3 w-3" />} color="text-primary" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </TiltCard>
    </motion.div>
  );
}

function HormoneField({
  label,
  value,
  icon,
  color = "text-primary",
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  color?: string;
}) {
  return (
    <div>
      <p className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wide flex items-center gap-1 mb-0.5 ${color}`}>
        {icon}
        {label}
      </p>
      <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">{value}</p>
    </div>
  );
}

/* ---------- Gland Card with REAL IMAGE ---------- */
function GlandImageCard({
  title,
  image,
  compact = false,
}: {
  title: string;
  image: import("@/lib/medical-images").MedicalImage;
  compact?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <TiltCard max={8} perspective={1100} className="h-full rounded-2xl sm:rounded-3xl glow-ring">
        <Card className="h-full rounded-2xl sm:rounded-3xl border-primary/15 glass overflow-hidden hover:border-primary/40 transition">
          <div className={compact ? "p-2 bg-gradient-to-br from-accent/30 to-primary/5" : "p-2 sm:p-4 bg-gradient-to-br from-accent/30 to-primary/5"}>
            <MedicalImageComponent
              image={image}
              aspect={compact ? "video" : "tall"}
              rounded="lg"
              showCaption
              imgClassName="drop-shadow-xl"
            />
          </div>
          <div className="p-3 sm:p-4">
            <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10 text-[10px] sm:text-xs">
              {title}
            </Badge>
          </div>
        </Card>
      </TiltCard>
    </motion.div>
  );
}

/* ---------- Section Header ---------- */
function SectionHeader({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-2xl mx-auto px-2"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-accent/30 px-3 sm:px-4 py-1.5 text-primary text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4 shadow-sm">
        {icon}
        {title}
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight gradient-text">
        {title}
      </h2>
      <p className="mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base text-muted-foreground">{subtitle}</p>
    </motion.div>
  );
}
