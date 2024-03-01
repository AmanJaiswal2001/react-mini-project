import { useState } from "react"
//import "./Lottery.css";

import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";

export default function LotteryCom({n=3,winCondition}){
let [ticket,setTicket]=useState(genTicket(n));
let isWinning = winCondition(ticket) ;
  

 let buyTicket=()=>{
    setTicket(genTicket(n));

}
return(
        <div>
            <h1>Lottery Game!</h1>
            
            <Ticket ticket={ticket}/>
            {/* <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span> */}

            
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulation, you won"}</h3>
            
        </div>
    );
}//
//proper heiarchy using lifting state up