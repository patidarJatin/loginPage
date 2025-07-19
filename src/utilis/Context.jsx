import { createContext, useState } from "react"

 export const UserContext=createContext();
const Context = (props) => {
    
     const[user,setuser]=useState([
        {name: "John", age: 30},
        {name: "Jane", age: 25},
        {name: "Mike", age: 35}
 
     ]);
  return (<UserContext.Provider value={{user,setuser}}> {props.children}</UserContext.Provider>)
}

export default Context
