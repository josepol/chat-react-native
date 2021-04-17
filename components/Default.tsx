import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';
import { IThemeProp } from '../config/theme';

interface ITabIcon {
  isFocused?: boolean;
}

const AppText = styled.Text`
  color: ${(props: ITabIcon & IThemeProp) =>
    props.isFocused
      ? props.theme.PRIMARY_TEXT_COLOR
      : props.theme.SECONDARY_TEXT_COLOR};
`;

const AppIcon = styled(Icon)`
  color: ${(props: ITabIcon & IThemeProp) =>
    props.isFocused
      ? props.theme.PRIMARY_TEXT_COLOR
      : props.theme.SECONDARY_TEXT_COLOR};
`;

export { AppText, AppIcon };
