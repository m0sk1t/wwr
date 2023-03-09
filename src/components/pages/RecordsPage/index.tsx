import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

import { IWithSocket } from 'types/withSocket.interface'

import './RecordsPage.scss'

export interface IRecordsPageProps extends IWithSocket { }

export const RecordsPage: React.FC<IRecordsPageProps> = () => {
  return (
    <div className='records-page'>
      <header>
        <Box
          sx={{
            marginLeft: '16px',
          }}
        >
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: '40px',
              lineHeight: '36px',
              fontFamily: 'Saira',
            }}
          >
            3:44
          </Typography>
          <Typography
            sx={{
              fontSize: '12px',
              fontFamily: 'Saira',
            }}
          >Your Last Record</Typography>
        </Box>
        <Box
          sx={{
            width: '64px',
            height: '64px',
            display: 'flex',
            marginRight: '16px',
            flexFlow: 'column',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(0deg, #131444, #131444),radial-gradient(101.35% 101.35% at 50% 22.11%, rgba(78, 32, 130, 0.16) 0%, rgba(12, 12, 76, 0.16) 71.87%)',
          }}
        >
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: '14px',
              lineHeight: '22px',
              fontFamily: 'Saira',
            }}
          ># 144th</Typography>
          <Typography>from 15k</Typography>
        </Box>
      </header>
    </div>
  )
}
