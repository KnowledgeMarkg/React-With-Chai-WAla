import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-full h-screen flex ' style={{backgroundColor: color}}>
     <div className='w-1/2 m-auto fixed inset-x-0 bottom-0 text-white py-4 flex justify-center bg-slate-700  items-center rounded-lg mb-12 gap-3'>
     <button onClick={()=>setColor("red")}      className='bg-red-800 rounded-xl w-16 py-1'>Red</button>
     <button onClick={()=>setColor("green")}    className='bg-green-800 rounded-xl w-16 py-1'>Green</button>
     <button onClick={()=>setColor("blue")}     className='bg-blue-800 rounded-xl w-16 py-1'>blue</button>
     <button onClick={()=>setColor("yellow")}   className='bg-yellow-500 rounded-xl w-16 py-1'>Yellow</button>
     <button onClick={()=>setColor("purple")}   className='bg-purple-800 rounded-xl w-16 py-1'>Purple</button>
     <button onClick={()=>setColor("orange")}   className='bg-orange-500 rounded-xl w-16 py-1'>Orange</button>
     <button onClick={()=>setColor("cyan")}     className='bg-cyan-800 rounded-xl w-16 py-1'>Cyan</button>
     <button onClick={()=>setColor("pink")}     className='bg-pink-700 rounded-xl w-16 py-1'>Pink</button>
     <button onClick={()=>setColor("#FF0080")}  className='bg-rose-900 rounded-xl w-16 py-1'>Rose</button>
     </div>
    </div>
  )
} 

export default App
