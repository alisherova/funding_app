import React, { useState } from 'react'
import { useDetailedPost } from '../../hooks'
import Button from '../button'
import { CardDetailsWrapper } from './style'

const CardDetails = ({ id }) => {

  const { data: detailedCard, isLoading } = useDetailedPost(id)

  return (
    (detailedCard !== {} && (
      <CardDetailsWrapper>
        <div>
          <img src={detailedCard?.mainImage} alt="donation img" />
        </div>
        <div>
          <p className="fundedSum">{detailedCard?.funded}</p>
          <p className="neededSum">{detailedCard?.total}</p>
          <div className="greenLine"></div>
          <p className="supporters">supporters, <span>days left</span></p>
          <Button />
        </div>
      </CardDetailsWrapper>
    ))
  )
}

export default CardDetails