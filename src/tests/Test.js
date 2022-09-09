import { useState } from 'react';
import './Test.css';

function Test() {

  const [text, setText] = useState('')
  const [btn, setbtn] = useState(false)
  const [quantity, setQuantity] = useState([4443453, 433434, 434534, 546466, 3455466])
  const [data, setData] = useState([])


  const handleForm = (e) => {
    e.preventDefault()
    setbtn(!btn)
  }

  console.log(quantity)
  const handleChange = (e) => {
    setQuantity(...quantity)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setData([...quantity])
  }

  console.log(data, 'atatatatta')

  return (
    <div className="Test">
      <h1>Hello</h1>
      <form>
        <button onClick={handleForm}>Add</button>
      </form>
      {
        btn && (
          <form onSubmit={handleSubmit} className='inputs'>
            <input type="text" value={quantity[0]} onChange={handleChange} />
            <input type="text" value={quantity[1]} onChange={handleChange} />
            <input type="text" value={quantity[2]} onChange={handleChange} />
            <input type="text" value={quantity[3]} onChange={handleChange} />
            <input type="text" value={quantity[4]} onChange={handleChange} />
            <button type='submit'>Update</button>
          </form>
        )
      }

      <div className="quantity">
        {
          data.map((item) => (
            <p>{item}</p>
          ))
        }
      </div>

    </div>
  );
}

export default Test;
