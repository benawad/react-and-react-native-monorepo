var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import gql from 'graphql-tag';
import * as ApolloReactHooks from '@apollo/react-hooks';
export var CacheControlScope;
(function (CacheControlScope) {
    CacheControlScope["Public"] = "PUBLIC";
    CacheControlScope["Private"] = "PRIVATE";
})(CacheControlScope || (CacheControlScope = {}));
export var BooksDocument = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query Books {\n  books {\n    title\n    author\n  }\n}\n    "], ["\n    query Books {\n  books {\n    title\n    author\n  }\n}\n    "])));
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
export function useBooksQuery(baseOptions) {
    return ApolloReactHooks.useQuery(BooksDocument, baseOptions);
}
export function useBooksLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(BooksDocument, baseOptions);
}
export var CreateBookDocument = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    mutation CreateBook($title: String, $author: String) {\n  createBook(title: $title, author: $author) {\n    title\n    author\n  }\n}\n    "], ["\n    mutation CreateBook($title: String, $author: String) {\n  createBook(title: $title, author: $author) {\n    title\n    author\n  }\n}\n    "])));
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
export function useCreateBookMutation(baseOptions) {
    return ApolloReactHooks.useMutation(CreateBookDocument, baseOptions);
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=graphql-hooks.js.map