"use client"
import React from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 80%;
  max-height: 80%;
  border-radius: 6px; 
`;

const PopupImage = ({ imageUrl, onClose }) => {
  return (
    <PopupContainer onClick={onClose}>
      <Image src={imageUrl} alt="Imagem" />
    </PopupContainer>
  );
};

export default PopupImage;
