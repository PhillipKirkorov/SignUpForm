import React, {useState } from "react";
import { useMutation } from "@apollo/client";
import {SIGN_UP_USER_MUTATION} from '../../../../GraphQL/Mutation'
import styled from 'styled-components';
import CheckBoxComponent from "../../components/CheckBoxComponent";
import { RadioGroupComponent } from "../../components/RadioGroupComponent";
import { textInputs } from "./lists";
//@ts-ignore
import { validator, fieldChecker} from "./functions.ts";
import DropDownComponent from "../../components/DropDownComponent";
import ErrorComponent from "../../components/ErrorComponent";
import InputContainerComponent from "../../components/InputContainerComponent";
import InputsListComponent from "../../components/InputsListComponent";






interface SubmitProps{
    is_active?: boolean,
}

interface Values {
    name: string,
    email: string,
    password: string,
    city: number,
    sex: string,
    terms: boolean
}



const SignUp: React.FC = (): JSX.Element => {
    const [values, setValues] = useState<Values>({ name: '', email: '', password: '', city: 0, sex: '', terms: false })
    const [errors, setErrors] = useState<Object>([])
    const [signup, ] = useMutation(SIGN_UP_USER_MUTATION);


    const myChangeHandler = (value: string | number, key_name: string) => {
        setValues({ ...values, [key_name]: value })
    }

    const checkBoxHandler = () =>{
        setValues({ ...values, terms: !values.terms })
    }

    const requestGQL = async(variables:Values) =>{
        return await signup({
            variables: variables,
          })
    }

    const submitHandler = (obj: any) =>{
        let errors:any = []
        Object.keys(obj).map((item:string)=> !validator(item, obj[item]) && errors.push(item)) 
        if(errors.length > 0){
            setErrors(errors)
        } else{
            requestGQL(obj).then(res => {
                if (!res.errors) {
                   console.log('Success', res)
                } else {
                    console.log('Some Trouble', res)
                }
            })
            .catch(e => {
                e.networkError.result.errors.map((item:any): void=>console.log('Error in field: ', item.message))
             })
            setErrors([])
        }
    }

    return (
        <SignUpBox>
            <Title>Create a new account</Title>
            <Container>

                <InputsListComponent values={textInputs} myChangeHandler={myChangeHandler} errors={errors}/>
                
                <InputContainerComponent withoutPadding={true}>
                             <DropDownComponent myChangeHandler={myChangeHandler} key_name={'city'} selected_id={values.city}/>
                </InputContainerComponent>
                <ErrorComponent errors={errors} key_name={'city'} err_text={'You must select your country'}/>


                <RadioGroupComponent key_name={'sex'} myChangeHandler={myChangeHandler}/>
                <ErrorComponent errors={errors} key_name={'sex'} err_text={'You must select the gender'}/>


                <CheckBoxComponent checkBoxHandler={checkBoxHandler}/>
                <ErrorComponent errors={errors} key_name={'terms'} err_text={'You must accept the policies'}/>


                <Sumbit is_active={fieldChecker(values)}>
                   <button disabled={!fieldChecker(values)} onClick={()=>submitHandler(values)}>Sign Up</button> 
                </Sumbit>
            </Container>
        </SignUpBox>
    )
}

export default SignUp;


const SignUpBox = styled.div`
  height: 605px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  box-sizing: border-box;
`;

const Title = styled.section`
    font: normal normal bold 28px/37px Roboto;
    letter-spacing: 0px;
    color: #222222;
`;

const Container = styled.div`
    margin-top: 35px;
    width:100%;
`;


const Sumbit = styled.div`
      button{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      margin-top: 23px;
      background-color: ${(p: SubmitProps) => p.is_active ? '#0094FF' : '#A2A2A2'};
      outline: none;
      border-radius: 31px;
      font-size: 18px;
      width:100%;
      color: #fff;
      border-color: #0094FF;
      border-width: 0px;
      cursor: pointer;
      }
`;