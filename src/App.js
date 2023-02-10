import { useState } from 'react'
import Header from "./components/Header"
import Cars from "./components/Cars"
import AddCar from './components/AddCar'



function App() {
  const [showAddCar, setShowAddCar] = useState(false)
  const [cars, setCars] = useState([
    {
      id: 1,
      text: 'Mercedes',
      day: 'blabla',
      occupied: 'true',
    },
    {
      id: 2,
      text: 'Ferrari',
      day: 'blabla',
      occupied: 'false',
    },
    {
      id: 3,
      text: 'Volkswagen',
      day: 'blabla',
      occupied: 'true',
    },
  ])
  

  //Add Car
  const addCar = (car) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newCar = { id, ...car}
    setCars([...cars, newCar])
  }

  //Delete Car
  const deleteCar = (id) => {
    //console.log('delete', id)
    setCars(cars.filter((car) => car.id !== id))
  }

  //Toggle occupied
  const toggleOccupied = (id) => {
    //console.log(id)
    setCars(
      cars.map((car) => car.id === id ?
        { ...car, occupied: !car.occupied } : car)
    )
  }


  return (
    <div className="container">
      <Header title="Car Share"  onAdd={() => setShowAddCar (!showAddCar)} showAdd={showAddCar}/>
      {showAddCar && <AddCar onAdd={addCar}/>}
      <h2>Good for environment!</h2>
      {cars.length > 0 ? <Cars cars={cars} onDelete={deleteCar}
        onToggle={toggleOccupied} /> : 'No Cars to find'}
    </div>
  );
}

export default App;
