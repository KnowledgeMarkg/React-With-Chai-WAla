import { useState } from 'react'
import { useCallback } from 'react';
import { useEffect , useRef} from 'react';

function App() {
  const posswordRef = useRef(null);
  const [lenght, setLenght] = useState(8);
  const [password , setPassword] = useState("");
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  
  const passwordGen  = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <=lenght ; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass);

  } , [lenght, numberAllowed, charAllowed, setPassword])

  const copyPasswordClipBoard = useCallback(()=>{
    const passwordRef = posswordRef.current;
    posswordRef.current?.select();
    posswordRef.current?.setSelectionRange(0, 99);
     window.navigator.clipboard.writeText(password);
     const messId = document.getElementById('mess')
     messId.innerHTML= 'Copy To ClipBoard'
     setTimeout(() => {
      messId.innerHTML = ''
      window.getSelection().removeAllRanges();
      }, 2000)
  }, [password])

  useEffect(()=>{passwordGen()}, [lenght, numberAllowed, charAllowed, passwordGen])

  return (
    <div className='fixed inset-0 flex items-center justify-center flex-wrap'>
    <div className=' w-full max-w-md shadow-lg rounded-lg px-4 my-12 text-orange-600 bg-gray-500'>
        <h1 className=' text-white text-center py-2 text-2xl'>Password Generator</h1>
        <p className="text-center text-2xl text-red-800" id='mess'></p>
        <div className="p-2 rounded-lg flex overflow-hidden shadow">  
        <input className= "border-blue-500 border-solid border rounded py-2 px-4 mr-4 outline-none w-full" type="text"  placeholder="Enter some text" value={password} readOnly ref={posswordRef} id="copyMe"/>
        <button onClick={copyPasswordClipBoard} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  border border-blue-700 rounded">Copy</button>
        </div>
        <div className='flex text-sm gap-2 py-4'>
        <div className='flex items-center gap-4 mr-2'>
          <input 
          type="range"
          min={6}
          max={99}
          value={lenght}
          className='cursor-pointer'
          onChange={(e) => {setLenght(e.target.value)}}
          />
          <label className=' text-white text-sm'>Length: {lenght}</label>
        </div>
          <div className="flex items-center gap-2 mr-2">
           <input
             type="checkbox"
             defaultChecked={numberAllowed}
             id="numberInput"
             onChange={() => {
              setNumberAllowed((prev) => !prev);
             }}
           />
          <label className=' text-white text-sm' htmlFor="numberInput">Numbers</label>
         </div>
           <div className="flex items-center gap-2 mr-2">
             <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label className=' text-white text-sm' htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
    </div>
  )
}

export default App
