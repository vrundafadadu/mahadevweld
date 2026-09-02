'use client';

import React, { createContext, useContext, useState } from 'react';
import QuoteModal from '../components/QuoteModal';
import ProjectModal from '../components/ProjectModal';

const ModalContext = createContext({
  openQuote: () => {},
  closeQuote: () => {},
  openProject: () => {},
  closeProject: () => {},
});

export function ModalProvider({ children }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openQuote = () => setIsQuoteOpen(true);
  const closeQuote = () => setIsQuoteOpen(false);

  const openProject = (project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  return (
    <ModalContext.Provider value={{ openQuote, closeQuote, openProject, closeProject }}>
      {children}
      <QuoteModal isOpen={isQuoteOpen} onClose={closeQuote} />
      <ProjectModal 
        project={selectedProject} 
        onClose={closeProject} 
        onOpenQuote={() => {
          closeProject();
          openQuote();
        }} 
      />
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
