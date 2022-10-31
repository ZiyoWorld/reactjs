import React, {createContext, useState} from "react";

export const ModeToggle = createContext()


const Mode = ({children})=>{
    
    const [them, setThem] = useState({
        title: "#224957",
        forget: "black",
        background: "white",
    })

    return(
        <ModeToggle.Provider value={[them, setThem]}>
            {children}
        </ModeToggle.Provider>
    )
}
export default Mode;