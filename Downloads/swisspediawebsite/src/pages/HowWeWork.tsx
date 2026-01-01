import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, GitBranch, Rocket, HeadphonesIcon } from 'lucide-react';

const HowWeWork = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const processSteps = [
    {
      phase: '01',
      title: 'Discovery',
      duration: '30-min consultation',
      icon: Search,
      description: 'We start by understanding your specific situation—not a generic questionnaire.',
      details: [
        'Your exact timeline and constraints (visa deadlines, program start dates, work commitments)',
        'Your actual goals (career change vs advancement, family relocation needs, budget realities)',
        'Your current status (citizenship, permits, education level, industry experience)',
        'Red flags to avoid (common pitfalls that waste time and money)',
      ],
      outcome: 'You get: Honest assessment if we can help, preliminary timeline, and next steps clarity.',
    },
    {
      phase: '02',
      title: 'Matching',
      duration: '1-2 weeks',
      icon: GitBranch,
      description: 'We match you to the right institutions, programs, or service providers—not just any option.',
      details: [
        'For Education: Program screening based on accreditation (AACSB, EQUIS, AMBA), alumni outcomes, your career trajectory, not just rankings',
        'For Relocation: Canton-specific requirements, housing market realities, banking documentation needs, timeline coordination',
        'For Institutions: Candidate pre-screening, program fit analysis, cultural alignment, success probability assessment',
        'Quality filter: We only recommend options we would use ourselves or send family to',
      ],
      outcome: 'You get: 2-4 vetted options with pros/cons, cost breakdown, and our recommendation with reasoning.',
    },
    {
      phase: '03',
      title: 'Execution',
      duration: 'Varies by service',
      icon: Rocket,
      description: 'We guide you through the actual process—applications, documentation, deadlines, logistics.',
      details: [
        'Application support: Document review, essay feedback (education), visa application coordination (relocation)',
        'Logistics coordination: Housing search support, bank appointment prep, canton registration timeline',
        'Deadline management: We track critical dates (you get reminders 2 weeks, 1 week, 3 days before)',
        'Problem solving: Real-time support when issues arise (permit delays, housing falls through, application questions)',
      ],
      outcome: 'You get: Step-by-step guidance, template documents, and direct answers to your specific questions.',
    },
    {
      phase: '04',
      title: 'Support',
      duration: 'Ongoing',
      icon: HeadphonesIcon,
      description: 'We stay available after the main milestone—because questions do not stop at visa approval or enrollment.',
      details: [
        'Post-relocation: Help with health insurance, tax registration, bank issues, permit renewals',
        'During program: Check-ins at key points (first month, midpoint, thesis phase, career transition)',
        'For institutions: Quarterly performance reviews, candidate pipeline management, program optimization',
        'Network access: Introductions to alumni, local professionals, and service providers when relevant',
      ],
      outcome: 'You get: Peace of mind knowing you have someone who knows your situation if issues arise.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-2 text-primary-dark hover:text-primary-red transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-[13px] font-semibold tracking-wide">Back to Home</span>
          </Link>
          <h1 className="text-[20px] font-bold tracking-tight text-primary-dark">Swisspedia</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[12px] uppercase tracking-[0.12em] text-primary-red font-bold mb-4">
              Our Process
            </p>
            <h1 className="text-[48px] md:text-[64px] font-bold tracking-tight text-primary-dark mb-6 leading-[1.1]">
              How We Work
            </h1>
            <p className="text-[18px] md:text-[20px] text-primary-dark/70 leading-relaxed max-w-2xl mx-auto">
              A straightforward approach to Swiss relocation and education advisory—no fluff, just clarity on what happens when you work with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                {/* Connecting Line (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-[31px] top-[80px] bottom-[-64px] w-[2px] bg-gradient-to-b from-primary-red/30 to-transparent hidden md:block" />
                )}

                <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                  {/* Phase Number & Icon */}
                  <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-red to-primary-dark flex items-center justify-center shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-red flex items-center justify-center">
                        <span className="text-[11px] font-bold text-white">{step.phase}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-2xl border border-neutral-200 p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                        <h2 className="text-[32px] font-bold tracking-tight text-primary-dark">
                          {step.title}
                        </h2>
                        <span className="text-[13px] font-semibold tracking-wide text-primary-red/60 uppercase">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-[17px] text-primary-dark/80 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Details List */}
                    <div className="space-y-4 mb-6">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-red mt-2.5 flex-shrink-0" />
                          <p className="text-[15px] text-primary-dark/70 leading-relaxed">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Outcome Box */}
                    <div className="bg-gradient-to-br from-primary-red/8 to-primary-red/3 border border-primary-red/20 rounded-xl p-5">
                      <p className="text-[11px] uppercase tracking-[0.12em] text-primary-dark/50 font-bold mb-2">
                        What You Get
                      </p>
                      <p className="text-[15px] font-medium text-primary-dark leading-relaxed">
                        {step.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary-dark to-primary-dark/95">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[12px] uppercase tracking-[0.12em] text-primary-red/80 font-bold mb-4">
              Our Principles
            </p>
            <h2 className="text-[40px] font-bold tracking-tight text-white mb-4">
              What Guides Our Work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'No Commission Bias',
                description: 'We do not accept referral fees from institutions or service providers. Our recommendations are based solely on what is right for your situation.',
              },
              {
                title: 'Honest Assessment',
                description: 'If we cannot help you, we will tell you upfront. If a cheaper DIY approach makes sense for your case, we will say so.',
              },
              {
                title: 'Quality Over Volume',
                description: 'We work with a limited number of clients at a time to ensure everyone gets the attention and support they need.',
              },
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors duration-300"
              >
                <h3 className="text-[18px] font-bold text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-[14px] text-white/70 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[36px] md:text-[44px] font-bold tracking-tight text-primary-dark mb-6">
              Ready to Start?
            </h2>
            <p className="text-[17px] text-primary-dark/70 leading-relaxed mb-8 max-w-xl mx-auto">
              Book a free 30-minute consultation. We will discuss your situation, answer your questions, and give you an honest assessment of how we can help.
            </p>
            <Link to="/" onClick={() => { window.scrollTo(0, 0); setTimeout(() => { document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary-red text-white px-10 py-5 text-[13px] font-semibold tracking-wide rounded-full hover:bg-primary-red/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 text-[13px]">
            © 2025 Swisspedia. Swiss Relocation & Education Advisory.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HowWeWork;
