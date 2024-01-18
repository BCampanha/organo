import './Rodape.css'

const Rodape = () => {
  return(
    <footer className='rodape'>
      <section>
        <a href="facebook.com" target='_blank'>
          <img src="/imagens/fb.png" alt="facebook"/>
        </a>
        <a href="twitter.com" target='_blank'>
          <img src="/imagens/tw.png" alt="twitter"/>
        </a>
        <a href="instagram.com" target='_blank'>
          <img src="/imagens/ig.png" alt="instagram"/>
        </a>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="logo do organo"/>
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  )
}

export default Rodape