// externalStyles.js
import { StyleSheet, Dimensions } from 'react-native';
import { getColorScheme } from '../components/color';

const { width, height } = Dimensions.get('window');

export const Styles = (isDarkMode) => {
  const colors = getColorScheme(isDarkMode);

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    text: {
      fontSize: 18,
      color: colors.text,
    },
    responsiveContainer: {
      width: width * 0.8,
      height: height * 0.3,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.primary,
    },
  });
};
