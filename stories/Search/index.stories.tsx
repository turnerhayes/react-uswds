import * as React from "react";

import { action } from "@storybook/addon-actions";
import {optionsKnob as options } from "@storybook/addon-knobs";
import { withKnobs } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";

import { Search } from "../../src/components/Search";

storiesOf("Search", module)
  .addDecorator(withKnobs)
  .add(
    "Default", () => {
      const size: "big"|"small"|"" = options(
        "Size",
        {
          big: "big",
          normal: "",
          small: "small",
        },
        "",
        {
          display: "inline-radio",
        },
      );

      return (
        <Search
          onSearch={action("Searching")}
          size={size || undefined}
        />
      );
    },
  );
