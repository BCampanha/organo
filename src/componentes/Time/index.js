import './Time.css'
import hexToRgba from 'hex-to-rgba';
import Colaborador from './../Colaborador'

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
  const cssTime = {backgroundColor: hexToRgba(time.corPrimaria, '0.3')}
  const cssTimeH3 = {borderColor: time.corPrimaria}
  const iconePadrao = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'

  return(
    (colaboradores.length > 0) &&
    <section className='time' style={cssTime}>
      <input 
        value={time.corPrimaria}
        type='color'
        className='input-cor'
        onChange={evento => mudarCor(evento.target.value, time.nome)}
      />
      <img src="/imagens/fundo.png" alt="imagem de fundo com formas geométricas"></img>
      <h3 style={cssTimeH3} >{time.nome}</h3>
      <div className='colaboradores'>
        {colaboradores.map(colaborador => {
          return (
            <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            imagem={colaborador.imagem || iconePadrao}
            cargo={colaborador.cargo}
            corDeFundo={time.corPrimaria}
            aoDeletar={aoDeletar}
          />
          )
        }
          )}
      </div>
    </section>
  )
}

export default Time