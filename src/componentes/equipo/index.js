import "./equipo.css";
import Colaborador from "../coraborador";
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) =>{
    const {colorPrimario, titulo, id} = props.datos
    
    const {colaborador, EliminarColaborador, actualizarColor,like} = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }
        return <>
            {colaborador.length > 0 &&       
                <section className='Equipo-Section' style={obj}>
                <input
                    type='color'
                    className="input-color"
                    value={hexToRgba(colorPrimario, 0.6)}
                    onChange={(event)=>{
                        actualizarColor(event.target.value, id)
                    }}
                
                />

                <h3 style={{borderColor:colorPrimario}}>{titulo}  </h3>
                <div className='Equipo-Section-Colaboradores'> 
            

                    {
                        colaborador.map( (colaborador,index) => <Colaborador
                        datos ={colaborador}
                        key={index}
                        colorfondo={colorPrimario}
                        EliminarColaborador={EliminarColaborador}
                        like={like}
                        
                        
                        />)

                    }
                
                </div>
            </section>}
        </>

}

export default Equipo;