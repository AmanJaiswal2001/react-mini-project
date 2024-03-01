// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Lottery from './Lottery';
import LudoBoard from "./LudoBoard";
import Ticket from './Ticket';
import TicketNum from './TicketNum';
import ToduList from './Todu';
import LotteryCom from './LotteryCom';
import {sum} from "./helper";

function App() {
  let winCondition=(ticket)=>{
   return sum(ticket)===15;
  }

  return (
    <>

    <LotteryCom n={3}  winCondition={winCondition}/>  {/* props used function//
   {/* <Ticket ticket={[0,1,2]}/>
   <Ticket ticket={[5,6,7,8]}/> */}


      {/* <Lottery/> Lottery game */}
    {/*  
    <ToduList/>{/* todu list */}
      {/* <LudoBoard/> */}
       </>
  );
}

export default App;
//proper heiarchy using lifting state up