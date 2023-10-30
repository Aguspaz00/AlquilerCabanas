import house from './assets/house.svg'
import CartWidget from './CartWidget'
const aStyles = {paddingRight:20,textDecoration:'none', color:"black",textAlign:"center",};
const imgStyles = {width:70,height:70}
const NavBar = () => {
    return(
        <nav style={{background:{}, display: 'flex', position:top}}>
            <div>
                <img style={imgStyles} src={house} alt="house-img" />
            </div>
            <h3 style={{display:'flex'}}>Alquiler de Cabañas</h3>
            <div className= 'lista' style={{display:'flex'}}>
                <li style={{listStyle: 'none',}}>
                    <a style={aStyles} href="">Contactos</a>
                    <a style={aStyles} href="">Precios</a>
                    <a style={aStyles} href="">Reservas</a>
                    <div style={imgStyles}><CartWidget/></div>
                </li>
            </div>
        </nav>
    )
}
export default NavBar