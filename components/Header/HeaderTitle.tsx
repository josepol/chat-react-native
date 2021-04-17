import React from 'react';
import { View } from 'react-native';
import { AppText } from '../Default';
import styled from 'styled-components/native';

const HeaderView = styled(View)`
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled(AppText)`
  font-weight: bold;
  font-size: 20px;
`;

const HeaderTitle = ({ children, navigation }: any) => {
  return (
    <HeaderView>
      <HeaderText>{children}</HeaderText>
    </HeaderView>
  );
};

export default HeaderTitle;
