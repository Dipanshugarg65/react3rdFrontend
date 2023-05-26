import { useState,useContext } from 'react';
import { Box, TextField, Button, styled, Typography } from "@mui/material";
import {API} from '../../service/api';
import {DataContext} from '../../context/DataProvider';
const Component = styled(Box)`
width: 400px;
margin: auto;
box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`
const Image = styled('img')({
    width: 100,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0 '
})

const Wrapper = styled(Box)`
padding: 25px 35px;
display: flex;
flex: 1;
flex-direction: column;
& > div, & > button, & > p{
    margin-top: 20px;
}
`;
 
const Error = styled(Typography)`
color: #878787;
font-size: 16px;
line-height: 0;
margin-top: 10px;
font-weight: 600;
`


const Loginbutton = styled(Button)`
text-transform: none;
background:#fB641B;
color:#fff;
height: 48px;
border-radius: 3px;
`
const Text = styled(Typography)`
color: #878787;
font-size: 17px;
`
const loginInitialValue= {
    username:'',
    password:''

}
const signupInitialValues={
    name: '',
    username:'',
    password:''
}

const Signupbutton = styled(Button)`
text-transform: none;
background:#fff;
color:#2874f0;
height: 48px;
border-radius: 3px;
box-shadow: 0 1px 2px 0 rgb(0 0 0 )
`
const Login = () => {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, setError] = useState('');
    const [login, setLogin] = useState(loginInitialValue);
    const {setAccount}= useContext(DataContext);
    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }
    const onInputChange = (e) => {
setSignup({...signup, [e.target.name]: e.target.value});
    }

    const signupUser = async()=>{
         let response = await API.userSignup(signup);
      if (response.isSuccess){
        setError('');
        setSignup(signupInitialValues);
        toggleAccount('login')
      } else{
       
setError('Something Went Wrong Please Try Again')

      }
    }

    const onValueChange = (e)=>{
setLogin({ ...login, [e.target.name]: e.target.value})
    }
    const loginUser = async() =>{
 let response = await API.userLogin(login);
 if(response.isSucces){
    setError('');
    sessionStorage.setItem('accessToken',`Bearer ${response.data.accessToken}`);
    sessionStorage.setItem('refreshToken',`Bearer ${response.data.refreshToken}`);
    setAccount({ username: response.data.username, name:response.data.name})
 }else {
    setError('Something Went Wrong Please Try Again');
 }
    }
    return (
        <Component>
            <Box>
                <Image src={imageURL} alt="login" />
                {
                    account === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" value={login.username} onChange={(e)=>onValueChange(e)} name="username"  label="User Name" />
                            <TextField variant="standard" value={login.password} onChange={(e)=>onValueChange(e)} name="password"  label="User Password" />

                            {error &&<Error>{error}</Error>}
                            <Loginbutton variant="contained" onClick={()=>loginUser()}>Login</Loginbutton>
                            <Text style={{ textAlign: 'center' }} >OR</Text>
                            <Signupbutton onClick={() => toggleSignup()}>Create An Account</Signupbutton>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='name' label="Name" />
                            <TextField variant="standard"  onChange={(e)=>onInputChange(e)} name='username' label=" Create Username " />
                            <TextField variant="standard"  onChange={(e)=>onInputChange(e)} name='password' label="Create Password" />

                            {error &&<Error>{error}</Error>}
                            <Signupbutton onClick={()=>signupUser()}>SignUp</Signupbutton>
                            <Text style={{ textAlign: 'center' }} >OR</Text>
                            <Loginbutton variant="contained" onClick={() => toggleSignup()}>Already Have Account</Loginbutton>
                        </Wrapper>
                }
            </Box>
        </Component>

    )
}

export default Login;