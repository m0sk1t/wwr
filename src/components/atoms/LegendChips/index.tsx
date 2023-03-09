import React from 'react'

import { TLegendChips } from 'types/legendChips.type'

import lifes from 'assets/chips/lifes.svg'
import money from 'assets/chips/money.svg'
import power from 'assets/chips/power.svg'

export interface ILegendChipsProps {
  type: TLegendChips
}

export const LegendChips: React.FC<ILegendChipsProps> = ({
  type
}) => {
  let srcImage = ''

  if (type === 'lifes') {
    srcImage = lifes
  }

  if (type === 'money') {
    srcImage = money
  }

  if (type === 'power') {
    srcImage = power
  }

  return <img src={srcImage} />
}
