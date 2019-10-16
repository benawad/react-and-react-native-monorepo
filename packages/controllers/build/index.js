import { useRef, useEffect } from "react";
import { parse } from "url";
import ApolloClient from "apollo-boost";
export var validateUrl = function (url) {
    if (!url) {
        return undefined;
    }
    try {
        var uu = parse(url);
        if (uu.protocol === "http:" || uu.protocol === "https:") {
            return url;
        }
    }
    catch (_a) {
        return undefined;
    }
    return undefined;
};
export var usePrevious = function (value) {
    var ref = useRef();
    useEffect(function () {
        ref.current = value;
    }, [value]);
    return ref.current;
};
export var apolloClient = new ApolloClient({ uri: "http://localhost:5000" });
export * from "./generated/graphql-hooks";
export * from "./options/createBookMutationOptions";
//# sourceMappingURL=index.js.map