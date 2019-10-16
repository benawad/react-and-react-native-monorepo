import { CreateBookMutationVariables } from "../generated/graphql-hooks";
import { MutationFunctionOptions } from "@apollo/react-common";
export declare const createBookMutationOptions: (variables: CreateBookMutationVariables) => MutationFunctionOptions<{
    __typename?: "Mutation" | undefined;
} & {
    createBook: import("../generated/graphql-hooks").Maybe<{
        __typename?: "Book" | undefined;
    } & Pick<import("../generated/graphql-hooks").Book, "title" | "author">>;
}, Record<string, any>>;
