"use client"
import styled from 'styled-components';

// Estilizar Grupo
const Group = styled.h1`
    display: flex;
    justify-content: center;
    padding: 21px;
    font-family: 'Roboto Flex', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: #5E6366;
`;

// Grupo
export default function Grupo({ text }) {
    return (
        <div>
            <Group>{text}</Group>
        </div>
    );
}