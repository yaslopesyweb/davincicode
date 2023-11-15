"use client"
import styled from "styled-components";

const InputContainer = styled.div`
    position: relative; 
`;

const Title = styled.label`
    position: relative;
    display: flex;
    justify-content: space-around;
    top: -5px;
    left: 0;
    font-family: 'Roboto Flex', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: #5E6366;
    user-select: none;

`;

const Input = styled.input`
    display: flex;
    justify-content: center;
    padding: 13px 16px;
    border: 1px solid #5E6366;
    border-radius: 8px;
    font-family: 'Roboto Flex', sans-serif;
    font-size: 15px;
    font-weight: 400;
    width: 250px;
    outline: none;
    margin: 0 auto;
    display: block;
    padding-left: 16px;

    ::placeholder {
        color: #ABAFB1;
    }

    @media (max-width: 280px) {
        max-width: 180px;
    }
`;

export default function Entrada({ placeholder, title, onChange, value }) {
    return (
      <InputContainer>
        <Title>{title}</Title>
        <Input placeholder={placeholder} onChange={onChange} value={value}></Input>
      </InputContainer>
    );
  }