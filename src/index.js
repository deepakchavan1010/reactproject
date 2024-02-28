import { createRoot } from "react-dom/client";
import Fromcomp from "./Fromcomp";

const data= ["A","B","c","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

createRoot(document.getElementById("root")) .render(
        <>
        {data.map((ele)=>{
                return <Fromcomp name={ele} key={ele}/>

                
         })}
       
        </>
       )
