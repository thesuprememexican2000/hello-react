import React, {useState,useEffect} from 'react';
import { Link, /*useNavigate*/ } from "react-router-dom";
import axios from 'axios';


function GetTask() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/getTask')
            .then((response) => response.json())
            .then((tasks) => setData(tasks))
            .catch((error) => console.log(error))
    }, [])

    //REDIRIGE AUTOMATIQUEMENT ???
    /*let navigate = useNavigate(); 
    const routeChange = (id) =>    { 
        let path = `/get_task/update/${id}`
        navigate(path);
    }*/
    const updateTask = (id,title,desc,status) => {
        return `/get_task/update/${id}/${title}/${desc}/${status}`
    }
    const deleteTask = (id) => {/*
        try {
            const response = axios.delete(`http://localhost:3001/deleteTask`)
        } catch (error) {
            console.log(error)
        }*/
    }

    return(
        <div>
            <h1>Liste des tâches</h1>
            <ul>
                {data.map(task => (
                    <div>
                        <li key={task._id}>
                        Titre: {task.title} <br/>
                        Description: {task.description} <br/>
                        Status: {task.status} <br/>
                        <button><Link to={updateTask(task._id,task.title,task.description,task.status)}>Modifier</Link></button>
                        <button onClick={deleteTask(task._id)}>Supprimer</button>
                    </li>
                    </div>
                ))}
            </ul>
            
        </div>
    )
}

export default GetTask;