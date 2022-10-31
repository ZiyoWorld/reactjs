import React, { useState } from "react";
import { 
    
    Container,
    Desc, 
    Input, 
    Title, 
    Wrapper,
    Check, Span, Forget, Button, Wrap,
 } from "./style";
 import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Mobile = ({onChange, mode, them})=>{
 
    return(
        <Container>
            <Wrap>
            <DarkModeSwitch
                style={{ marginBottom: '2rem' }}
                checked={mode}
                onChange={onChange}
                size={30}
             />
            </Wrap>
            <Title color={them.title}>Sign In</Title>
            <Desc color={them.title}>
            Sign in and start managing your candidates!
            </Desc>
            <Input placeholder="Login" />
            <Input placeholder="Password" />
            <Wrapper>
                <Span color={them.title}>
                <Check  type={"checkbox"}     className="check" />
                    Remember me
                </Span>
                <Forget color={them.forget} >
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