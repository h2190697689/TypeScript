import React, {useState} from "react";

export default ()=>{
    const [count, setCount] = useState(0);
    const hello : string = "hello world";
    console.log(hello);
    return(
        <div>{count}</div>
    )
}