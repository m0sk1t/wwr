import React, { useCallback, useEffect, useState } from 'react'

import { TChatMessage } from 'types/chatMessage.type'
import { IPlayerInfo } from 'types/player.interface'
import { IWithSocket } from 'types/withSocket.interface'

import './ChatPage.scss'

export interface IChatPageProps extends IWithSocket { }

const NEW_CHAT_MESSAGE: TChatMessage = 'newChat'
const NEW_CHAT_JOIN: TChatMessage = 'newChatJoin'

type TIncomingMessage = {
  message: string,
  messageType: TChatMessage,
}

export const ChatPage: React.FC<IChatPageProps> = ({
  socket
}) => {
  const [chatMessages, setChatMessages] = useState<TIncomingMessage[]>([])

  const onNewChatMessage = (incomingMessage: string) => {
    const message: TIncomingMessage = {
      message: incomingMessage,
      messageType: 'newChat',
    }
    setChatMessages((prevState) => [...prevState, message])
  }

  const onNewChatJoin = (player: IPlayerInfo) => {
    const message: TIncomingMessage = {
      messageType: 'newChatJoin',
      message: `${player.name} has joined the Game!`,
    }
    setChatMessages((prevState) => [...prevState, message])
  }

  useEffect(() => {
    socket.on(NEW_CHAT_JOIN, onNewChatJoin)
    socket.on(NEW_CHAT_MESSAGE, onNewChatMessage)

    return () => {
      socket.off(NEW_CHAT_JOIN)
      socket.off(NEW_CHAT_MESSAGE)
    }
  }, [])

  return (
    <div className='chat-page'>
      <div className='chat-wrapper'>
        {
          chatMessages.map((m) => (<div className={m.messageType === 'newChatJoin' ? 'new-chat-join' : undefined}>{m.message}</div>))
        }
      </div>
    </div>
  )
}
