import VoltarTitulo from "../componentes/back-title";
import Grupo from "../componentes/group";
import CarregarFoto from "../componentes/upload-photo";
import Espaco from "../componentes/space";
import Botao from "../componentes/button";
import TextoLink from "../componentes/link-text";

export default function Home() {
    return (
      <main>
        
        <VoltarTitulo 
            backLink="../acs"
            text="Vistoria Online"
        />
        
        <Grupo 
            text="Carregar fotos da bicicleta"
        />
        
        <CarregarFoto 
            placeholder="Arquivo JPEG"
            title="Foto Frontal"
        />

        <TextoLink
            text="Exemplo foto frontal"
        />
  
        <Espaco/>
        
        <CarregarFoto 
            placeholder="Arquivo JPEG"
            title="Foto Lateral Esquerda"
        />

        <TextoLink
            text="Exemplo foto lateral esquerda"
        />

        <Espaco/>
  
        <CarregarFoto 
            placeholder="Arquivo JPEG"
            title="Foto Lateral Direita"
        />

        <TextoLink
            text="Exemplo foto lateral direita"
        />

        <Grupo 
            text="Siga corretamente os exemplos disponíveis."
        />

        <Botao 
            text="Concluir Vistoria"
        />
        
      </main>
    );
  }