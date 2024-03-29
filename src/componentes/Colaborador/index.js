import './Colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

// const Colaborador = (props) => {
const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
  const css = {backgroundColor: corDeFundo}
  const iconePadrao = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
  const propsfavorito = {size:36, onClick:() => aoFavoritar(colaborador.id)}

  return(
    <div className='colaborador'>
      <AiFillCloseCircle
        size={32}
        className='deletar'
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className='cabecalho' style={css}>
        <img src={colaborador.imagem || iconePadrao} alt=''/>
      </div>
      <div className='rodape'>
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className='favorito'>
          {colaborador.favorito
            ? <AiFillHeart {...propsfavorito}/>
            : <AiOutlineHeart {...propsfavorito}/> }
        </div>
      </div>
    </div>
  )
}

export default Colaborador