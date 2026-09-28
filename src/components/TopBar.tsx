import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { VISTARA_NAV_MENU, NavGroup, NavGroupKey } from '../data/vistaraData';

interface TopBarProps {
  activeTopicId: string;
  activeSubSelectorId: string;
  activeNavGroup: NavGroupKey;
  onSelectTopic: (topicId: string, subSelectorId?: string) => void;
  onToggleMobileDirectory: () => void;
  isMobileDirectoryOpen: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({
  activeTopicId,
  activeSubSelectorId,
  activeNavGroup,
  onSelectTopic,
  onToggleMobileDirectory,
  isMobileDirectoryOpen,
}) => {
  const [openDropdownKey, setOpenDropdownKey] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdownKey(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePageSelect = (group: NavGroup) => {
    onSelectTopic(group.defaultTopicId, 'all');
    setOpenDropdownKey(null);
  };

  const handleToggleDropdown = (e: React.MouseEvent, groupKey: string) => {
    e.stopPropagation();
    setOpenDropdownKey((prev) => (prev === groupKey ? null : groupKey));
  };

  const handleItemSelect = (topicId: string, subSelectorId?: string) => {
    onSelectTopic(topicId, subSelectorId);
    setOpenDropdownKey(null);
  };

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-sky-500/20 bg-[#060E20]/95 px-4 backdrop-blur-md sm:px-8"
    >
      {/* Zone 1: Brand Wordmark */}
      <a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          handleItemSelect('home', 'all');
        }}
        className="font-display text-lg font-bold tracking-tight text-white hover:text-sky-300 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-sky-400"
      >
        Vistara Technologies
      </a>

      {/* Zone 2: 7 Separate Main Pages in Exact Order:
          Home -> Products -> Solutions -> Industries -> Services -> Company -> Resources */}
      <nav
        aria-label="Primary Navigation"
        className="hidden lg:flex items-center gap-4 text-sm font-medium text-slate-300"
      >
        {VISTARA_NAV_MENU.map((group) => {
          const isActive =
            activeNavGroup === group.key || activeTopicId === group.defaultTopicId;
          const isOpen = openDropdownKey === group.key;

          if (group.key === 'HOME') {
            return (
              <button
                key={group.key}
                type="button"
                onClick={() => handlePageSelect(group)}
                className={`px-2 py-1 whitespace-nowrap shrink-0 border-b-2 transition-colors duration-150 cursor-pointer ${
                  activeTopicId === 'home'
                    ? 'border-sky-400 text-white font-semibold'
                    : 'border-transparent text-slate-300 hover:text-sky-300 hover:border-sky-400/50'
                }`}
              >
                {group.label}
              </button>
            );
          }

          return (
            <div
              key={group.key}
              className="relative"
              onMouseEnter={() => setOpenDropdownKey(group.key)}
              onMouseLeave={() => setOpenDropdownKey(null)}
            >
              <div
                className={`flex items-center border-b-2 transition-colors duration-150 ${
                  isActive || isOpen
                    ? 'border-sky-400 text-white font-semibold'
                    : 'border-transparent text-slate-300 hover:text-sky-300 hover:border-sky-400/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => handlePageSelect(group)}
                  className="py-1 pl-2 pr-1 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {group.label}
                </button>
                <button
                  type="button"
                  onClick={(e) => handleToggleDropdown(e, group.key)}
                  aria-label={`Toggle ${group.label} menu`}
                  aria-expanded={isOpen}
                  className="py-1 pr-2 pl-0.5 cursor-pointer"
                >
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-150 ${
                      isOpen ? 'rotate-180 text-sky-400' : ''
                    }`}
                  />
                </button>
              </div>

              {isOpen && (
                <div className="absolute left-0 top-full pt-2 w-64 z-50">
                  <div className="rounded-lg border border-sky-500/25 bg-[#091530] p-2 shadow-xl">
                    <button
                      type="button"
                      onClick={() => handlePageSelect(group)}
                      className="mb-1.5 flex w-full items-center justify-between border-b border-sky-500/15 px-3 py-1.5 text-left text-xs font-semibold text-sky-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <span>{group.label.toUpperCase()} PAGE</span>
                      <span className="text-[11px] font-normal text-sky-400">View All →</span>
                    </button>
                    <div className="flex flex-col gap-0.5">
                      {group.items.map((item, idx) => {
                        const isLast = idx === group.items.length - 1;
                        const branchSymbol = isLast ? '└──' : '├──';
                        const isSubActive =
                          activeTopicId === item.topicId &&
                          activeSubSelectorId === item.subSelectorId;
                        return (
                          <button
                            key={`${group.key}-${item.label}`}
                            type="button"
                            onClick={() => handleItemSelect(item.topicId, item.subSelectorId)}
                            className={`flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-xs font-medium transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                              isSubActive
                                ? 'bg-sky-500/25 text-white font-semibold'
                                : 'text-slate-200 hover:bg-sky-500/15 hover:text-sky-300'
                            }`}
                          >
                            <span className="font-mono text-sky-400/70 select-none">
                              {branchSymbol}
                            </span>
                            <span className="truncate">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Zone 3: Primary Action & Mobile Toggle */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => handleItemSelect('company', 'comp-contact')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
            activeTopicId === 'company' && activeSubSelectorId === 'comp-contact'
              ? 'bg-sky-400 text-[#060E20]'
              : 'bg-sky-500 text-white hover:bg-sky-400 hover:text-[#060E20]'
          }`}
        >
          Contact Us
        </button>

        <button
          type="button"
          onClick={onToggleMobileDirectory}
          aria-label="Toggle Website Navigation"
          className="flex lg:hidden h-10 w-10 items-center justify-center rounded-lg border border-sky-500/30 bg-[#0B1938] text-sky-300 hover:bg-sky-500/20 transition-colors cursor-pointer"
        >
          {isMobileDirectoryOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
};
