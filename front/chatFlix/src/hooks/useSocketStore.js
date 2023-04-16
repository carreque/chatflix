import { useDispatch, useSelector } from "react-redux"
import { onConnect, onDisconnect } from "../store/socket";

export const useSocketStore = () => {

  const {socketStatus, socketConnected} = useSelector(state => state.generalSocket);
  const dispatch = useDispatch();

  const onSocketConnection = async ({socketStatus, socketConnected}) => {
    
    try{
        dispatch(onConnect({socketStatus, socketConnected}));
    }catch(error){
        console.log(error);
        dispatch(onDisconnect());
    }
  }
  
  const onSocketDisconnection = async() => {
    dispatch(onDisconnect());
  }
  return {
    socketStatus,
    socketConnected,

    onSocketConnection,
    onSocketDisconnection
  }
}
