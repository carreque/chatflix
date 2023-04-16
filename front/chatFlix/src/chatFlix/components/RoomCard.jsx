import { MeetingRoom } from "@mui/icons-material"
import { Button } from "@mui/material"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useNewMember } from "../../hooks"


export const RoomCard = ({id, name, members}) => {

  const {status, user, errorMessage} = useSelector(state => state.auth);
  
  const newMemberRoom =  (roomId) => {
    useNewMember(user.uid, roomId);
  }
  return (
    <div className="col-3 animate__animated animate__fadeIn" style={{'padding': '10px'}}>
          <div className="card">
              <div className="row no-gutters text-center">
                  <div className="col-12">
                      <h5 className="card-title">{name}</h5>
                      <small>Members joined: {members.length}</small>
                  </div>
                  <div className="col-12" style={{'padding': '10px'}}>
                    <Link to={`/chat/${id}`} onClick={() => newMemberRoom(id)}>
                      <Button variant="contained" startIcon={<MeetingRoom/>} >
                        Join
                      </Button>
                    </Link>
                  </div>
              </div>
          </div>
        </div>
  )
}
