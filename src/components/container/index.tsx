import Sidebar from "../sidebar";

type Props = {
    children: string | JSX.Element | JSX.Element[]
}


function Container({children}: Props) {
    return (
        <div style={{display: "flex"}}>
            <Sidebar />
            {children}
        </div>
    )
}


export default Container