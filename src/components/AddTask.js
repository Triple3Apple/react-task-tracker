import { useState } from 'react';


const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)


    const onSubmit = (e) => {
        // Prevent it from submitting a form when clicking on a "Submit" button, 
        e.preventDefault();

        // Check if text is empty
        if (!text) {
            alert('Please add task');
            return;
        }

        onAdd({ text, day, reminder });

        // Reset form
        setText('');
        setDay('');
        setReminder(false);

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text"
                    placeholder='Add Task'
                    // text represents the state for text
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day and Time</label>
                <input
                    type="text"
                    placeholder='Add Day and Time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    checked={reminder}
                    value={reminder}
                    // e.currentTarget.checked sees if the checkbox was checked
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input
                type="submit"
                value='Save Task'
                className='btn btn-block'
            />
        </form>
    )
}

export default AddTask
