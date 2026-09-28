import React, { useState, useEffect } from 'react';
import { ALL_TOPICS } from './data/vistaraData';
import { TopBar } from './components/TopBar';
import { TopicExplorerSidebar } from './components/TopicExplorerSidebar';
import { TopicDetailView } from './components/TopicDetailView';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTopicId, setActiveTopicId] = useState<string>('home');
  const [activeSubSelectorId, setActiveSubSelectorId] = useState<string>('all');
  const [isMobileDirectoryOpen, setIsMobileDirectoryOpen] = useState<boolean>(false);

  const currentTopic =
    ALL_TOPICS.find((t) => t.id === activeTopicId) || ALL_TOPICS[0];

  const handleSelectTopic = (topicId: string, subSelectorId?: string) => {
    setActiveTopicId(topicId);
    setActiveSubSelectorId(subSelectorId || 'all');
    setIsMobileDirectoryOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSubItem = (subId: string) => {
    setActiveSubSelectorId(subId);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileDirectoryOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#060E20] text-slate-100">
      {/* Top Navigation Bar */}
      <TopBar
        activeTopicId={currentTopic.id}
        activeSubSelectorId={activeSubSelectorId}
        activeNavGroup={currentTopic.navGroup}
        onSelectTopic={handleSelectTopic}
        onToggleMobileDirectory={() =>
          setIsMobileDirectoryOpen((prev) => !prev)
        }
        isMobileDirectoryOpen={isMobileDirectoryOpen}
      />

      {/* Main Workspace: Left Tree Navigation + Right Separate Page View */}
      <div className="flex flex-1 min-w-0">
        <TopicExplorerSidebar
          activeTopicId={currentTopic.id}
          activeSubSelectorId={activeSubSelectorId}
          onSelectTopic={handleSelectTopic}
          isMobileOpen={isMobileDirectoryOpen}
          onCloseMobile={() => setIsMobileDirectoryOpen(false)}
        />

        <main className="flex-1 min-w-0">
          <TopicDetailView
            topic={currentTopic}
            activeSubSelectorId={activeSubSelectorId}
            onSelectTopic={handleSelectTopic}
            onSelectSubItem={handleSelectSubItem}
          />
        </main>
      </div>

      {/* Corporate Footer */}
      <Footer onSelectTopic={handleSelectTopic} />
    </div>
  );
}
