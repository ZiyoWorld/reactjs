import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

const Home = () => {
  const [students] = useState([
    {id: 1, name: "Eshmat", desc:"Eshmat IT guy" },
    {id: 2, name: "Toshmat", desk: "Eshmat IT guy" },
    {id: 3, name: "Gulmat", desc: "Eshmat IT guy" },
    {id: 4, name: "Oshmat", desc: "Eshmat IT guy" },
    {id: 5, name: "Normat", desc: "Eshmat IT guy" },
    {id: 6, name: "Ne'mat", desc: "Eshmat IT guy" },
  ]);

  const [selected, setSelected] = useState({});

  const history = useHistory();
  return (
    <div style={{display: "flex"}}>
       <div style={{flex: 1}}>
      React Router Dom5 Home 
      {
        students.map( (value)=>{
          return(
            // <h1>{value.id} {value.name} <button onClick={()=>setSelected(value)}>Select</button> 
            // </h1>
            <h1>
              {value.id} {value.name} <button onClick={()=> history.push(`home/:${value.id}`)}>Selected</button>
            </h1>
          )
        })
      }
      </div>
      <div style={{flex: 1}}>
        <h1>Selected</h1>
        <h1>{selected?.id} {selected?.name}</h1>

      </div>
    </div>
  )
}
export default Home;
