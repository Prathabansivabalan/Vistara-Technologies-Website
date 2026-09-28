import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  BookOpen,
  Briefcase,
} from 'lucide-react';
import {
  ALL_TOPICS,
  VISTARA_NAV_MENU,
  TopicSection,
  KEY_HOME_CAPABILITIES,
  ERP_CORE_MODULES,
  CASE_STUDIES_DATA,
  CLIENT_PORTFOLIO,
  CLIENT_TESTIMONIALS,
  RESOURCE_ARTICLES,
  FAQ_ITEMS,
  CAREER_OPENINGS,
} from '../data/vistaraData';
import { ContactForm } from './ContactForm';

interface TopicDetailViewProps {
  topic: TopicSection;
  activeSubSelectorId: string;
  onSelectTopic: (topicId: string, subSelectorId?: string) => void;
  onSelectSubItem: (subId: string) => void;
}

const SUPPORT_LIFECYCLE_STEPS = [
  {
    step: '01',
    title: 'Issue Reported',
    detail:
      'Authorized client user logs an incident or functional query via the Vistara Support Portal, dedicated email (vistaratechnologies@gmail.com), or support desk hotline.',
    sla: 'Immediate Acknowledgement',
  },
  {
    step: '02',
    title: 'Ticket Created',
    detail:
      'Automated ticket number is assigned and categorized by severity (Critical P1, High P2, Standard P3, Enhancement P4) and routed to the domain lead.',
    sla: '< 15 Mins Classification',
  },
  {
    step: '03',
    title: 'Analysis',
    detail:
      'Functional ERP consultant and database engineer inspect voucher logs, workflow rules, or SQL execution traces in a mirrored staging environment.',
    sla: 'Root-Cause Diagnosis',
  },
  {
    step: '04',
    title: 'Resolution',
    detail:
      'Configuration adjustment, data reconciliation script, or code patch is prepared in compliance with accounting and audit trail rules.',
    sla: 'Controlled Patch / Fix',
  },
  {
    step: '05',
    title: 'Testing',
    detail:
      'QA verification and client User Acceptance Testing (UAT) confirm the resolution fixes the reported issue without side effects on connected modules.',
    sla: 'Zero-Regression Check',
  },
  {
    step: '06',
    title: 'Closure',
    detail:
      'Fix is deployed to production with formal client sign-off and root-cause documentation archived in the client knowledge base.',
    sla: 'Verified Sign-Off',
  },
];

const CAREER_DEPARTMENTS = [
  'All Departments',
  'Engineering',
  'ERP Consulting',
  'Business Analysis',
  'Quality Assurance',
  'Customer Support',
  'Sales',
  'Marketing',
  'Administration',
] as const;

