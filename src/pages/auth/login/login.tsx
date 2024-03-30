import "./login.scss"

function Login() {
    return (
        <div className="wrapper">
            <div className="cell-01"></div>
            <div className="cell-02">
                <h1 className="title">Gérer vos déplacement et vos transferts de colis en toute simplicité</h1>
                <form className="login-form" action="">
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" placeholder="Entrer votre code d'identification ou votre email"/>
                        </div>
                        <p className="help"></p>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="input" type="password" placeholder="Mot de passe"/>
                        </div>
                        <p className="help"></p>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="button is-fullwidth">Se connecter</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login