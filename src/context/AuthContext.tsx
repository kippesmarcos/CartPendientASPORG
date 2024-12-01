import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    // Check for existing user on mount
    const savedUser = localStorage.getItem('minecraft_username');
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const login = (username: string) => {
    localStorage.setItem('minecraft_username', username);
    setUser(username);
  };

  const logout = () => {
    localStorage.removeItem('minecraft_username');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}