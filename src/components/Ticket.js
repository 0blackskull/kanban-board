import React from "react";

export default function Ticket({ ticketData }) {
    return (
        <div>
            <div>{ ticketData.id }</div>
            <div>{ ticketData.title }</div>
            <div>
                { ticketData.priority }
                {ticketData.tag.map(tagName => (
                    <div>tagName</div>
                ))}
            </div>
        </div>
    );
}