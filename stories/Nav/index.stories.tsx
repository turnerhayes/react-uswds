import * as React from "react";

// import { action } from "@storybook/addon-actions";
// import {
//   boolean as booleanKnob,
//   text as textKnob,
// } from "@storybook/addon-knobs";
import { withKnobs } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";

import { Nav } from "../../src/components/Nav";

storiesOf("Nav", module)
  .addDecorator(withKnobs)
  .add(
    "Basic", () => {
      return (
        <Nav
          brand="Test"
        >
        </Nav>
      );
    },
    ).add(
      "With menus", () => {
        return (
          <Nav
            brand="Test"
            menus={[
              {
                label: "Menu 1",
                menu: [
                  {
                    label: "Test link 1",
                    link: "javascript:void(0);",
                  },
                ],
              },
              {
                label: "Menu 2",
                menu: [
                  {
                    label: "Test link 1",
                    link: "javascript:void(0);",
                  },
                ],
              },
            ]}
          >
          </Nav>
        );
      },
  );
