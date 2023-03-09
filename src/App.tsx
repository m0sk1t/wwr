import { io, Socket } from 'socket.io-client'
import React, { useEffect, useState } from 'react'

import { MainTemplate } from 'components/templates'

import './App.scss'

const App: React.FC = () => {
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const newSocket = io(import.meta.env.VITE_SOCKET_URL)
    setSocket(newSocket)

    // socket?.on('newEnemy', (direction: string) => console.log(direction))

    socket?.connect()

    return () => {
      newSocket.close()
    }
  }, [setSocket])

  if (!socket) {
    return <></>
  }

  return <MainTemplate socket={socket} />
}

export default App
