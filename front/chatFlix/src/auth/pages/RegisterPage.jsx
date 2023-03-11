import { Alert, Button, Grid, Link, TextField } from "@mui/material";
import { useAuthStore, useForm } from "../../hooks"
import { AuthLayout } from "../layout/AuthLayout"
import {Link as RouterLink} from 'react-router-dom'
import { useRef, useState } from "react";
const formData = {
  name: '',
  lastname: '',
  email: '',
  password: ''
}
export const RegisterPage = () => {

  const {startRegister} = useAuthStore();
  const {email, name, lastname, password, onInputChange} = useForm(formData);
  const [confirmPassword, setConfirmPassword] = useState('');
  const confirmPasswordNotification = useRef(null);

  const onPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    e.target.value === password 
    ? confirmPasswordNotification.current.style.display = "none" 
    : confirmPasswordNotification.current.style.display = "block";
  }

  const onSubmitRegister = (e) => {
    e.preventDefault();
    startRegister({name, lastname, email, password});
  }
  return (
    <AuthLayout title="New Account">
      <form onSubmit={onSubmitRegister}>
      <Grid container>
          <Grid container spacing={2} direction="row">
            <Grid item sm={6} xs={6}>
              <TextField label="Name" type="text" name="name" value={name} onChange={onInputChange} placeholder="username"/>
            </Grid>
            <Grid item sm={6} xs={6}>
              <TextField label="Lastname" type="text" name="lastname" value={lastname} onChange={onInputChange} placeholder="lastname"/>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{mt: 2}}>
            <TextField label="Email" type="email" name="email" value={email} onChange={onInputChange} placeholder="email@google.com" fullWidth/>
          </Grid>
          <Grid item xs={12} sx={{mt: 2}}>
            <TextField label="Password" type="password" name ="password" value={password} onChange={onInputChange} fullWidth/>
          </Grid>
          <Grid item xs={12} sx={{mt: 2}}>
            <TextField label="Confirm Password" type="password" name ="confirmPassword" value={confirmPassword} onChange={onPasswordChange} fullWidth/>
            <Alert severity="error" ref={confirmPasswordNotification} sx={{display: 'none'}}>
              Password is incorrect
            </Alert>
          </Grid>
          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth >
                Create New Account
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Link component={RouterLink} color='inherit' to="/auth/login" sx={{textDecoration: 'none'}}>
                  Sign in
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>

  )
}
