import Input from "../../../components/input"
import "./step1.scss"

function Step1() {
    return (
        <form className="step1-container" action="">
            <Input type="text" name="" placeholder="Nom et Prénoms"/>
            <Input type="text" name="" placeholder="Numéro de téléphone"/>
            <Input type="eudes" name="" placeholder="Email"/>
        </form>
    )
}

export default Step1