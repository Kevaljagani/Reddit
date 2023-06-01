import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import PostBox from '@/components/PostBox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Reddit</title>
      </Head> 

      <div>
        <PostBox></PostBox>
      </div>
    </div>

    )
}
