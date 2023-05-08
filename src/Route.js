import { Routes,Route, Link } from "react-router-dom";
import CreateTask from "./components/CreateTask";
import GetTask from "./components/GetTask";
import UpdateTask from "./components/UpdateTask";

const RouteComponent = () => (
    <>
    <nav>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/create_task">Créer une tâche</Link></li>
            <li><Link to="/get_task">Afficher les tâches</Link></li>
        </ul>
    </nav>
    <Routes>
        <Route exact path="/"                       element={<Home/>}/>
        <Route path="/create_task"                  element={<CreateTask/>}/>
        <Route path='/get_task'                     element={<GetTask/>}/>
        <Route path='/get_task/update'              element={<Update/>}/>
        <Route path='/get_task/update/:id/:title/:desc/:status'    element={<UpdateTask/>}/>
    </Routes>
    </>
)

function Home() {
    return (
        <div>
            <h1>Application de liste des tâches</h1>
            <p>App in progress...</p>
        </div>
    )
}

function Update(){
    return(
        <div>
            <h1>Attention</h1>
            <p>Vous devez selectionner une tâche pour la mettre à jour</p>
        </div>
    )
}


export default RouteComponent