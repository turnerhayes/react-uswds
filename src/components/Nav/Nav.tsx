import * as React from "react";

import { Accordion } from "../Accordion";
import { IUSWDSComponentsNavMenuItem } from "./IUSWDSComponentNavMenuItem";
import { NavMenu } from "./NavMenu";

import "uswds/dist/scss/components/_navigation.scss";
import { IUSWDSComponentsAccordionItem } from "components/Accordion/Accordion";

export interface IUSWDSComponentsNavProps {
  children?: JSX.Element|string|Array<JSX.Element|string>|undefined;
  links?: JSX.Element[]|undefined;
  menus?: Array<{
    label: string,
    menu: React.Component<any>|IUSWDSComponentsNavMenuItem[],
  }>|undefined;
  brand?: JSX.Element|string|undefined;
}

export const Nav = React.forwardRef(
  // tslint:disable-next-line:no-shadowed-variable
  function Nav(
    {
      children,
      brand,
      links,
      menus,
    }: IUSWDSComponentsNavProps,
    ref: React.Ref<HTMLElement>,
  ): JSX.Element {
    let brandComponent = brand;

    if (brandComponent && typeof brandComponent === "string") {
      brandComponent = (
        <div className="usa-logo">
          <em className="usa-logo__text">
            <a href="/" title={brand as string} aria-label={brand as string}>
              {brand}
            </a>
          </em>
        </div>
      );
    }

    const [openedMenuIndex, setOpenedMenuIndex] = React.useState<number|null>(null);

    const handleMenuAccordionItemOpened = React.useCallback(
      (index) => {
        setOpenedMenuIndex(index);
      },
      [
        setOpenedMenuIndex,
      ],
    );

    const handleMenuAccordionItemsClosed = React.useCallback(
      () => {
        setOpenedMenuIndex(null);
      },
      [
        setOpenedMenuIndex,
      ],
    );

    const handleMenuBodyClick = React.useCallback(
      () => {
        setOpenedMenuIndex(null);
      },
      [
        setOpenedMenuIndex,
      ]
    );

    return (
      <div
        className="usa-nav-container"
      >
        {brandComponent}
        {
          menus && menus.length > 0 && (
            <nav
              role="navigation"
              className="usa-nav"
              ref={ref}
            >
              <Accordion
                className="usa-nav__primary"
                asList
                openedItemIndexes={
                  openedMenuIndex === null ?
                    undefined :
                    [openedMenuIndex]
                }
                items={
                  menus.map(
                    ({ label, menu }, index): IUSWDSComponentsAccordionItem => ({
                      contents: Array.isArray(menu) ?
                        (
                          <NavMenu
                            items={menu as IUSWDSComponentsNavMenuItem[]}
                            onBodyClick={handleMenuBodyClick}
                          />
                        ) :
                        menu,
                      header: (
                        <button
                          className="usa-accordion__button usa-nav__link usa-current"
                          aria-expanded="false"
                        >
                          <span>{label}</span>
                        </button>
                      ),
                      headerClass: "usa-nav__primary-item",
                    }),
                      // <li
                      //   key={index}
                      //   className="usa-nav__primary-item"
                      // >
                      //   <button
                      //     className="usa-accordion__button usa-nav__link  usa-current"
                      //     aria-expanded="false"
                      //     aria-controls="basic-mega-nav-section-one"
                      //   >
                      //     <span>{label}</span>
                      //   </button>
                      //   {
                      //     Array.isArray(menu) ?
                      //       (
                      //         <NavMenu
                      //           items={menu as IUSWDSComponentsNavMenuItem[]}
                      //         />
                      //       ) :
                      //       menu
                      //   }
                      // </li>
                    // ),
                  )
                }
                onItemOpened={handleMenuAccordionItemOpened}
                onItemsClosed={handleMenuAccordionItemsClosed}
              />
              {children}
            </nav>
          )
        }
      </div>
    );
  }
);
