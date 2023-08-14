import React, { useState } from "react";
import Ticket from "./Ticket";
import './App.css';

export default function TicketColumn({ title, ticketList }) {

    console.log("TicketColumn" + ticketList)

    const [tickets, setTickets] = useState([]);

    const renderedTickets = ticketList.map((ticket, index) => {
        console.log(ticket)
        return <Ticket key={index} ticketData = {ticket} />
    });

    return (
        <div className="TicketColumn">
            {title}
            {renderedTickets}
        </div>
    );

}