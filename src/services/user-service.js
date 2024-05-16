import {myAxios} from "./helper";

const signUp=(User)=>{

    return myAxios
    .post('/api/v1/auth/register')
    .then((response)=>response.json())
}