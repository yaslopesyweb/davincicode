"use client"
import Link from 'next/link';
import styled from 'styled-components';

// Estilizar Conteiner
const Container = styled.div`
    display: flex;
    align-items: center; 
    padding: 16px; 
`;

// Estilizar Icone de voltar
const BackIcon = styled.div`
    width: 8px;
    height: 8px;
    border: solid #0046C0;
    border-width: 0 3px 3px 0;
    transform: rotate(135deg);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        width: 8px;
        height: 8px;
        border: solid darkblue;
        border-width: 0 3px 3px 0;
        transform: rotate(135deg); 
`;

// Estilizar Título
const Title = styled.h1`
    flex: 1;
    display: flex;
    justify-content: center;
    font-family: 'Roboto Flex', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #2B2F32;
    user-select: none
`;

// Voltar e Título
export default function VoltarTitulo({ text, backLink }) {
    return (
        <Container>
            <Link href={backLink}>
                <BackIcon></BackIcon>
            </Link>
            <Title>{text}</Title>
        </Container>
    );
}