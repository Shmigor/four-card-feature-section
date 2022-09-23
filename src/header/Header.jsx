import Button from '../button/Button'
import logo from '../images/logo.png'
import NavList from '../nav-list/NavList'

function Header() {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo"/>
            <NavList/>
            <Button color={"light"}/>
        </header>
    )
}

export default Header