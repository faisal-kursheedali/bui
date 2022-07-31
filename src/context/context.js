import { createContext,useState,useContext } from "react";



export const Context=createContext();

const ContextProvider=({children})=>{
    const [sideNav,setSideNav]=useState(false);
    const[index,setIndex]=useState([]);
 return(
    <>
    <Context.Provider value={{sideNav,setSideNav,index,setIndex}}>
    {children}
    </Context.Provider>
    
    </>
 )
}
const useData=()=>useContext(Context);
export {useData}
export default ContextProvider