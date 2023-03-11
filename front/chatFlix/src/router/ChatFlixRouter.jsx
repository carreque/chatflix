import { useEffect } from 'react';
import {Navigate, Route,Routes} from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { ChatPage } from '../chatFlix/pages/ChatPage';
import { MoviesPage } from '../chatFlix/pages/MoviesPage';
import { RoomPage } from '../chatFlix/pages/RoomPage';
import { SeriesPage } from '../chatFlix/pages/SeriesPage';
import { useAuthStore } from '../hooks';

export const ChatFlixRouter = () => {

  const {status, checkAuthToken} = useAuthStore();

  //When the component is rendered for the first time, it is going to check on the jwt token and ask for a new one if it is necessary. 
  useEffect(() => {
    checkAuthToken();
  }, [])
  
  return (
    <Routes>
      {
        (status === 'not-authenticated' || status === 'checking')
        ?(
          <>
            {/* Login and Register */}
            <Route path="/auth/*" element={<AuthRoutes/>}/>
            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
          </>

        )
        :(
          <>
            <Route path="/" element={ <MoviesPage/> } />
            <Route path="/*" element={ <Navigate to="/" /> } />
            <Route path="/series" element={<SeriesPage/>}/>
            <Route path="/room" element={<RoomPage/>}/>
            <Route path="/chat" element={<ChatPage/>}/>
          </>
        )
      }
    </Routes>
  )
}
