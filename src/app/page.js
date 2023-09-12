import VoltarTitulo from './componentes/back-title'
import Grupo from './componentes/group'
import Entrada from './componentes/input'
import Espaco from './componentes/space'
import CheckboxWithLabel from './componentes/checkbox'
import Botao from './componentes/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      
      <VoltarTitulo 
        backLink="./team"
        text="Vistoria Online"
      />
      
      <Grupo 
        text="Preencha os dados da bicicleta"
      />
      
      <Entrada 
        placeholder="Digite a marca"
        title="Marca"
      />

      <Espaco/>

      <Entrada 
        placeholder="Digite o modelo"
        title="Modelo"  
      />

      <Espaco/>
      
      <Entrada 
        placeholder="Dia/Mês/Ano"
        title="Data de aquisição"
      />

      <Espaco/>

      <Entrada 
        placeholder="R$0,00"
        title="Valor de aquisição"
      />

      <Espaco/>

      <CheckboxWithLabel
        label="Adicionar acessórios"
      />
      
      <Link href="./acs"
        style={{
        textDecoration: 'none'}}
      >
        <Botao 
          text="Continuar"
        />
      </Link>
    </main>
  );
}
