import { Header } from "./components/Header"

import { PlusCircle } from 'phosphor-react'

import styles from './App.module.css';
import { TaskList } from "./components/TaskList";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Fazer café',
      isComplete: true
    },
    {
      id: 2,
      title: 'Estudar ReactJS',
      isComplete: false
    },
    {
      id: 3,
      title: 'Estudar React Native',
      isComplete: false
    },
    {
      id: 4,
      title: 'Estudar NodeJS',
      isComplete: false
    },
  ]);

  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, {
      id: Math.random(),
      title: newTaskText,
      isComplete: false
    }]);

    setNewTaskText('');
  }

  function handleTaskTextInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Digite uma tarefa')
  }

  function handleTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  function deleteTask(id: number) {
    const filteredTasks = tasks.filter(task => task.id !== id);

    setTasks(filteredTasks);
  }

  function toggleTaskStatus(id: number) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isComplete: !task.isComplete
        }
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <Header />

      <div id="main" className={styles.wrapper}>

        <form className={styles.inputWrapper} onSubmit={handleCreateTask}>
          <input
            className={styles.input}
            type="text"
            placeholder='Adicione uma nova tarefa'
            value={newTaskText}
            onChange={handleTaskTextChange}
            onInvalid={handleTaskTextInvalid}
            required
          />
          <button className={styles.button} type='submit'>
            Criar <PlusCircle size={20} />
          </button>
        </form>

        <div className={styles.taskListWrapper}>
          <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleTaskStatus={toggleTaskStatus} />
        </div>
      </div>

    </div>
  )
}

export default App
