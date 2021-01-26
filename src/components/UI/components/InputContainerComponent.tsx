import React, { ReactElement } from 'react'
import styled from 'styled-components';

interface Props {
    withoutPadding?: boolean,
    children: any
}


export default function InputContainerComponent({withoutPadding, children}: Props): ReactElement {
    return (
        <InputContainer withoutPadding={withoutPadding}>
                {children}
        </InputContainer>
    )
}


const InputContainer = styled.div`
    background-color: #F5F8FA;
    display: flex;
    width:100%;
    align-items: center;
    height: 50px;
    border-radius: 8px;
    box-sizing: border-box;
    padding:    ${(p: Props) => p.withoutPadding ? '0px' : '20px'};
    img{
        margin-right: 20px;
    }
`;