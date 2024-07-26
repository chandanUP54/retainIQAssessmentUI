import { createContext, useState } from "react";


export const UserContext = createContext(null);


const UserContextProvider = (props) => {

  const [msg,setMsg]=useState("");

    return (
      <UserContext.Provider value={{msg,setMsg}}>
        {props.children}
      </UserContext.Provider>
    );
  };
  export default UserContextProvider;