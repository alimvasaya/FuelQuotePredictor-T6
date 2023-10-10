import React, { createContext, useContext, useState, ReactNode } from "react";

// Configure UserContext
type User = {
  email: string;
  password: string;
};

type UserContextType = {
  userCred: User;
  updateUserEmail: (email: string) => void;
  updateUserPassword: (password: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUser(): UserContextType {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

// Set user credentials from user input
type UserProviderProps = {
  children: ReactNode;
};

export function UserProvider({ children }: UserProviderProps) {
  const [userCred, setUserCred] = useState<User>({ email: "", password: "" });

  const updateUserEmail = (email: string) => {
    setUserCred({ ...userCred, email });
  };

  const updateUserPassword = (password: string) => {
    setUserCred({ ...userCred, password });
  };

  const value: UserContextType = {
    userCred,
    updateUserEmail,
    updateUserPassword,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
