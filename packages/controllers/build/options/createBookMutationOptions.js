var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { BooksDocument } from "../generated/graphql-hooks";
export var createBookMutationOptions = function (variables) {
    return {
        variables: variables,
        optimisticResponse: {
            __typename: "Mutation",
            createBook: {
                __typename: "Book",
                title: variables.title,
                author: variables.author
            }
        },
        update: function (store) {
            try {
                var data = store.readQuery({ query: BooksDocument });
                if (data) {
                    store.writeQuery({
                        query: BooksDocument,
                        data: {
                            books: __spreadArrays(data.books, [__assign({ __typename: "Book" }, variables)])
                        }
                    });
                }
            }
            catch (_a) { }
        }
    };
};
//# sourceMappingURL=createBookMutationOptions.js.map