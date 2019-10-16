import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export declare type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
};
export declare type Book = {
    __typename?: 'Book';
    title?: Maybe<Scalars['String']>;
    author?: Maybe<Scalars['String']>;
};
export declare enum CacheControlScope {
    Public = "PUBLIC",
    Private = "PRIVATE"
}
export declare type Mutation = {
    __typename?: 'Mutation';
    createBook?: Maybe<Book>;
};
export declare type MutationCreateBookArgs = {
    title?: Maybe<Scalars['String']>;
    author?: Maybe<Scalars['String']>;
};
export declare type Query = {
    __typename?: 'Query';
    books: Array<Book>;
};
export declare type BooksQueryVariables = {};
export declare type BooksQuery = ({
    __typename?: 'Query';
} & {
    books: Array<({
        __typename?: 'Book';
    } & Pick<Book, 'title' | 'author'>)>;
});
export declare type CreateBookMutationVariables = {
    title?: Maybe<Scalars['String']>;
    author?: Maybe<Scalars['String']>;
};
export declare type CreateBookMutation = ({
    __typename?: 'Mutation';
} & {
    createBook: Maybe<({
        __typename?: 'Book';
    } & Pick<Book, 'title' | 'author'>)>;
});
export declare const BooksDocument: any;
/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useBooksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BooksQuery, BooksQueryVariables>): ApolloReactCommon.QueryResult<{
    __typename?: "Query" | undefined;
} & {
    books: ({
        __typename?: "Book" | undefined;
    } & Pick<Book, "title" | "author">)[];
}, BooksQueryVariables>;
export declare function useBooksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>): [(options?: ApolloReactHooks.QueryLazyOptions<BooksQueryVariables> | undefined) => void, ApolloReactCommon.QueryResult<{
    __typename?: "Query" | undefined;
} & {
    books: ({
        __typename?: "Book" | undefined;
    } & Pick<Book, "title" | "author">)[];
}, BooksQueryVariables>];
export declare type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export declare type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export declare type BooksQueryResult = ApolloReactCommon.QueryResult<BooksQuery, BooksQueryVariables>;
export declare const CreateBookDocument: any;
export declare type CreateBookMutationFn = ApolloReactCommon.MutationFunction<CreateBookMutation, CreateBookMutationVariables>;
/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      title: // value for 'title'
 *      author: // value for 'author'
 *   },
 * });
 */
export declare function useCreateBookMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateBookMutation, CreateBookMutationVariables>): [(options?: ApolloReactCommon.MutationFunctionOptions<{
    __typename?: "Mutation" | undefined;
} & {
    createBook: Maybe<{
        __typename?: "Book" | undefined;
    } & Pick<Book, "title" | "author">>;
}, CreateBookMutationVariables> | undefined) => Promise<ApolloReactCommon.ExecutionResult<{
    __typename?: "Mutation" | undefined;
} & {
    createBook: Maybe<{
        __typename?: "Book" | undefined;
    } & Pick<Book, "title" | "author">>;
}>>, ApolloReactCommon.MutationResult<{
    __typename?: "Mutation" | undefined;
} & {
    createBook: Maybe<{
        __typename?: "Book" | undefined;
    } & Pick<Book, "title" | "author">>;
}>];
export declare type CreateBookMutationHookResult = ReturnType<typeof useCreateBookMutation>;
export declare type CreateBookMutationResult = ApolloReactCommon.MutationResult<CreateBookMutation>;
export declare type CreateBookMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateBookMutation, CreateBookMutationVariables>;
