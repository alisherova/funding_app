import React from 'react'
import { useParams } from 'react-router-dom'
import { CardDetails } from '../../components'

const CardsDetails = () => {

  const { id } = useParams()

  return (
    <div>
      <CardDetails id={id} />
    </div>
  )
}

export default CardsDetails