import React, {useContext} from 'react';
import { StudentContext } from '../context';
import { Container, Header } from './style';

const Body = ()=>{

    const [students, setStudents] = useContext(StudentContext);

    const onDelete = (id)=>{
        let res = students.filter( (st)=>{
            return st.id !== id;
        });
        setStudents(res);
        
    }
   
    return(
        <Container style={{background: "coral"}}>
           <Header>Student List {students.length}</Header>
           {
            students.map( (value)=>{
                return(
                    <h1 key={value.id}> 
                    Name: {value.name}
                    <button onClick={()=> onDelete(value.id)}>Delete</button>
                    </h1>
                )
            })
           }
        </Container>
    )
}
export default Body;