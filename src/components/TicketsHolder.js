import React from "react";
import Ticket from "./Ticket";
import { useSelector } from "react-redux";

export default function TicketsHolder({ title, ticketList }) {

    const ordering = useSelector((state) => state.display.ordering)

    const renderTickets = () => {
        console.log(ticketList)
        var sortedTickets;
        if (ordering === "Priority")
            sortedTickets = ticketList.sort((ticketA, ticketB) => (ticketA.priority > ticketB.priority) ? 1 : -1)
        else if (ordering === "Title")
            sortedTickets = ticketList.sort((ticketA, ticketB) => (ticketA.title > ticketB.title) ? 1 : -1)
        else sortedTickets = []
        return (
            sortedTickets.map(ticketData => (
                <Ticket ticketData={ticketData} />
            ))
        )
    };

    return (
        <div>
            <div>{ title }</div>
            <div>
                {renderTickets()}
            </div>
        </div>
    );
}