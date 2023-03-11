import { useDispatch, useSelector } from "react-redux"
import {chatFlixApi} from "../api";
import { clearErrorMessage, onCheckingCredentials, onLogin, onLogout } from "../store/auth";


export const useAuthStore = () => {
  
  const {status, user, errorMessage} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({email, password}) => {
    
    //While credentials are been confirmed, it is set up its related state
    dispatch(onCheckingCredentials());

    try{
        const {data} = await chatFlixApi.post('/auth/login', {email, password});
        console.log({data});
        const actualDate = new Date().getTime();
        localStorage.setItem('token', data.token);
        localStorage.setItem('token-init-date',actualDate);
        dispatch( onLogin({name: data.name, uid: data.uid}) );
    }catch(error){

        console.log(error);
        //When it fails, the user is automatically set up in notAuthenticated state. After 10ms, the error message is cleared
        dispatch(onLogout('Wrong Credentials'));
        setTimeout(() => {
            dispatch(clearErrorMessage());
        }, 10);

    }
  }

  const startRegister = async ({name, lastname, email, password}) => {
    dispatch(onCheckingCredentials());
    try{
      const {data} = await chatFlixApi.post('/user/newUser', {name, lastname, email, password});
      const actualDate = new Date().getTime();
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', actualDate);
      dispatch(onLogin({name: data.name, uid: data.uid}));
    }catch(error){
      console.log(error);
      dispatch(onLogout('Wrong Credentials'));
        setTimeout(() => {
            dispatch(clearErrorMessage());
        }, 10);
    }
  }

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token');
    if(!token) return dispatch(onLogout());

    try{

      const {data} = await chatFlixApi.get('/auth/renew');
      const actualDate = new Date().getTime();
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', actualDate);
      dispatch( onLogin({ name: data.name, uid: data.uid }) );

    }catch(error){
      console.log(error);
      localStorage.clear();
      dispatch(onLogout());   
    }
  }

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  }


  return {

    //Properties
    errorMessage,
    status,
    user,
    //Methods
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout
  }
}
