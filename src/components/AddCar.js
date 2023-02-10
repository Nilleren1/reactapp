import {useState} from 'react'

const AddCar = ({onAdd}) => {
const [text, setText] = useState('')
const [day, setDay] = useState('')
const [occupied, setOccupied] = useState(false)

const onSubmit = (e) => {
  e.preventDefault()

  if (!text) {
    alert('Please Add Car')
    return
  }
  onAdd({ text, day, occupied })

  //Clear form
  setText('')
  setDay('')
  setOccupied(false)
}

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Car</label>
        <input type='text' placeholder="Add text" value={text} onChange={(e) => setText(e.target.value)}></input>
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type='text' placeholder="Add day and time" value={day} onChange={(e) => setDay(e.target.value)}></input>
      </div>
      <div className="form-control form-control-check">
        <label>Occupied</label>
        <input type='checkbox' checked={occupied} value={occupied} onChange={(e) => setOccupied(e.currentTarget.checked)}></input>
      </div>
    
    <input type='submit' value='Save Car' className="btn btn-block"></input>
    </form>

  )
}

export default AddCar
