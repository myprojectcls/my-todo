import React, { Fragment, useState } from 'react'

const HomePages = () => {


    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState(-1);


    const handleSubmit = () => {
        if (newTask.trim() !== "") {
            if (editIndex === -1) {
                setTasks([...tasks,
                { name: newTask, completed: false },
                ]);
            } else {
                const newTasks = [...tasks];
                newTasks[editIndex].name = newTask;
                setTasks(newTasks);
                setEditIndex(-1);
            }
            setNewTask("");
        }
    }

    const handleDelete = (index) => {
        setTasks(tasks.filter((task, i) => i !== index));
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setNewTask(tasks[index].name);
    };


    return (
        <Fragment>
            <div className='container'>
                <h1>
                    TODO-LIST
                </h1>
                <div className='card'>
                    <div className='input-field'>
                        <input value={newTask} onChange={(event) => { setNewTask(event.target.value) }} type='text' placeholder='Add Your Task' />
                        {editIndex ? <button onClick={handleSubmit}>ADD</button> : <button onClick={handleSubmit}>Update</button>}
                    </div>


                    <div className='list-field'>
                        <ul>
                            {tasks.map((task, index) => (
                                <li key={index}>
                                    <span style={{ textDecoration: task.completed ? "line-through" : "none" }} className='text-field'>{task.name}

                                    </span>
                                    <span onClick={() => handleDelete(index)} className='delete-btn'>Delete</span>
                                    <span onClick={() => handleEdit(index)} className='edit-btn'>Edit</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default HomePages