import classnames from "classnames";
import * as React from "react";

import "uswds/src/stylesheets/elements/_buttons.scss";

export interface IUSWDSComponentsButtonProps {
  type?: "button"|"submit"|"reset";
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: JSX.Element|string|Array<JSX.Element|string>|undefined;
}

export const Button = React.forwardRef(
  (
    {
      type,
      hover,
      active,
      focus,
      onClick,
      children,
      ...otherProps
    }: IUSWDSComponentsButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <button
        ref={ref}
        className={classnames(
          "usa-button",
          {
            "usa-button--active": active,
            "usa-button--hover": hover,
            "usa-focus": focus,
          }
        )}
        type={type}
        onClick={onClick}
        {...otherProps}
      >
        {children}
      </button>
    );
  },
);
