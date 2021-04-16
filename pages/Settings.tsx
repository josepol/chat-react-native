import React from 'react';
import { Text } from 'react-native';

const Settings: React.FC = ({ route }: any) => {
  return <Text>This is {route?.params?.name}'s settings</Text>;
};

export default Settings;
