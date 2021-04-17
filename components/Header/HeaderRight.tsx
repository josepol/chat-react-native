import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { AppIcon } from '../Default';

const HeaderRightView = styled(View)`
  justify-content: center;
  align-items: center;
`;

const HeaderRightIcon = styled(AppIcon)`
  font-weight: bold;
  font-size: 20px;
  margin-right: 10px;
`;

const HeaderRight = ({ children, navigation }: any) => {
  return (
    <HeaderRightView>
      <HeaderRightIcon key="settings-tab" name="edit" size={40}>
        {children}
      </HeaderRightIcon>
    </HeaderRightView>
  );
};

export default HeaderRight;
