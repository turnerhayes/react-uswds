import * as React from "react";
// import CloseIconPath from "uswds/dist/img/close.svg";

import { Button } from "../Button";
import { Search } from "../Search";

const CloseIconPath = "close.svg";

import "uswds/dist/scss/components/_header.scss";

export interface IUSWDSComponentsHeaderProps {
  children?: JSX.Element|string|Array<JSX.Element|string>|undefined;
}

export const Header = React.forwardRef(
  (
    {
      children,
    }: IUSWDSComponentsHeaderProps,
    ref: React.Ref<HTMLElement>,
  ) => {

    return (
      <header className="usa-header usa-header--basic" role="banner">
        {children}
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo" id="basic-logo">
              <em className="usa-logo__text"><a href="/" title="Home" aria-label="Home">Project title</a></em>
            </div>
            <button className="usa-menu-btn">Menu</button>
          </div>
          <nav role="navigation" className="usa-nav">
            <button className="usa-nav__close">
              <img src={CloseIconPath} alt="close" />
            </button>
            <ul className="usa-nav__primary usa-accordion">
              <li className="usa-nav__primary-item">
                {/* <button
                  className="usa-accordion__button usa-nav__link  usa-current"
                  aria-expanded="false"
                  aria-controls="basic-nav-section-one"
                >
                  <span>Current section</span>
                </button> */}
                <Button type="button">
                  Current section
                </Button>
                <ul id="basic-nav-section-one" className="usa-nav__submenu">
                  <li className="usa-nav__submenu-item">
                    <a href="#">Navigation link</a>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <a href="#">Navigation link</a>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <a href="#">Navigation link</a>
                  </li>
                </ul>
              </li>
              <li className="usa-nav__primary-item">
                <button className="usa-accordion__button usa-nav__link"
                  aria-expanded="false"
                  aria-controls="basic-nav-section-two"
                >
                  <span>Section</span>
                </button>
                <ul id="basic-nav-section-two" className="usa-nav__submenu">
                  <li className="usa-nav__submenu-item">
                    <a href="#">Navigation link</a>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <a href="#">Navigation link</a>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <a href="#">Navigation link</a>
                  </li>
                </ul>
              </li>
              <li className="usa-nav__primary-item">
                <a className="usa-nav__link" href="javascript:void(0)">
                  <span>Simple link</span>
                </a>
              </li>
            </ul>
            <Search
              size="small"
              label="Search small"
              onSearch={() => {}}
            />
          </nav>
        </div>
      </header>
    );
  }
);
