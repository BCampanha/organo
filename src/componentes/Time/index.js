import './Time.css'
import hexToRgba from 'hex-to-rgba';
import Colaborador from './../Colaborador'

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
  const cssTime = {backgroundColor: hexToRgba(time.corPrimaria, '0.3'), backgroundImage: 'url(/imagens/fundo.png)'}
  const cssTimeH3 = {borderColor: time.corPrimaria}

  return(
    (colaboradores.length > 0) &&
    <section className='time' style={cssTime}>
      <input 
        value={time.corPrimaria}
        type='color'
        className='input-cor'
        onChange={evento => mudarCor(evento.target.value, time.id)}
      />
      <h3 style={cssTimeH3} >{time.nome}</h3>
      <div className='colaboradores'>
        {colaboradores.map(colaborador => {
          return (
            <Colaborador
            key={colaborador.id}
            colaborador={colaborador}
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