import { Routes,Route, Link } from "react-router-dom";
import CreateTask from "./components/CreateTask";
import GetTask from "./components/GetTask";
import DeleteTask from "./components/DeleteTask";
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
        <Route exact path="/"       element={<Home/>}/>
        <Route path="/create_task"  element={<CreateTask/>}/>
        <Route path='/get_task'     element={<GetTask/>}/>
        <Route path='/delete_task'  element={<DeleteTask/>}/>
        <Route path='/update_task'  element={<UpdateTask/>}/>
    </Routes>
    </>
)

function Home() {
    return (
        <div>
            <h1>Application de liste des tâches</h1>
        </div>
    )
}