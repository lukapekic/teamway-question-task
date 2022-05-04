import classNames from "classnames";
import { FunctionComponent } from "react";
import style from "./Button.module.scss";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType.PRIMARY | ButtonType.SECONDARY;
}

export const Button: FunctionComponent<ButtonProps> = ({
  variant = ButtonType.PRIMARY,
  className,
  onClick,
  disabled,
  children,
  ...rest
}) => {
  return (
    <button
      className={classNames(className, {
        [style["button"]]: true,
        [style["button--primary"]]: variant === ButtonType.PRIMARY,
        [style["button--secondary"]]: variant === ButtonType.SECONDARY,
        [style["button--disabled"]]: disabled,
      })}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
