import { useEffect } from "react";
import "./App.css";
import { SocketProvider, useSocket } from "./contexts/SocketContext";
import LoginPage from "./containers/Public/LoginPage";

function App() {
  const { socket } = useSocket();

  useEffect(() => {
    socket?.emit("message", "Hi");
  }, []);
  return (
    <SocketProvider>
      <LoginPage />
    </SocketProvider>
  );
}

export default App;
