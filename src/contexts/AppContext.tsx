import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

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
  const activePath = currentPath;
  const setActivePath = (path: string) => setCurrentPath(path);

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
