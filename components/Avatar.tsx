import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

function Avatar() {
  const { data: session} = useSession()
  return (
    <div className={`relative overflow-hidden h-10 w-10 rounded-full border-gray-200 bg-white ${ 'h-10 w-10'}`}>
        <Image layout='fill'
      src="https://links.papareact.com/23l" alt={''}       />

    </div>
  )
}

export default Avatar
 