
import { makeAutoObservable } from 'mobx';
import { TaskModel } from '../model/TaskModel';

export class TaskListViewModel {
  tasks: TaskModel[] = [];
  
  constructor() {
    makeAutoObservable(this);
  }

  addTask(title: string) {
    const newTask: TaskModel = {
      id: this.tasks.length + 1,
      title,
      completed: false,
    };
    this.tasks.push(newTask);
    
  }

  toggleTaskStatus(id: number) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex].completed = !this.tasks[taskIndex].completed;
    }
  }

  get completedTasks() {
    return this.tasks.filter(task => task.completed);
  }

  get incompleteTasks() {
    return this.tasks.filter(task => !task.completed);
  }
}
