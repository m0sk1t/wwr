import React, { useRef } from 'react'
import { Container, Sprite, Stage } from '@pixi/react'

import sky from 'assets/sky.svg'
import road from 'assets/road.svg'

import './GameAreaSection.scss'

export interface IGameAreaSectionProps { }

export const GameAreaSection: React.FC<IGameAreaSectionProps> = () => {
  const sectionRef = useRef(null)

  return (
    <section ref={sectionRef} className='gamearea-section'>
      <Stage
        style={{
          marginTop: '4px',
          borderRadius: '16px',
        }}
        width={356}
        height={((356 / 16) * 9)}
        options={{
          backgroundColor: 0x012b30,
          antialias: true
        }}
      >
        <Container>
          <Sprite
            x={-20}
            y={0}
            width={404}
            height={135}
            image={sky}
          // anchor={{ x: 0.5, y: 0.5 }}
          />
          <Sprite
            x={-20}
            y={70}
            width={404}
            height={135}
            image={road}
          // anchor={{ x: 0.5, y: 0.5 }}
          />
        </Container>
      </Stage>
    </section>
  )
}
