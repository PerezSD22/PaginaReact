import "./boton.css"

const Boton = (props) => {
    return <button className="btn-crear">
       {props.titulo}
    </button>
}

export default Boton