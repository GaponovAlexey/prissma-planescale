import { MouseEvent, useEffect, useState } from 'react'

const AddForm = () => {
  const [title, setTitle] = useState('')
  const [author, setauthor] = useState('')
  const [genre, setgenre] = useState('')

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault()
    const body = { title, author, genre }
    try {
      const response = await fetch('http://localhost:3000/api/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      setTitle('')
      setauthor('')
      setgenre('')
      if (response.status !== 200) {
        console.log('something went wrong')
      } else {
      }
    } catch (error) {
      console.log('there was an error submitting', error)
    }
  }

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const handleChangeBook = (e: React.ChangeEvent<HTMLInputElement>) => {
    setauthor(e.target.value)
  }
  const handleChangeGenre = (e: React.ChangeEvent<HTMLInputElement>) => {
    setgenre(e.target.value)
  }

  return (
    <div className='flex-col'>
      <input
        type='text'
        placeholder='book title'
        value={title}
        onChange={handleChangeTitle}
      />
      <input
        type='text'
        placeholder='book'
        value={author}
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
