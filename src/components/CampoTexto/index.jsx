import './CampoTexto.css'

const CampoTexto = ({ Campo, PlaceHolder, isRequired, value, aoAlterado }) => {
    const aoDigitado = (event) => {
        aoAlterado(event.target.value)
    }
    return (
        <div className="campo-texto">
            <label>{Campo}</label>
            <input value={value} onChange={aoDigitado} required={isRequired} placeholder={PlaceHolder}></input>
        </div>
    )
}

export default CampoTexto