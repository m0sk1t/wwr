import { Divider, Link } from '@mui/material'
import React, { useCallback, useState } from 'react'

import { TSocialPage } from 'types/socialPage.type'
import { IWithSocket } from 'types/withSocket.interface'

import { ChatPage, PlayersListPage, RecordsPage } from 'components/pages'

import './SocialArea.scss'

export interface ISocialAreaTemplateProps extends IWithSocket { }

export const SocialAreaTemplate: React.FC<ISocialAreaTemplateProps> = ({
  socket
}) => {
  const [selectedPage, setSelectedPage] = useState<TSocialPage>('records')

  const selectPage = useCallback((e: React.MouseEvent, page: TSocialPage) => {
    e.preventDefault()
    setSelectedPage(page)
  }, []);

  const SocialPage = React.memo(() => {
    switch (selectedPage) {
      case 'records':
        return <RecordsPage socket={socket} />
      case 'players':
        return <PlayersListPage socket={socket} />
      case 'chat':
        return <ChatPage socket={socket} />
    }
  })

  return (
    <section className='social-area'>
      <header>
        <Link
          onClick={(e) => selectPage(e, 'records')}
          className={selectedPage === 'records' ? 'active' : undefined}
        >
          Records
        </Link>
        <Link
          onClick={(e) => selectPage(e, 'players')}
          className={selectedPage === 'players' ? 'active' : undefined}
        >
          Players List
        </Link>
        <Link
          onClick={(e) => selectPage(e, 'chat')}
          className={selectedPage === 'chat' ? 'active' : undefined}
        >
          Chat
        </Link>
      </header>
      <Divider
        sx={{
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      />
      <SocialPage />
    </section>
  )
}
