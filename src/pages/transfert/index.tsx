

import Divider from "../../components/divider"
import TransfertItem from "../../components/tranfertItem"
import Step4 from "./step4"

function nextStepHandler() {

}

function prevStepHandler() {

}

import "./transfert.scss"

function Transfert() {
    return (
       <div className="transfert-main">
        <h1 className="transfert-title">Formulaire d'envoi de colis</h1>
        <nav className="transfert-nav">
            <TransfertItem 
                step={1}
                description={"Informations relatives au client"}
            />
            <Divider />
            <TransfertItem 
                step={2}
                description={"Informations relatifs au colis"}
            />
            <Divider />
            <TransfertItem 
                step={3}
                description={"Informations relatifs au destinataire"}
            />
            <Divider />
            <TransfertItem 
                step={4}
                description={"Paiement"}
            />
        </nav>
        <div className="transfert-step">
            <Step4 />
        </div>
        <div style={{display: "flex", justifyContent: "space-between", marginTop: "15px"}}>
            <button 
                className="transfert-next"
                onClick={prevStepHandler}
            >
                Précédent
            </button>
            <button 
                className="transfert-next"
                onClick={nextStepHandler}
            >
                Suivant
            </button>
        </div>
       </div>
    )
}


export default Transfert