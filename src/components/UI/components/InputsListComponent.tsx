import React, { ReactElement, Fragment } from 'react';
import styled from 'styled-components';
import ErrorComponent from './ErrorComponent';
import InputContainerComponent from './InputContainerComponent';


interface Props {
    values: any
    errors: object
    myChangeHandler: Function
}

export default function InputsListComponent({values,errors, myChangeHandler}: Props): ReactElement {
    return (
        <>
        {
            values.map((item:any) =>
                <Fragment key={item.id}>
                    <InputContainerComponent>
                        {item.img && <img src={item.img} alt='icon' />}
                        <TextInput placeholder={item.placeholder} type={item.type} onChange={e => myChangeHandler(e.target.value, item.key_name)} />
                    </InputContainerComponent>
                    <ErrorComponent errors={errors} key_name={item.key_name} err_text={item.err_text}/>
                </Fragment>
            )
        }
        </>
    )
}

const TextInput = styled.input`
  flex: 1 0;
  wifth: 100%;
  font-size: inherit;
  background-color: transparent;
  border: 0;
  &:focus {
    outline: none;
  }
`;