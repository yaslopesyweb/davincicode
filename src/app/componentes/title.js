"use client"
import styled from 'styled-components';

// Estilizar Conteiner
const Container = styled.div`
    display: flex;
    align-items: center; 
    padding: 16px; 
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

// Título
export default function Titulo({ text }) {
    return (
        <Container>
            <Title>{text}</Title>
        </Container>
    );
}