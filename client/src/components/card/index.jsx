import React from 'react'
import { CardWrapper, CardContent, CardImg, CardFooter } from './style'
import Button from '../button'
import { usePosts } from '../../hooks'

const Card = () => {

  const { data, isLoading } = usePosts()

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    data?.map(d => {
      return (<CardWrapper to={`/${d._id}`} key={d._id}>
        <CardImg>
          <img src="https://curiousworld-static-files.s3.amazonaws.com/blog/iStock-166637296.jpg" alt="donation img" />
        </CardImg>
        <CardContent>
          <p className='title'>{d.title}</p>

        </CardContent>
        <CardFooter>
          <div>
            <p className="donationSum">${d.funded}</p>
            <p className="neededSum">funded of ${d.total || 0}</p>
          </div>
          <Button />
        </CardFooter>
      </CardWrapper>)
    })

  )
}

export default Card