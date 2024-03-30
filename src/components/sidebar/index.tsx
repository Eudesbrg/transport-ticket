import "./sidebar.scss"
import logo from "./../../assets/logo.png"
import Item from "./item"


function Sidebar() {
    return (
        <div className="sidebar">
            <img className="image" src={logo} alt="logo" />
            <ul className="navbar-item">
                <Item name="Dashbord" path="/"/>
                <Item name="Opérations" path="operations"/>
                <Item name="Transfert" path="transfert"/>
                <Item name="Rapport" path="rapport"/>
                <Item name="Statistiques" path="statistiques"/>
            </ul>
            <ul className="navbar-account">
                <Item name="Aides" path="statistiques"/>
                <Item name="Déconnexion" path="statistiques"/>
                <Item name="Paramètre" path="statistiques"/>
            </ul>
        </div>
    )
}

export default Sidebar