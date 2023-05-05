import React, { useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios'

function UpdateTask() {
    const params = useParams()

    const [_title,setTitle] = useState(params.title)
    const [_description,setDescription] = useState(params.desc)
    const [_status,setStatus] = useState(params.status)

    

    const handleSubmit = (event) => {
        event.preventDefault()

        try {
            const response = axios.put(`http://localhost:3001/updateTask/${params.id}`, {title:_title,description:_description,status:_status})
            console.log(`Data modified with title: ${response.data}`)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <h1>Modifier la tâche {params.title}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Titre:
                    <input type='text' value={_title} onChange={(e) => setTitle(e.target.value)} />
                </label><br/>
                <label>
                    Description:
                    <input type='text' value={_description} onChange={(e) => setDescription(e.target.value)} />
                </label><br/>
                <label>
                    Status:
                    <input type='text' value={_status} onChange={(e) => setStatus(e.target.value)} />
               </label><br/>
                <button type='submit'>Modifier</button>
            </form>
        </div>
    )
}

export default UpdateTask;