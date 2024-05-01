
import momo_paie_picture from "./../../../assets/paiment/kkia pay momo.png" 
import visa_card_picture from "./../../../assets/paiment/kkia pay carte.png"

import "./step4.scss"

function Step4 () {
    return (
        <>
            <h1 className="price-text">Montant à payer: <span className="price">5.095 FCFA</span></h1>

            <div className="paiement-wrapper">
                <div className="paiement">
                    <img src={momo_paie_picture} alt="momo paiement" />
                </div>
                <div className="paiement">
                    <img src={visa_card_picture} alt="visa card paiement" />
                </div>
            </div>
        </>
    )
}

export default Step4