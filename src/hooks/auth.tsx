import { createContext, useContext, useState } from "react";

interface User {
  email: String;
  password: string;
}

interface CredentialsData {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: ({ email, password }: CredentialsData) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [data, setData] = useState<User>({} as User);

  const signIn = async ({ email, password }: CredentialsData): Promise<void> => {

  };

  const signOut = async (): Promise<void> => {};

  return (
    <AuthContext.Provider value={{
      user: data,
      signIn,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
