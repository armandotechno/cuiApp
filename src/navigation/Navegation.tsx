import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';

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
    </Stack.Navigator>
  );
}