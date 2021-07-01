import Task from './Task';
/* 
{tasks.map((task) => (
    <h3>{task.text}</h3>
))}

the code above uses the tasks array and then turns each "task" in into an h3 and returns it (a list)

*/


const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </>
    )
}

export default Tasks
