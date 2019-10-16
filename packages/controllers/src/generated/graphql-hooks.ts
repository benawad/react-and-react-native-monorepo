import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export type Book = {
   __typename?: 'Book',
  title?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Mutation = {
   __typename?: 'Mutation',
  createBook?: Maybe<Book>,
};


export type MutationCreateBookArgs = {
  title?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>
};

export type Query = {
   __typename?: 'Query',
  books: Array<Book>,
};


export type BooksQueryVariables = {};


export type BooksQuery = (
  { __typename?: 'Query' }
  & { books: Array<(
    { __typename?: 'Book' }
    & Pick<Book, 'title' | 'author'>
  )> }
);

export type CreateBookMutationVariables = {
  title?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>
};


export type CreateBookMutation = (
  { __typename?: 'Mutation' }
  & { createBook: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'title' | 'author'>
  )> }
);


export const BooksDocument = gql`
    query Books {
  books {
    title
    author
  }
}
    `;

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
export function useBooksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BooksQuery, BooksQueryVariables>) {
        return ApolloReactHooks.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, baseOptions);
      }
export function useBooksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, baseOptions);
        }
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = ApolloReactCommon.QueryResult<BooksQuery, BooksQueryVariables>;
export const CreateBookDocument = gql`
    mutation CreateBook($title: String, $author: String) {
  createBook(title: $title, author: $author) {
    title
    author
  }
}
    `;
export type CreateBookMutationFn = ApolloReactCommon.MutationFunction<CreateBookMutation, CreateBookMutationVariables>;

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
export function useCreateBookMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateBookMutation, CreateBookMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument, baseOptions);
      }
export type CreateBookMutationHookResult = ReturnType<typeof useCreateBookMutation>;
export type CreateBookMutationResult = ApolloReactCommon.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateBookMutation, CreateBookMutationVariables>;