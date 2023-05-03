import React from 'react';

function CreateTask() {
    return(
        <form>
            <label>Titre:</label>
            <input/>
            <br/>
            <label>Description:</label>
            <input/>
            <br/>
            <label>Status</label>
            <input/>
            <br/>
            <button>Modifier</button>
        </form>
    )
}

export default CreateTask;