"use client"
import React, { useState, useEffect } from "react";
import VoltarTitulo from "../componentes/back-title";
import Grupo from "../componentes/group";
import CarregarFoto from "../componentes/upload-photo";
import TextoLink from "../componentes/link-text";
import Espaco from "../componentes/space";
import Botao from "../componentes/button";
import Link from "next/link";
import PopupImage from "../componentes/popup-image";
import axios from 'axios';

export default function Home() {
  const [adicionarAcessorios] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([null, null]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupImageUrl, setPopupImageUrl] = useState("");

  const handleFileChange = (index, file) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles[index] = file;
    setSelectedFiles(newSelectedFiles);
  };

  const openPopup = (imageUrl) => {
    setPopupImageUrl(imageUrl);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleConcluirVistoriaClick = async () => {
    try {
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        if (file) {
          formData.append(`file`, file);
        }
      });
  
      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true, 
      });
  
      const leftImageResult = response.data;
      console.log('Resultado da API da foto lateral esquerda:', leftImageResult);
  
      window.location.href = `../api?leftImageResult=${leftImageResult}`;
    } catch (error) {
      console.error('Erro ao enviar imagens para a API:', error);
    }
  };

  console.log("adicionarAcessorios:", adicionarAcessorios);
  const backLink = adicionarAcessorios ? "/" : "../acs";
  console.log("backLink:", backLink);

  return (
    <main>
      <div className="centered-inputs">
        <VoltarTitulo backLink={backLink} text="Vistoria Online" />

        <Grupo text="Carregar fotos da bicicleta" />

        <CarregarFoto
          placeholder={selectedFiles[0] ? selectedFiles[0].name : "Arquivo JPG"}
          title="Foto Lateral Esquerda"
          onChange={(event) => {
            handleFileChange(0, event.target.files[0]);
          }}
          name="file"
        />

        <TextoLink text="Exemplo foto lateral esquerda" onClick={() => openPopup('images/lateralesquerda.jpg')} />

        <Espaco />

        <CarregarFoto
          placeholder={selectedFiles[1] ? selectedFiles[1].name : "Arquivo JPG"}
          title="Foto Lateral Direita"
          onChange={(event) => {
            handleFileChange(1, event.target.files[0]);
          }}
        />

        <TextoLink text="Exemplo foto lateral direita" onClick={() => openPopup('images/lateraldireita.jpg')} />

        <Grupo text="Siga corretamente os exemplos disponíveis." />
        <Link 
          href="../api"
          style={{
            textDecoration: 'none'
          }}
          onClick={handleConcluirVistoriaClick}
        >
          <Botao 
            text="Concluir Vistoria"
            enabled={selectedFiles.every(file => file !== null)}
          />
      </Link>
      </div>

      {showPopup && <PopupImage imageUrl={popupImageUrl} onClose={closePopup} />}
    </main>
  );
}
