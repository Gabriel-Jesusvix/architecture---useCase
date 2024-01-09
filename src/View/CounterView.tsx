/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line prettier/prettier
import { Button, Text, View } from 'react-native';

interface CounterViewProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const CounterView: React.FC<CounterViewProps> = ({
  count,
  onIncrement,
  onDecrement,
}: CounterViewProps) => {
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={onIncrement} />
      <Button title="Decrement" onPress={onDecrement} />
    </View>
  );
};

export default CounterView;
