import React from "react";
import {useState} from "react";

const Semaforo = () => {
    const estadInicial = ["⚫", "⚫", "⚫"];
    const estadRojo = ["🔴", "⚫", "⚫"];
    const estadAmarillo= ["⚫", "🟡", "⚫"];
    const estadVerde = ["⚫", "⚫", "🟢"];
        const [semaforo, setsemaforo] = useState(estadInicial)
       
        const ponteRojo = () => {
            setsemaforo(estadRojo)
            setTimeout(ponteAmarillo, 500 )
        }
            const ponteAmarillo = () => {
             setsemaforo(estadAmarillo)
             setTimeout(ponteVerde, 500)
            }
        
            const ponteVerde = () => {
            setsemaforo(estadVerde)
            setTimeout(ponteRojo, 500)
        }
    return (
        <>
        
        <div className=' row  col-7 container w-1em h-1em bg-dark '>
        <p>{semaforo}</p>
        </div>
        <button className='bg-primary ' onClick={()=>ponteVerde()}> pusla aqui</button>
       
        </>
    )
        }
    
    export default Semaforo;