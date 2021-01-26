export const validator = (name: string, value: any): boolean =>{
    let pattern, result = false;
    switch (name) {
        case 'email':
            //eslint-disable-next-line
            pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            result =  pattern.test(String(value).toLowerCase());
            break;
        case 'name':
            pattern = /[a-zA-Z]+$/i;
            result = pattern.test(String(value)) 
            break;
        case 'password':
            result = value.length > 6
            break;
        case 'city':
            result = value > 0
            break;
        case 'sex':
            result = (value === 'M' || value === 'F')
            break;
        case 'terms':
            result = value
            break;
        default:
            break;
    }
    return  result
}

export const fieldChecker = (obj:any) =>{
    return !(Object.keys(obj).map(item=> obj[item] === 0 || obj[item].length === 0 || !obj[item]) ).includes(true)
}
   
export const checkError = (name:string, list:any) =>{
    return list.includes(name)
}