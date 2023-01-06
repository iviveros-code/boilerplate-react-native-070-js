import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    white: '#FFFFFF',
    black: '#000000',
    shadow: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
    },
  },
  fonts: {},
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 40,
    xxl: 64,
  },
};
