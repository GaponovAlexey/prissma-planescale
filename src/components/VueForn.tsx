import { FC, useState } from 'react'
import { Ibooks } from '../pages'



const VueForn: FC<Ibooks> = ({ data }) => {
  const [allBuks, setallBuks] = useState(data) as any

  const deleteHandler = async (id: number) => {
    await fetch(`http://localhost:3000/api/${id}`, {
      method: 'DELETE',
    })
  }

  const updatePost = async (
    id: number,
    bookTitle: string,
    bookAuthor: string,
    bookGenre: string
  ) => {
    await fetch(`http://localhost:3000/api/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bookTitle,
        bookAuthor,
        bookGenre,
      }),
    })
  }

  return (
    <div className='border-2'>
      {allBuks?.map((el: Ibooks | any) => (
        <div className='flex justify-between' key={el.id}>
          <div>{el.bookTitle}</div>
          <div className='flex '>
            <div className='hover:text-orange-500' >cor</div>
            <div
              onClick={() => deleteHandler(el.id)}
              className='hover:text-red-400 cursor-pointer ml-2'
            >
              del
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VueForn
