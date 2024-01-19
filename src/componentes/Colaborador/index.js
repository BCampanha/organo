import './Colaborador.css'
import { AiFillCloseCircle } from "react-icons/ai";

// const Colaborador = (props) => {
const Colaborador = ({ nome, imagem, cargo, corDeFundo, aoDeletar }) => {
  const css = {backgroundColor: corDeFundo}

  return(
    <div className='colaborador'>
      <AiFillCloseCircle
      size={32}
      className='deletar'
      onClick={aoDeletar}
      />
      <div className='cabecalho' style={css}>
        <img src={imagem} alt=''/>
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  )
}

export default Colaborador