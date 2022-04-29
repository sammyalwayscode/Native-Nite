import { Image, ScrollView, FlatList, View, Text } from "react-native";
import React from "react";
import { data } from "./data";

export default function HomeScreen() {
  return (
    <View style={{ alignItems: "center" }}>
      <Text>HomeScreen awesome</Text>
      {/* <ScrollView>
        {data.map((props) => (
          <View>
            <Image
              source={props.image}
              style={{ width: 350, height: 250, borderRadius: 4, margin: 10 }}
            />
            <Text>{props.title}</Text>
          </View>
        ))}
      </ScrollView> */}

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Image
              source={item.image}
              style={{ width: 350, height: 250, borderRadius: 4, margin: 10 }}
            />
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(el) => el.id}
        // horizontal
        // showsHorizontalScrollIndicator:
      />
    </View>
  );
}
