"use client"
import styled from "styled-components";

const Button = styled.button`
    background-color: #0046C0;
    color: white;
    padding: 10px 60px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;

    &:hover {
        background-color: darkblue;
    }
`;

export default function Botao({ text }) {
    return (
        <Button>
            {text}
        </Button>
    );
}