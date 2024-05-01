import "./transfertItem.scss"


interface TransfertItemProps {
    step: number,
    description: String,
    active: Boolean 
}


function TransfertItem({step,description,active}: TransfertItemProps) {
    return(
        <div className="container">
            <div className={`step-iconify ${active ? "active" : ""}`}>{step}</div>
            <h2 className={`description ${active ? "active-description" : ""}`}>{description}</h2>
        </div>
    )
}

export default TransfertItem