import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

const TabText = styled.Text`
  color: ${(props: any) => props.theme.PRIMARY_TEXT_COLOR};
`;

const TabIcon = styled(Icon)`
  color: ${(props: any) => props.theme.PRIMARY_TEXT_COLOR};
`;

const TabBar = ({ state, descriptors, navigation }: any) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={style().tabBarView}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={style().touchableOpacity}>
            <View style={style().touchableOpacityView}>
              <TabIcon
                name={label === 'Chat' ? 'comments' : 'cogs'}
                size={30}
              />
              <TabText>{label}</TabText>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const style = (isFocused: boolean = false) =>
  StyleSheet.create({
    tabBarView: { flexDirection: 'row' },
    touchableOpacity: { flex: 1 },
    touchableOpacityTex: { color: isFocused ? '#673ab7' : '#222' },
    touchableOpacityView: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
  });

export default TabBar;
