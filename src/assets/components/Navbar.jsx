import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo"><img src='../src/assets/images/happy-cake.png' /></div>


            <div className="menu">
                <Link to='/'><i className="fa-solid fa-house"></i> Home</Link>
                <Link to='/contact'><i className="fa-solid fa-book"></i> Contacto</Link>
            </div>
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar