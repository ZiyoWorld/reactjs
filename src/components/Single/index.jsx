import React, {useState} from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const data = [
  {id: 1, name: "Eshmat", desc:"Eshmat IT guy" },
  {id: 2, name: "Toshmat", desk: "Eshmat IT guy" },
  {id: 3, name: "Gulmat", desc: "Eshmat IT guy" },
  {id: 4, name: "Oshmat", desc: "Eshmat IT guy" },
  {id: 5, name: "Normat", desc: "Eshmat IT guy" },
  {id: 6, name: "Ne'mat", desc: "Eshmat IT guy" },
];

const Single  = () => {
 

  const [selected, setSelected] = useState({});
  const params = useParams();
  console.log(data);

  useEffect( ()=>{
    let res = data.filter( value => value.id === params.id);
    setSelected(...res);
    console.log(res);
  }, [params?.id]);
  console.log(selected);
  return (
    <div style={{display: "flex"}}>
      <h1>Name: {selected?.name}</h1>
    </div>
  )
}
export default Single;