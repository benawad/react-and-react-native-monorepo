import ApolloClient from "apollo-boost";
export declare const validateUrl: (url: string) => string | undefined;
export declare const usePrevious: <T>(value: T) => T | undefined;
export declare const apolloClient: ApolloClient<unknown>;
export * from "./generated/graphql-hooks";
export * from "./options/createBookMutationOptions";
