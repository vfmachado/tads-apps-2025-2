
// https://www.nativewind.dev/docs/getting-started/installation
import "../../global.css"
import { StatusBar } from "expo-status-bar";
import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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

export default function App() {
  return (
    <View className="flex-1 bg-white mt-20 mb-20">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="flex-row justify-between items-center px-4 py-3 border-b border-gray-200">
        <Text className="text-xl font-bold">Instagram</Text>
        <Ionicons name="paper-plane-outline" size={24} />
      </View>

      {/* Feed */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mb-6">
            {/* Post header */}
            <View className="flex-row items-center px-3 py-2">
              <Image
                source={{ uri: item.avatar }}
                className="w-10 h-10 rounded-full mr-3"
              />
              <Text className="font-semibold">{item.user}</Text>
            </View>

            {/* Post image */}
            <Image source={{ uri: item.image }} className="w-full h-96" />

            {/* Actions */}
            <View className="flex-row items-center px-3 py-2 space-x-4">
              <Ionicons name="heart-outline" size={26} />
              <Ionicons name="chatbubble-outline" size={26} />
              <Ionicons name="paper-plane-outline" size={26} />
            </View>

            {/* Likes */}
            <Text className="px-3 font-semibold">{item.likes} likes</Text>

            {/* Caption */}
            <Text className="px-3">
              <Text className="font-semibold">{item.user} </Text>
              {item.caption}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

