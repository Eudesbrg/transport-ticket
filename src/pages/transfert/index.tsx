import { Suspense, lazy, useState } from "react"

import Divider from "../../components/divider"
import TransfertItem from "../../components/tranfertItem"

import "./transfert.scss"

function Transfert() {
    const [step,setStep] = useState(1)
    const DynamicStep = lazy(()=>import(`./step${step}/index.tsx`))
    const nextStepHandler = ()=>{
        if(step < 4) {
            setStep((currentStep) => currentStep + 1)
            return
        }
            
        // send a request to kikiapay
    }
    const prevStepHandler = ()=>{
        if(step > 1) {
            setStep((currentStep) => currentStep - 1)
        }
    }
    return (
       <div className="transfert-main">
        <h1 className="transfert-title">Formulaire d'envoi de colis</h1>
        <nav className="transfert-nav">
            <TransfertItem 
                step={1}
                description={"Informations relatives au client"}
                active={step >= 1}
            />
            <Divider />
            <TransfertItem 
                step={2}
                description={"Informations relatifs au colis"}
                active={step >= 2}
            />
            <Divider />
            <TransfertItem 
                step={3}
                description={"Informations relatifs au destinataire"}
                active={step >= 3}
            />
            <Divider />
            <TransfertItem 
                step={4}
                description={"Paiement"}
                active={step == 4}
            />
        </nav>
        <div className="transfert-step">
            <Suspense fallback={<h1>Loading....</h1>}>
                <DynamicStep />
            </Suspense>
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