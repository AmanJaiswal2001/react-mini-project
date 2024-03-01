import TicketNum from "./TicketNum";
import "./Ticket.css";


export default function Ticket({ticket}){
    return(
        <div className="ticket">
        <p>Ticket</p>
        {ticket.map((num,idx)=>(
            <TicketNum num={num} key={idx} />
        ))}
            {/* <TicketNum={ticket[0]} />
            <TicketNum={ticket[0]} /> */}
        </div>
    );
}
//proper heiarchy using lifting state up