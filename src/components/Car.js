import { FaTimes } from 'react-icons/fa'

const Car = ({ car, onDelete, onToggle }) => {
  return (
    <div className={`car ${car.occupied ? 'occupied' : ''}`} onDoubleClick={() => onToggle(car.id)}>
      <h3>{car.id} - {car}
      <FaTimes  style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(car.id)}/> </h3>
      <p>{car.day}</p>
      <p style={{fontSize: 13}}>Double tap to change wether or not the car is occupied *green*.</p>
    </div>
  )
}

export default Car
