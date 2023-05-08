import React, {useState} from 'react';
import axios from 'axios'

function CreateTask() {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [status,setStatus] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        try {
            const response = axios.post('http://localhost:3001/postTask', {title,description,status})
            console.log(`Data inserted with ID: ${response.data}`)

            setTitle('')
            setDescription('')
            setStatus('')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <h1>Ajouter une tâche</h1>
            <form id='info' onSubmit={handleSubmit}>
                <label>
                    Titre:
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                </label><br/>
                <label>
                    Description:
                    <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
                </label><br/>
                <label>
                    Status:
                    <input type='text' value={status} onChange={(e) => setStatus(e.target.value)} />
               </label><br/>
                <button type='submit'>Ajouter</button>
            </form>
        </div>
    )
}

export default CreateTask;