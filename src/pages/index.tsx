import type { NextPage } from 'next'
import Head from 'next/head'
import AddForm from '../components/AddForm'
import VueForn from '../components/VueForn'

export interface Ibooks {
  data: {
    id: number
    bookTitle: string
    bookAuthor: string
    bookGenre: string
  }
}

const Home: NextPage<Ibooks> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex justify-between max-w-[700px]'>
        <div className='text-red-400'>
          <h1>Hello Next.js ut us crud prisma </h1>
        </div>
        <div className='border ' />
        <div className='text-blue-400 min-w-[300px] '>
          <h1>Vue</h1>
          <VueForn data={data} />
        </div>
        <div className='border ' />
        <div className='text-green-400'>
          <h1>here</h1>
          <AddForm />
        </div>
        <div className='border ' />
      </div>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api')
  const data = await response.json()
  return {
    props: {
      data,
    },
  }
}
