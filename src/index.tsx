import * as React from "react";
import { render } from "react-dom";

import {Search} from "./components/Search";

render(
  (
    <div>
      <Search
        onSearch={() => console.log("search")}
      />
    </div>
  ),
  document.body
);
