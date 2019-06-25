import classnames from "classnames";
import * as React from "react";

import { IUSWDSComponentsNavMenuItem } from "./IUSWDSComponentNavMenuItem";

import "uswds/dist/scss/components/_navigation.scss";

export interface IUSWDSComponentsNavMenuProps {
  isCurrent?: boolean;
  items: IUSWDSComponentsNavMenuItem[];
  linkComponent?: React.ComponentType<any>|undefined;
  onBodyClick?: (event: Event) => void;
}

export const NavMenu = React.forwardRef(
  // tslint:disable-next-line:no-shadowed-variable
  function NavMenu(
    {
      isCurrent,
      items,
      linkComponent: LinkComponent,
      onBodyClick,
    }: IUSWDSComponentsNavMenuProps,
    ref: React.RefObject<HTMLUListElement>,
  ): JSX.Element {
    if (!ref) {
      ref = React.createRef<HTMLUListElement>();
    }

    const handleClick = React.useCallback(
      (event) => {
        if (
          (ref.current && event.target === ref.current) ||
          event.target.classList.contains("usa-nav__submenu-item")
        ) {
          if (onBodyClick) {
            onBodyClick(event);
          }
        }
      },
      [
        onBodyClick,
        ref,
      ],
    );

    return (
      <ul
        className={classnames(
          "usa-nav__submenu",
          {
            "usa-current": isCurrent,
          },
        )}
        onClick={handleClick}
        ref={ref}
      >
        {
          items.map(
            ({ label, link, linkTarget }, index) => (
              <li
                key={index}
                className="usa-nav__submenu-item"
              >
                {
                  link ?
                    (
                      LinkComponent ?
                        (
                          <LinkComponent
                            link={link}
                            linkTarget={linkTarget}
                            index={index}
                          >
                            {label}
                          </LinkComponent>
                        ) :
                        (
                          <a
                            href={link}
                            target={linkTarget}
                          >
                            {label}
                          </a>
                        )
                    ) :
                    label
                }
              </li>
            ),
          )
        }
      </ul>
    );
  },
);

NavMenu.defaultProps = {
  isCurrent: false,
};
