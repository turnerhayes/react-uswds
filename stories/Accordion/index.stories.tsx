import * as React from "react";

import { action } from "@storybook/addon-actions";
import {
  boolean as booleanKnob,
  object as objectKnob,
} from "@storybook/addon-knobs";
import { withKnobs } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";

import { Accordion } from "../../src/components/Accordion";
import {
  IUSWDSComponentsAccordionProps,
} from "../../src/components/Accordion/Accordion";

const AccordionWrapper = (
  {
    onItemsClosed,
    onItemOpened,
    openedItemIndexes: inheritedOpenedItemIndexes,
    ...props
  }: IUSWDSComponentsAccordionProps,
) => {
  const [
    openedItemIndexes,
    setOpenItemIndexes,
  ] = React.useState(new Set<number>());

  return (
    <Accordion
      {...props}
      openedItemIndexes={Array.from(openedItemIndexes)}
      onItemsClosed={(indexes: number[]) => {
        if (onItemsClosed) {
          onItemsClosed(indexes);
        }

        setOpenItemIndexes(
          (prevOpenedItemIndexes) => {
            const newOpenedItemIndexes = new Set(prevOpenedItemIndexes);

            indexes.forEach(
              (index: number) => {
                newOpenedItemIndexes.delete(index);
              },
            );

            return newOpenedItemIndexes;
          },
        );
      }}
      onItemOpened={(index: number) => {
        if (onItemOpened) {
          onItemOpened(index);
        }

        setOpenItemIndexes(
          (prevOpenedItemIndexes) => {
            const newOpenedItemIndexes = new Set(prevOpenedItemIndexes);

            newOpenedItemIndexes.add(index);

            return newOpenedItemIndexes;
          },
        );
      }}
    />
  )
};

storiesOf("Accordion", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => {
      const defaultItems = [];

      const NUM_ITEMS = 10;

      for (let i = 1; i <= NUM_ITEMS; i++) {
        defaultItems.push(
          {
            contents: `Contents for item ${i}`,
            header: `Item ${i}`,
          },
        );
      }


      const isBordered = booleanKnob("Bordered", false);
      const allowMultiple = booleanKnob("Allow multiple", false);
      const asList = booleanKnob("As list", false);

      const items = objectKnob(
        "Accordion items",
        defaultItems,
      );

      const onOpenAction = action(`Item opened`);
      const onCloseAction = action(`Item(s) closed`);

      return (
        <AccordionWrapper
          items={items}
          isBordered={isBordered}
          allowMultiple={allowMultiple}
          asList={asList}
          onItemOpened={onOpenAction}
          onItemsClosed={onCloseAction}
        />
      );
    },
  );
