import { Button, Text, TouchableOpacity, View } from 'react-native';
import { Logo } from '../components/Logo';
import { StackScreenProps } from '@react-navigation/stack';
import { buttonStyle } from '../theme/buttonTheme';

interface Props extends StackScreenProps<any, any>{};

export const HomeScreen = ( { navigation }: Props ) => {
  return (
    <>
      <View style={{
        // justifyContent: 'center'
        flex: 1
      }}>
        <View style={{
          // backgroundColor: 'red'
          padding: 10
        }}>
          <TouchableOpacity
            activeOpacity={ 0.7 }
            onPress={ () => navigation.navigate('ComidaScreen') }
          >
            <Text style={ buttonStyle.text }>Comida</Text>
          </TouchableOpacity>
          
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
