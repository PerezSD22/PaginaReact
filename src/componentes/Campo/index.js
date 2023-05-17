


import "./campo.css"

const Campo = (props)=>{

    const manejarCambio = (e) =>{
        props.update(e.target.value)

    }
    const {type } = props

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input type={type} 
        placeholder={props.placeholder}  
        required= {props.required} 
        valor={props.valor} 
        onChange={manejarCambio} />
    </div>
}

export default Campo;