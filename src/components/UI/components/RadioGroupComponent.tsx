import React from 'react'
import styled from 'styled-components';

interface Props {
    myChangeHandler: Function
    key_name: string
}

export const RadioGroupComponent = ({myChangeHandler, key_name}: Props) => {
    return (
        <RadioGroup>
        <div>
            <input type="radio"
                id={'male'}
                value={'M'}
                defaultChecked={false}
                name={key_name} 
                onChange={(e) =>  myChangeHandler(e.target.value, key_name)}
                />
                 <label htmlFor={'male'}>
                Male
            </label>
        </div>
        <div>
            <input type="radio"
                id={'female'}
                value={'F'}
                defaultChecked={false}
                onChange={(e) =>  myChangeHandler(e.target.value, key_name)}
                name={key_name} />
            <label htmlFor={'female'}>
                Female
            </label>
        </div>
    </RadioGroup>
    )
}

const RadioGroup = styled.div`
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: flex-start;
        cursor: pointer;
        input[type="radio"] {
            display: none;
            &:checked + label:before {
                border-color: #0094FF;
            }
            &:checked + label:after {
                transform: scale(1);
            }
        }
    
        label {
            display: inline-block;
            height: 15px;
            position: relative;
            padding: 0 20px;
            margin-bottom: 0;
            cursor: pointer;
            vertical-align: bottom;
    
            &:before, &:after {
                position: absolute;            
                content: '';  
                border-radius: 50%;
            }
    
            &:before {
                left: 0;
                top: 2px;
                width: 14px;
                height: 14px;
                border: 1px solid #0094FF;
            }
    
            &:after {
                top: 6px;
                left: 4px;
                width:8px;
                height:8px;
                transform: scale(0);
                background:#0094FF;
            }
        }
`;