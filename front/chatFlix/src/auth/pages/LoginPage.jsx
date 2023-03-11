import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Google } from '@mui/icons-material';
import { Link as RouterLink} from "react-router-dom";
import { useForm, useAuthStore } from "../../hooks";

const formData = {
  email: '',
  password: ''
};

export const LoginPage = () => {

  const {startLogin} = useAuthStore();
  const {email, password, onInputChange} = useForm(formData);
  

  const onSubmit = (e) => {
    e.preventDefault();
    startLogin({email, password});
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{mt: 2}}>
            <TextField label="Email" type="email" name="email" value={email} onChange={onInputChange} placeholder="email@google.com" fullWidth/>
          </Grid>
          <Grid item xs={12} sx={{mt: 2}}>
            <TextField label="Password" type="password" name ="password" value={password} onChange={onInputChange} fullWidth/>
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth >
                Sign In
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Link component={RouterLink} color='inherit' to="/auth/register" sx={{textDecoration: 'none'}}>
                  Sign Up
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
