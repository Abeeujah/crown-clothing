// Use Context and State to track and update user object..
import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

// Define User Context..
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Define User Reducer..
const initialState = {
  currentUser: null,
};

const actionType = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`Unhandled Type ${type}`);
  }
};

// UserContext Provider..
export const UserProvider = ({ children }) => {
  // Get and Set current User in State..
  const [{ currentUser }, dispatch] = useReducer(userReducer, initialState);
  const setCurrentUser = (user) => {
    dispatch(createAction(actionType.SET_CURRENT_USER, user));
  };

  // Mount Observer Pattern on Component
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
