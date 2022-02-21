import React from 'react'
import { urlFor } from '../client'

function Pin({pin : {postedBt, image, _id}}) {
  return (
    <div>
        <img className='rounded-lg w-full' alt='user-post' src={urlFor(image).width(250).url()}/>
    </div>
  )
}

export default Pin