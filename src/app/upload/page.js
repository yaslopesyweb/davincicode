//UPLOAD
"use client"
import React, { useState, useEffect } from "react";
import VoltarTitulo from "../componentes/back-title";
import Grupo from "../componentes/group";
import CarregarFoto from "../componentes/upload-photo";
import TextoLink from "../componentes/link-text";
import Espaco from "../componentes/space";
import Botao from "../componentes/button";
import Link from "next/link";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // Aqui você pode lidar com o arquivo selecionado
    if (selectedFile) {
      console.log("Arquivo selecionado:", selectedFile);
    }
  }, [selectedFile]);

  return (
    <main>
      <VoltarTitulo backLink="../acs" text="Vistoria Online" />

      <Grupo text="Carregar fotos da bicicleta" />


      <Espaco />

      <CarregarFoto
        placeholder="Arquivo JPEG"
        title="Foto Lateral Esquerda"
        onChange={(event) => setSelectedFile(event.target.files[0])}
      />

      <TextoLink text="Exemplo foto lateral esquerda" />

      <Espaco />

      <CarregarFoto
        placeholder="Arquivo JPEG"
        title="Foto Lateral Direita"
        onChange={(event) => setSelectedFile(event.target.files[0])}
      />

      <TextoLink text="Exemplo foto lateral direita" />

      <Grupo text="Siga corretamente os exemplos disponíveis." />
      <Link 
            href="../api"
            style={{
                textDecoration: 'none'}}
        >
            <Botao 
            text="Concluir Vistoria"
            />
      </Link>

    </main>
  );
}