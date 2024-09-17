import { useEffect } from "react";
import { SocketProvider, useSocket } from "./contexts/SocketContext";
import LoginPage from "./containers/Login";

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
