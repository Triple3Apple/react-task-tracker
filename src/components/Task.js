// X icon
import { FaTimes } from 'react-icons/fa';
import { BiBell, BiBellOff } from 'react-icons/bi';

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className='task' onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text}
                {task.reminder === true ? <BiBell
                    style={{ color: 'green', cursor: 'pointer' }}
                    onClick={() => onToggle(task.id)} /> :
                    <BiBellOff
                        style={{ color: 'black', cursor: 'pointer' }}
                        onClick={() => onToggle(task.id)}
                    />
                }

                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}

                />
            </h3>
            <p>{task.day}</p>
        </div >
    )
}

export default Task
