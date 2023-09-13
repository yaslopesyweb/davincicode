import VoltarTitulo from "../componentes/back-title";
import Grupo from "../componentes/group";
import Entrada from "../componentes/input";
import Espaco from "../componentes/space";
import BotaoMais from "../componentes/plus-title";
import Botao from "../componentes/button";
import Link from "next/link";

export default function Home() {
    return (
      <main>
        
        <VoltarTitulo 
            backLink="/"
            text="Vistoria Online"
        />
        
        <Grupo 
            text="Preencha os dados do acessório"
        />
        
        <Entrada 
            placeholder="Digite o tipo"
            title="Tipo"
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
  
        <BotaoMais 
            label="Adicionar mais acessórios"
        />

        <Link
            href="../upload"
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