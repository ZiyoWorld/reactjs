import React, {createContext, useState} from "react";

export const StudentContext = createContext();


const StudentsList = ({children})=>{

    const [students, setStudents] = useState([
        {id: 1, name: "Eshmat", surname: "Eshmatov"},
        {id: 2, name: "Toshmat", surname: "Eshmatov"},
        {id: 3, name: "Gulmat", surname: "Eshmatov"},
        {id: 4, name: "Rahmat", surname: "Eshmatov"},
        {id: 5, name: "Kulmat", surname: "Eshmatov"},
        {id: 6, name: "Davlat", surname: "Eshmatov"},
        {id: 7, name: "G'ishmat", surname: "Eshmatov"},
        {id: 8, name: "Sashmat", surname: "Eshmatov"},
    ])
    return(
        <StudentContext.Provider value={[students, setStudents]}>
            {children}
        </StudentContext.Provider>
    )
};

export default StudentsList;

