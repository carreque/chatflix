import { Grid } from '@mui/material'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

export const ChatPage = () => {
  return (
    <>
      <Navbar/>
      <Grid container sx={{'display': 'flex'}}>
        <Grid container item sm={2} xs={0} sx={{minHeight: '94.2vh'}}>
            <Sidebar/>
        </Grid>
        <Grid container item sm={10} xs={0}>
          <h1>
            Chat
          </h1>
        </Grid>
      </Grid>
    </>
  )
}
