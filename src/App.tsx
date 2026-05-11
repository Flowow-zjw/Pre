/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import MotivationSection from './components/MotivationSection';
import MethodologySection from './components/MethodologySection';
import ScientificDiscoverySection from './components/ScientificDiscoverySection';
import QualityEvolutionSection from './components/QualityEvolutionSection';
import EvaluationSection from './components/EvaluationSection';
import LimitationsSection from './components/LimitationsSection';
import DemoSection from './components/DemoSection';
import CommandPalette from './components/CommandPalette';

const sections = [
  { id: 'section-1', title: '1. Title & Motivation' },
  { id: 'section-2', title: '2. Multi-Stage Decoupling' },
  { id: 'section-3', title: '3. Scientific Discovery' },
  { id: 'section-4', title: '4. Quality Evolution' },
  { id: 'section-5', title: '5. System Evaluation' },
  { id: 'section-6', title: '6. Limitations' },
  { id: 'section-7', title: '7. Video Demo' },
];

export default function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentActive = sections[0].id;
      for (const section of sectionElements) {
        if (section && section.offsetTop <= scrollPosition) {
          currentActive = section.id;
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[280px_1fr]">
      {/* Sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-[280px] border-r border-gray-200 bg-bg-light/80 backdrop-blur-md z-50 flex-col py-12 px-8">
        <div className="text-xl font-serif font-bold mb-12 text-primary">Text2GS System</div>
        <ul className="flex flex-col gap-6">
          {sections.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                className={`text-sm tracking-wide transition-all duration-300 flex items-center gap-3 ${
                  activeSection === item.id ? 'text-primary font-semibold translate-x-2' : 'text-gray-400 hover:text-gray-800 hover:translate-x-1'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${activeSection === item.id ? 'bg-primary' : 'bg-transparent'}`}></span>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="w-full md:col-start-2 overflow-x-hidden">
        
        {/* Section 1 */}
        <div id="section-1">
          <HeroSection />
          <MotivationSection />
        </div>

        {/* Other Sections Placeholder */}
        {sections.slice(1).map((section, index) => {
          if (section.id === 'section-2') return <MethodologySection key={section.id} />;
          if (section.id === 'section-3') return <ScientificDiscoverySection key={section.id} />;
          if (section.id === 'section-4') return <QualityEvolutionSection key={section.id} />;
          if (section.id === 'section-5') return <EvaluationSection key={section.id} />;
          if (section.id === 'section-6') return <LimitationsSection key={section.id} />;
          if (section.id === 'section-7') return <DemoSection key={section.id} />;

          return null;
        })}
      </main>

      <CommandPalette />
    </div>
  );
}
