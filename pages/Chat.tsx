import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button } from 'react-native';
import Profile from './Profile';

const Stack = createStackNavigator();

const Chat: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ButtonExample}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const ButtonExample = ({ navigation }: any) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
    />
  );
};

export default Chat;
