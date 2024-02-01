
import UserNavigation from './userNavigation';
import { useColorScheme } from 'react-native';


export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <UserNavigation isDarkMode={isDarkMode} />
  );
}


