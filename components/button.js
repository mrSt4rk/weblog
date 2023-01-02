import React from 'react';

const Button = (props) => {

    const onClick = () => {
        props.onClick();
    }

    return (
        <button className={`w-full p-2 border-2 rounded-2xl ${props.class} ${props.textColor} ${props.borderColor} ${props.bgColor} focus:${props.focusColor} hover:${props.hoverColor}`} onClick={() => onClick()}>{props.value}</button>
    );
}

export default Button;
