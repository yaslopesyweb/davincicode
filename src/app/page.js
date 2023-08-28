import Titulo from './componentes/title'
import Fechar from './componentes/close'
import Botao from './componentes/button'

export default function Home() {
  return (
    <main>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Titulo />
        <div style={{ marginLeft: '10px' }}><Fechar /></div>
      </div>
      <Botao text="Continuar"/>
    </main>
  )
}