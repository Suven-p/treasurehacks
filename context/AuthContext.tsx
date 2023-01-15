import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { User } from "@firebase/auth/dist/auth-public";

const defaultValue: {
  isLoading: boolean;
  user: User | null;
  logout: () => Promise<void>;
} = { isLoading: true, user: null, logout: async () => {} };
export const AuthContext = createContext(defaultValue);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState<{ isLoading: boolean; user: User | null }>(
    { isLoading: true, user: null }
  );
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setState({ isLoading: false, user: user });
    });
    return unsubscribe;
  }, []);
  const logout = async () => {
    if (state.isLoading) return;
    await auth.signOut();
    setState({ isLoading: false, user: null });
  };

  return (
    <AuthContext.Provider value={{ ...state, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
