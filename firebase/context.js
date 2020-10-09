import React, { useState, useEffect, useContext, createContext } from "react";
import { firebase, auth, db } from "../config/firebase";

const authContext = createContext();
export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
export const useAuth = () => {
  return useContext(authContext);
};
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const getCurrentUser = () => {
    db.collection("Users")
      .doc(auth.currentUser.uid)
      .get()
      .then((doc) => {
        setUser(doc.data());
      });
  };

  useEffect(() => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged(() => getCurrentUser());
    return () => unsubscribe();
  }, []);

  return {
    user,
    getCurrentUser,
  };
}
