import Input from "../../../components/input"


function Step3 () {
    return (
        <form style={{display: "flex", flexDirection: "column", gap: "20px"}} action="">
            <Input type="text" name="" placeholder="Nom et pénom du destinataire"/>
            <Input type="text" name="" placeholder="Localisation"/>
            <Input type="text" name="" placeholder="Téléphone du destinataire"/>
        </form>
    )
}

export default Step3