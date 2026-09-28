import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { VISTARA_NAV_MENU, NavGroupKey } from '../data/vistaraData';

interface TopicExplorerSidebarProps {
  activeTopicId: string;
  activeSubSelectorId: string;
  onSelectTopic: (topicId: string, subSelectorId?: string) => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

const FILTER_GROUPS: { key: 'ALL' | NavGroupKey; label: string; defaultTopicId?: string }[] = [
  { key: 'ALL', label: 'All' },
  { key: 'HOME', label: 'Home', defaultTopicId: 'home' },
  { key: 'PRODUCTS', label: 'Products', defaultTopicId: 'products' },
  { key: 'SOLUTIONS', label: 'Solutions', defaultTopicId: 'solutions' },
  { key: 'INDUSTRIES', label: 'Industries', defaultTopicId: 'industries' },
  { key: 'SERVICES', label: 'Services', defaultTopicId: 'services' },
  { key: 'COMPANY', label: 'Company', defaultTopicId: 'company' },
  { key: 'RESOURCES', label: 'Resources', defaultTopicId: 'resources' },
];

export const TopicExplorerSidebar: React.FC<TopicExplorerSidebarProps> = ({
  activeTopicId,
  activeSubSelectorId,
  onSelectTopic,
  isMobileOpen,
  onCloseMobile,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [groupFilter, setGroupFilter] = useState<'ALL' | NavGroupKey>('ALL');

  const q = searchQuery.trim().toLowerCase();

  const filteredGroups = VISTARA_NAV_MENU.filter((group) => {
    const matchesGroupFilter = groupFilter === 'ALL' || group.key === groupFilter;
    if (!matchesGroupFilter) return false;
    if (!q) return true;
    const groupMatch = group.label.toLowerCase().includes(q);
    const itemMatch = group.items.some((item) => item.label.toLowerCase().includes(q));
    return groupMatch || itemMatch;
  });

  const sidebarContent = (
    <div className="flex h-full flex-col bg-[#08132B] text-slate-200">
      {/* Directory Header */}
      <div className="border-b border-sky-500/20 p-4">
        <div className="font-display text-xs font-bold tracking-wider text-sky-400">
          VISTARA TECHNOLOGIES
        </div>
        <p className="mt-1 text-xs text-slate-400">
          Navigate across all 7 separate pages and their sub-sections in order.
        </p>

        {/* Search Input */}
        <div className="relative mt-3">
          <Search className="pointer-events-none absolute left-3 top-2.5 h-3.5 w-3.5 text-sky-400/70" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search pages or modules..."
            aria-label="Filter pages or modules"
            className="w-full rounded-md border border-sky-500/25 bg-[#050C1C] py-1.5 pl-8 pr-3 text-xs text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
          />
        </div>

        {/* Page Filter Buttons */}
        <div className="mt-2.5 flex flex-wrap gap-1 rounded-md bg-[#050C1C] p-1">
          {FILTER_GROUPS.map((g) => (
            <button
              key={g.key}
              type="button"
              onClick={() => {
                setGroupFilter(g.key);
                if (g.defaultTopicId) {
                  onSelectTopic(g.defaultTopicId, 'all');
                  onCloseMobile();
                }
              }}
              className={`rounded px-2 py-1 text-xs font-medium transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                groupFilter === g.key
                  ? 'bg-sky-500 text-white'
                  : 'text-slate-400 hover:text-sky-300'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable Exact Tree Navigation List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {filteredGroups.length === 0 ? (
          <div className="p-4 text-center text-xs text-slate-400">
            No matching items found.{' '}
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setGroupFilter('ALL');
              }}
              className="text-sky-400 underline cursor-pointer"
            >
              Reset filter
            </button>
          </div>
        ) : (
          filteredGroups.map((group) => {
            const isPageSelected = activeTopicId === group.defaultTopicId;
            const visibleItems = q
              ? group.items.filter(
                  (it) =>
                    it.label.toLowerCase().includes(q) ||
                    group.label.toLowerCase().includes(q)
                )
              : group.items;

            return (
              <div key={group.key} className="space-y-1">
                {/* Main Separate Page Button (HOME, PRODUCTS, SOLUTIONS, INDUSTRIES, SERVICES, COMPANY, RESOURCES) */}
                <button
                  type="button"
                  onClick={() => {
                    onSelectTopic(group.defaultTopicId, 'all');
                    onCloseMobile();
                  }}
                  className={`group flex w-full items-center justify-between rounded-md px-3 py-2 text-left transition-colors duration-150 cursor-pointer ${
                    isPageSelected && (!activeSubSelectorId || activeSubSelectorId === 'all')
                      ? 'bg-sky-500 text-white font-bold shadow-xs'
                      : isPageSelected
                      ? 'bg-sky-500/20 border border-sky-400/50 text-sky-300 font-bold'
                      : 'border border-sky-500/15 bg-[#061024] text-white font-semibold hover:border-sky-400/40 hover:text-sky-300'
                  }`}
                >
                  <span className="font-display text-xs tracking-wide uppercase">
                    {group.key}
                  </span>
                  <ChevronRight
                    className={`h-3.5 w-3.5 shrink-0 transition-transform duration-150 ${
                      isPageSelected
                        ? 'translate-x-0.5 text-current'
                        : 'text-slate-500 group-hover:text-sky-400'
                    }`}
                  />
                </button>

                {/* Tree Sub-Items for PRODUCTS, SOLUTIONS, INDUSTRIES, SERVICES, COMPANY, RESOURCES */}
                {group.key !== 'HOME' && visibleItems.length > 0 && (
                  <div className="pl-2 space-y-0.5">
                    {visibleItems.map((item, idx) => {
                      const isLast = idx === visibleItems.length - 1;
                      const branchChar = isLast ? '└──' : '├──';
                      const isSubActive =
                        isPageSelected && activeSubSelectorId === item.subSelectorId;

                      return (
                        <button
                          key={`${group.key}-${item.label}`}
                          type="button"
                          onClick={() => {
                            onSelectTopic(item.topicId, item.subSelectorId);
                            onCloseMobile();
                          }}
                          className={`flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-xs transition-colors duration-150 cursor-pointer ${
                            isSubActive
                              ? 'bg-sky-500/25 text-white font-semibold border border-sky-400/40'
                              : 'text-slate-300 hover:bg-[#0D1E42] hover:text-sky-300'
                          }`}
                        >
                          <span className="font-mono text-sky-400/75 select-none shrink-0">
                            {branchChar}
                          </span>
                          <span className="truncate">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Direct Corporate Contact Footer inside Sidebar */}
      <div className="border-t border-sky-500/20 bg-[#060E20] p-3.5 text-xs">
        <div className="font-semibold text-sky-300">Direct Enterprise Desk</div>
        <div className="mt-1 text-slate-400">Chennai, Tamil Nadu · India</div>
        <a
          href="mailto:vistaratechnologies@gmail.com"
          className="mt-1 block truncate font-mono-num text-sky-400 hover:text-sky-300 underline"
        >
          vistaratechnologies@gmail.com
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Left Sidebar */}
      <aside
        aria-label="Website Architecture Tree Navigation"
        className="hidden lg:block w-72 shrink-0 border-r border-sky-500/20 bg-[#08132B]"
      >
        <div className="sticky top-16 h-[calc(100vh-4rem)]">{sidebarContent}</div>
      </aside>

      {/* Mobile Slide-Over Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            onClick={onCloseMobile}
            aria-hidden="true"
          />
          <div className="relative z-10 w-80 max-w-[85vw] h-full border-r border-sky-500/30 shadow-2xl">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};
