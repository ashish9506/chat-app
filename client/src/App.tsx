import { useEffect } from "react";
import "./App.css";
import ChatWindow from "./containers/ChatWindow";
import { SocketProvider, useSocket } from "./contexts/SocketContext";

function App() {
  const { socket } = useSocket();

  useEffect(()=>{
    socket?.emit('message','Hi')
  },[])
  return (
    <>
      <SocketProvider>
        <ChatWindow />
      </SocketProvider>
    </>
  );
}

export default App;
