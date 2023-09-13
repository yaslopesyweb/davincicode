"use client"
import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px;
`;

const PlusButton = styled.button`
    position: relative;
    top: -6px;
    margin-right: 10px;
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 50%;
    color: #0046C0;
    font-size: 24px;
    cursor: pointer;
`;

const TitleLabel = styled.label`
    flex: 1;
    display: flex;
    justify-content: center;
    font-family: 'Roboto Flex', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #5E6366;
    cursor: pointer;
`;

export default function BotaoMais({ label }) {
    return (
        <PageContainer>
            <TitleLabel>
                <PlusButton>+</PlusButton>
                {label}
            </TitleLabel>
        </PageContainer>
    );
}