
import './miORG.css'

const MiOrg = (props)=>{
   
   

    return <section className='orgSection' >
        <h3  className='Titulo'>Mi Organización </h3>
        <img src="./img/add.png" alt='add' onClick={props.updateView} />
    </section>
}

export default MiOrg