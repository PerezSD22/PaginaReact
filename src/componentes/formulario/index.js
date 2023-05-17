import "./formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../listaOpciones";
import Boton from "../boton";
import { useState } from "react";
import { v4 as uuid } from 'uuid';

const Formulario = (props) =>{

    // descontructor de props
    const {registrarColaborador, equipos, team} = props
    // declaracion del hook useState
    const [nombre,setNombre] = useState(" ");
    const [puesto,setPuesto] = useState(" ");
    const [imagen,setImagen] = useState(" ");
    const [equipo, setEquipo] = useState(" ");
    const [titulo, setTitulo] = useState(" ")
    const [color, setColor] =  useState(" ")

    //previene el funcionamiento por defecto y envia la solucitud para crear colaborador
    const envioMensaje = (event) => {
        event.preventDefault()
        let dataSent = {
            id: uuid(),
            nombre: nombre,
            puesto: puesto,
            imagen: imagen,
            equipo: equipo
        }

        registrarColaborador(dataSent)
    }

    //previene previene el funcionamiento por defecto y envia la solucitud para crear equipo
    const teamController = (e) =>{
        e.preventDefault()
        team({titulo, colorPrimario: color})
    }



    return <section className='formulario'>
        <form onSubmit ={envioMensaje}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo 
             titulo='Nombre'
             placeholder='Ingresar el nombre' 
             required valor={nombre} 
             update={setNombre}
             type= 'texto'
             />
            <Campo 
              titulo='Puesto' 
              placeholder='Ingresar el puesto'
              required valor={puesto}
              update={setPuesto}
              type= 'texto'
             />
            <Campo
              titulo='Foto'  
              placeholder='Ingresar la ruta de imagen'
              required valor={imagen}
              update={setImagen}
              type= 'texto'
             />
            <ListaOpciones  
            valor={equipo} 
            update={setEquipo} 
            equipo={equipos} />
            <Boton  titulo='Crear'>
                

            </Boton>

        </form>
        <form onSubmit ={teamController}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo 
            titulo='Titulo'
             placeholder='Ingresar el Titulo' 
             required valor={titulo} 
             update={setTitulo}
             type= 'texto'
             />
            <Campo 
              titulo='Color' 
              placeholder='Ingresar color Hexadecimal'
              required valor={color}
              update={setColor}
              type= 'color'
             />
            <Boton  titulo='Registra equipo'>
                

            </Boton>
        </form>
    </section>
}

export default Formulario;