import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  isAtuhenticated: false,
  setIsAuthenticated: () => {},
  user: { name: ``, id: ``, setUser: () => {} },
});

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = (props) => {
  const token = localStorage.getItem(`token`);
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [user, setUser] = useState({ name: ``, id: `` });

  //call api login set data for user
  //setUser(data)

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
