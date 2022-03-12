import { useEffect, useState } from "react";

export const Stopwatch = ()=>{
    const [timer, setTimer] = useState(10);
    // useEffect(()=>{
    //     const id = setInterval(()=>{
    //         console.log("interval");
    //         setTimer((prev)=>prev-1)
    //     },1000)
    // })


    useEffect( ()=>{

    },[])
    return (
        <h1>timer{timer}</h1>
    )

}