import { Link } from "react-router-dom"
import "./item.scss"

export interface SideItem {
    name: string;
    path: string
}

function Item(param: SideItem) {
    return (
        <li className="item-wrapper">
            <Link to={param.path} className="side-item button is-fullwidth">{param.name}</Link>
        </li>
    )
}

export default Item