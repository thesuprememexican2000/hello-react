import React, {useState,useEffect} from 'react';

function GetTask() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/getTask')
            .then((response) => response.json())
            .then((tasks) => setData(tasks))
            .catch((error) => console.log(error))
    }, [])

    return(
        <div>
            <h1>Liste des tâches</h1>
            <ul>
                {data.map(task => (
                    <li key={task._id}>
                        Titre: {task.title} <br/>
                        Description: {task.description} <br/>
                        Status: {task.status}
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default GetTask;