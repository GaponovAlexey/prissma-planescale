import { MouseEvent, useState } from 'react'

const AddForm = () => {
  const [valueName, setvalueName] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalueName(e.target.value)
  }

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault()
    console.log(valueName)
  }

  return (
    <div>
      <input
        type='text'
        placeholder='name'
        value={valueName}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default AddForm
