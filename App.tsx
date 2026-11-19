// Modular Chef's Menu Manager application shell.
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import LoginScreen from './src/screens/LoginScreen.tsx';
import IndexScreen from './src/screens/IndexScreen.tsx';
import AddMenuScreen from './src/screens/AddMenuScreen.tsx';
import MenuScreen from './src/screens/MenuScreen.tsx';
import ChefProfileScreen from './src/screens/ChefProfileScreen.tsx';
import { MenuItem, RootStackParamList } from './src/types.ts';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [items, setItems] = useState<MenuItem[]>([]);

  const addItem = (item: Omit<MenuItem, 'id'>) => {
    setItems((current) => [
      { ...item, id: `${Date.now()}-${Math.random()}` },
      ...current,
    ]);
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#F7F3EA' },
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen name="Login">
            {(props) => (
              <LoginScreen
                {...props}
                onLogin={() =>
                  props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Index' }],
                  })
                }
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Index">
            {(props) => <IndexScreen {...props} items={items} />}
          </Stack.Screen>

          <Stack.Screen name="AddMenu">
            {(props) => <AddMenuScreen {...props} onAddItem={addItem} />}
          </Stack.Screen>

          <Stack.Screen name="Menu">
            {(props) => <MenuScreen {...props} items={items} />}
          </Stack.Screen>

          <Stack.Screen name="ChefProfile">
            {(props) => (
              <ChefProfileScreen
                {...props}
                itemCount={items.length}
                onLogout={() =>
                  props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                  })
                }
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
