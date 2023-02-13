import {useState} from 'react'

const AddCar = ({onAdd}) => {
const [startDestination, setStartDest] = useState('')
const [endDestination, setEndDest] = useState('')
const [driveDate, setDriveDate] = useState('')
const [price, setPrice] = useState(0)
const [availableSeats, setSeats] = useState(0)
const [brand, setBrand] = useState('')
const [model, setModel] = useState('')
const [fuelType, setFuelType] = useState('')
const [isFull, setIsFull] = useState(false)

const onSubmit = (e) => {
  e.preventDefault()

  if (!startDestination || !endDestination || !driveDate || !price) {
    alert('Please fill out form')
    return
  }
  onAdd({ startDestination, endDestination, driveDate, price, availableSeats, brand, model, fuelType, isFull: isFull })

  //Clear form
  setStartDest('')
  setEndDest('')
  setDriveDate('')
  setPrice(0)
  setSeats(0)
  setBrand('')
  setModel('')
  setFuelType('')
  setIsFull(false)
}

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <h3>Cars</h3>
      <div className="form-control">
        <label>Start Destination</label>
        <input type='text' placeholder="Add start destination" value={startDestination} onChange={(e) => setStartDest(e.target.value)}></input>
      </div>
      <div className="form-control">
      <label>End Destination</label>
        <input type='text' placeholder="Add end destination" value={endDestination} onChange={(e) => setEndDest(e.target.value)}></input>
      </div>
      <div className="form-control">
        <label>Driving Date</label>
        <input type='text' placeholder="Add the date" value={driveDate} onChange={(e) => setDriveDate(e.target.value)}></input>
      </div>
      <div className="form-control">
      <label>Price</label>
        <input type='number' placeholder="Add price" value={price} onChange={(e) => setPrice(e.target.value)}></input>
      </div>
      <div className="form-control">
      <label>Available Seats</label>
        <input type='number' placeholder="how many seats?" value={availableSeats} onChange={(e) => setSeats(e.target.value)}></input>
      </div>
      <div className="form-control">
      <label>Brand</label>
        <input type='text' placeholder="Add the Brand" value={brand} onChange={(e) => setBrand(e.target.value)}></input>
      </div>
      <div className="form-control">
      <label>Model</label>
        <input type='text' placeholder="Add the Model" value={model} onChange={(e) => setModel(e.target.value)}></input>
      </div>
      <div className="form-control">
      <label>Fuel Type</label>
        <input type='text' placeholder="Add what type of fuel" value={fuelType} onChange={(e) => setFuelType(e.target.value)}></input>
      </div>
      <div className="form-control form-control-check">
        <label>is Full</label>
        <input type='checkbox' checked={isFull} value={isFull} onChange={(e) => setIsFull(e.currentTarget.checked)}></input>
      </div>
    
    <input type='submit' value='Save Car' className="btn btn-block"></input>
    </form>

  )
}

export default AddCar
