import "./footer.css"

const Footer = ( )=>{
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
    <div className="redes">
    <a href='https://www.aluracursos.com/'> 
        <img src="/img/facebook.png" alt="Facebook"/>
    </a>
    <a href='https://www.aluracursos.com/'> 
        <img src="/img/twitter.png" alt="twitter" />
    </a>
    <a href='https://www.aluracursos.com/'> 
        <img src="/img/instagram.png" alt="instagram" />
    </a>
    </div>
    <img src='/img/Logo.png' alt='org' /> 
    <p className="textoFooter">Desarrollado por Samuel Pérez</p>
   
</footer>
}

export default Footer