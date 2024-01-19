import './Campo.css'

const Campo = ({ placeholder, label, valor, aoAlterado, obrigatorio = false, tipo = 'text'}) => {
  
  const placeholderModificada = `${placeholder}...`

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value)
  }

  return(
    <div className={`campo campo-${tipo}`}>
      <label>
        {label}
      </label>
      <input
        type={tipo}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  )
}

export default Campo