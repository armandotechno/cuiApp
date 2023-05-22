import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigation/Navegation';

const App = () => {
  return (
    <NavigationContainer>
        <Navigator />
    </NavigationContainer>
  )
}

export default App;
