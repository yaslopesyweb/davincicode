//DADOS DA BIKE
"use client"
import React, { useState } from 'react';
import VoltarTitulo from './componentes/back-title';
import Grupo from './componentes/group';
import Entrada from './componentes/input';
import Espaco from './componentes/space';
import CheckboxWithLabel from './componentes/checkbox';
import Botao from './componentes/button';
import Link from 'next/link';
import './globals.css';

 
export default function Home() {
  const [adicionarAcessorios, setAdicionarAcessorios] = useState(false);
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [dataAquisicao, setDataAquisicao] = useState('');
  const [valorAquisicao, setValorAquisicao] = useState('');
 
  const handleCheckboxChange = () => {
    setAdicionarAcessorios(!adicionarAcessorios);
  };
 
  const handleMarcaChange = (event) => {
    console.log(event.target.value)
    setMarca(event.target.value);
  };
 
  const handleModeloChange = (event) => {
    setModelo(event.target.value);
  };
 
  const handleDataAquisicaoChange = (event) => {
    setDataAquisicao(event.target.value);
  };
 
  const handleValorAquisicaoChange = (event) => {
    setValorAquisicao(event.target.value);
  };
 
  console.log(marca, modelo, dataAquisicao, valorAquisicao)
 
  const isButtonBlue = marca && modelo && dataAquisicao && valorAquisicao;
 
  
  return (
    <main>
      <VoltarTitulo backLink="./team" text="Vistoria Online" />
  
      <Grupo text="Preencha os dados da bicicleta" />
  
      <div className="centered-inputs">
        <Entrada placeholder="Digite a marca" title="Marca" onChange={handleMarcaChange} value={marca} />
        <Espaco />
  
        <Entrada placeholder="Digite o modelo" title="Modelo" onChange={handleModeloChange} value={modelo} />
        <Espaco />
  
        <Entrada placeholder="Dia/Mês/Ano" title="Data de aquisição" onChange={handleDataAquisicaoChange} value={dataAquisicao} />
        <Espaco />
  
        <Entrada placeholder="R$0,00" title="Valor de aquisição" onChange={handleValorAquisicaoChange} value={valorAquisicao} />
      </div>
  
      <Espaco />
  
      <label onClick={handleCheckboxChange} style={{ cursor: 'pointer' }}>
        <CheckboxWithLabel label="Adicionar acessórios" checked={adicionarAcessorios} />
      </label>
  
      <Link
        href={adicionarAcessorios ? './acs' : './upload'}
        style={{
          textDecoration: 'none',
        }}
      >
        <Botao text="Continuar" color={isButtonBlue ? 'blue' : 'gray'} />
      </Link>
    </main>
  );
      }