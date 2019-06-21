import * as React from "react";
import "uswds/src/stylesheets/components/_search.scss";
import "uswds/src/stylesheets/elements/_buttons.scss";
export interface IUSWDSComponentsSearchProps {
    onSearch: () => any;
    size?: "big" | "small";
}
export declare const Search: React.ForwardRefExoticComponent<IUSWDSComponentsSearchProps & React.RefAttributes<HTMLFormElement>>;
