import BoxComponent from "./BoxComponent";
import { useState } from "react";

const Squarecomponent = () => {

    const [color,setcolor] = useState<string>("rgb(0,0,0)");
    const [count, setcount] = useState(0);

    const randomNum = () => Math.floor(Math.random()*256);
    const resetColor = () => "#000";
    const randomcolor = () => {
        const r = randomNum()
        const g = randomNum()
        const b = randomNum()
        return `rgb(${r},${g},${b})`
    }

    const setBoxColor = () => setcolor(randomcolor());
    const setBoxCount = () => {
        setcount(prev => prev === 10 ? 0 : prev+1)
    }

    return(
        <main style={{display: "flex", flexDirection: "column", alignItems:"center", justifyContent: "center", gap:"2rem"}}>
            <h3>A szín kódja: {color}</h3>

            {/*<div className="box" style={{width: "10rem", height:"10rem", boxShadow:"0 0 10px 3px white inset",      borderRadius: "7px", background:`${color}`, alignContent:"center", justifyContent:"center"}} 
            onClick={() => setcount(prev => prev +1)}  
            >{count}</div> */}

            <div style={{display: "flex", flexDirection: "row", alignItems:"center", justifyContent: "center",gap:"2rem"}}>
                <BoxComponent color={color} count={count} setFn={setBoxCount} />
                <BoxComponent color={color} count={count} setFn={setBoxCount} />
                <BoxComponent color={color} count={count} setFn={setBoxCount} />
            </div>

            <button onClick={setBoxColor}>Színezz!</button>

            <button onClick={()=> {
                setcolor(resetColor())
                setcount(0)
            }}>Reset</button>

        </main>
    )
}

export default Squarecomponent