import { FC, useEffect, useState } from 'react'

export interface Ibooks {
  id: number
  bookTitle: string
  bookAuthor: string
  bookGanre: string
}

const VueForn: FC<Ibooks> = () => {
  const [allBuks, setallBuks] = useState(null) as any[]

  const getData = async () => {
    const res = await fetch('/api')
    const data = await res.json()
    setallBuks(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='border-2'>
      {allBuks?.map((el: Ibooks) => (
        <div key={el.id}>
          <div>{el.bookTitle}</div>
          <div>{el.bookAuthor}</div>
          <div>{el.bookGanre}</div>
        </div>
      ))}
    </div>
  )
}

export default VueForn
