import React,{useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert2';

const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");
    const [intentos, setIntentos] = useState(0)
    

    const autenticacion = (e) => {
        e.preventDefault();
        if(usuario === "" || clave === ""){
            swal.fire({
                title: 'Error',
                icon: 'warning',
                html: 'El campo usuario y/o clave estan vacios',
                confirmButtonText: 'Volver a Intentar',
                confirmButtonColor: '#f39c12',
            });
        }else{
            axios.get(`http://192.168.1.8:3001/login/${usuario}&${clave}`)
            .then((response) => {
                console.log(response.data)
                if(response.data[0]){
                    alert("Correcto");
                }else{
                    setIntentos(intentos + 1)
                    if(intentos <= 3){
                        swal.fire({
                            title: 'Error',
                            icon: 'warning',
                            html: 'Usuario y/o clave incorrectos, vas '+intentos+' intentos',
                            confirmButtonText: 'Volver a Intentar',
                            confirmButtonColor: '#00bc8c',
                        });
                    }else{
                        swal.fire({
                            title: 'Error',
                            icon: 'error',
                            html: 'Se alcanzo el numero maximo de intentos espere 30 minutos para volver a intentar o converse con un administrador',
                            confirmButtonText: 'De acuerdo',
                            confirmButtonColor: '#e74c3c',
                        });
                    }
                }
            });  
        }
    }

    return (
        <form className="was-validated">
            <h3 className="p-3 border border-danger text-danger rounded">Autenticación</h3>
            <div className="form-group mt-3">
                <label>Usuario</label>
                <input type="text" className="form-control" placeholder="Enter email" onChange={(e) => {setUsuario(e.target.value)}} required/>
            </div>
            <div className="form-group mt-3">
                <label>Clave</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => {setClave(e.target.value)}} required/>
            </div>
            <div className="form-group mt-3">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Recuerdame</label>
                </div>
            </div>
            <button type="submit" className="btn btn-success btn-block mt-3"  onClick={autenticacion}>Continuar</button>
        </form>
    );
}

export default Login;