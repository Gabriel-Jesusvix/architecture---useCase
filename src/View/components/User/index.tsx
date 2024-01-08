import {View, Text} from 'react-native';
import {styles} from './styles';

interface UserData {
  user: {
    name: string;
    email: string;
    password: string;
  };
}
export const UserView = ({user}: UserData) => {
  return (
    <View style={styles.container}>
      <Text>Name: {user?.name}</Text>
      <Text>Email: {user?.email}</Text>
      <Text>Password: {user?.password}</Text>
    </View>
  );
};

export default UserView;
