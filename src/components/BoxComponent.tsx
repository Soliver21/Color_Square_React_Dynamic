interface BoxProps{
    color: string;
    count : number;
    setFn: () => void;
}
const BoxComponent : React.FC<BoxProps> = ({color,count , setFn}) => {
    return (
        <div className="box" style={{width: "10rem", height:"10rem", boxShadow:"0 0 10px 3px white inset", borderRadius: "7px", background:`${color}`, alignContent:"center", justifyContent:"center", userSelect:"none", cursor:"pointer"}}
        onClick={setFn}
        >
        {count}
        </div>
    )
}
export default BoxComponent;