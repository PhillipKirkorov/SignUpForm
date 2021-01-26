import passPic from '../../img/pass.svg';
import emailPic from '../../img/email.svg'

export const cityList = [
    { id: 1, name: 'Latvia' },
    { id: 2, name: 'Lebanon' },
    { id: 3, name: 'Lesotho' },
    { id: 4, name: 'Liberia' },
    { id: 5, name: 'Libya' },
]


export const genderList = [
    {id: 1, name: 'Male', value:'M'},
    {id: 2, name: 'Female', value:'F'}
]
export const textInputs = [
    { id: 1, key_name: 'name', placeholder: 'Enter your name', type: 'text', err_text: 'Please enter a valid name' },
    { id: 2, key_name: 'email', placeholder: 'Email', type: 'email', img: emailPic, err_text: 'Please enter a valid email address' },
    { id: 3, key_name: 'password', placeholder: 'Password', type: 'password', img: passPic, err_text: 'Password must contain at least 6 symbols' },

]
