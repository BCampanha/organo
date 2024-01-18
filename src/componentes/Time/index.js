import './Time.css'
import Colaborador from './../Colaborador'

const Time = (props) => {
  const cssTime = {backgroundColor: props.corSecundaria}
  const cssTimeH3 = {borderColor: props.corPrimaria}
  const iconePadrao = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'

  return(
    (props.colaboradores.length > 0) &&
    <section className='time' style={cssTime}>
      <h3 style={cssTimeH3} >{props.nome}</h3>
      <div className='colaboradores'>
        {props.colaboradores.map(colaborador =>
          <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem || iconePadrao}
          />)}
      </div>
    </section>
  )
}

export default Time