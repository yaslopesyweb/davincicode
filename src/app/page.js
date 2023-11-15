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

    const [campoTocado, setCampoTocado] = useState({
      marca: false,
      modelo: false,
      dataAquisicao: false,
      valorAquisicao: false,
    });

    const handleCheckboxChange = () => {
      setAdicionarAcessorios(!adicionarAcessorios);
    };

    const handleMarcaChange = (event) => {
      const valorMarca = event.target.value;
      setMarca(valorMarca);
      setCampoTocado((prevCampoTocado) => ({ ...prevCampoTocado, marca: valorMarca.trim() !== '' }));
    };
    
    const handleModeloChange = (event) => {
      const valorModelo = event.target.value;
      setModelo(valorModelo);
      setCampoTocado((prevCampoTocado) => ({ ...prevCampoTocado, modelo: valorModelo.trim() !== '' }));
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
    
    const isButtonBlue = campoTocado.marca && campoTocado.modelo && campoTocado.dataAquisicao && campoTocado.valorAquisicao;

    console.log('marca:', marca);
    console.log('modelo:', modelo);
    console.log('dataAquisicao:', dataAquisicao);
    console.log('valorAquisicao:', valorAquisicao);
    console.log('isButtonBlue:', isButtonBlue);

    return (
      <main>
        <div className="centered-inputs">
          <VoltarTitulo backLink="./team" text="Vistoria Online" />

          <Grupo text="Preencha os dados da bicicleta" />

          <Entrada
            placeholder="Digite a marca"
            title="Marca"
            onChange={handleMarcaChange}
            value={marca}
          />

          <Espaco />

          <Entrada
            placeholder="Digite o modelo"
            title="Modelo"
            onChange={handleModeloChange}
            value={modelo}
          />

          <Espaco />

          <Entrada
            placeholder="Dia/Mês/Ano"
            title="Data de aquisição"
            onChange={handleDataAquisicaoChange}
            value={dataAquisicao}
          />

          <Espaco />

          <Entrada
            placeholder="R$0,00"
            title="Valor de aquisição"
            onChange={handleValorAquisicaoChange}
            value={valorAquisicao}
          />
          <Espaco />

          <div style={{ cursor: 'pointer' }} onClick={handleCheckboxChange}>
            <CheckboxWithLabel label="Adicionar acessórios" checked={adicionarAcessorios} />
          </div>


          <Link
            href={adicionarAcessorios ? './acs' : './upload'}
            style={{
              textDecoration: 'none',
            }}
          >
            <Botao enabled={campoTocado.marca && campoTocado.modelo && campoTocado.dataAquisicao && campoTocado.valorAquisicao} text="Continuar" />
          </Link>
        </div>
      </main>
    );
  }
