import React from 'react'

import { SocialAreaTemplate } from 'components/templates'
import { GameAreaSection, LegendSection } from 'components/organisms'

import { IWithSocket } from 'types/withSocket.interface'

import './MainTemplate.scss'

export interface IMainTemplateProps extends IWithSocket { }

export const MainTemplate: React.FC<IMainTemplateProps> = ({
  socket
}) => {
  return (
    <main className='main-template'>
      <LegendSection />
      <GameAreaSection />
      <SocialAreaTemplate socket={socket} />
    </main>
  )
}
