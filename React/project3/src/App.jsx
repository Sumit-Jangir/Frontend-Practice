import { useState } from "react";
import "./App.css";

function App() {

  const[textVal, setTextVal] = useState("");
  const[inputColor, setInputColor] = useState("");
  const[changeClr, setChangeClr] = useState({});

  function ChangeColor(){
    console.log(changeClr)
    return setChangeClr({color: inputColor });
  }
  function UpperCase(){
    // console.log(textVal)
    return setTextVal(textVal.toUpperCase());
  }
  function LowerCase(){
    // console.log(textVal)
    return setTextVal(textVal.toLowerCase());
  }
  return (
    <>
    
      <div className="main">
        <div className="box">
          <textarea name="" id="" rows="10" onInput={(e)=>setTextVal(e.target.value)}></textarea>

          <h2 style={changeClr}>{textVal}</h2>
          <input type="text" onInput={(e)=>setInputColor(e.target.value)} placeholder="Enter color name" />
          <div className="btn">
          <button onClick={()=>ChangeColor()}>Change Color</button>
          <button onClick={()=>UpperCase()}>UpperCase</button>
          <button onClick={()=>LowerCase()}>LowerCase</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
