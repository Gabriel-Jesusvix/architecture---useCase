// TaskListScreen.tsx
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { TaskListViewModel } from '../../ViewModel/TaskListViewModel';

interface TaskListScreenProps {
  viewModel: TaskListViewModel;
}

const TaskListScreen: React.FC<TaskListScreenProps> = observer(
  ({viewModel}: any) => {
    return (
      <View>
        <Text>Incomplete Tasks:</Text>
        {viewModel.incompleteTasks.map(task => (
          <View key={task.id}>
            <Text>{task.title}</Text>
            <Button
              title="Toggle Status"
              onPress={() => viewModel.toggleTaskStatus(task.id)}
            />
          </View>
        ))}
        <Text>Completed Tasks:</Text>
        {viewModel.completedTasks.map(task => (
          <View key={task.id}>
            <Text>{task.title}</Text>
            <Button
              title="Toggle Status"
              onPress={() => viewModel.toggleTaskStatus(task.id)}
            />
          </View>
        ))}
      </View>
    );
  },
);

export default TaskListScreen;
