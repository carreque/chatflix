import { useState, useEffect } from "react"
import { useGetUserRoom } from "../../hooks/useGetUserRoom";

export const UsersChatSidebar = ({id}) => {

  const [users, setUsers] = useState([]);
  
  const getRoomUsers = async (roomId) => {
    const users = await useGetUserRoom(roomId);
    setUsers(users);
  }

  useEffect(() => {
    getRoomUsers(id);
  }, [])
  
  return (
    <div className="container text-center pt-5" id="sidebarChatFlix">
        {
          users?.map(user => {
            return (
              <div key={user._id} className="col-12 text-center">
                <div className="col-6">
                  {user._id}:
                </div>
                <div className="col-6">
                  {user.name}
                </div>
              </div>
            )
          })
        }
    </div>
  )
}
