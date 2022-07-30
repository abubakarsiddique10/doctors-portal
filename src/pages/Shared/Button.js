import React from "react";
const Button = ({ children }) => {
    return (
        <button className="text-white font-bold border-0 bg-gradient-to-r from-secondary to-primary px-8 py-4 rounded-lg uppercase">{children}</button>
    )
}
export default Button;