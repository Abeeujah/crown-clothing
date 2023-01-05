// Use Context and State to track and update user object..
import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// Define User Context..
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// UserContext Provider..
export const UserProvider = ({ children }) => {
  // Get and Set current User in State..
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // Mount Observer Pattern on Component
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if(user) {
        await createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
