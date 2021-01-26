import React, { ReactElement } from 'react'
import styled from 'styled-components';
import { checkError } from '../SignUp/Form/functions';


interface Props {
    key_name: string
    errors: object
    err_text: string
}

export default function ErrorComponent({key_name, errors, err_text}: Props): ReactElement {
    return (
        <ErrorInformer>{checkError(key_name, errors) && err_text}</ErrorInformer>
    )
}
const ErrorInformer = styled.span`
        display: block;
        font: normal normal normal 10px/13px Roboto;
        letter-spacing: 0px;
        color: #E82828;
        height: 15px;
        padding: 5px 20px;
`;