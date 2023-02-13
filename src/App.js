import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Cars from "./components/Cars"
import AddCar from './components/AddCar'
import Navbar from "./components/Navbar";



function App() {
  const [showAddCar, setShowAddCar] = useState(false)
  const [cars, setCars] = useState([
    // {
    //   id: 1,
    //   text: 'Mercedes',
    //   day: 'blabla',
    //   occupied: 'true',
    // },
    // {
    //   id: 2,
    //   text: 'Ferrari',
    //   day: 'blabla',
    //   occupied: 'false',
    // },
    // {
    //   id: 3,
    //   text: 'Volkswagen',
    //   day: 'blabla',
    //   occupied: 'true',
    // },
  ]);

  useEffect(() => {
    const getCars = async () => {
      const carsFromServer = await fetchCars()
      setCars(carsFromServer)
      console.log(carsFromServer)
    }

    getCars()
  }, [])

  //Fetch Cars
  const fetchCars = async () => {
    const res = await fetch('https://carsharerestapi23.azurewebsites.net/cars')
    const data = await res.json()

    return data
  }

  //Fetch Car
  const fetchCar = async (id) => {
    const res = await fetch(`https://carsharerestapi23.azurewebsites.net/cars/${id}`)
    const data = await res.json()

    return data
  }

  //Add Car
  const addCar = async (car) => {
    const res = await fetch('https://carsharerestapi23.azurewebsites.net/cars', {
      method: 'POST',
      headers: {
        'Content-type': 'application/jason'
      },
      body: JSON.stringify(car),
    })

    const data = await res.json()

    setCars([...cars, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newCar = { id, ...car}
    // setCars([...cars, newCar])
  }

  //Delete Car
  const deleteCar = async (id) => {
    //console.log('delete', id)
    await fetch(`https://carsharerestapi23.azurewebsites.net/cars/${id}`, {
      method: 'DELETE'
    })

    setCars(cars.filter((car) => car.id !== id))
  }

  //Toggle occupied
  const toggleOccupied = async (id) => {
    const carToToggle = await fetchCar(id)
    const updateCar = { ...carToToggle, occupied: !carToToggle.occupied }

    const res = await fetch(`https://carsharerestapi23.azurewebsites.net/cars/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateCar)
    })

    const data = await res.json()

    setCars(
      cars.map((car) => car.id === id ?
        { ...car, occupied: data.occupied } : car)
    )
  }


  return (
    <><div><Navbar fixed="top"></Navbar></div><div className="container">
      <Header title="Car Share" onAdd={() => setShowAddCar(!showAddCar)} showAdd={showAddCar} />
      {showAddCar && <AddCar onAdd={addCar} />}
      <h2>Good for environment!</h2>
      {cars.length > 0 ? <Cars cars={cars} onDelete={deleteCar}
        onToggle={toggleOccupied} /> : 'No Cars to find'}
      <Footer />
    </div></>
  );
}

export default App;
