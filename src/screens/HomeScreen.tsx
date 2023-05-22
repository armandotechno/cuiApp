import { Button, Text, View } from 'react-native';
import { Logo } from '../components/Logo';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

export const HomeScreen = ( { navigation }: Props ) => {
  return (
    <>
      <View style={{
        // justifyContent: 'center'
        flex: 1
      }}>
        <View>
          <Button 
            title='Ver Comida'
            onPress={ () => navigation.navigate('ComidaScreen') }
          />
        </View>

        <View style={{
          flex: 1,
          justifyContent: 'center',
        }}>
          <Logo />
        </View>
        
      </View>
    </>
    
  )
}
