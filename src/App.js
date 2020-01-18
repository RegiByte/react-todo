import React, {useEffect, useState} from "react";
import AddTask from "./components/AddTask";

function App() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks')

        if (storedTasks) {
            setTasks(JSON.parse(storedTasks))
        }
    }, [])

    return (
        <div>
            <AddTask onAdd={nome => {
                const newTasks = tasks.concat({
                    id: new Date().getTime(),
                    name: nome,
                    completed: false
                });

                localStorage.setItem('tasks', JSON.stringify(newTasks))

                setTasks(newTasks);
            }}/>

            <div>
                <ol>
                    {tasks.map(task => {
                        return <li
                            onClick={() => {
                                const index = tasks.findIndex(aTask => aTask.id === task.id)

                                setTasks(tasks.filter((a, indexB) => indexB !== index))
                            }}
                            title={task.id}
                            key={task.id}>{task.name}</li>
                    })}
                </ol>
            </div>
        </div>
    )
}

export default App


function getUpperName(name) {
    return name.toUpperCase()
}

const getUpperArrowName = name => {
    return name.toUpperCase()
}

const getShort = name => name.toUpperCase()
