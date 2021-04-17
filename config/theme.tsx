export interface ITheme {
  dark: boolean;
  PRIMARY_BACKGROUND_COLOR: string;
  PRIMARY_TEXT_COLOR: string;
  SECONDARY_TEXT_COLOR: string;
  PRIMARY_BUTTON_COLOR: string;
  SECONDARY_BUTTON_COLOR: string;
}

export interface IThemeProp {
  theme: ITheme;
}

const Theme: ITheme = {
  dark: false,
  PRIMARY_BACKGROUND_COLOR: '#D6F8D6', // ligh green
  PRIMARY_TEXT_COLOR: '#7FC6A4', // green
  SECONDARY_TEXT_COLOR: '#5D737E', // dark green
  PRIMARY_BUTTON_COLOR: '#55505C', // dark grey
  SECONDARY_BUTTON_COLOR: '#FAF33E', // yellow
};

export default Theme;
