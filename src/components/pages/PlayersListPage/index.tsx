import React, { useEffect, useState } from 'react'

import { IPlayerInfo } from 'types/player.interface'
import { TChatMessage } from 'types/chatMessage.type'
import { IWithSocket } from 'types/withSocket.interface'

import './PlayersListPage.scss'
import { PlayerWithAvatar } from 'components/atoms'
import { Box, Button, Card, Dialog, SvgIcon, Typography } from '@mui/material'

export interface IPlayersListPageProps extends IWithSocket { }

const PLAYERS_LIST: TChatMessage = 'players'

export const PlayersListPage: React.FC<IPlayersListPageProps> = ({
  socket
}) => {
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [players, setPlayers] = useState<IPlayerInfo[]>([]);
  const [settingsModalOpened, setSettingsModalOpened] = useState(false);
  const [playerActionsModalOpened, setPlayerActionsModalOpened] = useState(false);

  useEffect(() => {
    socket.on(PLAYERS_LIST, setPlayers)

    return () => {
      socket.off(PLAYERS_LIST)
    }
  }, [])

  return (
    <div className='players-list-page'>
      <Box
        sx={{
          display: 'flex',
          padding: '5px 16px',
          width: 'calc(100% - 32px)',
          justifyContent: 'space-between',
        }}
      >
        <Typography fontFamily={'Saira'} fontWeight={900}>Players</Typography>
        <Typography fontFamily={'Saira'} fontWeight={900}>{players.length}/12</Typography>
      </Box>
      <Button
        variant='contained'
        sx={{
          gap: '10px',
          margin: 'auto 8px',
          width: '276px',
          display: 'flex',
          fontWeight: 800,
          fontFamily: 'Saira',
          background: 'linear-gradient(180deg, #995AFF -7.69%, rgba(108, 58, 252, 0.91) 127.88%),linear-gradient(90deg, #995AFF -22.86%, rgba(186, 155, 255, 0.954063) 52.56%, #8E53FA 126.43%)',
        }}
        onClick={() => setSettingsModalOpened(true)}
      >
        <img src='src/assets/cog.svg' />Settings
      </Button>
      <Box
        sx={{
          width: '100%',
          height: '200px',
          display: 'flex',
          marginTop: '8px',
          flexFlow: 'column',
          overflowY: 'scroll',
          justifyContent: 'space-between',
        }}
      >
        {
          players.map((p) => (
            <PlayerWithAvatar
              setSelected={setSelectedPlayer}
              selected={selectedPlayer === p.name} player={p}
              setActionsOpened={() => setPlayerActionsModalOpened(true)}
            />
          ))
        }
      </Box>
      <Dialog onClose={() => setSettingsModalOpened(false)} open={settingsModalOpened}>
        <Card></Card>
      </Dialog>
      <Dialog onClose={() => setPlayerActionsModalOpened(false)} open={playerActionsModalOpened}>
        <Card></Card>
      </Dialog>
    </div>
  )
}
