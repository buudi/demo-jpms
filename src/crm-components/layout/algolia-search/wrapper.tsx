import { PropsWithChildren } from "react";
import { InstantSearch } from "react-instantsearch";

import { indexName, searchClient } from "../../../search-client";

export const AlgoliaSearchWrapper: React.FC<PropsWithChildren> = ({
    children,
}) => {
    if (!searchClient) {
        return <>{children}</>;
    }

    return (
        <InstantSearch searchClient={searchClient} indexName={indexName}>
            {children}
        </InstantSearch>
    );
};
