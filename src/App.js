import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/header';
import Formulario from './componentes/formulario';
import MiOrg from './componentes/miORG';
import Equipo from './componentes/equipo';
import Footer from './componentes/footer';


function App() {

  //hook useState para quitar o mostrar el formulario
  const [mostrarForm, actualizarForm] = useState(true);

  //hook useState para crear colaborador
  const[createColaborador, updateColaborador] =useState([{
    id: uuid(),
    nombre: "Samuel",
    puesto:"Ingeniero",
    imagen:"https://scontent.fgye24-1.fna.fbcdn.net/v/t1.6435-9/74399243_2479998802095357_3792720773957812224_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GNM4xveGeUkAX9BxHwh&_nc_ht=scontent.fgye24-1.fna&oh=00_AfBita0xiSpTlAubQi0335a9VSanGQTaU4Odj2r2kOlBfw&oe=648B81F0",
    equipo: "Front-end",
    fav: false
    },
    {
    id: uuid(),
    nombre: "Monse",
    puesto:"Ingeniera",
    imagen:"https://scontent.fgye24-1.fna.fbcdn.net/v/t39.30808-6/329223044_735594558286698_5891221273150437708_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=J7pGXU4mMmsAX-EwKoX&_nc_ht=scontent.fgye24-1.fna&oh=00_AfDhwV7mL1Y1IWV2dZ-RMhnzlpWyIalXAnMFypj3nRohpA&oe=6468D460",
    equipo: "UX y Diseño",
    fav:true
    }]);
  
  //hook para cambiar el color
  const [listaEquipos, updateEquipos] = useState([
    {
      id: uuid(),
      titulo: 'Programación',
      colorPrimario: '#57C278',
      colorSecundario: '#D9F7E9' 
    },
    {
      id: uuid(),
      titulo: 'Front-end',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF' 
    },
    {
      id: uuid(),
      titulo: 'Data-Science',
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2' 
    },
    {
      id: uuid(),
      titulo:'Devops',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8' 
    },
    {
      id: uuid(),
      titulo: 'UX y Diseño',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5' 
    },
    {
      id: uuid(),
      titulo: 'Movil',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9' 
    },
    {
      id: uuid(),
      titulo: 'Innovación y Gestión',
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF' 
    },  
  ])
  //actualizacion para quitar o mostrar el formulario
  const updateView = () =>{
    actualizarForm(!mostrarForm)
  }
  //registro de colaboradores
  const registrarColaborador = (colaborador) =>{
    console.log('Nuevo colaborador: ', colaborador);

    updateColaborador([...createColaborador, colaborador])
  }
  // eliminar colaborador
  const EliminarColaborador= (id) =>{
    console.log("eliminar colaborador", id) 
    const deleteColaboradores = createColaborador.filter((colabolador)=> colabolador.id !== id)
    updateColaborador(deleteColaboradores)
  }
  //actualiza color de equipo

  const actualizarColor = (color, id) =>{
    

    const updateEquipo = listaEquipos.map((equipo) =>{
       if(equipo.id === id){
        equipo.colorPrimario = color
       } 
      return equipo
    })

    updateEquipos(updateEquipo)
  }

 //crear equipo
 const teamCreate = (newTeam) => {
  console.log(newTeam)
  updateEquipos([...listaEquipos, {...newTeam, id: uuid()}])
 }

 //logica de like

 const like = (id) =>{
 

  const lickClick = createColaborador.map((colabolador)=> {
    if(colabolador.id === id){
      colabolador.fav =! colabolador.fav
    }
    return colabolador
  })

  updateColaborador(lickClick)
 }
  return (
    <div>
      <Header/>

      {/* logica para mostrar o quitar el formulario usado operadores ternarios */}
      {
        mostrarForm && <Formulario
          equipos={listaEquipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador} team ={teamCreate}
        />
      }
     {/* actualizacion del estado */}
      <MiOrg updateView= {updateView} />

      {/* llevando el nombre de los equipos a mi formulario */}

      {
        listaEquipos.map( (equipo)=><Equipo 
         datos={equipo} 
         key={equipo.titulo}          
         colaborador={createColaborador.filter(colaborador => colaborador.equipo === equipo.titulo )}
         EliminarColaborador = {EliminarColaborador}
         actualizarColor = {actualizarColor}
         like = {like}
         />)
      }

      <Footer/>
      

    </div>
  );
}

export default App;
