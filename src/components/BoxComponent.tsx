interface BoxProps{
    id: string;
    color: string;
    count : number;
    active: boolean;
    setFn: () => void;
}
const BoxComponent : React.FC<BoxProps> = ({ id,color,count,active, setFn}) => {
    return (
        <div className="box" style={{width: "10rem", height:"10rem", boxShadow:"0 0 10px 3px white inset", borderRadius: "7px", background:`${color}`, alignContent:"center", justifyContent:"center", userSelect:"none", cursor:"pointer"}}
        onClick={setFn}
        >
        {count}
        </div>
    )
}
export default BoxComponent;