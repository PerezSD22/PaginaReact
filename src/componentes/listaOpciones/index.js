import "./lista-opciones.css"

const ListaOpciones = (props) =>{



    const changeUpdate = (e) =>{
        props.update(e.target.value)
        console.log('cambio', e.target.value)
    }
    return <div className='lista-opciones'>
        <label>Equipos</label>
        <select value={props.valor} onChange={changeUpdate}>
            <option value= " " disabled defaultValue="" hidden> Seleciona equipo </option>
            {props.equipo.map((equipo, index) => <option key={index} value={equipo} >{equipo} </option> )}
        </select>
    </div>

}

export default ListaOpciones;