"use client"
import { useEffect, useState } from 'react';
import Grupo from '../componentes/group';
import Espaco from '../componentes/space';
import Botao from '../componentes/button';
import Link from 'next/link';
import Titulo from '../componentes/title';

export default function ApiPage() {
  const [apiResult, setApiResult] = useState(null);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const leftImageResult = urlParams.get('leftImageResult');

    if (leftImageResult) {
      setTimeout(() => {
        const processedResult = `${leftImageResult}`;
        setApiResult(processedResult);
      }, 2000);
    }
  }, []);

  return (
    <main>
      <div className="centered-inputs">
        <Titulo text="Vistoria Online"/>
        <Grupo text="Verificação da API" />
        {apiResult && <Grupo text={apiResult} />}
        <Espaco />
        <Link href="../team" passHref
          style={{
            textDecoration: 'none'}}
        >
          <Botao enabled="true" text="Finalizar" />
        </Link>
      </div>
    </main>
  );
}
