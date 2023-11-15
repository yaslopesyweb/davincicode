"use client"
import styled from 'styled-components';

// Estilizar Link Repositório
const Rep = styled.h1`
  display: flex;
  justify-content: center;
  padding: 8px;
  font-family: 'Roboto Flex', sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: #0046C0;
  cursor: pointer;
  a {
    text-decoration: none;
  }
`;

// Repositório
export default function TextoLink({ text, onClick }) {
  return (
    <div>
      <Rep onClick={onClick}>
        {text}
      </Rep>
    </div>
  );
}
