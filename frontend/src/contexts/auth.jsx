/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const { user, loginWithRedirect, logout, isAuthenticated, isLoading, error } = useAuth0();
  const [isMicrosoftAuth, setIsMicrosoftAuth] = useState(false);

  const setMicrosoftAuth = () => {
    setIsMicrosoftAuth(true);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isMicrosoftAuth,
        setMicrosoftAuth,
        loginWithRedirect,
        logout,
        isAuthenticated,
        isLoading,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
