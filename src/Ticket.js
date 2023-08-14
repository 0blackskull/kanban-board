import React from "react";

export default function Ticket ({ ticketData }) {

    console.log(ticketData.title);

    return (
        <div>
            <span>{ticketData.id}</span>
            <span>{ticketData.title}</span>
            <span>{ticketData.userId}</span>
            <span>{ticketData.status}</span>
        </div>
    );
}