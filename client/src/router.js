import React from 'react';
import {useHistory,BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Rutas from './components/rutas'

const ruteo = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <Link to="/app">
            <a className="navbar-brand" href="">Copacabana</a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/rutas" className="nav-item">
                        <a className="nav-link active" aria-current="page">Rutas</a>
                    </Link>
                    </li>
                    <li  className="nav-item">
                        <Link to="/buses" className="nav-item">
                        <a className="nav-link active" aria-current="page">Buses</a>
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
            <Route path="/app/rutas" render={(props) => <Rutas/>}></Route>
            <Route path="/app/Bus" render={(props) => <buses/>}></Route>

        </Router>
    );
}

export default ruteo;
