import React, { useState } from "react";
import { 
    
    Container,
    Desc, 
    Input, 
    Title, 
    Wrapper,
    Check, Span, Forget, Button, Wrap, Cycle
 } from "./style";

const Mobile = ()=>{

    const [checked, setChecked] = useState(false);

    const onChecked = ()=>{
        setChecked(true);
    }
    return(
        <Container>
            <Wrap>
                <Cycle onClick={onChecked} checked={checked} />
            </Wrap>
            <Title>Sign In</Title>
            <Desc>
            Sign in and start managing your candidates!
            </Desc>
            <Input placeholder="Login" />
            <Input placeholder="Password" />
            <Wrapper>
                <Span>
                <Check type={"checkbox"}     className="check" />
                    Remember me
                </Span>
                <Forget>
                    Forgot password?
                </Forget>
            </Wrapper>
            <Button>
                Login
            </Button>
        </Container>
    )
}
export default Mobile;