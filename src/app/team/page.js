import Grupo from "../componentes/group";
import Espaco from "../componentes/space";
import Botao from "../componentes/button";
import Link from 'next/link'
import TextoLink from "../componentes/link-text";

export default function Home() {
    return (
      <main>
        <Grupo 
          text="Integrantes"
        />
        
        <Grupo 
          text="Aleff Santos ............... RM: 550341"
        />
  
        <Espaco/>
  
        <Grupo 
          text="Cássio Yuji ................. RM: 551491"
        />

        <Espaco/>
  
        <Grupo 
           text="Débora Dâmaso  ................. RM: 97836"
         />

        <Espaco/>
  
        <Grupo 
          text="Helena Paixão .............. RM: 550929"
        />

        <Espaco/>
  
        <Grupo 
          text="Paulo Barbosa .............. RM: 550323"
        />

        <Espaco/>
  
        <Grupo 
          text="Yasmin Lopes ............... RM: 552314"
        />
        
        <Link 
            href="https://github.com/yaslopesyweb/davincicode"
            style={{
                textDecoration: 'none'}}
        >
            <TextoLink
                text="Ir para o Repositório"    
            />
        </Link>
        
        <Espaco/>
        
        <Link 
            href="/"
            style={{
                textDecoration: 'none'}}
        >
            <Botao 
            text="Vistoria Online"
            />
        </Link>
        
      </main>
    );
  }
