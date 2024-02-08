import React, { useState } from 'react'
import './style.css'
import SetText from './setText'



const App = () => {

    const [button, setButton] = useState({
        blueCount: 0,
        yellowCount: 0
      })

    const [var1,setVar1] = useState("as")
      
    const updateButton = (color) => {

        if( color === 'blue') {
            setButton(prev => {
                return { ...prev, blueCount: prev.blueCount +1}
            });
            setVar1(color);
          } else {
            setButton(prev => {
              return { ...prev, yellowCount: prev.yellowCount +1}
            });
            setVar1(color);
          }
      
    }
  
    const resetButton = () => {
        console.log("Reset")
        setButton( prev => {
            return { ...prev, color: '', blueCount: 0, yellowCount: 0}
          })
    }

    return (
        <>
        <div style = {{textAlign: "center"}}>
            <div>
              <button className="btn blue" type="button" onClick = {() => updateButton('blue')}>
                Mavi Buton
              </button>
              <button className="btn yellow" type="button" onClick = {() => updateButton('yellow')}>
                Sarı Buton
              </button>
            </div>
            <SetText button = {button} var1={var1} />
              <button className="btn" type="button" onClick = {() => resetButton()}>
                Resetle
              </button>
        </div> 
        </>
      )  
}
    

export default App