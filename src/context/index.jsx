import React from "react";
import Children from './Children';
import Department from './Department';
import Factory from './Factory';
import Students from './Students';

export const Context = ({children})=>{
    return(
        <Children>
            <Factory>
                <Students>
                    <Department>
                        {children}  
                    </Department>
                </Students>
            </Factory>
        </Children>
    )
}