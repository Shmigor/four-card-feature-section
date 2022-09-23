import Button from "../button/Button"
import NavList from "../nav-list/NavList"

function Footer(props) {
    return(
        <footer className="footer">
            <NavList/>
            <Button color={"dark"}/>
        </footer>
    )
}

export default Footer