import { ButtonHTMLAttributes, MouseEvent, PropsWithChildren } from "react";

type ButtonProps = {
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
};

type ButtonAttrs =  ButtonHTMLAttributes<HTMLButtonElement>;
type Props = ButtonAttrs & PropsWithChildren<ButtonProps>;

export const Button = ({ onClick, children, ...attrs }: Props) => {
  return (
    <button {...attrs} onClick={onClick}>
      {children}
    </button>
  );
};
