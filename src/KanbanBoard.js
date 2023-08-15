import React, { useEffect, useRef, useState } from "react";
import { PRIORITY, STATUS, USER } from './constants';
import TicketColumn from "./TicketColumn";

export default function KanbanBoard({ group, order }) {
    
    const url = "https://api.quicksell.co/v1/internal/frontend-assignment";
 
    const [loading, setLoading] = useState(true);
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const dataFetchedRef = useRef(false);

    const groupList = new Map([
        [STATUS, ["Backlog", "Todo", "In Progress", "Done", "Canceled"]],
        [PRIORITY, ["Urgent", "High", "Medium", "Low", "No Priority"]],
        [USER, users]
    ]);

    const apiValueMapping = new Map([
        ["Urgent", [4]],
        ["High", [3]],
        ["Medium", [2]],
        ["Low", [1]],
        ["No Priority", [0]]
    ]);

    const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setTickets(json.tickets)
          setUsers(json.users);
        } catch (error) {
          setError(error);
        }
        setLoading(false)
    };

    useEffect(() => {
        
        setLoading(true);

        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
    
        fetchData();

    }, []);

    const renderedColumns =

        groupList.get(group).map((columnTitle)=>{

            var columnName = columnTitle;

            const checkTicketGroup = (ticket) => {
                const ticketMap = new Map(Object.entries(ticket));
                switch (group) {
                    case STATUS:
                        return ticket.status.toLowerCase()===columnTitle.toLowerCase();
                    case PRIORITY:
                        return ticket.priority === apiValueMapping.get(columnTitle)[0];
                    case USER:
                        columnName = columnTitle.name;
                        return ticket.userId.toLowerCase()===columnTitle.id.toLowerCase();
                    default:
                        break;
                }

                return ticketMap.get(group.toLowerCase()).toLowerCase()===columnTitle.toLowerCase();
            }

            var groupTickets = tickets.filter(
                checkTicketGroup
            ); 

            return <TicketColumn
                    key={columnName} 
                    title = {columnName}
                    ticketList = {groupTickets}
                    group={group}
                    order={order}
                    users={users}
                />
    });

    return (
        <div className="KanbanBoard">
            {renderedColumns}
        </div>
    );

}