import classnames from "classnames";
import * as React from "react";
import { Button } from "../Button";

import "uswds/src/stylesheets/components/_search.scss";

export interface IUSWDSComponentsSearchProps {
  onSearch: (searchString: string) => any;
  size?: "big"|"small";
  label?: string|undefined;
}

let componentID: number = 1;

export const Search = React.forwardRef(
  (
    {
      onSearch,
      size,
      label,
    }: IUSWDSComponentsSearchProps,
    ref: React.Ref<HTMLFormElement>,
  ) => {
    const [searchString, setSearchString] = React.useState("");

    const [compID, setComponentID] = React.useState<string|undefined>();

    React.useEffect(
      () => {
        if (compID === undefined) {
          setComponentID(`USWDSSearch__${componentID++}`);
        }
      },
      [setComponentID],
    );

    const handleSubmit = React.useCallback(
      (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        onSearch(searchString);
      },
      [],
    );

    const handleSearchInputChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(event.target.value);
      },
      [setSearchString],
    );

    return (
      <form
        className={classnames(
          "usa-search",
          {
            "usa-search--big": size === "big",
            "usa-search--small": size === "small",
          },
        )}
        onSubmit={handleSubmit}
        ref={ref}
      >
        <div role="search">
          <label
            className="usa-sr-only"
            htmlFor={compID}
          >
            {label}
          </label>
          <input
            className="usa-input"
            type="search"
            onChange={handleSearchInputChange}
            value={searchString}
            id={compID}
          />
          <Button
            type="submit"
          >
            <span
              className={classnames({
                "usa-search__submit-text": size !== "small",
                "usa-sr-only": size === "small",
              })}
            >
              Search
            </span>
          </Button>
        </div>
      </form>
    );
  },
);

Search.defaultProps = {
  label: "Search",
};
