import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = ({times, aoColaboradorCadastrado, cadastrarTime}) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('')

  const aoSalvarColaborador = (evento) => {
    evento.preventDefault()
    aoColaboradorCadastrado({nome, cargo, imagem, time})
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  const aoSalvarTime = (evento) => {
    evento.preventDefault()
    cadastrarTime({ nome: nomeTime, corPrimaria: corTime})
    setNomeTime('')
    setCorTime('')
  }

  return(
    <section className='formulario'>
      <form onSubmit={aoSalvarColaborador}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Times"
          itens={times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao texto='Criar card'/>
      </form>
      <form onSubmit={aoSalvarTime}>
        <h2>Preencha os dados para criar um novo time</h2>
        <Campo
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={valor => setNomeTime(valor)}
        />
        <Campo
          tipo='color'
          obrigatorio
          label="Cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterado={valor => setCorTime(valor)}
        />
        <Botao texto='Criar um novo time'/>
      </form>
    </section>
  )
}

export default Formulario