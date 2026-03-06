import React, { createContext, useContext, useState, type ReactNode } from "react";

type User = {
  username: string;
  email: string;
  token: string;
  fullname: string;
}

type AuthContextType = {
  user: User | null;
  login: (fakeCredentials?: Partial<User>) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({
  children,
}: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const fakeUserData: User = {
    username: "devuser",
    email: "dev@example.com",
    token: "fake-jwt-token-12345-abcde", // Matches your backend JWT shape
    fullname: "Developer User",
  };

  const login = (fakeCredentials?: Partial<User>) => {
    setUser({ ...fakeUserData, ...fakeCredentials });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useUserContext must be used within UserProvider');
  }
  return context;
};

export default useAuth;