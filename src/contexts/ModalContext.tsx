'use client';

import { createContext, useContext, useState } from 'react';

interface ModalContextType {
  submitModalOpen: boolean;
  setSubmitModalOpen: (open: boolean) => void;
}

const ModalContext = createContext<ModalContextType>({
  submitModalOpen: false,
  setSubmitModalOpen: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [submitModalOpen, setSubmitModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ submitModalOpen, setSubmitModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext); 