import React from "react";
const Button = ({ children }) => {
    return (
        <button className="btn text-white font-bold border-0 bg-gradient-to-r from-secondary to-primary">{children}</button>
    )
}
export default Button;