"use client"
import styled from 'styled-components';

const CloseIcon = styled.span`
    font-size: 30px;
    font-weight: 100;
    color: #333;
    cursor: pointer;
`;

export default function Fechar() {
    return (
        <div>
            <CloseIcon>&times;</CloseIcon>
        </div>
    );
}