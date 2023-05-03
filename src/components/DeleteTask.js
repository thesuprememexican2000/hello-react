import React from 'react';
import { useParams } from 'react-router';

const DeleteTask = () => {
    const task = useParams()
    return(
        <div>
            <h1>Êtes-vous sûr de supprimer la tâche {task.title}</h1>
            <button>Oui</button>
            <button>Non</button>
        </div>
    )
}

export default DeleteTask;