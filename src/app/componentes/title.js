"use client"
import styled from 'styled-components';

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #000000;
`;

export default function Titulo() {
    return (
        <div>
            <Title>Vistoria online</Title>
        </div>
    );
}