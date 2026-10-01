'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react'

const chartPoints = '0,118 30,110 58,113 86,91 114,97 142,76 171,83 200,58 229,65 258,42 287,49 316,24 346,30 375,12'

export function HeroIsland() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="top" className="shell hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <motion.div
        className="hero-copy"
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-eyebrow"><span aria-hidden="true" />AI-powered marketing intelligence</div>
        <h1 id="hero-title">Make every marketing decision <em>count.</em></h1>
        <p className="hero-description">
          Turn fragmented campaign data into a clear growth plan. AuraAI brings paid media,
          predictive insights, and creative testing into one intelligent operating system.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#contact">
            Get a growth assessment <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a className="button-text" href="#platform">Explore the platform <ArrowDownRight size={14} aria-hidden="true" /></a>
        </div>
        <div className="hero-note"><Sparkles size={13} aria-hidden="true" /><strong>Built for teams that need clarity at scale</strong><span aria-hidden="true">|</span>Not another dashboard</div>
      </motion.div>

      <motion.div
        className="dashboard"
        aria-label="Illustrative marketing intelligence dashboard"
        initial={reduceMotion ? false : { opacity: 0, y: 25, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="dash-top">
          <span className="dash-brand">AURA / INTELLIGENCE</span>
          <span className="dash-live"><i aria-hidden="true" /> MODEL PREVIEW</span>
        </div>
        <div className="dash-heading">
          <div><span>Portfolio performance</span><strong>Signal overview</strong></div>
          <span className="dash-period">Last 30 days <ChevronDown size={11} aria-hidden="true" /></span>
        </div>
        <div className="dash-chart" aria-hidden="true">
          <svg viewBox="0 0 375 140" preserveAspectRatio="none" role="presentation">
            <defs>
              <linearGradient id="chartFade" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#83e8e2" stopOpacity=".25" />
                <stop offset="100%" stopColor="#83e8e2" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g className="chart-grid">
              <line x1="0" y1="25" x2="375" y2="25" />
              <line x1="0" y1="65" x2="375" y2="65" />
              <line x1="0" y1="105" x2="375" y2="105" />
            </g>
            <polygon className="chart-area" points={`0,140 ${chartPoints} 375,140`} />
            <motion.polyline
              className="chart-line"
              points={chartPoints}
              initial={reduceMotion ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.3, delay: 0.6, ease: 'easeOut' }}
            />
          </svg>
        </div>
        <div className="dash-stats">
          <div className="dash-stat"><span>Spend efficiency</span><strong>+18.6%</strong><small>Illustrative</small></div>
          <div className="dash-stat"><span>High-intent segments</span><strong>12</strong><small>Illustrative</small></div>
          <div className="dash-stat"><span>Creative signals</span><strong>Live</strong><small>Illustrative</small></div>
        </div>
        <div className="dash-disclaimer">Illustrative product preview | sample data</div>
      </motion.div>
    </section>
  )
}