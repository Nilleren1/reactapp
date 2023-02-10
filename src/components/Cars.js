import Car from './Car'

const Cars = ({ cars, onDelete, onToggle }) => {
    

  return (
    <div>
      {cars.map((car) => (
      <Car 
      key={car.id} 
      car={car} 
      onDelete={onDelete}
      onToggle={onToggle}/>
      ))}
    </div>
  )
}

export default Cars
