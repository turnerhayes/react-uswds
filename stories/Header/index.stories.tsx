import * as React from "react";

// import { action } from "@storybook/addon-actions";
// import {
//   boolean as booleanKnob,
//   text as textKnob,
// } from "@storybook/addon-knobs";
import { withKnobs } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";

import { Header } from "../../src/components/Header";

storiesOf("Header", module)
  .addDecorator(withKnobs)
  .add(
    "Default", () => {

      return (
        <Header></Header>
      );
    },
  );
