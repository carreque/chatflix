import { ChatFlixRouter } from './router/ChatFlixRouter'
import { AppTheme } from './theme/AppTheme'
import './App.css'

export const ChatFlixApp = ()  => {
  return(
  <AppTheme>
    <ChatFlixRouter/>
  </AppTheme>
  );
}
