import { Clipboard } from 'phosphor-react'
import { useState } from 'react';
import { Task } from './Task';

import styles from './TaskList.module.css';

interface Task {
    id: number;
    title: string;
    isComplete: boolean;
}

interface TaskListProps {
    tasks: Task[];
    onDeleteTask: (id: number) => void;
    onToggleTaskStatus: (id: number) => void;
}

export function TaskList({ tasks, onDeleteTask, onToggleTaskStatus }: TaskListProps) {

    return (
        <div>
            <div className={styles.header}>
                <div>
                    Tarefas Criadas <span className={styles.taskCount}>{tasks.length}</span>
                </div>
                <div>
                    Concluídas
                    <span className={styles.taskCount}>
                        {tasks.filter(task => task.isComplete).length} de {tasks.length}
                    </span>
                </div>
            </div>

            <div className={styles.taskListWrapper}>
                {tasks.length == 0 &&
                    <div className={styles.emptyTaskList}>
                        <Clipboard size={70} />
                        <p>Você não tem tarefas cadastradas</p>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                }

                {tasks.map(task => (
                    <Task key={task.id} {...task} onDeleteTask={onDeleteTask} onToggleTaskStatus={onToggleTaskStatus} />
                ))}
            </div>
        </div>
    )
}
