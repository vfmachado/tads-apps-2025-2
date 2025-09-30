// https://callstack.github.io/react-native-paper/docs/guides/getting-started/

import * as React from "react";
import { FlatList, Image, View } from "react-native";
import {
  Appbar,
  Avatar,
  Card,
  IconButton,
  Text,
  Provider as PaperProvider,
  DefaultTheme,
} from "react-native-paper";
import { StatusBar } from "expo-status-bar";

const posts = [
  {
    id: "1",
    user: "john_doe",
    avatar: "https://i.pravatar.cc/100?img=1",
    image: "https://picsum.photos/500/500?random=1",
    likes: 128,
    caption: "Exploring the city 🌆",
  },
  {
    id: "2",
    user: "jane_smith",
    avatar: "https://i.pravatar.cc/100?img=2",
    image: "https://picsum.photos/500/500?random=2",
    likes: 230,
    caption: "Beach vibes 🌊",
  },
];

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF0000',
    secondary: '#00FF00',
    myOwnColor: '#BADA55',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar style="dark" />
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {/* Header */}
        <Appbar.Header mode="small" style={{ backgroundColor: "white" }}>
          <Appbar.Content
            title="Instagram"
            titleStyle={{ fontWeight: "bold" }}
          />
          <Appbar.Action icon="send-outline" onPress={() => {}} />
        </Appbar.Header>

        {/* Feed */}
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card style={{ marginBottom: 16, backgroundColor: "white" }}>
              {/* Post header */}
              <Card.Title
                title={item.user}
                titleStyle={{ fontWeight: "600" }}
                left={(props) => (
                  <Avatar.Image {...props} size={40} source={{ uri: item.avatar }} />
                )}
              />

              {/* Post image */}
              <Image
                source={{ uri: item.image }}
                style={{ width: "100%", height: 350 }}
                resizeMode="cover"
              />

              {/* Post actions */}
              <Card.Actions>
                <IconButton icon="heart-outline" size={24} onPress={() => {}} />
                <IconButton icon="comment-outline" size={24} onPress={() => {}} />
                <IconButton icon="send-outline" size={24} onPress={() => {}} />
              </Card.Actions>

              {/* Likes */}
              <View style={{ paddingHorizontal: 16 }}>
                <Text style={{ fontWeight: "bold" }}>{item.likes} likes</Text>
              </View>

              {/* Caption */}
              <View style={{ paddingHorizontal: 16, paddingBottom: 12 }}>
                <Text>
                  <Text style={{ fontWeight: "bold" }}>{item.user} </Text>
                  {item.caption}
                </Text>
              </View>
            </Card>
          )}
        />
      </View>
    </PaperProvider>
  );
}
