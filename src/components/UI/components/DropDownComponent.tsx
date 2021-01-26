import React, { ReactElement, useState } from 'react'
import { cityList } from '../SignUp/Form/lists';
import arrow from '../img/arrow.svg'
import styled from 'styled-components';

interface Props {
    selected_id: Number
    myChangeHandler: Function
    key_name: string
}

interface DropDownProps {
    open: boolean,
    selected: boolean,
}

export default function DropDownComponent({selected_id, key_name, myChangeHandler}: Props): ReactElement {
    const [dropDownOpen, setdropDownOpen] = useState<boolean>(false)

    
    return (
        <DropDown open={dropDownOpen} selected={selected_id === 0} onClick={()=>setdropDownOpen(!dropDownOpen)}>
            <div>{selected_id === 0 ? 'Select country' : cityList.find(x => x.id === selected_id)?.name}<img src={arrow} alt="arrow" /></div>
            <DropDownList open={dropDownOpen} selected={selected_id === 0}>
                {
                    cityList.map(item => <div key={item.id} onClick={() => myChangeHandler(item.id, key_name)}>{item.name}</div>)
                }
            </DropDownList>
        </DropDown>
    )
}

const DropDown = styled.div`
cursor: pointer;
  width: 100%;
  display: flex;
  position: relative;
  background: transparent;
  div{  
        padding: 20px;
        width: 100%;
        display: flex;
        flex-direction: row;
        color: ${(p: DropDownProps) => p.selected ? '#A2A2A2' : '#222222'};
  }
  img{
        transform: ${(p: DropDownProps) => p.open ? '' : 'rotateX(180deg)'};
        margin-left: auto;
        margin-right: 0px;
  }
`;

const DropDownList = styled.ul`
        position: absolute;
        z-index: 500;
        display: ${(p: DropDownProps) => p.open ? 'flex' : 'none'};
        flex-direction: column;
        margin-top: 60px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 8px #00000026;
        border-radius: 8px;
        width: 100%;
        background-color: #fff;
        list-style: none;
        padding: 0px;
        div{
            color: #202022;
            background-color: #fff;
            cursor: pointer;
            display: block;
            padding: 10px;
            white-space: nowrap;
            &:hover {
                background-color: #F5F8FA;
                color: #222;
            }
        }
`;