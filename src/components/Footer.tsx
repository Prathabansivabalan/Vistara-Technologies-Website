import React from 'react';
import { VISTARA_NAV_MENU } from '../data/vistaraData';

interface FooterProps {
  onSelectTopic: (topicId: string, subSelectorId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTopic }) => {
  const menuGroups = VISTARA_NAV_MENU;

  return (
    <footer className="border-t border-sky-500/20 bg-[#040A17] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        {/* Top Row: Brand & 7 Ordered Page Columns */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3 space-y-3 pr-4">
            <div className="font-display text-lg font-bold text-white">
              Vistara Technologies
            </div>
            <p className="text-xs text-sky-300">
              ERP & Enterprise Business Solutions
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Integrated enterprise software solutions helping organizations manage finance, sales, procurement, inventory, human resources, manufacturing, cloud infrastructure, and business operations.
            </p>
            <div className="pt-2 text-xs text-slate-300 space-y-1">
              <div>Head Office: Chennai, Tamil Nadu, India</div>
              <div>
                Email:{' '}
                <a
                  href="mailto:vistaratechnologies@gmail.com"
                  className="font-mono-num text-sky-400 hover:text-sky-300 underline"
                >
                  vistaratechnologies@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-9 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {menuGroups.map((group) => (
              <div key={group.key}>
                <button
                  type="button"
                  onClick={() => onSelectTopic(group.defaultTopicId, 'all')}
                  className="font-display text-xs font-bold uppercase tracking-wide text-sky-300 hover:text-white transition-colors cursor-pointer"
                >
                  {group.key}
                </button>
                <ul className="mt-2.5 space-y-1.5">
                  {group.items.map((item, idx) => {
                    const branch = idx === group.items.length - 1 ? '└──' : '├──';
                    return (
                      <li key={`${group.key}-${item.label}`}>
                        <button
                          type="button"
                          onClick={() =>
                            onSelectTopic(item.topicId, item.subSelectorId)
                          }
                          className="flex items-center gap-1.5 text-left text-xs text-slate-400 hover:text-sky-300 transition-colors cursor-pointer"
                        >
                          <span className="font-mono text-sky-500/60 select-none">
                            {branch}
                          </span>
                          <span>{item.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Corporate Bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-sky-500/15 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} Vistara Technologies, Chennai, Tamil Nadu, India. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onSelectTopic('home', 'all')}
              className="hover:text-sky-300 transition-colors cursor-pointer"
            >
              Home
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onSelectTopic('products', 'all')}
              className="hover:text-sky-300 transition-colors cursor-pointer"
            >
              Products
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onSelectTopic('solutions', 'all')}
              className="hover:text-sky-300 transition-colors cursor-pointer"
            >
              Solutions
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onSelectTopic('industries', 'all')}
              className="hover:text-sky-300 transition-colors cursor-pointer"
            >
              Industries
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onSelectTopic('services', 'all')}
              className="hover:text-sky-300 transition-colors cursor-pointer"
            >
              Services
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onSelectTopic('company', 'all')}
              className="hover:text-sky-300 transition-colors cursor-pointer"
            >
              Company
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onSelectTopic('resources', 'all')}
              className="hover:text-sky-300 transition-colors cursor-pointer"
            >
              Resources
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
