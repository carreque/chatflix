import { Grid, TextField } from '@mui/material'
import { useParams } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { UsersChatSidebar } from '../components/UsersChatSidebar'
import { useEffect, useState } from 'react'
import { useSocketStore } from '../../hooks/useSocketStore'
import { io } from 'socket.io-client'
import { useSelector } from 'react-redux'
import { useGetAllMessages } from '../../hooks'

  

const socketConnection = io('http://localhost:8080');
const initialValue = {
  body: "",
  room: "",
  sendBy: "",
  dateSend: ""
}


export const ChatPage = () => {

  const {id} = useParams();
  const [message, setMessage] = useState(initialValue);
  const [messages, setMessages] = useState([]);
  const {user} = useSelector(state => state.auth);
  const {onSocketConnection} = useSocketStore();
  const onChangeMessage = ({target}) => {
    const {name, value} = target;
    setMessage({...message,
    [name] : value
    });
  }

  const createConnection =  () => {

    const tokenStored = localStorage.getItem('token');
    socketConnection.emit('storeConnection', (tokenStored));
    onSocketConnection({
      socketStatus: 'connected',
      socketConnected: socketConnection.connected
    });
  }

  const onSubmitMessage = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const dateMessageInHours = currentDate.getHours() + ':' + currentDate.getMinutes();
    const newMessage = {
      body: message.body,
      dateSend: dateMessageInHours,
      sendBy: user.uid,
      room: id
    }
    socketConnection.emit("message", newMessage);
    setMessages([newMessage, ...messages]);
    setMessage(initialValue);
  }

  useEffect(() => {
    createConnection()
  }, [socketConnection.id])
  
  useEffect(() => {
    const messageReceived = (newMessage) => {
      setMessages([...messages, newMessage])
    };
    socketConnection.on('message', messageReceived);
    return () => {
      socketConnection.off('message', messageReceived)
    }
  }, [messages]);


  return (
    <>
      <Navbar/>
      <Grid container sx={{'display': 'flex'}}>
        <Grid container item sm={2} xs={0} sx={{minHeight: '94.2vh'}}>
            <UsersChatSidebar key={id} id={id}/>
        </Grid>
        <Grid container item sm={10} xs={0} className='d-block'>
          {
            messages?.map((message, idx) => {
            return(
              <div key={idx} className='messageDiv'>
                <p>{message.sendBy}: {message.body}</p>
              </div>
            )
            })
          }
          
        </Grid>
        <Grid container item sm={10} sx={{position: 'absolute', bottom: '0', left: '16.6%', alignItems: 'center', flexDirection: 'column', backgroundColor: '#377771', height: '8%'}}> {/**sx={{bottom: '2%', position: 'absolute', alignItems: 'center', flexDirection: 'column'}} */}
          <div className='col-12 p-2'>
            <form onSubmit={onSubmitMessage}>
              <TextField type="text" name="body" value={message.body} onChange={onChangeMessage} placeholder="Write a message..." fullWidth/>
            </form>
          </div>   
        </Grid>
      </Grid>
    </>
  )
}
