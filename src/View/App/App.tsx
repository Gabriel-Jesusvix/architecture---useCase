/* eslint-disable react/react-in-jsx-scope */
import { Text, View } from 'react-native';
import { TaskListViewModel } from '../../ViewModel/TaskListViewModel';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Rn - Windows</Text>
      <TaskListViewModel />
    </View>
  );
}
