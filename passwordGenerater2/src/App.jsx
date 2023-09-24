import { useRef } from "react";
import { useEffect } from "react";
import { useState, useCallback } from "react";

function App() {
  const [lenght, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password ,setPassword] = useState("");

  const passRef = useRef(null)
  const copyToClipBoard = useCallback(()=>{
    if (passRef.current) {
      passRef.current?.select();
      passRef.current.setSelectionRange(0, 8);
      const selectedText = passRef.current.value.substring(0, 8);
      window.navigator.clipboard.writeText(selectedText);
      const messId = document.getElementById('messId');
      messId.innerHTML= `Copy Sucess ${selectedText}`
      setTimeout(() => {
        messId.innerHTML = ''
        window.getSelection().removeAllRanges();
        }, 4000)
    }
  }, [password])
  const passwordGen = useCallback(()=>{
    let pass = ""; 
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789"
    if(charAllowed)   str+="!#$%^&*(){}`'<>"
    for(let i=1 ; i<=lenght ; i++){
      let index  = Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(index);
    }
    setPassword(pass)
  }, [numberAllowed, charAllowed , setPassword, lenght])

  useEffect(()=>{
    passwordGen();
  }, [lenght, charAllowed, numberAllowed, passwordGen])
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-slate-400 p-4 rounded-lg  shadow-md w-1/2">
          <h1 className="text-red-700 text-center text-3xl">
            Password Generator
          </h1>
          <p className="transition-transform font-bold text-black pb-2 pt-2 text-center text-2xl" id="messId"></p>
          <input
            type="text"
            className="px-4 py-2 mt-4 mr-3 rounded-md w-10/12 ml-4"
            placeholder="Password"
            value={password}
            readOnly
            ref={passRef}
          ></input>
          <button onClick={copyToClipBoard} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
            Copy
          </button>
          <input 
          type="range"
          min={6}
          max={99}
          value={lenght}
          className='cursor-pointer px-4 mt-4 mr-3 ml-4'
          onChange={(e) => {setLenght(e.target.value)}}
          />
            <label className=" text-black text-lg mr-6">Lenght : {lenght}</label>
          <input
            type="checkbox"
            className="px-4 mt-4 mr-3 ml-4"
            value={numberAllowed}
            defaultChecked={numberAllowed}
            onChange={()=> {setNumberAllowed((prev)=> !prev)}}
          ></input>
          <label className=" text-black text-lg mr-6">Number</label>
          <input
            type="checkbox"
            className="px-4 mt-4 mr-3 ml-4"
            defaultChecked={numberAllowed}
            value={charAllowed}
            onChange={()=>{setCharAllowed((prev)=>!prev)}}
          ></input>
          <label className=" text-black text-lg mr-6">Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
