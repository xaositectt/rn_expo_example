import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/src/components/navigation/TabBarIcon';
import { Colors } from '@/src/constants/Colors';
import { useColorScheme } from '@/src/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="image"
        options={{
          title: 'Image',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'image' : 'image-outline'} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="step_counter"
        options={{
          title: 'Step Counter',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'footsteps' : 'footsteps-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="widget_preview"
        options={{
          title: 'Widget preview',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'footsteps' : 'footsteps-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(user)"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
