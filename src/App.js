import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouteComponent from './Route';

const App = () => {
  return(
    <BrowserRouter>
      <RouteComponent/>
    </BrowserRouter>
  )
}

export default App;
