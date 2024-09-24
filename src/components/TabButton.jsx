import React from "react";

const TabButton = ({ children, isSelected, ...props}) => {
    let x = {...props}
    console.log(x);
    return (
        <li>
            <button className={isSelected ? "active" : undefined} {...props}>{children}</button>
        </li>
    );
};

export default TabButton;
