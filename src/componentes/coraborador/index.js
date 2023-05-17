import { AiOutlineUserDelete, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import "./coraborador.css"


const Colaborador = (props) =>{
    const {nombre, puesto, imagen, id, fav} = props.datos
    const {colorfondo, EliminarColaborador, like} = props
    return <div className='Colaborador' >
      
        <div className='Encabezado' style={{backgroundColor: colorfondo}}>
            <img src={imagen} alt={nombre} />
        </div>
        <div className='Info'>
            <h4>{nombre }</h4>
            <h5>{puesto}</h5>
            <div className="user-action">
                <AiOutlineUserDelete className="icono" onClick={() => EliminarColaborador (id)} />

                {fav ?   <AiFillHeart className="icono" color="red" onClick={()=>like(id)}/>:
                 <AiOutlineHeart className="icono" onClick={()=>like(id)}/> }
              
                
            </div>
            
             
        </div>
    </div>

}

export default Colaborador