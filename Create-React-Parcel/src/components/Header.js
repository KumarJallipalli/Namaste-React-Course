import { TITLE_LOGO_URL } from "../constants"

// Title Component
const Title = () => {
    return (
        <div>
        <a href="/">
            <img alt="Logo" className="logo"
                src= {TITLE_LOGO_URL} />
        </a>
        <h1><span style = {{color: "orange"}}>Food</span>elivery</h1>
    </div>
    )
}


// Header Component
const Header = () => (
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

export default Header