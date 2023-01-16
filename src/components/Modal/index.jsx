import React from "react";
import ReactDOM  from "react";

export const Modal = () => {
    return ReactDOM.createPortal(
        <div>Modal</div>,
        document.getElementById('portal')
    )
}