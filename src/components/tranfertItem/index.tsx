import "./transfertItem.scss"


interface TransfertItemProps {
    step: number,
    description: String
}


function TransfertItem({step,description}: TransfertItemProps) {
    return(
        <div className="container">
            <div className="step-iconify">{step}</div>
            <h2 className="description">{description}</h2>
        </div>
    )
}

export default TransfertItem