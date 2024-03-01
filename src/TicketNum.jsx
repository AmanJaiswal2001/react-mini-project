import "./Ticket.css";

export default function TicketNum({num}){//props num
    return (<span className="TicketNum">{num}</span>
    );
}
//proper heiarchy using lifting state up