import { NavLink } from "react-router-dom";
import { useAuthStore } from "../../hooks"


export const Navbar = () => {

  const {startLogout, user} = useAuthStore();

  return (
    <div className="navbar px-4" id="navbarChatFlix">
        <span className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>
            &nbsp;
            Welcome { user.name }
        </span>
        <NavLink to="/chat" className={({isActive}) => isActive ? 'text-decoration-none active': 'text-decoration-none'}>
          <span className="navbar-brand">Chat</span>
        </NavLink>
        <NavLink to="/room" className={({isActive}) => isActive ? 'text-decoration-none active': 'text-decoration-none'}>
          <span className="navbar-brand">Room</span>
        </NavLink>
        <NavLink to="/series" className={({isActive}) => isActive ? 'text-decoration-none active': 'text-decoration-none'}>
          <span className="navbar-brand">Series</span>
        </NavLink>
        <NavLink  to="/" className={({isActive}) => isActive ? 'text-decoration-none active': 'text-decoration-none'}>
          <span className="navbar-brand">Movies</span>
        </NavLink>

        <button 
          className="btn btn-danger"
          onClick={ startLogout }
        >
            <i className="fas fa-sign-out-alt"></i>
            &nbsp;
            <span>Logout</span>
        </button>
    </div>
  )
}
