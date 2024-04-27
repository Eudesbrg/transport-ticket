import Input from "../../../components/input"


function Step2 () {
    return(
        <form style={{display: "flex", flexDirection: "column", gap: "20px"}} action="">
            <Input type="text" name="" placeholder="Contenu du Colis"/>
            <div style={{display: "flex", gap: "15px"}}>
                <Input type="text" name="" placeholder="type"/>
                <Input type="text" name="" placeholder="Niveau de fragilité"/>
            </div>
            <div style={{display: "flex", gap: "15px"}}>
                <Input type="text" name="" placeholder="Nombre de Colis"/>
                <Input type="text" name="" placeholder="Date départ"/>
                <Input type="text" name="" placeholder="Heure départ"/>
            </div>
        </form>
    )
}

export default Step2