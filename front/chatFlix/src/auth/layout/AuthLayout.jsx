import { Grid, Typography } from "@mui/material"


export const AuthLayout = ({children, title = ''}) => {

  const welcomeImage = 'https://wallpaperaccess.com/full/6245119.jpg';
  const handleErrorImage = (e) => {
    e.target.src = 'https://wallpapercave.com/wp/wp9691537.jpg';
  }
  return (
    <Grid container direction="row">
      <Grid container item spacing={0} xs={12} sm={6} direction='column' alignItems="center" justifyContent="center" sx={{minHeight: '100vh', backgroundColor: 'primary.main', padding: 4, height: 'fit-content'}}>
          <Grid item className="box-shadow" xs={12} sm={12} sx={{width: { sm: 450 },backgroundColor: 'white',padding: 3, borderRadius: 2}}>
              <Typography variant='h5' sx={{ mb: 1 }}>{title}</Typography>
              {children}
          </Grid>
      </Grid>
      <Grid container item spacing={0} xs={0} sm={6} direction ='column'>
          <Grid item sm={6} xs={6} id="applicationLemotiv" alignContent="center" alignItems="center" justifyContent="center" sx={{padding: 4, bottom: '10%'}}> 
            <Typography variant="h4" color="white">An interesting experience to enjoy discovering new people with your friends or alone</Typography>
          </Grid>
          <img src={welcomeImage} loading="lazy" alt="Welcome image" onError={handleErrorImage} width="100%" height="100%"/>
      </Grid>
    </Grid>
  )
}
