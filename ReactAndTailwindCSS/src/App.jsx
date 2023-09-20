import './App.css'
import Card from './componenet/card'

function App() {
  let myObj = {
    name : "Kausar",
    email : "faizraza349@gmail.com"
  }
  return (
    <>
    <h1 className='text-4xl font-bold text-red-800 mb-8'>Kausar Raza Tailwind CSS</h1>
    <Card  myname ="https://shorturl.at/gstC6" someOng ={myObj.name}/>
    <Card myname= "https://shorturl.at/ADGIX" someOng ={myObj.email}/>
    </>
  )
}

export default App
