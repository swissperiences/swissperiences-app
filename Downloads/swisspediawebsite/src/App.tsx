import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ArrowRight, Check, Star, TrendingUp, Globe, Shield, Zap, Users, Building2, GraduationCap, Home, Briefcase, Award, MapPin, Mail, Quote, Plus, Minus, ExternalLink, Target, Clock, DollarSign } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import ConsultationForm from './components/ConsultationForm';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play carousel for testimonials
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const faqs = [
    {
      question: "How does Swisspedia differ from traditional education agencies?",
      answer: "We're not just an agency—we're an editorial platform with services. Our founder has institutional experience in Swiss executive education and has personally navigated the immigration process. We combine curated information (quality over volume) with personalized advisory services backed by real experience."
    },
    {
      question: "Do you guarantee admission to Swiss programs?",
      answer: "No. Anyone promising guaranteed admission is either misleading you or working with unaccredited programs. What we do: we significantly increase your chances through accurate program matching, application positioning, and insights from institutional experience. We help you avoid wasting application fees on programs where you don't fit—and identify where you have genuine competitive advantage."
    },
    {
      question: "What is your fee structure?",
      answer: "Our fees vary based on service complexity. For individuals: consultation packages range from CHF 200-5,000 depending on scope. For institutions: we work on partnership agreements with commission structures. Contact us for a personalized quote aligned with your specific needs."
    },
    {
      question: "Can you help with Swiss visa and immigration processes?",
      answer: "We provide guidance and coordination—not legal immigration services. We help you understand requirements, prepare documentation, and coordinate with partner institutions for visa support letters when applicable. For legal matters, we can refer you to licensed immigration attorneys."
    },
    {
      question: "How long does the consultation process take?",
      answer: "Initial consultations are typically 60-90 minutes and can be conducted via video call. Full program placements or relocation services range from 2-6 months depending on complexity, application deadlines, and your specific situation."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Senior Executive, Tech Industry",
      location: "Singapore → Geneva",
      text: "Swisspedia didn't just help me find the right executive MBA—they helped me understand the entire Swiss ecosystem. The personal experience and institutional knowledge made all the difference.",
      rating: 5
    },
    {
      name: "Marcus Weber",
      role: "HR Director",
      location: "Frankfurt",
      text: "We partnered with Swisspedia to send 15 executives to various Swiss programs. Their curation quality and institutional relationships saved us months of research and delivered exactly what we needed.",
      rating: 5
    },
    {
      name: "Amara Okafor",
      role: "Entrepreneur",
      location: "Lagos → Lausanne",
      text: "The relocation consulting was invaluable. As someone unfamiliar with Swiss systems, having guidance from someone who actually lived through it was worth every franc.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Premium Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-2xl border-b border-neutral-200/50 shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <img
                  src="/b&w-02.png"
                  alt="Swisspedia"
                  className="w-11 h-11 relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-red/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <div className="text-[21px] font-bold text-primary-dark leading-none tracking-tight">
                  Swisspedia
                </div>
                <div className="text-[9px] text-primary-dark/50 tracking-[0.15em] uppercase mt-0.5 font-semibold">
                  Gateway to Switzerland
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {[
                { label: 'Content', id: 'content' },
                { label: 'Services', id: 'services' },
                { label: 'About', id: 'about' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-[13px] font-medium text-primary-dark/70 hover:text-primary-red transition-all duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-red group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <motion.button
                onClick={() => scrollToSection('consultation')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 bg-primary-dark text-white px-6 py-2.5 text-[12px] font-bold uppercase tracking-wider rounded-full hover:bg-primary-red transition-all duration-300"
              >
                Get Started
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-neutral-200/50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-primary-dark" />
              ) : (
                <Menu className="w-6 h-6 text-primary-dark" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-neutral-200/50"
            >
              <nav className="flex flex-col p-6 space-y-1 max-w-[1400px] mx-auto">
                {[
                  { label: 'Content', id: 'content' },
                  { label: 'Services', id: 'services' },
                  { label: 'About', id: 'about' },
                  { label: 'Contact', id: 'consultation' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-4 py-3 text-[15px] font-medium text-primary-dark/80 hover:text-primary-red hover:bg-neutral-100/50 rounded-lg transition-all"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section - Minimalist Luxury */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Subtle Photo Background - VERY light */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/32980057/pexels-photo-32980057.jpeg"
            alt="Geneva Lake and Jet d'Eau"
            className="w-full h-full object-cover opacity-[0.08] mix-blend-luminosity"
          />
          {/* Clean white overlay with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/98 to-neutral-50/95" />
        </div>

        {/* Minimal Accent Elements - Gold spots */}
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
        >
          {/* Top right gold glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary-gold/30 to-transparent rounded-full blur-3xl"
          />
          {/* Bottom left navy accent */}
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.02, 0.05, 0.02],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary-dark/20 to-transparent rounded-full blur-3xl"
          />
        </motion.div>


        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 py-32 md:py-40">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-5xl mx-auto"
          >
            {/* Editorial Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-primary-dark/5 border border-primary-dark/10 rounded-full px-5 py-2 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-dark/70">
                Editorial Platform · Advisory Services
              </span>
            </motion.div>

            {/* Clear Thesis - Not Generic Pitch */}
            <motion.h1
              variants={itemVariants}
              className="text-[52px] md:text-[68px] lg:text-[88px] font-bold leading-[1.05] text-primary-dark tracking-tight mb-8 relative"
            >
              <span className="inline-block">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="inline-block"
                >
                  The Swiss system
                </motion.span>{' '}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="inline-block"
                >
                  is complex.
                </motion.span>
              </span>
              <br />
              <span className="inline-block mt-2">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="inline-block"
                >
                  We make it
                </motion.span>{' '}
                <span className="relative inline-block">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                    className="bg-gradient-to-r from-primary-dark to-primary-navy bg-clip-text text-transparent relative z-10 inline-block"
                  >
                    navigable.
                  </motion.span>
                  {/* Subtle gold underline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.9, duration: 0.7 }}
                    className="absolute bottom-2 left-0 right-0 h-1 bg-primary-gold/40 -z-0"
                  />
                </span>
              </span>
            </motion.h1>

            {/* Editorial Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-[17px] md:text-[20px] lg:text-[22px] text-primary-dark/70 leading-[1.65] mb-12 max-w-3xl mx-auto font-normal"
            >
              Editorial insight and advisory services for education, relocation, and business in Switzerland—built from real Swiss experience.
            </motion.p>

            {/* Strategic CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.button
                onClick={() => scrollToSection('consultation')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-primary-dark text-white px-10 py-5 text-[13px] font-semibold tracking-wide rounded-full hover:bg-primary-navy transition-all duration-300 flex items-center gap-3 shadow-luxury"
              >
                Request Strategic Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('about')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-primary-dark/20 text-primary-dark px-10 py-5 text-[13px] font-semibold tracking-wide rounded-full hover:border-primary-dark hover:bg-primary-dark/5 transition-all duration-300"
              >
                How We Work
              </motion.button>
            </motion.div>

            {/* Institutional Trust - Not Claims */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center items-center gap-8 text-[11px] text-primary-dark/40 font-medium uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-primary-gold" />
                <span>Editorial Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-primary-gold" />
                <span>Institutional Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-primary-gold" />
                <span>Swiss Resident</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Minimalist Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 border-primary-dark/20 rounded-full flex justify-center pt-1.5"
          >
            <motion.div className="w-1 h-2 bg-primary-dark/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Trusted Partners Section - Clean */}
      <section className="relative py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          {/* Clean Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-dark/40 mb-4">
              Trusted by
            </p>
          </motion.div>

          {/* Minimalist Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
            {[
              'SSBM Geneva',
              'IMD Lausanne',
              'EPFL',
              'University of Geneva',
            ].map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group text-center"
              >
                <div className="h-16 flex items-center justify-center opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                  <div className="text-[17px] md:text-[19px] font-bold text-primary-dark tracking-tight">
                    {partner}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* What Makes This Different */}
      <section className="relative py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-primary-dark/5 border border-primary-dark/10 rounded-full px-4 py-2 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary-dark/70">
                What Makes This Different
              </span>
            </div>
            <h2 className="text-[42px] md:text-[56px] lg:text-[64px] font-bold text-primary-dark tracking-tight mb-6 leading-[1.1]">
              Not a Directory.<br />Not an Agency.
            </h2>
            <p className="text-[17px] md:text-[20px] text-primary-dark/70 max-w-3xl mx-auto leading-[1.7] mb-8">
              Swisspedia is a curated editorial platform with execution support—built by someone who has lived the Swiss system from the inside.
            </p>
            {/* Who This Is NOT For */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-2xl mx-auto p-6 bg-neutral-50 border border-neutral-200 rounded-2xl"
            >
              <p className="text-[14px] text-primary-dark/60 leading-relaxed italic">
                <strong className="font-semibold text-primary-dark not-italic">This is not for:</strong> those seeking shortcuts, guaranteed admissions, or mass-market agencies.
              </p>
            </motion.div>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {/* Large Card - Real Experience (spans 4 columns, 2 rows) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-4 md:row-span-2 relative p-10 bg-gradient-to-br from-primary-dark/5 to-neutral-50 rounded-3xl border border-neutral-200 hover:border-primary-dark/30 transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-red/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[32px] md:text-[40px] font-bold text-primary-dark mb-6 leading-tight">
                  Real Experience
                </h3>
                <p className="text-[17px] md:text-[19px] text-primary-dark/70 leading-relaxed mb-8">
                  Founded by a Swiss resident who navigated the system personally and worked in Swiss executive education institutions.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['10+ Years in Switzerland', 'SSBM Geneva Alumni', 'Immigrant Journey'].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-primary-dark/5 border border-primary-dark/10 rounded-full text-[12px] font-medium text-primary-dark/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Top Right - Time Savings */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-2 relative p-8 bg-white rounded-3xl border border-neutral-200 hover:border-primary-dark/30 hover:shadow-soft-lg transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-dark to-dark-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-[24px] font-bold text-primary-dark mb-4">
                Time Savings
              </h3>
              <p className="text-[15px] text-primary-dark/70 leading-relaxed">
                Skip months of research. We have already vetted institutions, understand requirements, and know the pitfalls to avoid.
              </p>
            </motion.div>

            {/* Bottom Right - Value Optimization */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 relative p-8 bg-gradient-to-br from-neutral-50 to-white rounded-3xl border border-neutral-200 hover:border-primary-red/30 hover:shadow-soft-lg transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-primary-red rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-[24px] font-bold text-primary-dark mb-4">
                Value Optimization
              </h3>
              <p className="text-[15px] text-primary-dark/70 leading-relaxed">
                Our institutional relationships and insider knowledge help you avoid costly mistakes and find the best fit—not just any fit.
              </p>
            </motion.div>
          </div>

          {/* Network Stats - After Context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-24 max-w-5xl mx-auto"
          >
            {/* Context Before Numbers */}
            <div className="text-center mb-12">
              <p className="text-[15px] md:text-[17px] text-primary-dark/60 leading-relaxed max-w-2xl mx-auto">
                Network spanning <strong className="font-semibold text-primary-dark">100+ Swiss and international institutions</strong> across education, relocation, and business domains—built through years of institutional work and personal relationships.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-10 bg-neutral-50 border border-neutral-200 rounded-3xl">
              {[
                { value: '100+', label: 'Institutions' },
                { value: '50+', label: 'Countries' },
                { value: '1,000+', label: 'Clients' },
                { value: '12 Years', label: 'Experience' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-[32px] md:text-[40px] font-bold text-primary-dark mb-1 tracking-tight">{stat.value}</div>
                  <div className="text-[11px] text-primary-dark/50 uppercase tracking-wider font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Pillars - Redesigned */}
      <section id="content" className="relative py-32 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-primary-dark/5 border border-primary-dark/10 rounded-full px-4 py-2 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary-dark/70">
                Editorial Content
              </span>
            </div>
            <h2 className="text-[42px] md:text-[56px] lg:text-[64px] font-bold text-primary-dark tracking-tight mb-6 leading-[1.1]">
              Curated Information<br />About Switzerland
            </h2>
            <p className="text-[17px] md:text-[20px] text-primary-dark/60 max-w-2xl mx-auto leading-relaxed">
              Quality over volume. Editorial curation over content aggregation.
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Featured Card - Swiss Education System (spans 2 columns, 2 rows) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="md:col-span-2 md:row-span-2 group relative bg-gradient-to-br from-primary-dark/10 to-dark-600/10 backdrop-blur-xl p-10 rounded-3xl border border-primary-dark/20 hover:border-primary-red/40 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Animated Background Glow */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-red/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative z-10 h-full flex flex-col">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['MBA Programs', 'SSBM Alumni', 'Accreditation Guide'].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-primary-dark/10 border border-primary-dark/20 rounded-full text-[11px] font-semibold text-primary-dark/80 uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-soft-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-[32px] md:text-[38px] font-bold text-primary-dark mb-5 leading-[1.15] group-hover:text-primary-red transition-colors duration-300">
                  Swiss Education System
                </h3>
                <p className="text-[16px] md:text-[17px] text-primary-dark/70 leading-relaxed mb-8 flex-grow">
                  Executive education landscape, business schools comparison, accreditation guide, and program selection criteria backed by institutional experience. Navigate the Swiss higher education system with confidence.
                </p>

                {/* CTA */}
                <div className="flex items-center text-primary-red text-[14px] font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                  Explore Education
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <GraduationCap className="w-32 h-32 text-primary-dark" />
              </div>
            </motion.div>

            {/* Top Right - Living in Switzerland (spans 2 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="md:col-span-2 group relative bg-gradient-to-br from-red-500/10 to-red-600/10 backdrop-blur-xl p-8 rounded-3xl border border-red-500/20 hover:border-primary-red/40 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-red/0 to-primary-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-red-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-soft">
                  <Home className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[26px] font-bold text-primary-dark mb-3 group-hover:text-primary-red transition-colors duration-300">
                  Living in Switzerland
                </h3>
                <p className="text-[15px] text-primary-dark/70 leading-relaxed mb-5">
                  Comprehensive guides on visas, permits, cost of living, healthcare, taxes, and cultural integration from someone who has been through it.
                </p>
                <div className="flex items-center text-primary-red text-[13px] font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                  Explore Living
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Bottom Right - Business & Investment (spans 2 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="md:col-span-2 group relative bg-gradient-to-br from-red-500/10 to-primary-dark/10 backdrop-blur-xl p-8 rounded-3xl border border-red-500/20 hover:border-primary-red/40 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-red/0 to-primary-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary-red rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-soft">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[26px] font-bold text-primary-dark mb-3 group-hover:text-primary-red transition-colors duration-300">
                  Business & Investment
                </h3>
                <p className="text-[15px] text-primary-dark/70 leading-relaxed mb-5">
                  Company formation, banking system, market entry strategies, and understanding the Swiss business environment for international professionals.
                </p>
                <div className="flex items-center text-primary-red text-[13px] font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                  Explore Business
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Premium Design */}
      <section id="services" className="relative py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 bg-primary-dark/5 border border-primary-dark/10 rounded-full px-4 py-2 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary-dark/70">
                Advisory Services
              </span>
            </div>
            <h2 className="text-[42px] md:text-[56px] lg:text-[64px] font-bold text-primary-dark tracking-tight mb-6 leading-[1.1]">
              The Cost of Getting It Wrong
            </h2>
            <p className="text-[17px] md:text-[20px] text-primary-dark/70 max-w-3xl mx-auto leading-[1.7] mb-4">
              Swiss systems are unforgiving: a wrong visa category, missed permit renewal, or mismatched program can cost months of time and tens of thousands of francs.
            </p>
            <p className="text-[15px] md:text-[17px] text-primary-dark/60 max-w-2xl mx-auto leading-relaxed">
              We help you avoid costly mistakes through guidance built on institutional experience and personal navigation of these systems.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* B2C Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative bg-white p-10 rounded-3xl border-2 border-neutral-200 hover:border-primary-dark/20 hover:shadow-soft-lg transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary-dark/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-dark to-dark-600 rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-500">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary-red mb-1">For</div>
                      <h3 className="text-[32px] font-bold text-primary-dark">Individuals</h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  {[
                    {
                      title: 'Relocation Consulting',
                      risk: 'Wrong visa category = denied renewal. Missed canton registration deadline = CHF 5,000+ fines.',
                      solution: 'Navigate Swiss immigration with guidance from someone who has been through it—permit strategy, housing requirements, banking documentation, and canton-specific registration timelines.',
                    },
                    {
                      title: 'Executive Education Advisory',
                      risk: 'Mismatched program = wasted tuition (CHF 30,000-80,000) and career time you cannot recover.',
                      solution: 'Find the right program for your actual career trajectory—not just any Swiss MBA. Institutional matching based on accreditation, alumni outcomes, and your specific professional goals.',
                    },
                  ].map((service) => (
                    <div key={service.title} className="p-6 bg-neutral-50 rounded-xl border border-neutral-200 group-hover:border-primary-red/30 transition-all duration-300">
                      <div className="flex gap-3 mb-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-red rounded-full flex items-center justify-center mt-1">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="text-[18px] font-bold text-primary-dark">{service.title}</h4>
                      </div>
                      <div className="pl-9">
                        <p className="text-[14px] text-primary-red/80 font-medium mb-3 leading-relaxed">
                          <strong className="font-bold">Risk:</strong> {service.risk}
                        </p>
                        <p className="text-[15px] text-primary-dark/70 leading-relaxed">
                          {service.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <motion.button
                  onClick={() => scrollToSection('consultation')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-dark to-dark-600 text-white px-8 py-5 text-[13px] font-bold uppercase tracking-wider rounded-full hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-3 group/btn"
                >
                  Request Consultation
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            {/* B2B Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative bg-white p-10 rounded-3xl border-2 border-neutral-200 hover:border-primary-dark/20 hover:shadow-soft-lg transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-primary-dark/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary-red rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-all duration-500">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary-red mb-1">For</div>
                      <h3 className="text-[32px] font-bold text-primary-dark">Institutions</h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  {[
                    {
                      title: 'International Student Recruitment',
                      risk: 'Unqualified candidates waste institutional resources and damage program reputation.',
                      solution: 'Access to pre-screened international candidates with verified qualifications and realistic expectations. Quality over volume—institutional partnerships built on candidate fit, not commission volume.',
                    },
                    {
                      title: 'Corporate Program Coordination',
                      risk: 'Wrong institutional match = executive dissatisfaction and lost corporate training budgets.',
                      solution: 'Executive education facilitation for companies seeking Swiss programs. We match corporate objectives with the right Swiss institutions—based on program rigor, alumni networks, and ROI expectations.',
                    },
                  ].map((service) => (
                    <div key={service.title} className="p-6 bg-neutral-50 rounded-xl border border-neutral-200 group-hover:border-primary-red/30 transition-all duration-300">
                      <div className="flex gap-3 mb-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-red rounded-full flex items-center justify-center mt-1">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="text-[18px] font-bold text-primary-dark">{service.title}</h4>
                      </div>
                      <div className="pl-9">
                        <p className="text-[14px] text-primary-red/80 font-medium mb-3 leading-relaxed">
                          <strong className="font-bold">Risk:</strong> {service.risk}
                        </p>
                        <p className="text-[15px] text-primary-dark/70 leading-relaxed">
                          {service.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <motion.button
                  onClick={() => scrollToSection('consultation')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary-red text-white px-8 py-5 text-[13px] font-bold uppercase tracking-wider rounded-full hover:bg-primary-red/90 transition-all duration-300 flex items-center justify-center gap-3 group/btn"
                >
                  Partnership Inquiry
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials - NEW */}
      <section className="relative py-32 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-primary-dark/5 border border-primary-dark/10 rounded-full px-4 py-2 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary-dark/70">
                Client Stories
              </span>
            </div>
            <h2 className="text-[42px] md:text-[56px] lg:text-[64px] font-bold text-primary-dark tracking-tight mb-6 leading-[1.1]">
              Trusted by Professionals<br />Worldwide
            </h2>
          </motion.div>

          {/* Carousel Container */}
          <div
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Testimonial Cards */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-10 md:p-12 rounded-3xl border border-neutral-200 shadow-soft-lg"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-8">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-primary-red fill-primary-red" />
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-primary-dark/10 mb-6" />

                  {/* Testimonial Text */}
                  <p className="text-[18px] md:text-[21px] text-primary-dark/80 leading-relaxed mb-8 italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-8 border-t border-neutral-200">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-dark to-dark-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-primary-dark text-[18px] mb-1">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-[14px] text-primary-dark/60 mb-1">
                        {testimonials[currentTestimonial].role}
                      </div>
                      <div className="text-[13px] text-primary-red font-medium">
                        {testimonials[currentTestimonial].location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentTestimonial
                      ? 'w-10 h-3 bg-primary-red'
                      : 'w-3 h-3 bg-primary-dark/20 hover:bg-primary-dark/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            {!isPaused && (
              <div className="text-center mt-6">
                <span className="text-[11px] text-primary-dark/40 uppercase tracking-wider">
                  Hover to pause • Auto-playing
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section - Storytelling */}
      <section id="about" className="relative py-32 bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231C1F2A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary-red/10 rounded-full px-4 py-2 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary-red">
                  About Swisspedia
                </span>
              </div>
              <h2 className="text-[42px] md:text-[56px] lg:text-[64px] font-bold text-primary-dark tracking-tight mb-6 leading-[1.1]">
                Built on Real<br />Experience
              </h2>
            </motion.div>

            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-8"
            >
              <p className="text-[19px] md:text-[22px] text-primary-dark/80 leading-[1.7]">
                Swisspedia was founded by a <strong className="font-bold text-primary-dark">Swiss resident</strong> with institutional experience in executive education and personal understanding of the relocation process.
              </p>

              <p className="text-[17px] md:text-[19px] text-primary-dark/70 leading-[1.8]">
                We're not just another information portal or generic agency. We're a curated platform that combines <strong className="font-semibold text-primary-red">editorial authority</strong> with <strong className="font-semibold text-primary-red">practical guidance</strong> — providing both the knowledge you need and the services to execute.
              </p>

              {/* Value Props */}
              <div className="grid md:grid-cols-3 gap-6 my-16">
                {[
                  { title: 'Quality', subtitle: 'Over Volume', icon: Award },
                  { title: 'Trust', subtitle: 'Through Experience', icon: Shield },
                  { title: 'Results', subtitle: 'Through Expertise', icon: TrendingUp },
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -4 }}
                    className="text-center p-8 bg-gradient-to-br from-neutral-50 to-white rounded-2xl border border-neutral-200 hover:border-primary-red/40 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-7 h-7 text-primary-red" />
                    </div>
                    <div className="text-[36px] font-bold text-primary-dark mb-1">{value.title}</div>
                    <div className="text-[13px] text-primary-dark/60 uppercase tracking-wider font-medium">{value.subtitle}</div>
                  </motion.div>
                ))}
              </div>

              <p className="text-[17px] md:text-[19px] text-primary-dark/70 leading-[1.8]">
                Whether you're an individual seeking to relocate or study in Switzerland, or an institution looking for qualified international candidates, we provide the <strong className="font-semibold text-primary-dark">clarity, connections, and support</strong> you need.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - NEW */}
      <section className="relative py-32 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-primary-dark/5 border border-primary-dark/10 rounded-full px-4 py-2 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary-dark/70">
                Common Questions
              </span>
            </div>
            <h2 className="text-[42px] md:text-[56px] lg:text-[64px] font-bold text-primary-dark tracking-tight mb-6 leading-[1.1]">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-primary-red/40 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-[17px] font-bold text-primary-dark pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-dark/5 rounded-full flex items-center justify-center group-hover:bg-primary-dark transition-all duration-300">
                    {openFaq === index ? (
                      <Minus className="w-4 h-4 text-primary-dark group-hover:text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-primary-dark group-hover:text-white" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 text-[15px] text-primary-dark/70 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="relative py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary-red/10 rounded-full px-4 py-2 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary-red">
                Get Started
              </span>
            </div>
            <h2 className="text-[42px] md:text-[56px] lg:text-[64px] font-bold text-primary-dark tracking-tight mb-6 leading-[1.1]">
              Request a Consultation
            </h2>
            <p className="text-[17px] md:text-[20px] text-primary-dark/60 max-w-2xl mx-auto leading-relaxed">
              Tell us about your needs and we'll get back to you with a tailored approach.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <ConsultationForm />
          </motion.div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="relative py-20 bg-gradient-to-br from-primary-dark via-dark-600 to-primary-dark text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/b&w-02.png"
                  alt="Swisspedia"
                  className="w-12 h-12 brightness-0 invert"
                />
                <div>
                  <div className="text-[24px] font-bold tracking-tight leading-none">
                    Swisspedia
                  </div>
                  <div className="text-[10px] text-white/50 tracking-[0.15em] uppercase mt-1 font-semibold">
                    Your Gateway to Switzerland
                  </div>
                </div>
              </div>
              <p className="text-white/70 text-[15px] leading-[1.8] max-w-lg mb-8">
                Premium information platform connecting individuals and organizations with Swiss executive education, relocation services, and business opportunities.
              </p>
              <div className="flex items-center gap-2 text-[13px] text-white/50">
                <MapPin className="w-4 h-4" />
                <span>Geneva, Switzerland</span>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <div>
                <p className="text-white/40 text-[11px] uppercase tracking-[0.12em] mb-3 font-bold">Contact</p>
                <a
                  href="mailto:contact@swisspedia.net"
                  className="inline-flex items-center gap-2 text-white/90 text-[15px] hover:text-primary-red transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  contact@swisspedia.net
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-white/50 text-[13px] text-center md:text-left leading-relaxed">
                Founded by a Swiss resident with institutional experience in executive education and immigration.
              </p>
              <p className="text-white/40 text-[13px] whitespace-nowrap">
                © {new Date().getFullYear()} Swisspedia. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
