import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {ChatFlixApp} from './ChatFlixApp'
import { store } from './store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  
      <BrowserRouter>
        <ChatFlixApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
