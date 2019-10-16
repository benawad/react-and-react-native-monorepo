import React from "react";
import { Text, SafeAreaView, FlatList, Button } from "react-native";
import {
  useBooksQuery,
  useCreateBookMutation,
  createBookMutationOptions
} from "@gg/controllers";

interface Props {}

export const Books: React.FC<Props> = () => {
  const { data } = useBooksQuery();
  const [createBook] = useCreateBookMutation();

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={() => (
          <Button
            title="add book"
            onPress={() => {
              createBook(
                createBookMutationOptions({
                  author: "" + Math.random(),
                  title: "random book"
                })
              );
            }}
          />
        )}
        data={data && data.books ? data.books : []}
        keyExtractor={item => item.title + item.author}
        renderItem={({ item }) => (
          <Text>
            {item.title} by {item.author}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};
