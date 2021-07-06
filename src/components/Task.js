// X icon
import { FaTimes } from 'react-icons/fa';
import { BiBell, BiBellOff } from 'react-icons/bi';

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className='task' >
            <div className="task-row-details">
                <h3>{task.text}
                    {/* {task.reminder === true ? <BiBell
                    style={{ color: 'green', cursor: 'pointer' }}
                    onClick={() => onToggle(task.id)} /> :
                    <BiBellOff
                        style={{ color: 'black', cursor: 'pointer', float: 'right' }}
                        onClick={() => onToggle(task.id)}
                    />
                }

                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}

                /> */}
                </h3>

                <div className="task-interactions">
                    <div className="task-btn">{task.reminder === true ? <BiBell
                        size={20}
                        // width="300"
                        // height="200"
                        style={{ color: 'green', cursor: 'pointer' }}
                        onClick={() => onToggle(task.id)} /> :
                        <BiBellOff
                            size={20}
                            style={{ color: 'black', cursor: 'pointer' }}
                            onClick={() => onToggle(task.id)}
                        />
                    }</div>


                    <FaTimes
                        size={20}
                        style={{ color: 'red', cursor: 'pointer' }}
                        onClick={() => onDelete(task.id)}

                    />
                </div>
            </div>


            <p>{task.day}</p>
        </div >
    )
}

export default Task
