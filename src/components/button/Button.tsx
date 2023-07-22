import {  ButtonHTMLAttributes,  MouseEvent, PropsWithChildren } from "react";

type ButtonProps = {
    onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
    onClick,
    children,
    ...attrs
 }: ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren<ButtonProps>) => {
    return (
        <button {...attrs } onClick={onClick}>
            { children }
        </button>
    )
}