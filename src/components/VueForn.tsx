import { FC, useState } from 'react'

export interface Ibooks {
  id: number
  bookTitle: string
  bookAuthor: string
  bookGenre: string
}

const VueForn: FC<Ibooks> = ({ data }) => {
  console.log(data)

  const [allBuks, setallBuks] = useState(data)

  return (
    <div className='border-2'>
      {allBuks?.map((el: Ibooks) => (
        <div className='flex justify-between' key={el.id}>
          <div>{el.bookTitle}</div>
          <div className='hover:text-red-400 cursor-pointer'>del</div>
        </div>
      ))}
    </div>
  )
}

export default VueForn
