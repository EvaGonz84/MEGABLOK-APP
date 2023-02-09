import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
  //Global state that shares if the client is registered
  const initialState = localStorage.length === 0;
  const [registered, setRegistered] = useState(initialState);

  return (
    <UserContext.Provider value={{ registered, setRegistered }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
