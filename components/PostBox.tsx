import { useSession } from 'next-auth/react'
import React from 'react'
import Avatar from './Avatar'

function PostBox() {

    const {data: session} = useSession()
  return <form>
    <Avatar></Avatar>
    <div className='flex items-center SPACE-X-3'>
        <input className='bg-gray-50 p-2 pl-5 rounded-md flex-1 outline-none' disabled={!session} type='text' placeholder={ session? 'Create a post by entering a title' : 'Please sign in to post'}></input>
    </div>
  </form>
}

export default PostBox