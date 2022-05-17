import { MouseEvent, useState } from 'react'

const AddForm = () => {
  const [valueName, setvalueName] = useState('')
  const [book, setbook] = useState('')
  const [genre, setgenre] = useState('')

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalueName(e.target.value)
  }
  const handleChangeBook = (e: React.ChangeEvent<HTMLInputElement>) => {
    setbook(e.target.value)
  }
  const handleChangeGenre = (e: React.ChangeEvent<HTMLInputElement>) => {
    setgenre(e.target.value)
  }

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault()
    console.log(valueName)
  }

  return (
    <div className='flex-col'>
      <input
        type='text'
        placeholder='book title'
        value={valueName}
        onChange={handleChangeTitle}
      />
      <input
        type='text'
        placeholder='book'
        value={book}
        onChange={handleChangeBook}
      />
      <input
        type='text'
        placeholder='genre'
        value={genre}
        onChange={handleChangeGenre}
      />

      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default AddForm
