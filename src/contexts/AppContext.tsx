import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { landingPageLinks } from "../constants"; // Adjust path as needed

interface AppContextType {
  activePath: string;
  setActivePath: (path: string) => void;
}

// Create the context with a default undefined type
const AppContext = createContext<AppContextType | undefined>(undefined);

// Props type for provider
interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [currentPath, setCurrentPath] = useState("home");
  const { pathname } = useLocation();

  const activePath = currentPath;
  const setActivePath = (path: string) => setCurrentPath(path);

  // Auto-update active path based on scroll position when on landing page
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sections = landingPageLinks.map((link) => link.path);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        // Consider a section active if it's in the upper half of the viewport
        return (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        );
      });

      if (currentSection && currentSection !== activePath) {
        setActivePath(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, activePath, setActivePath]);

  // Reset to home when navigating away from landing page
  useEffect(() => {
    if (pathname !== "/") {
      setActivePath("");
    }
  }, [pathname, activePath, setActivePath]);

  return (
    <AppContext.Provider value={{ activePath, setActivePath }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook with type safety
export function useAppContext(): AppContextType {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}
