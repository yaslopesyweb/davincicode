"use client"
import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px;
`;


const CheckboxInput = styled.input`
    position: relative;
    top: -4px;
    margin-right: 10px;
    width: 20px;
    height: 20px; 
    appearance: none;
    background-color: #fff;
    box-shadow: 0 0 0 1px #5E6366;
    border: 1px solid #fff; 
    border-radius: 6px; 
    outline: none; 
    cursor: pointer;

    &:checked {
        background-color: #0046C0;
        box-shadow: 0 0 0 1px #0046C0;
        border: 1px solid #fff;
    }
`;

const CheckboxLabel = styled.label`
    flex: 1;
    display: flex;
    justify-content: center;
    font-family: 'Roboto Flex', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: #5E6366;
    cursor: pointer;
`;

export default function CheckboxWithLabel({ label }) {
    return (
        <PageContainer>
                <CheckboxLabel>
                    <CheckboxInput type="checkbox" />
                    {label}
                </CheckboxLabel>
        </PageContainer>
        
    );
}