export const TopicDetailView: React.FC<TopicDetailViewProps> = ({
  topic,
  activeSubSelectorId,
  onSelectTopic,
  onSelectSubItem,
}) => {
  // Linear stepping across the 7 separate pages: Home -> Products -> Solutions -> Industries -> Services -> Company -> Resources
  const currentIndex = ALL_TOPICS.findIndex((t) => t.id === topic.id);
  const prevTopic = currentIndex > 0 ? ALL_TOPICS[currentIndex - 1] : null;
  const nextTopic =
    currentIndex < ALL_TOPICS.length - 1 ? ALL_TOPICS[currentIndex + 1] : null;

  // Home capability interactive spotlight state
  const [selectedCapabilityId, setSelectedCapabilityId] = useState<string>(
    KEY_HOME_CAPABILITIES[0].id
  );

  // Support lifecycle interactive step state
  const [activeSupportStep, setActiveSupportStep] = useState<number>(0);

  // Case Study selector state
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string>(
    CASE_STUDIES_DATA[0].id
  );

  // Resources interactive article & category state
  const [activeArticleId, setActiveArticleId] = useState<string>(
    RESOURCE_ARTICLES[0].id
  );

  // Careers department filter & application state
  const [selectedDepartment, setSelectedDepartment] =
    useState<string>('All Departments');
  const [applyingJobId, setApplyingJobId] = useState<string>(
    CAREER_OPENINGS[0].id
  );
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [candidateExp, setCandidateExp] = useState('');
  const [candidateNote, setCandidateNote] = useState('');
  const [careerSuccessMsg, setCareerSuccessMsg] = useState<string | null>(null);
  const [careerErrorMsg, setCareerErrorMsg] = useState<string | null>(null);

  // Update active article when user switches between Articles / ERP Guides / Documentation on Resources page
  useEffect(() => {
    if (topic.id === 'resources') {
      if (activeSubSelectorId === 'res-articles') {
        const match = RESOURCE_ARTICLES.find((a) => a.category === 'Articles');
        if (match) setActiveArticleId(match.id);
      } else if (activeSubSelectorId === 'res-erp-guides') {
        const match = RESOURCE_ARTICLES.find(
          (a) => a.category === 'ERP Guides' || a.category === 'Industry Guides'
        );
        if (match) setActiveArticleId(match.id);
      } else if (activeSubSelectorId === 'res-documentation') {
        const match = RESOURCE_ARTICLES.find(
          (a) =>
            a.category === 'Product Documentation' ||
            a.category === 'White Papers'
        );
        if (match) setActiveArticleId(match.id);
      }
    }
  }, [topic.id, activeSubSelectorId]);

  const handleCareerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCareerErrorMsg(null);
    setCareerSuccessMsg(null);

    if (
      !candidateName.trim() ||
      !candidateEmail.trim() ||
      !candidatePhone.trim()
    ) {
      setCareerErrorMsg(
        'Please enter your Full Name, Email Address, and Phone Number.'
      );
      return;
    }

    const selectedJob = CAREER_OPENINGS.find((j) => j.id === applyingJobId);
    setCareerSuccessMsg(
      `Application registered for ${
        selectedJob?.title || 'Vistara Technologies'
      } (Ref: VST-HR-${Math.floor(
        1000 + Math.random() * 9000
      )}). You can also click "Send Direct Email to HR" below to attach your CV to vistaratechnologies@gmail.com.`
    );
  };

  // Determine filtered subItems if a page has subItems
  const displayedSubItems =
    topic.subItems &&
    activeSubSelectorId &&
    activeSubSelectorId !== 'all' &&
    activeSubSelectorId !== 'overview'
      ? topic.subItems.filter((item) => item.id === activeSubSelectorId)
      : topic.subItems || [];

  const activeSubItemList =
    displayedSubItems.length > 0 ? displayedSubItems : topic.subItems || [];

  const isShowAll =
    !activeSubSelectorId ||
    activeSubSelectorId === 'all' ||
    activeSubSelectorId === 'overview';

  // Helper to filter articles on Resources page
  const filteredArticles = RESOURCE_ARTICLES.filter((a) => {
    if (activeSubSelectorId === 'res-articles') {
      return a.category === 'Articles';
    }
    if (activeSubSelectorId === 'res-erp-guides') {
      return a.category === 'ERP Guides' || a.category === 'Industry Guides';
    }
    if (activeSubSelectorId === 'res-documentation') {
      return (
        a.category === 'Product Documentation' || a.category === 'White Papers'
      );
    }
    return true;
  });

  return (
    <div className="flex-1 min-w-0 bg-[#060E20] pb-16">
      {/* Top 7-Page Sequential Switcher & Stepping Bar */}
      <div className="border-b border-sky-500/20 bg-[#081530] px-4 py-3 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          {/* Direct 7 Separate Pages Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {ALL_TOPICS.map((pageTopic) => {
              const isCurrentPage = pageTopic.id === topic.id;
              return (
                <button
                  key={pageTopic.id}
                  type="button"
                  onClick={() => onSelectTopic(pageTopic.id, 'all')}
                  className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                    isCurrentPage
                      ? 'bg-sky-500 text-white'
                      : 'bg-[#0B1B3D] text-slate-300 hover:border-sky-400 hover:text-sky-300'
                  }`}
                >
                  {pageTopic.shortTitle}
                </button>
              );
            })}
          </div>

          {/* Previous / Next Page Controls */}
          <div className="flex items-center gap-2">
            {prevTopic && (
              <button
                type="button"
                onClick={() => onSelectTopic(prevTopic.id, 'all')}
                className="flex items-center gap-1.5 rounded-md border border-sky-500/30 bg-[#0B1B3D] px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-sky-400 hover:text-white transition-colors duration-150 whitespace-nowrap cursor-pointer"
              >
                <ArrowLeft className="h-3.5 w-3.5 text-sky-400" />
                <span>{prevTopic.shortTitle}</span>
              </button>
            )}
            {nextTopic && (
              <button
                type="button"
                onClick={() => onSelectTopic(nextTopic.id, 'all')}
                className="flex items-center gap-1.5 rounded-md bg-sky-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-sky-400 hover:text-[#060E20] transition-colors duration-150 whitespace-nowrap cursor-pointer"
              >
                <span>Next: {nextTopic.shortTitle}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-8">
        {/* ===================================================================
            PAGE 1: HOME PAGE
           =================================================================== */}
        {topic.id === 'home' && (
          <div className="space-y-14">
            {/* Hero Section */}
            <section className="space-y-6">
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-xs text-sky-300">
                  <span>Vistara Technologies</span>
                  <span aria-hidden="true">·</span>
                  <span>ERP & Enterprise Business Solutions</span>
                  <span aria-hidden="true">·</span>
                  <span>Chennai, India</span>
                </div>

                <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl leading-[1.12] max-w-4xl">
                  Integrated ERP Solutions for Connected Business Operations
                </h1>

                <p className="max-w-3xl text-base text-slate-300 leading-relaxed">
                  Vistara Technologies provides enterprise software solutions that help organizations manage finance, sales, procurement, inventory, human resources, manufacturing and business operations through integrated digital platforms.
                </p>

                {/* Primary Hero Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectTopic('solutions', 'all')}
                    className="rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400 hover:text-[#060E20] transition-colors duration-150 whitespace-nowrap cursor-pointer"
                  >
                    Explore Our Solutions
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectTopic('company', 'comp-contact')}
                    className="rounded-lg border border-sky-400/40 bg-[#0B1B3D] px-6 py-3 text-sm font-semibold text-sky-200 hover:border-sky-300 hover:text-white transition-colors duration-150 whitespace-nowrap cursor-pointer"
                  >
                    Contact Us
                  </button>
                </div>

                {/* Regional & B2B Trust Signals in Hero */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-sky-500/20 pt-5 max-w-3xl">
                  <div>
                    <div className="font-display text-lg font-semibold text-sky-300">
                      Core ERP Suite
                    </div>
                    <div className="mt-0.5 text-xs text-slate-400">
                      Unified Enterprise Platform
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold text-sky-300">
                      Industry Editions
                    </div>
                    <div className="mt-0.5 text-xs text-slate-400">
                      Domain-Configured Workflows
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold text-sky-300">
                      Cloud & On-Prem
                    </div>
                    <div className="mt-0.5 text-xs text-slate-400">
                      Flexible Deployment Models
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Capabilities — Interactive Selector */}
            <section className="border-t border-sky-500/20 pt-10">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <div className="text-xs text-sky-400">Core Enterprise Portfolio</div>
                  <h2 className="mt-1 font-display text-2xl font-bold text-white">
                    Key Capabilities Across the Enterprise Stack
                  </h2>
                </div>
                <p className="max-w-md text-xs text-slate-400">
                  Select any capability below to inspect its scope or open its dedicated page.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5 rounded-lg border border-sky-500/20 bg-[#081530] p-1.5">
                {KEY_HOME_CAPABILITIES.map((cap) => {
                  const isSelected = selectedCapabilityId === cap.id;
                  return (
                    <button
                      key={cap.id}
                      type="button"
                      onClick={() => setSelectedCapabilityId(cap.id)}
                      className={`rounded-md px-3.5 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                        isSelected
                          ? 'bg-sky-500 text-white font-semibold'
                          : 'text-slate-300 hover:bg-sky-500/15 hover:text-sky-200'
                      }`}
                    >
                      {cap.title}
                    </button>
                  );
                })}
              </div>

              {KEY_HOME_CAPABILITIES.filter((c) => c.id === selectedCapabilityId).map(
                (cap) => (
                  <div
                    key={cap.id}
                    className="mt-4 rounded-lg border border-sky-400/30 bg-[#0A1938] p-6"
                  >
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                      <div className="space-y-2 max-w-3xl">
                        <div className="text-xs text-sky-300">{cap.metrics}</div>
                        <h3 className="font-display text-xl font-bold text-white">
                          {cap.title}
                        </h3>
                        <p className="text-sm text-slate-200 leading-relaxed">
                          {cap.summary}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          onSelectTopic(cap.topicId, cap.subSelectorId)
                        }
                        className="inline-flex items-center gap-2 self-start md:self-center rounded-lg bg-sky-500 px-4 py-2.5 text-xs font-semibold text-white hover:bg-sky-400 hover:text-[#060E20] transition-colors duration-150 whitespace-nowrap cursor-pointer shrink-0"
                      >
                        <span>Explore {cap.title}</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )
              )}
            </section>

            {/* Complete Ordered Website Hierarchy:
                HOME -> PRODUCTS -> SOLUTIONS -> INDUSTRIES -> SERVICES -> COMPANY -> RESOURCES */}
            <section className="border-t border-sky-500/20 pt-10">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                <div>
                  <div className="text-xs text-sky-400">
                    VISTARA TECHNOLOGIES · WEBSITE ARCHITECTURE
                  </div>
                  <h2 className="mt-1 font-display text-2xl font-bold text-white">
                    Explore Separate Pages & Structured Modules
                  </h2>
                </div>
                <p className="text-xs text-slate-400">
                  Click any page heading to open its full page, or click any sub-item to jump directly to that section.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {VISTARA_NAV_MENU.map((group) => (
                  <div
                    key={group.key}
                    className="flex flex-col justify-between rounded-lg border border-sky-500/25 bg-[#081530] p-5"
                  >
                    <div>
                      <button
                        type="button"
                        onClick={() => onSelectTopic(group.defaultTopicId, 'all')}
                        className="group flex w-full items-center justify-between border-b border-sky-500/20 pb-3 text-left cursor-pointer"
                      >
                        <span className="font-display text-base font-bold tracking-wide text-white group-hover:text-sky-300">
                          {group.key}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-sky-400 group-hover:text-sky-300">
                          <span>Open Page</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </button>

                      {group.key === 'HOME' ? (
                        <div className="mt-3 space-y-2 text-xs text-slate-300">
                          <p>
                            Primary landing page establishing Vistara Technologies as your ERP & Enterprise Business Solutions partner.
                          </p>
                          <div className="font-mono text-sky-300">
                            └── Integrated ERP & Enterprise Overview
                          </div>
                        </div>
                      ) : (
                        <ul className="mt-3 space-y-1.5">
                          {group.items.map((item, idx) => {
                            const isLast = idx === group.items.length - 1;
                            const branch = isLast ? '└──' : '├──';
                            return (
                              <li key={`${group.key}-${item.label}`}>
                                <button
                                  type="button"
                                  onClick={() =>
                                    onSelectTopic(item.topicId, item.subSelectorId)
                                  }
                                  className="flex w-full items-center gap-2 rounded px-2 py-1 text-left text-xs text-slate-200 hover:bg-sky-500/15 hover:text-sky-300 transition-colors cursor-pointer"
                                >
                                  <span className="font-mono text-sky-400/80 select-none">
                                    {branch}
                                  </span>
                                  <span>{item.label}</span>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ===================================================================
            STANDARD HEADER FOR SEPARATE PAGES:
            PRODUCTS, SOLUTIONS, INDUSTRIES, SERVICES, COMPANY, RESOURCES
           =================================================================== */}
        {topic.id !== 'home' && (
          <div className="mb-8 border-b border-sky-500/20 pb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-sky-400">
                <span className="font-bold">{topic.navGroup}</span>
                <span aria-hidden="true">·</span>
                <span>Vistara Technologies</span>
              </div>
              <h1 className="font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
                {topic.title}
              </h1>
              <p className="text-sm font-medium text-sky-300">{topic.subtitle}</p>
              <p className="max-w-4xl text-sm text-slate-200 leading-relaxed">
                {topic.overview}
              </p>
              {topic.secondaryOverview && (
                <p className="max-w-4xl text-sm text-slate-300 leading-relaxed">
                  {topic.secondaryOverview}
                </p>
              )}
            </div>

            {/* 3 Executive Highlights Bar */}
            {topic.highlights && topic.highlights.length > 0 && (
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {topic.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-sky-500/20 bg-[#081530] p-4"
                  >
                    <div className="text-xs font-semibold text-sky-300">
                      {h.label}
                    </div>
                    <div className="mt-1 text-xs text-slate-300 leading-relaxed">
                      {h.detail}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ===================================================================
            SUB-ITEM TREE FILTER & CARDS FOR:
            PRODUCTS, SOLUTIONS, INDUSTRIES, SERVICES, COMPANY, RESOURCES
           =================================================================== */}
        {topic.id !== 'home' && topic.subItems && topic.subItems.length > 0 && (
          <section className="space-y-6">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-display text-lg font-bold text-white">
                  {topic.shortTitle} Sections ({topic.subItems.length})
                </h2>
                <p className="text-xs text-slate-400">
                  Select any section in the {topic.shortTitle} order below, or view all sections together.
                </p>
              </div>
            </div>

            {/* Interactive Sub-Section Filter Buttons */}
            <div className="flex flex-wrap gap-1.5 rounded-lg border border-sky-500/25 bg-[#081530] p-1.5">
              <button
                type="button"
                onClick={() => onSelectSubItem('all')}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                  isShowAll
                    ? 'bg-sky-500 text-white font-semibold'
                    : 'text-slate-300 hover:bg-sky-500/15 hover:text-sky-200'
                }`}
              >
                All {topic.shortTitle}
              </button>
              {topic.subItems.map((sub, idx) => {
                const isSelected = activeSubSelectorId === sub.id;
                const branch =
                  idx === topic.subItems!.length - 1 ? '└──' : '├──';
                return (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => onSelectSubItem(sub.id)}
                    className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? 'bg-sky-500 text-white font-semibold'
                        : 'text-slate-300 hover:bg-sky-500/15 hover:text-sky-200'
                    }`}
                  >
                    <span className="font-mono opacity-75">{branch}</span>
                    <span>{sub.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Rendered Sub-Items Result Cards */}
            <div className="space-y-5">
              {activeSubItemList.map((sub) => (
                <article
                  key={sub.id}
                  className="rounded-lg border border-sky-400/25 bg-[#091734] p-6"
                >
                  <div className="flex flex-col justify-between gap-2 border-b border-sky-500/15 pb-4 sm:flex-row sm:items-center">
                    <div>
                      <div className="text-xs text-sky-400">
                        {topic.navGroup}
                      </div>
                      <h3 className="mt-0.5 font-display text-xl font-bold text-white">
                        {sub.title}
                      </h3>
                    </div>
                    {sub.id !== 'comp-contact' && (
                      <button
                        type="button"
                        onClick={() => onSelectTopic('company', 'comp-contact')}
                        className="self-start sm:self-center rounded-md border border-sky-400/40 bg-[#0D2149] px-3.5 py-1.5 text-xs font-medium text-sky-200 hover:bg-sky-500 hover:text-white transition-colors duration-150 whitespace-nowrap cursor-pointer"
                      >
                        Inquire About {sub.title}
                      </button>
                    )}
                  </div>

                  <p className="mt-4 text-sm text-slate-200 leading-relaxed">
                    {sub.summary}
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <div
                      className={
                        sub.deliverables ? 'lg:col-span-7' : 'lg:col-span-12'
                      }
                    >
                      <h4 className="text-xs font-semibold text-sky-300">
                        Core Capabilities & Scope
                      </h4>
                      <ul className="mt-2.5 space-y-2">
                        {sub.capabilities.map((cap, cIdx) => (
                          <li
                            key={cIdx}
                            className="flex items-start gap-2.5 text-sm text-slate-200"
                          >
                            <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-sky-400" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {sub.deliverables && (
                      <div className="lg:col-span-5 rounded-lg border border-sky-500/20 bg-[#061026] p-4">
                        <h4 className="text-xs font-semibold text-sky-300">
                          Key Deliverables & Governance
                        </h4>
                        <ul className="mt-2.5 space-y-2">
                          {sub.deliverables.map((deliv, dIdx) => (
                            <li
                              key={dIdx}
                              className="flex items-start gap-2 text-xs text-slate-300"
                            >
                              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-400" />
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                        {sub.operationalImpact && (
                          <div className="mt-4 border-t border-sky-500/15 pt-3">
                            <div className="text-xs font-semibold text-sky-300">
                              Operational Impact
                            </div>
                            <p className="mt-1 text-xs text-slate-200">
                              {sub.operationalImpact}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ===================================================================
            PRODUCTS PAGE EXTRA: FULL 8 CORE MODULES SUITE MATRIX
            (Shown when viewing All Products or Vistara ERP)
           =================================================================== */}
        {topic.id === 'products' &&
          (isShowAll || activeSubSelectorId === 'vistara-erp') && (
            <section className="mt-10 border-t border-sky-500/20 pt-8 space-y-5">
              <div>
                <div className="text-xs text-sky-400">
                  Vistara ERP Complete Suite Architecture
                </div>
                <h3 className="mt-1 font-display text-xl font-bold text-white">
                  All 8 Integrated Core Modules Inside Vistara ERP
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  Vistara ERP includes Sales Management and Purchase Management alongside Finance, Inventory, HR & Payroll, Manufacturing, CRM, and Business Intelligence:
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {ERP_CORE_MODULES.map((mod) => (
                  <div
                    key={mod.id}
                    className="rounded-lg border border-sky-500/20 bg-[#081530] p-5"
                  >
                    <h4 className="font-display text-base font-bold text-white">
                      {mod.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                      {mod.summary}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {mod.capabilities.map((c, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-200"
                        >
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-400" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

        {/* ===================================================================
            SERVICES PAGE EXTRA: 6-STAGE INTERACTIVE SUPPORT LIFECYCLE
            (Shown when viewing All Services or Support & Maintenance)
           =================================================================== */}
        {topic.id === 'services' &&
          (isShowAll || activeSubSelectorId === 'srv-support-maintenance') && (
            <section className="mt-10 rounded-lg border border-sky-400/30 bg-[#091734] p-6">
              <div className="text-xs text-sky-400">Structured SLA Governance</div>
              <h3 className="mt-1 font-display text-xl font-bold text-white">
                Vistara Support Process Lifecycle
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                Select each stage in our operational support workflow below to view the protocol:
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
                {SUPPORT_LIFECYCLE_STEPS.map((st, idx) => {
                  const isCurrent = activeSupportStep === idx;
                  return (
                    <button
                      key={st.step}
                      type="button"
                      onClick={() => setActiveSupportStep(idx)}
                      className={`rounded-md border p-3 text-left transition-colors duration-150 cursor-pointer ${
                        isCurrent
                          ? 'border-sky-400 bg-sky-500/25 text-white'
                          : 'border-sky-500/20 bg-[#061026] text-slate-300 hover:border-sky-400/50'
                      }`}
                    >
                      <div className="text-xs font-semibold text-sky-400">
                        Support Stage
                      </div>
                      <div className="mt-1 font-display text-xs font-semibold">
                        {st.title}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 rounded-md border border-sky-500/20 bg-[#061026] p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-display text-base font-bold text-white">
                    {SUPPORT_LIFECYCLE_STEPS[activeSupportStep].title}
                  </div>
                  <span className="font-mono-num text-xs text-sky-300">
                    Target Standard: {SUPPORT_LIFECYCLE_STEPS[activeSupportStep].sla}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-200">
                  {SUPPORT_LIFECYCLE_STEPS[activeSupportStep].detail}
                </p>
              </div>
            </section>
          )}

        {/* ===================================================================
            COMPANY PAGE INTERACTIVE SECTIONS:
            - CLIENTS (Portfolio Table + Testimonials)
            - CASE STUDIES (Interactive Selector)
            - CAREERS (Openings + Application Form)
            - CONTACT (Corporate Info + 7-Field ContactForm)
           =================================================================== */}
        {topic.id === 'company' && (
          <div className="mt-10 space-y-12">
            {/* CLIENTS SECTION */}
            {(isShowAll || activeSubSelectorId === 'comp-clients') && (
              <section className="space-y-6 border-t border-sky-500/20 pt-8">
                <div>
                  <div className="text-xs text-sky-400">COMPANY · CLIENTS</div>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">
                    Our Clients & Industry Footprint
                  </h3>
                </div>

                <div className="overflow-x-auto rounded-lg border border-sky-500/25 bg-[#091734]">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-sky-500/25 bg-[#061026] text-xs font-semibold text-sky-300">
                        <th className="py-3.5 px-4">Client Industry Sector</th>
                        <th className="py-3.5 px-4">
                          Vistara Solution Implemented
                        </th>
                        <th className="py-3.5 px-4">Location</th>
                        <th className="py-3.5 px-4">Operational Scope</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-sky-500/15 text-xs text-slate-200">
                      {CLIENT_PORTFOLIO.map((c, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-sky-500/10 transition-colors"
                        >
                          <td className="py-3.5 px-4 font-semibold text-white">
                            {c.industry}
                          </td>
                          <td className="py-3.5 px-4">{c.solution}</td>
                          <td className="py-3.5 px-4 text-slate-300">
                            {c.location}
                          </td>
                          <td className="py-3.5 px-4 font-mono-num text-sky-300">
                            {c.scope}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Client Testimonials */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 pt-2">
                  {CLIENT_TESTIMONIALS.map((item, idx) => (
                    <blockquote
                      key={idx}
                      className="flex flex-col justify-between rounded-lg border border-sky-400/25 bg-[#091734] p-6"
                    >
                      <div>
                        <div className="text-xs font-semibold text-sky-400">
                          Verified Client Reference
                        </div>
                        <p className="mt-3 text-sm text-slate-100 leading-relaxed">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                      </div>
                      <footer className="mt-6 border-t border-sky-500/20 pt-4">
                        <div className="font-display text-sm font-bold text-white">
                          {item.name}
                        </div>
                        <div className="text-xs text-sky-300">
                          {item.designation}
                        </div>
                        <div className="text-xs text-slate-400">
                          {item.company}
                        </div>
                        <div className="mt-3 rounded bg-[#061026] p-2.5 text-xs text-slate-200">
                          <span className="font-semibold text-sky-400">
                            Outcome:{' '}
                          </span>
                          {item.outcome}
                        </div>
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </section>
            )}

            {/* CASE STUDIES SECTION */}
            {(isShowAll || activeSubSelectorId === 'comp-case-studies') && (
              <section className="space-y-6 border-t border-sky-500/20 pt-8">
                <div>
                  <div className="text-xs text-sky-400">
                    COMPANY · CASE STUDIES
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">
                    Enterprise ERP Case Studies
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 rounded-lg border border-sky-500/25 bg-[#081530] p-1.5">
                  {CASE_STUDIES_DATA.map((cs) => (
                    <button
                      key={cs.id}
                      type="button"
                      onClick={() => setActiveCaseStudyId(cs.id)}
                      className={`rounded-md px-3.5 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                        activeCaseStudyId === cs.id
                          ? 'bg-sky-500 text-white font-semibold'
                          : 'text-slate-300 hover:bg-sky-500/15 hover:text-sky-200'
                      }`}
                    >
                      {cs.customerIndustry}
                    </button>
                  ))}
                </div>

                {CASE_STUDIES_DATA.filter(
                  (cs) => cs.id === activeCaseStudyId
                ).map((cs) => (
                  <div
                    key={cs.id}
                    className="space-y-6 rounded-lg border border-sky-400/30 bg-[#091734] p-6"
                  >
                    <div className="border-b border-sky-500/20 pb-4">
                      <div className="flex items-center gap-2 text-xs text-sky-300">
                        <span>Customer Industry: {cs.customerIndustry}</span>
                        <span aria-hidden="true">·</span>
                        <span>{cs.location}</span>
                      </div>
                      <h4 className="mt-1 font-display text-2xl font-bold text-white">
                        {cs.title}
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      {cs.quantifiedMetrics.map((m, i) => (
                        <div
                          key={i}
                          className="rounded-lg border border-sky-500/20 bg-[#061026] p-4"
                        >
                          <div className="font-mono-num text-2xl font-bold text-sky-400">
                            {m.value}
                          </div>
                          <div className="mt-1 text-xs font-semibold text-white">
                            {m.label}
                          </div>
                          <div className="mt-0.5 text-xs text-slate-400">
                            {m.timeframe}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-xs font-semibold text-sky-300">
                            Business Challenge
                          </h5>
                          <p className="mt-1.5 text-sm text-slate-200 leading-relaxed">
                            {cs.businessChallenge}
                          </p>
                        </div>
                        <div>
                          <h5 className="text-xs font-semibold text-sky-300">
                            Vistara Solution
                          </h5>
                          <p className="mt-1.5 text-sm text-slate-200 leading-relaxed">
                            {cs.vistaraSolution}
                          </p>
                        </div>
                        <div>
                          <h5 className="text-xs font-semibold text-sky-300">
                            Business Outcome
                          </h5>
                          <p className="mt-1.5 text-sm text-slate-200 leading-relaxed">
                            {cs.businessOutcome}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4 rounded-lg border border-sky-500/20 bg-[#061026] p-5">
                        <div>
                          <h5 className="text-xs font-semibold text-sky-300">
                            Modules Implemented
                          </h5>
                          <ul className="mt-2 space-y-1.5">
                            {cs.modulesImplemented.map((mod, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-xs text-slate-200"
                              >
                                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-400" />
                                <span>{mod}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="border-t border-sky-500/15 pt-4">
                          <h5 className="text-xs font-semibold text-sky-300">
                            Implementation Process
                          </h5>
                          <ul className="mt-2 space-y-1.5">
                            {cs.implementationProcess.map((step, idx) => (
                              <li key={idx} className="text-xs text-slate-300">
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            )}

            {/* CAREERS SECTION */}
            {(isShowAll || activeSubSelectorId === 'comp-careers') && (
              <section className="space-y-8 border-t border-sky-500/20 pt-8">
                <div>
                  <div className="text-xs text-sky-400">COMPANY · CAREERS</div>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">
                    Careers at Vistara Technologies
                  </h3>
                </div>

                <div>
                  <div className="text-xs font-semibold text-sky-300">
                    Filter Openings by Department
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5 rounded-lg border border-sky-500/25 bg-[#081530] p-1.5">
                    {CAREER_DEPARTMENTS.map((dept) => (
                      <button
                        key={dept}
                        type="button"
                        onClick={() => setSelectedDepartment(dept)}
                        className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                          selectedDepartment === dept
                            ? 'bg-sky-500 text-white font-semibold'
                            : 'text-slate-300 hover:bg-sky-500/15 hover:text-sky-200'
                        }`}
                      >
                        {dept}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-7 space-y-4">
                    <h4 className="font-display text-lg font-bold text-white">
                      Current Openings in Chennai
                    </h4>
                    {CAREER_OPENINGS.filter(
                      (job) =>
                        selectedDepartment === 'All Departments' ||
                        job.department === selectedDepartment
                    ).map((job) => (
                      <div
                        key={job.id}
                        className={`rounded-lg border p-5 transition-colors ${
                          applyingJobId === job.id
                            ? 'border-sky-400 bg-[#0C1E44]'
                            : 'border-sky-500/20 bg-[#091734]'
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2 text-xs text-sky-300">
                            <Briefcase className="h-3.5 w-3.5" />
                            <span>{job.department}</span>
                            <span aria-hidden="true">·</span>
                            <span>{job.experience}</span>
                            <span aria-hidden="true">·</span>
                            <span>{job.employmentType}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setApplyingJobId(job.id)}
                            className="rounded bg-sky-500 px-3 py-1 text-xs font-semibold text-white hover:bg-sky-400 hover:text-[#060E20] transition-colors cursor-pointer"
                          >
                            Select Role to Apply
                          </button>
                        </div>
                        <h5 className="mt-2 font-display text-base font-bold text-white">
                          {job.title}
                        </h5>
                        <p className="mt-1 text-xs text-slate-300">
                          {job.location}
                        </p>
                        <p className="mt-2 text-sm text-slate-200">
                          {job.summary}
                        </p>
                        <ul className="mt-3 space-y-1">
                          {job.responsibilities.map((r, i) => (
                            <li key={i} className="text-xs text-slate-300">
                              • {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="lg:col-span-5">
                    <form
                      onSubmit={handleCareerSubmit}
                      className="rounded-lg border border-sky-400/30 bg-[#091734] p-6 space-y-4"
                    >
                      <div>
                        <div className="text-xs text-sky-400">
                          HR & Talent Acquisition Desk
                        </div>
                        <h4 className="mt-0.5 font-display text-lg font-bold text-white">
                          Apply for Selected Position
                        </h4>
                        <p className="mt-1 text-xs text-slate-300">
                          Applications are routed to{' '}
                          <span className="font-mono-num text-sky-300">
                            vistaratechnologies@gmail.com
                          </span>
                        </p>
                      </div>

                      {careerErrorMsg && (
                        <div className="rounded border border-amber-400/40 bg-amber-950/50 p-3 text-xs text-amber-200">
                          {careerErrorMsg}
                        </div>
                      )}

                      {careerSuccessMsg && (
                        <div className="rounded border border-sky-400/50 bg-sky-950/60 p-3 text-xs text-sky-200 space-y-2">
                          <div>{careerSuccessMsg}</div>
                          <a
                            href={`mailto:vistaratechnologies@gmail.com?subject=${encodeURIComponent(
                              `Career Application: ${
                                CAREER_OPENINGS.find(
                                  (j) => j.id === applyingJobId
                                )?.title || 'Vistara'
                              } — ${candidateName}`
                            )}&body=${encodeURIComponent(
                              `Applicant Name: ${candidateName}\nEmail: ${candidateEmail}\nPhone: ${candidatePhone}\nExperience: ${candidateExp}\nSummary:\n${candidateNote}`
                            )}`}
                            className="inline-flex items-center gap-1.5 rounded bg-sky-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-sky-400"
                          >
                            <Mail className="h-3.5 w-3.5" />
                            <span>
                              Send Direct Email to HR (vistaratechnologies@gmail.com)
                            </span>
                          </a>
                        </div>
                      )}

                      <div>
                        <label className="block text-xs font-medium text-slate-200">
                          Selected Role
                        </label>
                        <select
                          value={applyingJobId}
                          onChange={(e) => setApplyingJobId(e.target.value)}
                          className="mt-1 w-full rounded-md border border-sky-500/30 bg-[#061026] px-3 py-2 text-xs text-white focus:border-sky-400 focus:outline-none"
                        >
                          {CAREER_OPENINGS.map((j) => (
                            <option key={j.id} value={j.id}>
                              {j.title} ({j.department})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-200">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={candidateName}
                          onChange={(e) => setCandidateName(e.target.value)}
                          placeholder="Enter your full name"
                          className="mt-1 w-full rounded-md border border-sky-500/30 bg-[#061026] px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-medium text-slate-200">
                            Email *
                          </label>
                          <input
                            type="email"
                            value={candidateEmail}
                            onChange={(e) => setCandidateEmail(e.target.value)}
                            placeholder="you@domain.com"
                            className="mt-1 w-full rounded-md border border-sky-500/30 bg-[#061026] px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-200">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            value={candidatePhone}
                            onChange={(e) => setCandidatePhone(e.target.value)}
                            placeholder="+91 98XXX XXXXX"
                            className="mt-1 w-full rounded-md border border-sky-500/30 bg-[#061026] px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-200">
                          Years of Experience & Key Skills
                        </label>
                        <input
                          type="text"
                          value={candidateExp}
                          onChange={(e) => setCandidateExp(e.target.value)}
                          placeholder="e.g., 4 years in ERP Implementation / .NET & React"
                          className="mt-1 w-full rounded-md border border-sky-500/30 bg-[#061026] px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-200">
                          Brief Cover Note / Project Highlights
                        </label>
                        <textarea
                          rows={3}
                          value={candidateNote}
                          onChange={(e) => setCandidateNote(e.target.value)}
                          placeholder="Share your relevant ERP or engineering experience..."
                          className="mt-1 w-full rounded-md border border-sky-500/30 bg-[#061026] px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-lg bg-sky-500 px-4 py-2.5 text-xs font-semibold text-white hover:bg-sky-400 hover:text-[#060E20] transition-colors cursor-pointer"
                      >
                        Submit Career Application
                      </button>
                    </form>
                  </div>
                </div>
              </section>
            )}

            {/* CONTACT SECTION */}
            {(isShowAll || activeSubSelectorId === 'comp-contact') && (
              <section className="space-y-6 border-t border-sky-500/20 pt-8">
                <div>
                  <div className="text-xs text-sky-400">COMPANY · CONTACT</div>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">
                    Contact Vistara Technologies
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-5 space-y-6">
                    <div className="rounded-lg border border-sky-400/30 bg-[#091734] p-6 space-y-5">
                      <div>
                        <div className="text-xs text-sky-400">
                          Corporate Headquarters
                        </div>
                        <h4 className="mt-1 font-display text-xl font-bold text-white">
                          Vistara Technologies
                        </h4>
                        <p className="mt-1 text-xs text-slate-300">
                          ERP & Enterprise Business Solutions
                        </p>
                      </div>

                      <div className="space-y-4 border-t border-sky-500/20 pt-4 text-sm">
                        <div className="flex items-start gap-3">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                          <div>
                            <div className="text-xs font-semibold text-sky-300">
                              Head Office
                            </div>
                            <div className="mt-0.5 text-slate-200">
                              Chennai, Tamil Nadu, India
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                          <div>
                            <div className="text-xs font-semibold text-sky-300">
                              Official Email
                            </div>
                            <a
                              href="mailto:vistaratechnologies@gmail.com"
                              className="mt-0.5 block font-mono-num text-sky-400 hover:text-sky-300 underline"
                            >
                              vistaratechnologies@gmail.com
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                          <div>
                            <div className="text-xs font-semibold text-sky-300">
                              Enterprise Consultation Desk
                            </div>
                            <div className="mt-0.5 font-mono-num text-slate-200">
                              +91 44 2815 4900 · Mon–Sat (9:30 AM – 6:30 PM IST)
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-sky-500/20 pt-4">
                        <div className="text-xs font-semibold text-sky-300">
                          Direct Email Launch
                        </div>
                        <p className="mt-1 text-xs text-slate-300">
                          Prefer to write directly from your mail client? Click below to compose an inquiry addressed to vistaratechnologies@gmail.com.
                        </p>
                        <a
                          href="mailto:vistaratechnologies@gmail.com?subject=ERP%20%26%20Enterprise%20Solutions%20Inquiry%20%E2%80%94%20Vistara%20Technologies"
                          className="mt-3 inline-flex items-center gap-2 rounded-md border border-sky-400/40 bg-[#061026] px-4 py-2 text-xs font-semibold text-sky-300 hover:bg-sky-500 hover:text-white transition-colors"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          <span>Email vistaratechnologies@gmail.com</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <ContactForm />
                  </div>
                </div>
              </section>
            )}
          </div>
        )}

        {/* ===================================================================
            RESOURCES PAGE INTERACTIVE READER & FAQS
            (Articles, ERP Guides, FAQs, Documentation)
           =================================================================== */}
        {topic.id === 'resources' && (
          <section className="mt-10 space-y-10 border-t border-sky-500/20 pt-8">
            {/* Full Interactive Publication Reader (Shown for All, Articles, ERP Guides, Documentation) */}
            {activeSubSelectorId !== 'res-faqs' && (
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-sky-400">
                    KNOWLEDGE LIBRARY & PUBLICATIONS
                  </div>
                  <h3 className="mt-1 font-display text-xl font-bold text-white">
                    Read Full Articles, ERP Guides & Technical Documentation
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                  {/* Left Column: Selectable List of Publications */}
                  <div className="lg:col-span-5 space-y-2.5">
                    {filteredArticles.map((art) => {
                      const isSelected = activeArticleId === art.id;
                      return (
                        <button
                          key={art.id}
                          type="button"
                          onClick={() => setActiveArticleId(art.id)}
                          className={`w-full rounded-lg border p-4 text-left transition-colors duration-150 cursor-pointer ${
                            isSelected
                              ? 'border-sky-400 bg-sky-500/20 text-white'
                              : 'border-sky-500/20 bg-[#091734] text-slate-200 hover:border-sky-400/50'
                          }`}
                        >
                          <div className="flex items-center gap-2 text-xs text-sky-400">
                            <span>{art.category}</span>
                            <span aria-hidden="true">·</span>
                            <span>{art.readingTime}</span>
                          </div>
                          <h4 className="mt-1 font-display text-sm font-bold">
                            {art.title}
                          </h4>
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Column: Full Publication View */}
                  <div className="lg:col-span-7">
                    {RESOURCE_ARTICLES.filter(
                      (a) => a.id === activeArticleId
                    ).map((art) => (
                      <article
                        key={art.id}
                        className="rounded-lg border border-sky-400/30 bg-[#091734] p-6 space-y-5"
                      >
                        <div className="border-b border-sky-500/20 pb-4">
                          <div className="flex items-center gap-2 text-xs text-sky-300">
                            <BookOpen className="h-3.5 w-3.5" />
                            <span>{art.category}</span>
                            <span aria-hidden="true">·</span>
                            <span>{art.readingTime}</span>
                          </div>
                          <h4 className="mt-1.5 font-display text-xl font-bold text-white">
                            {art.title}
                          </h4>
                          <p className="mt-2 text-sm text-slate-200">
                            {art.summary}
                          </p>
                        </div>

                        <div className="rounded-md border border-sky-500/20 bg-[#061026] p-4">
                          <div className="text-xs font-semibold text-sky-300">
                            Executive Key Takeaways
                          </div>
                          <ul className="mt-2 space-y-1.5">
                            {art.keyTakeaways.map((kt, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-xs text-slate-200"
                              >
                                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-400" />
                                <span>{kt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-4">
                          {art.sections.map((sec, i) => (
                            <div key={i}>
                              <h5 className="font-display text-sm font-bold text-sky-200">
                                {sec.heading}
                              </h5>
                              <p className="mt-1.5 text-sm text-slate-200 leading-relaxed">
                                {sec.body}
                              </p>
                            </div>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* FAQs Section (Shown for All or FAQs) */}
            {(isShowAll || activeSubSelectorId === 'res-faqs') && (
              <div className="border-t border-sky-500/20 pt-8">
                <div className="text-xs text-sky-400">RESOURCES · FAQS</div>
                <h3 className="mt-1 font-display text-xl font-bold text-white">
                  Frequently Asked Questions (FAQs)
                </h3>
                <div className="mt-4 space-y-3">
                  {FAQ_ITEMS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-sky-500/20 bg-[#091734] p-5"
                    >
                      <div className="text-xs text-sky-400">{faq.category}</div>
                      <h4 className="mt-1 font-display text-base font-bold text-white">
                        {faq.question}
                      </h4>
                      <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Bottom Page Navigation Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-lg border border-sky-500/25 bg-[#081530] p-5 sm:flex-row">
          <div>
            <div className="text-xs text-sky-400">
              Vistara Technologies · Ordered Page Navigation
            </div>
            <div className="mt-0.5 font-display text-sm font-bold text-white">
              Currently Viewing: {topic.shortTitle} Page
            </div>
          </div>
          <div className="flex items-center gap-3">
            {prevTopic && (
              <button
                type="button"
                onClick={() => onSelectTopic(prevTopic.id, 'all')}
                className="flex items-center gap-1.5 rounded-lg border border-sky-500/30 bg-[#0B1B3D] px-4 py-2 text-xs font-medium text-slate-200 hover:border-sky-400 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
              >
                <ArrowLeft className="h-3.5 w-3.5 text-sky-400" />
                <span>Previous: {prevTopic.shortTitle}</span>
              </button>
            )}
            {nextTopic ? (
              <button
                type="button"
                onClick={() => onSelectTopic(nextTopic.id, 'all')}
                className="flex items-center gap-1.5 rounded-lg bg-sky-500 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-400 hover:text-[#060E20] transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Next: {nextTopic.shortTitle}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onSelectTopic('home', 'all')}
                className="flex items-center gap-1.5 rounded-lg bg-sky-500 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-400 hover:text-[#060E20] transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Back to Home</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
