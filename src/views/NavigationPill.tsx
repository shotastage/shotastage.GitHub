"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import styles from './NavigationStyle.module.scss';


interface TabRefs {
  [key: string]: HTMLButtonElement | null;
}

const NavigationPill: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Today');
  const [highlightStyle, setHighlightStyle] = useState({});
  const tabsRef = useRef<TabRefs>({});

  const tabs = ['Today', 'Games', 'Apps', 'Arcade'];

  useEffect(() => {
    const activeTabElement = tabsRef.current[activeTab];
    if (activeTabElement) {
      setHighlightStyle({
        width: `${activeTabElement.offsetWidth}px`,
        transform: `translateX(${activeTabElement.offsetLeft}px)`,
      });
    }
  }, [activeTab]);

  return (
    <nav className={styles.navBarWrapper}>
      <div className={styles.navBar}>
        <div className={styles.tabContainer}>
          <div
            className={styles.highlight}
            style={highlightStyle}
          />
          {tabs.map((tab) => (
            <button
              key={tab}
              ref={(el) => {
                if (el) tabsRef.current[tab] = el;
              }}
              className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <button className={styles.searchButton}>
          <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavigationPill;
