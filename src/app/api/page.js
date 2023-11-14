"use client"
import Titulo from "../componentes/title";
import Botao from "../componentes/button";
import Link from "next/link";
import Grupo from "../componentes/group";
import Espaco from "../componentes/space";
export default function Home() {
    
  
    return (
      <main>
        <Titulo backLink="../acs" text="Vistoria Online" />
  
        <Grupo text="Vistoria Concluída" />
  
        <Espaco />
  
        <Link 
            href="/"
            style={{
                textDecoration: 'none'}}
        >
            <Botao 
            text="Finalizar"
            />
        </Link>
      </main>
    );
  }