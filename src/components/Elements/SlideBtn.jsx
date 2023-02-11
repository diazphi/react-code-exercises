import React from "react";
export const SlideBtn = ({label,action, onClick}) => {
    return (
        <button type="button" className={action} onClick={onClick}>{label}</button>
    )
}