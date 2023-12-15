import { useState } from "react";


export default function Formulario({setErrorV, setSuccess}) {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirma, setConfirma] = useState("");

    const [errorA, setErrorA] = useState(false);
    const [errorC, setErrorC] = useState(false);

    const verificarCorreo = () => {
        if(!email.includes('@')){
            setErrorA(true);
            console.log("no existe arroba")
            return;
        }
        setErrorA(false);
    }
    
    const validarContraseña = () => {
        if(contraseña!==confirma){
            setErrorC(true);
            console.log("no coinciden las contrasenas ")
            return;
        }
        setErrorC(false);
    }

    const validarDatos = (e) => { //Confirma si los datos están en las casillas para mostrar o no el mensaje de completar
        e.preventDefault(); 

        verificarCorreo();
        validarContraseña();

        if (nombre === '' || email === '' || contraseña === '' || confirma === '')
        {

            setErrorV("Faltan datos en el formulario");
            setSuccess("");
            return; 
        }
        setErrorV("");
        setSuccess("Registro exitoso")
    };
    
    return (
        <>
        <form className = "formulario" onSubmit={validarDatos}> 
            <div className="form-group">
                <input className = "form-control" 
                        type="text" 
                        name = "Nombre" 
                        onChange = {(e) => setNombre(e.target.value)} 
                        placeholder = "Nombre"/>
                <br></br>
                <input className = "form-control" 
                        type="text" 
                        name = "Email" 
                        onChange = {(e) => setEmail(e.target.value)} 
                        placeholder = "tuemail@ejemplo.com"/>
                {errorA ? <p style={{color:"red"}}>Formato de correo incorrecto!</p> : null}
                <br></br>
                <input className = "form-control" 
                    type="password" 
                    name = "Contraseña"
                    onChange = {(e) => setContraseña(e.target.value)} 
                    placeholder = "Contraseña"/>
                <br></br>
                <input className = "form-control" 
                        type="password" 
                        name = "Confirma" 
                        onChange = {(e) => setConfirma(e.target.value)} 
                        placeholder = "Confirma tu contraseña"/>
                {errorC ? <p style={{color:"red"}}>No coinciden!</p> : null}
                <br></br>
                <button className = "btn btn-success" type="submit" name = "Boton">Registrarse</button> 
                
            </div>
        </form>
        </>
    );
};
