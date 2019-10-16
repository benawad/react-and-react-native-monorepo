import {
  CreateBookMutation,
  CreateBookMutationVariables,
  BooksDocument,
  BooksQuery
} from "../generated/graphql-hooks";
import { MutationFunctionOptions } from "@apollo/react-common";

export const createBookMutationOptions = (
  variables: CreateBookMutationVariables
): MutationFunctionOptions<CreateBookMutation> => {
  return {
    variables,
    optimisticResponse: {
      __typename: "Mutation",
      createBook: {
        __typename: "Book",
        title: variables.title,
        author: variables.author
      }
    },
    update: store => {
      try {
        const data = store.readQuery<BooksQuery>({ query: BooksDocument });
        if (data) {
          store.writeQuery<BooksQuery>({
            query: BooksDocument,
            data: {
              books: [...data.books, { __typename: "Book", ...variables }]
            }
          });
        }
      } catch {}
    }
  };
};
