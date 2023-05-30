import React from 'react'
import Image from 'next/image'
import { Bars3Icon, HomeIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon, BellIcon, ChartPieIcon, ChatBubbleLeftIcon, ChevronDownIcon, GlobeAltIcon, PlusIcon, SparklesIcon, SpeakerWaveIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import { signIn, signOut, useSession } from 'next-auth/react'

function Header() {
    const{ data: session } = useSession();

  return (
    <div className='stick top-0 z-50 flex bg-white py-2 px-4 shadow-sm'>

        <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
            <Image objectFit='Contain' src="https://1000logos.net/wp-content/uploads/2017/05/Reddit-logo-500x320.png" fill
            />
        </div>

        <div className='mx-7 flex items-center xl:min-w-[300px]'>
            <HomeIcon className='h-5 w-5'/>
            <p className='flex-1 ml-2 hidden lg:inline '>Home</p>
            <ChevronDownIcon className='h-5 2-5'/>
        </div>

        <form className='flex flex-1 items-center space-x-2 border-gray-200 rounded-sm bg-gray-100 px-3 py-1'>
            <MagnifyingGlassIcon className='h-6 w-6 text-gray-400 ' />
            <input className='flex-1 bg-transparent outline-none' type='text' placeholder='Search Reddit'></input>
            <button type='submit' hidden></button>
        </form>

        <div className='flex text-gray-500 space-x-2 items-center hidden lg:inline-flex'>
            <SparklesIcon className='icon'/>
            <GlobeAltIcon className='icon'/> 
            <VideoCameraIcon className='icon'/>
            <hr className='h-10 borger-gray-100'/>
            <ChatBubbleLeftIcon className='icon'/>
            <BellIcon className='icon'/>
            <PlusIcon className='icon'/>
            <SpeakerWaveIcon className='icon'/>  
        </div>
        <div className='ml-5 flex items-center lg:hidden'>
            <Bars3Icon className='icon'></Bars3Icon>
        </div>

        {/* sign in logic */}
        {session ? (
                <div onClick= {() => signOut()} className='hidden lg:flex items-center space-x-2 border-gray-100 p-2 cursor-pointer'>
                    <div className='h-5 w-5 relative flex-shrink-0'>
                        <img src='https://links.papareact.com/23l'/>
                    </div>
                     <div className='flex-1 text-xs'>
                        <p className='truncate text-orange-600'>{session?.user?.name}</p>
                        <p className='text-gray-400 '>Sign Out</p>
                     </div>
                     <ChevronDownIcon className='h-5 w-5 flex-shrink-0 text-gray-400'></ChevronDownIcon>
                </div>
            ) : (
            <div onClick= {() => signIn()} className='hidden lg:flex items-center space-x-2 border-gray-100 p-2 cursor-pointer'>
                <div className='h-5 w-5 relative flex-shrink-0'>
                    <img src='https://links.papareact.com/23l'/>
                </div>
                    <p className='text-gray-400 '>Sign In</p>
            </div>
        )}
    </div>
  )
}
 
export default Header 