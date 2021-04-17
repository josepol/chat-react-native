import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from './pages/Chat';
import Settings from './pages/Settings';
import TabBar from './components/Tabs';
import Theme from './config/theme';
import { ThemeProvider } from 'styled-components/native';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer>
        <Tab.Navigator
          key="tab-navigator"
          tabBar={props => <TabBar {...props} />}>
          <Tab.Screen name="Chat" component={Chat} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
