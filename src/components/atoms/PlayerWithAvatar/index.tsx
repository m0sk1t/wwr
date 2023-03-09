import React from 'react';
import Avatar from '@mui/material/Avatar';
import { MoreHoriz } from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from '@mui/material';

import { IPlayerInfo } from 'types/player.interface';

export interface IPlayerWithAvatarProps {
  selected: boolean
  player: IPlayerInfo
  setActionsOpened: () => void
  setSelected: (name: string) => void
}

export const PlayerWithAvatar: React.FC<IPlayerWithAvatarProps> = ({
  player,
  selected,
  setSelected,
  setActionsOpened,
}) => {
  return (
    <Button
      onClick={() => setSelected(player.name)}
      sx={{
        display: 'flex',
        color: '#FAFAFA',
        marginLeft: '1rem',
        alignItems: 'center',
        textTransform: 'capitalize',
        justifyContent: 'space-between',
        padding: selected ? 'padding: 8px 4px 8px 8px' : '5px',
        boxShadow: selected ? '0px 4px 40px #FFB446' : undefined,
        background: selected ? 'linear-gradient(90deg, #FFFB02 -22.86%, #FFA900 52.56%, #FE6B00 126.43%)' : undefined,
      }}
    >
      <Box
        sx={{
          gap: '8px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ width: 24, height: 24 }} alt={player.name} src={player.avatar} />
        <Typography fontFamily={'Saira'} variant='body1'>{player.name}</Typography>
      </Box>
      {
        selected
          ?
          <IconButton onClick={setActionsOpened}>
            <MoreHoriz />
          </IconButton>
          : null
      }
    </Button>
  )
}
