import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

function Avatar() {
  const { data: session} = useSession()
  return (
    <div className='relative h-10 w-10 rounded-full border-gray-200 bg-white '>
        <Image alt="foo" layout='fill' 
            src=""
        />
    </div>
  )
}

export default Avatar

// {`https://api.dicebear.com/6.x/open-peeps/svg${
//                 session?.user?.name || 'placeholder'
//         }.svg`} 