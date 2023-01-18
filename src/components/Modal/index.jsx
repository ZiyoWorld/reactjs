import React from "react";
import ReactDOM  from "react-dom";

export const Modal = () => {
    return ReactDOM.createPortal(
        <div>Modal</div>,
        document.getElementById('portal')
    )
}