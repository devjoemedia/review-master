import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Pressable } from "react-native";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='trending'
        options={{
          title: "Trending",
          tabBarIcon: ({ color }) => <TabBarIcon name='code' color='black' />,
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <TabBarIcon name='code' color="black" />,
        }}
      />
      <Tabs.Screen
        name='favourite'
        options={{
          title: "Favourite",
          tabBarIcon: ({ color }) => <TabBarIcon name='code' color="black" />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name='code' color="black" />,
        }}
      />
    </Tabs>
  );
}
