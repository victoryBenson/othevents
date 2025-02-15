import Link from 'next/link'
import React from 'react'

const ButtonLinkOrange = ({link, name}) => {
  return (
    <div>
        <Link href={`${link}`} className='p-3 bg-primary text-white rounded'>{name}</Link>
    </div>
  )
}


const ButtonLinkWhite = ({link, name}) => {
    return (
        <div>
            <Link href={`${link}`} className='p-3 bg-white text-primary border-primary rounded'>{name}</Link>
        </div>
            
    )
  }

export {ButtonLinkOrange, ButtonLinkWhite};