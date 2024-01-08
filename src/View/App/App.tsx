/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import {styles} from './styles';
import UserController from '../../Controller/UserController';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Rn - Windows</Text>
      <UserController />
    </View>
  );
}
