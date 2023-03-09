import React from 'react'

import { LegendChips } from 'components/atoms'

import { TLegendChips } from 'types/legendChips.type'

import './LegendSection.scss'

export interface ILegendSectionProps { }

export const LegendSection: React.FC = () => {
  const chips: TLegendChips[] = ['money', 'power', 'lifes']

  return (
    <section className='legend-section'>
      {
        chips.map((c) => <LegendChips key={c} type={c} />)
      }
    </section>
  )
}
