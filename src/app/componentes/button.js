"use client"
import styled, { css } from 'styled-components';

const Button = styled.button`
  text-align: center;
  color: white;
  padding: 13px 16px;
  width: 285px;
  border: none;
  border-radius: 8px;
  cursor: ${props => (props.enabled ? 'pointer' : 'not-allowed')};
  font-family: 'Roboto Flex', sans-serif;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  margin: 0 auto;
  display: block;

  background-color: ${props => (props.enabled ? 'blue' : 'gray')};

    &[disabled] {
        cursor: not-allowed;
    }

    ${props =>                                                                              
        props.enabled
            ? css`
                cursor: pointer;
                background-color: blue;
            `
            : css`
                cursor: not-allowed;
                background-color: gray;
            `}

  @media (max-width: 280px) {
    max-width: 215px;
  }
`;

// Botão
export default function Botao({ text, enabled }) {
    return (
      <div>
        <Button enabled={enabled}>{text}</Button>
      </div>
    );
  }
