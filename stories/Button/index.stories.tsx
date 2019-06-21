import * as React from "react";

import { action } from "@storybook/addon-actions";
import {
  boolean as booleanKnob,
  text as textKnob,
} from "@storybook/addon-knobs";
import { withKnobs } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";

import { Button } from "../../src/components/Button";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add(
    "Default", () => {

      return (
        <Button
          active={booleanKnob("active", false)}
          hover={booleanKnob("hover", false)}
          focus={booleanKnob("focus", false)}
          onClick={action("clicked")}
        >
          {textKnob("content", "Button")}
        </Button>
      );
    },
  );
