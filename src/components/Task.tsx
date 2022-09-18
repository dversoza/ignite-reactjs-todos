import { Trash } from 'phosphor-react'

import styles from './Task.module.css';

interface TaskProps {
    id: number;
    title: string;
    isComplete: boolean;
    onDeleteTask: (id: number) => void;
    onToggleTaskStatus: (id: number) => void;
}

export function Task({ id, title, isComplete, onDeleteTask, onToggleTaskStatus }: TaskProps) {
    function handleDeleteTask() {
        onDeleteTask(id);
    }

    function toggleTaskStatus() {
        onToggleTaskStatus(id);
    }

    return (
        <div className={styles.task}>
            <div className={styles.taskContent}>
                <input
                    className={styles.taskCheckBox}
                    type="checkbox"
                    checked={isComplete}
                    onChange={toggleTaskStatus}
                />
                <div className={styles.taskTitle} aria-checked={isComplete}>
                    <p>{title}</p>
                </div>
            </div>
            <div>
                <button className={styles.taskDelete} type='button' onClick={handleDeleteTask}>
                    <Trash size={20} />
                </button>
            </div>
        </div>
    )
}
