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
      <section className='w-full text-center flex flex-col items-center h-[6.25rem] p-4 mb-2 md:pl-8 md:flex-row'>
        <h3 className='mb-2 mr-8 self-start md:mb-0 md:self-center'>color generator</h3>
        <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
          <input
            type="text"
            className={`w-[70%] border-transparent text-base py-1 px-2 rounded-l md:px-4 md:py-2 md:text-xl ${error && 'border-2 border-solid border-clrRedDark'}`}
            value={color}
            onChange={handleChange}
            name='color'
            placeholder='#f35523'
          />
          <button className="w-[30%] bg-clrPrimary5 py-1 px-2  text-base border-transparent rounded-r capitalize text-clrWhite pointer hover:bg-clrPrimary3 md:px-4 md:py-2 md:text-xl">generate</button>
        </form>
      </section>
      <section className="colors w-full">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />
        })}
      </section>
    </>
  )
}

export default App
