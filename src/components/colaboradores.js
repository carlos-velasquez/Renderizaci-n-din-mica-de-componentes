import React from "react";
import { BaseColaboradores } from "../BaseColaboradores";
import { useState } from "react";
const Colaboradores = () => {

    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)

    const capturaInput = (e) => {
        setNombre(e.target.value)
    }
        const capturaInputCorreo = (e) => {
            setCorreo(e.target.value)
    }

    const agregarColaborador = (e) =>{
       
        setListaColaboradores( [...listaColaboradores, {id:Date.now(), nombre:nombre, correo:correo}])
    }
    return (
        <div>
            <input name="Nombre" placeholder="Nombre" onChange={capturaInput} />
            <p>{nombre}</p>
            <input name="Correo" placeholder="Correo" onChange={capturaInputCorreo} />
            <p>{correo}</p>
            <button onClick={agregarColaborador}>Enviar</button>
            <ul>
                {listaColaboradores.map(colaborador => <li key={colaborador.id}>{colaborador.nombre} - {colaborador.correo}</li>)}
            </ul>
        </div>
    )
}

export default Colaboradores;