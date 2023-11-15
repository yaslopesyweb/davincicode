"use client"
import VoltarTitulo from "../componentes/back-title";
import Grupo from "../componentes/group";
import Entrada from "../componentes/input";
import Espaco from "../componentes/space";
import Botao from "../componentes/button";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [tipo, setTipo] = useState('');
    const [dataAquisicao, setDataAquisicao] = useState('');
    const [valorAquisicao, setValorAquisicao] = useState('');

    const [campoTocado, setCampoTocado] = useState({
        tipo: false,
        dataAquisicao: false,
        valorAquisicao: false,
      });

    const handleTipoChange = (event) => {
        const valorTipo = event.target.value;
        setTipo(valorTipo);
        setCampoTocado((prevCampoTocado) => ({ ...prevCampoTocado, tipo: valorTipo.trim() !== '' }));
    };

    const handleDataAquisicaoChange = (event) => {
        const valorDataAquisicao = event.target.value;
        setDataAquisicao(valorDataAquisicao);
        setCampoTocado((prevCampoTocado) => ({ ...prevCampoTocado, dataAquisicao: valorDataAquisicao.trim() !== '' }));
    };

    const handleValorAquisicaoChange = (event) => {
        const valorValorAquisicao = event.target.value;
        setValorAquisicao(valorValorAquisicao);
        setCampoTocado((prevCampoTocado) => ({ ...prevCampoTocado, valorAquisicao: valorValorAquisicao.trim() !== '' }));
    };

    const isButtonBlue = campoTocado.tipo && campoTocado.dataAquisicao && campoTocado.valorAquisicao;
      

    return (
      <main>
        <div className="centered-inputs">
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
                onChange={handleTipoChange}
                value={tipo}
            />
    
            <Espaco/>
            
            <Entrada
                placeholder="Dia/Mês/Ano"
                title="Data de aquisição"
                onChange={handleDataAquisicaoChange}
                value={dataAquisicao}
            />
    
            <Espaco/>
    
            <Entrada
                placeholder="R$0,00"
                title="Valor de aquisição"
                onChange={handleValorAquisicaoChange}
                value={valorAquisicao}
            />
    
            <Espaco/>
    
            <Link
                href="../upload"
                style={{
                    textDecoration: 'none'}}
            >
                <Botao enabled={campoTocado.tipo && campoTocado.dataAquisicao && campoTocado.valorAquisicao} text="Continuar" />
            </Link>
        </div>
        
      </main>
    );
  }