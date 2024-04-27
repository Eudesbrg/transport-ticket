import Header from "../header";
import Sidebar from "../sidebar";

type Props = {
    children: string | JSX.Element | JSX.Element[]
}


function Container({children}: Props) {
    return (
        <div style={{display: "flex"}}>
            <Sidebar />
            <div style={{flex: 1, paddingLeft: "30px", paddingRight: "30px"}}>
                <Header />
                {children}
            </div>
        </div>
    )
}


export default Container