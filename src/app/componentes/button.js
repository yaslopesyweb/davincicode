"use client"
import styled from "styled-components";

// Estilizar botão
const Button = styled.button`
    background-color: #0046C0;
    text-align: center;
    color: white;
    padding: 13px 16px;
    width: 285px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-family: 'Roboto Flex', sans-serif;
    font-size: 15px;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
    margin: 0 auto;
    display: block;
    
    &:hover {
        background-color: darkblue;
    }

    @media (max-width: 280px) {
        max-width: 215px;
    }

`;

// Botão
export default function Botao({ text }) {
    return (
        <div>
        <Button>{text}</Button>
        </div>
    );
}
