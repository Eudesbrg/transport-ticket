
import "./input.scss"

type InputProps = {
    type: string,
    name: string,
    placeholder: string
}

function Input({type,name,placeholder}: InputProps) {
    return (
        <div className="input-container">
            <input 
                className="input-field" 
                type={type} 
                name={name} 
                placeholder={placeholder}
            />
            <span>{}</span>
        </div>
    )
}

export default Input