import { useSession } from 'next-auth/react'
import React from 'react'
import Avatar from './Avatar'
import { PhotoIcon, LinkIcon } from '@heroicons/react/24/solid'
function PostBox() {


    const {data: session} = useSession()
  return <form className='sticky top-16 z-50 bg-white border border-gray-200 p-2'>
    
    <div className='flex items-center space-x-3'>
    <Avatar></Avatar>
    <input className='bg-gray-50 p-2 pl-5 rounded-md flex-1 outline-none' disabled={!session} type='text' placeholder={ session? 'Create a post by entering a title' : 'Please sign in to post'}></input>
    <PhotoIcon className={`h-6 text-gray-300 cursor-pointer`}/> 

    <LinkIcon className={`h-6 text-gray-300`}/>
    </div>


  </form>
}

export default PostBox