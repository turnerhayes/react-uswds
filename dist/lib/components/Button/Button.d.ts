import * as React from "react";
import "uswds/src/stylesheets/elements/_buttons.scss";
export interface IUSWDSComponentsButtonProps {
    type?: "button" | "submit" | "reset";
    hover?: boolean;
    active?: boolean;
    focus?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children: string | JSX.Element | JSX.Element[];
}
export declare const Button: React.ForwardRefExoticComponent<IUSWDSComponentsButtonProps & React.RefAttributes<HTMLButtonElement>>;
