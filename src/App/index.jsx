import React, {useState, useContext} from "react";
import Mobile from "../Mobile";
import { BottomImg, Container } from "./style";
import bottomimg  from '../assets/Vectors.png';
import { ModeToggle } from '../context';

function App(){
    const [mode, setMode] = useState(false);
    const [theme, setTheme] = useContext(ModeToggle)
  
  const dark = {
    forget: "black",
    title: "#224957",
    background: "white"
  }
  const light = {
    forget: "#20DF7F",
    title: "white", 
    background: "#093545",
  }
  const onChange = ()=>{
      setMode(!mode)
      setTheme(mode ? dark : light)
  }

    return(
        <Container color={theme.background} >
            <Mobile onChange={onChange} mode={mode} them={theme} />
            <BottomImg src={bottomimg} alt={"img botom"} />
        </Container>
    )
}
export default App;