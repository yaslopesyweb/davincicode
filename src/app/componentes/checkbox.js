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
    border: 2px solid #5E6366; 
    border-radius: 8px; 
    outline: none; 
    cursor: pointer;

    &:checked {
        background-color: #0046C0;
        border: 2px solid #5E6366;
    }
    
    &:checked::before {
        content: '✓';
        font-size: 13px; 
        color: #fff; 
        position: relative;
        top: -1px;
        left: 3px;
    }
`;

const CheckboxLabel = styled.label`
    flex: 1;
    display: flex;
    justify-content: center;
    font-family: 'Roboto Flex', sans-serif;
    font-size: 14px;
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