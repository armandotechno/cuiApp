import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { ComidaScreen } from '../screens/ComidaScreen';
import { TiposScreen } from '../screens/TiposScreen';
import { ReproduccionScreen } from '../screens/ReproduccionScreen';
import { NosotrosScreen } from '../screens/NosotrosScreen';
import { MemoryScreen } from '../screens/MemoryScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            cardStyle: { backgroundColor: '#F3DEBA' }, // Color principal de fondo
            headerShown: false
        }}
    >
      <Stack.Screen name="Home" component={ HomeScreen } />
      <Stack.Screen name="ComidaScreen" component={ ComidaScreen } />
      <Stack.Screen name="TiposScreen" component={ TiposScreen } />
      <Stack.Screen name="ReproduccionScreen" component={ ReproduccionScreen } />
      <Stack.Screen name="NosotrosScreen" component={ NosotrosScreen } />
      <Stack.Screen name="MemoryScreen" component={ MemoryScreen } />

    </Stack.Navigator>
  );
}