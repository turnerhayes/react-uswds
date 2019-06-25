import classnames from "classnames";
import * as React from "react";

import "uswds/dist/scss/components/_accordions.scss";

import "./Accordion.scss";

export interface IUSWDSComponentsAccordionItem {
  header: string|JSX.Element|React.Component<any, any, any>;
  contents: string|JSX.Element|React.Component<any, any, any>;
  headerClass?: string;
  contentsClass?: string;
}

export interface IUSWDSComponentsAccordionProps {
  items: IUSWDSComponentsAccordionItem[];
  isBordered?: boolean;
  allowMultiple?: boolean;
  openedItemIndexes?: number[];
  className?: string;
  asList?: boolean;
  onItemOpened: (index: number) => void;
  onItemsClosed: (indexes: number[]) => void;
}

export const Accordion = React.forwardRef(
  // tslint:disable-next-line:no-shadowed-variable
  function Accordion(
    {
      items,
      isBordered = false,
      allowMultiple = false,
      openedItemIndexes = [],
      onItemOpened,
      onItemsClosed,
      className,
      asList = false,
    }: IUSWDSComponentsAccordionProps,
    ref: React.Ref<HTMLElement>,
  ): JSX.Element {
    if (!Array.isArray(items)) {
      items = [items];
    }

    const handleHeaderClick = React.useCallback(
      (index: number) => {
        if (openedItemIndexes.includes(index)) {
          onItemsClosed([index]);
        } else {
          if (!allowMultiple) {
            if (openedItemIndexes.length > 0) {
              onItemsClosed(openedItemIndexes);
            }
          }

          onItemOpened(index);
        }
      },
      [
        openedItemIndexes,
        allowMultiple,
        onItemOpened,
        onItemsClosed,
      ],
    );

    const WrapperComponent = asList ?
      "ul" :
      "div";

    const ItemComponent = asList ?
      "li" :
      React.Fragment;

    return (
      <WrapperComponent
        className={classnames(
          "usa-accordion",
          {
            "usa-accordion--bordered": isBordered,
          },
          className,
        )}
      >
        {
          items.map(
            (item: IUSWDSComponentsAccordionItem, index: number) => (
              <ItemComponent
                key={index}
              >
                {
                  typeof item.header === "string" ? (
                    <h2
                      className={classnames(
                        "usa-accordion__heading",
                        item.headerClass,
                      )}
                    >
                      <button
                        className="usa-accordion__button"
                        aria-expanded={openedItemIndexes.includes(index)}
                        onClick={() => handleHeaderClick(index)}
                      >
                        {item.header}
                      </button>
                    </h2>
                  ) : (
                    React.cloneElement(
                      item.header as any,
                      {
                        onClick: () => handleHeaderClick(index),
                      },
                    )
                  )
                }
                <div
                  className={classnames(
                    "usa-accordion__content",
                    {
                      hidden: !openedItemIndexes.includes(index),
                    },
                    item.contentsClass,
                  )}
                >
                  {item.contents}
                </div>
              </ItemComponent>
            ),
          )
        }
      </WrapperComponent>
    );
  },
);
