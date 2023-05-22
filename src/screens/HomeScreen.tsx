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
          flexDirection: 'row',
          alignContent: 'space-between',
          padding: 10,

        }}>
          <TouchableOpacity
            activeOpacity={ 0.7 }
            onPress={ () => navigation.navigate('ComidaScreen') }
            style={ buttonStyle.container }
          >
            <Text style={ buttonStyle.text }>Comida</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={ 0.7 }
            onPress={ () => navigation.navigate('TiposScreen') }
            style={ buttonStyle.container }
          >
            <Text style={ buttonStyle.text }>Tipos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={ 0.7 }
            onPress={ () => navigation.navigate('ReproduccionScreen') }
            style={ buttonStyle.container }
          >
            <Text style={ buttonStyle.text }>Reproducción</Text>
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
