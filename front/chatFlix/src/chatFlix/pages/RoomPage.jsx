import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { useGetAllRooms } from '../../hooks'
import { Navbar } from '../components/Navbar'
import { RoomCard } from '../components/RoomCard'
import { Sidebar } from '../components/Sidebar'

export const RoomPage = () => {

  const [rooms, setRooms] = useState([]);

  const getAllRooms = async () => {
    const roomsFounded = await useGetAllRooms();
    setRooms(roomsFounded);
  }

  useEffect(() => {
    getAllRooms()
  }, []);
  
  return (
    <>
      <Navbar/>
      <Grid container sx={{'display': 'flex'}}>
        <Grid container item sm={12} xs={0}>
          {
            rooms?.map( room => <RoomCard key={room._id} id={room._id} name={room.name} members={room.members}/>)
          }
        </Grid>
      </Grid>
    </>
  )
}
