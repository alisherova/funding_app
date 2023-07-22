import React, { useState } from 'react'
import { useDetailedPost } from '../../hooks'
import Button from '../button'
import { Description, SecondaryImg, CardDetailsBody, GreenLine, DetailsDateContent, SupportersCount, CardDetailsWrapper, MainImg, FundedSum, DetailsContent, TotalSum } from './style'
import { getLeftPercent, getLeftDate } from '../../utils/index.js'

const CardDetails = ({ id }) => {

  const { data: detailedCard, isLoading } = useDetailedPost(id)

  return (
    <>
      <CardDetailsWrapper>
        <div>
          <MainImg src={detailedCard?.mainImage} alt="donation img" />
        </div>
        <DetailsContent>
          <FundedSum>{detailedCard?.currency.character}{detailedCard?.funded}</FundedSum>
          <TotalSum>funded of  {detailedCard?.total}</TotalSum>
          <GreenLine width={getLeftPercent(detailedCard?.funded, detailedCard?.total)} />
          <DetailsDateContent>
            <p>{detailedCard?.supporters} <SupportersCount>supporters, </SupportersCount></p>
            <p>{getLeftDate(detailedCard?.lastDay)} <SupportersCount> days left</SupportersCount></p>
          </DetailsDateContent>
          <Button padding={"0.5rem 3.2rem"} />
        </DetailsContent>
      </CardDetailsWrapper>
      <CardDetailsBody>
        <Description>{detailedCard?.description}</Description>
        <SecondaryImg src={detailedCard?.secondaryImage} />
      </CardDetailsBody>
    </>
  )
}

export default CardDetails