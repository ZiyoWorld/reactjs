import React, {createContext, useState} from "react";

export const StudentContext = createContext();

const StudentList = ({children})=>{
    const [students, setStudents] = useState([
        {id: 1, name: "Eshmat", surname: "Eshmamatov"},
        {id: 2, name: "Gulmat", surname: "Eshmamatov"},
        {id: 3, name: "Toshmat", surname: "Eshmamatov"},
        {id: 4, name: "Normat", surname: "Eshmamatov"},
        {id: 5, name: "Nurmat", surname: "Eshmamatov"},
        {id: 7, name: "Toshmat", surname: "Eshmamatov"},
        {id: 8, name: "Oshmat", surname: "Eshmamatov"},
    ])
    return(
        <StudentContext.Provider value={[students, setStudents]}>
            {children}
        </StudentContext.Provider>
    )
}
export default StudentList;