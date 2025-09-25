import { useState } from "react";
import BoxComponent from "./BoxComponent";


type Boxtype = {
    id: string;
    color: string;
    count: number;
    active: boolean;
}

const initialSate : Boxtype[] = [
    {id:"a", color: "rgb(200,200,200)", count:0, active : false},
    {id:"b", color: "rgb(200,200,200)", count:0, active : false},
    {id:"c", color: "rgb(200,200,200)", count:0, active : false},
];

const randomNum = () => Math.floor(Math.random()*256);


const randomcolor = () => {
        const r = randomNum()
        const g = randomNum()
        const b = randomNum()
        return `rgb(${r},${g},${b})`
}

const Squarecomponent = () => {

    const [box,setBox] = useState<Boxtype[]>(initialSate);

    const setBoxCount = (id: string) => {
        setBox(box.map(b => id === b.id ? {...b, count : b.count+1,active: true} : {...b, active : false}));
    }

    const setBoxColor = () => {
        setBox(box.map(b => b.active ? ({...b, color : randomcolor()}) : b));
    }
    const resetAll = () => {
    setBox(initialSate);
    } 

    return(
        <main style={{display: "flex", flexDirection: "column", alignItems:"center", justifyContent: "center", gap:"2rem"}}>
            <h3>A szín kódja: {box.find(b => b.active === true)?.color}</h3>

            <div className="row" style={{display: "flex", flexDirection: "row", alignItems:"center", justifyContent: "center",gap:"2rem"}}>
               {box.map(b => <BoxComponent id={b.id!} color={b.color} count={b.count} active={false} setFn={() => setBoxCount(b.id)}/>)}
            </div>

            <button onClick={setBoxColor}>Színezz!</button>

            <button onClick={resetAll}>Reset</button>

        </main>
    )
}

export default Squarecomponent