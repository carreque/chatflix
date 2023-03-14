import React from 'react'
import { GenreList } from './GenreList'

export const Sidebar = () => {
  return (
    <div className="container text-center pt-5" id="sidebarChatFlix">
        <span className="navbar-brand">Which genre would you want to see it?</span>
        <ul className="mt-3">
            <GenreList/>
        </ul>
    </div>
  )
}
