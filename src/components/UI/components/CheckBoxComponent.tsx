import React, { ReactElement } from 'react'
import styled from 'styled-components';


interface Props {
    checkBoxHandler: Function
}

export default function CheckBoxComponent({checkBoxHandler}: Props): ReactElement {
    return (
        <CheckBoxContainer>
                    <label>
                        <input type="checkbox"  onChange={() => checkBoxHandler()}/>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12px"
                                height="12px"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </span>
                    </label>
                    <div>
                        Accept <a href="/#">terms</a> and <a href="/#">conditions</a>
                    </div>
                </CheckBoxContainer>
    )
}

const CheckBoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    a{
        color: #0094FF;
        text-decoration: none;
        cursor: pointer;
    }
    label{
        position: relative;
        margin-right: 9px;
    }
    input {
        margin: 0;
        opacity: 0;
      }
      
    span {
        position: absolute;
        top: 0px;
        margin-top: 2px;
        cursor: pointer;
        left: 0px;
        height: 14px;
        width: 14px;
        background-color: transparent;
        border-radius: 3px;
        border: 1px solid #0094FF;
      }
      
     svg{
        color: #0094FF;
        display: none;
      }
      
     input:checked ~ span {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 3px;
        opacity: 1;
        border: 1px solid #0094FF;
      }
      
     input:checked ~ span svg {
        display: block;
      }
      
`;