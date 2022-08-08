import { useState } from 'react'
import SingleColor from './components/SingleColor'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [value, setValue] = useState('')
  const [list, setList] = useState(new Values('#f35523').all(10))

  const handleChange = (e) => setColor(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className='text-center flex items-center h-[6.25rem] pl-8'>
        <h3 className='mb-0 mr-8'>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={`border-transparent text-xl py-2 px-4 rounded-l ${error && 'border-2 border-solid border-clrRedDark'}`}
            value={color}
            onChange={handleChange}
            name='color'
            placeholder='#f35523'
          />
          <button className="bg-clrPrimary5 py-2 px-4 text-xl border-transparent rounded-r capitalize text-clrWhite pointer hover:bg-clrPrimary3">generate</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />
        })}
      </section>
    </>
  )
}

export default App
