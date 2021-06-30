/* 
{tasks.map((task) => (
    <h3>{task.text}</h3>
))}

the code above uses the tasks array and then turns each "task" in into an h3 and returns it (a list)

*/

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
