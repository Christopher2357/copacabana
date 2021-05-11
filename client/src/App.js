import './App.css';
import Login from './components/login';
import 'bootswatch/dist/darkly/bootstrap.min.css';
//import axios from 'axios';

function App() {
  return (
    <div className="text-center">
      <h1>
        Trans Copacabana
      </h1>
      <div className="d-flex justify-content-center">
        <div className="bg-white text-dark p-3 rounded">
          <Login className="container"/>
        </div>
      </div>
    </div>
  );
}

export default App;