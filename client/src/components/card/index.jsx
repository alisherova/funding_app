import React from 'react'
import { CardWrapper, CardContent, CardImg, CardFooter, Title, CompainWrapper, CompanyLogo, CompanyName, CardDateWrapper, CardDateSpan, GreenLine, DonatedSum, FundedSum } from './style'
import Button from '../button'
import { usePosts } from '../../hooks'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { getLeftPercent, getLeftDate } from '../../utils/index.js'
const Card = () => {

  const { data, isLoading } = usePosts()

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    data?.map(d => {
      return (<CardWrapper to={`/${d._id}`} key={d._id}>
        <CardImg src={d.mainImage} alt="donation img" />
        <CardContent>
          <CompainWrapper>
            <CompanyLogo src={d.company.logo} alt="donation img" />
            <CompanyName>{d.company.name}</CompanyName>
          </CompainWrapper>
          <Title>{d.title}</Title>
          <CardDateWrapper>
            <FiUsers /><CardDateSpan>{d.supporters} </CardDateSpan>
            <AiOutlineClockCircle /><CardDateSpan>{getLeftDate(d.lastDay)} days left</CardDateSpan>
          </CardDateWrapper>
        </CardContent>
        <GreenLine width={getLeftPercent(d.funded, d.total)} />
        <CardFooter>
          <div>
            <DonatedSum className="donationSum">${d.funded}</DonatedSum>
            <FundedSum className="neededSum">funded of ${d.total || 0}</FundedSum>
          </div>
          <Button />
        </CardFooter>
      </CardWrapper>)
    })

  )
}

export default Card