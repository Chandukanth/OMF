export const lightColors = {
    background: '#f0f0f0',
    text: 'black',
    primary: 'blue',
  };
  
  export const darkColors = {
    background: '#1c1c1c',
    text: 'white',
    primary: 'orange',
  };
  
  export const getColorScheme = (isDarkMode) => (isDarkMode ? darkColors : lightColors);
  