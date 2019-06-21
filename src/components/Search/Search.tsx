import classnames from "classnames";
import * as React from "react";

import "uswds/src/stylesheets/components/_search.scss";
import "uswds/src/stylesheets/elements/_buttons.scss";

export interface IUSWDSComponentsSearchProps {
  onSearch: () => any;
  size?: "big"|"small";
}

export const Search = React.forwardRef(
  (
    {
      onSearch,
      size,
    }: IUSWDSComponentsSearchProps,
    ref: React.Ref<HTMLFormElement>,
  ) => {
    const handleSubmit = React.useCallback(
      (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        onSearch();
      },
      [],
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
          >
            Search
            <input
              className="usa-input"
              type="search"
            />
          </label>
          <button
            className="usa-button"
            type="submit"
          >
            <span
              className="usa-search__submit-text"
            >
              Search
            </span>
          </button>
        </div>
      </form>
    );
  },
);
