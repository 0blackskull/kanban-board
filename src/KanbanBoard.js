import React, { useEffect, useRef, useState } from "react";
import { PRIORITY, STATUS, USER } from './constants';
import TicketColumn from "./TicketColumn";

export default function KanbanBoard({ group, order }) {
    
    const url = "https://api.quicksell.co/v1/internal/frontend-assignment"
 
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

    // const statusList = ["Backlog", "Todo", "In Progress", "Done", "Canceled"]
    // const priorityList = ["No Priority", "Low", "Medium", "High", "Urgent"]

    const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setTickets(json.tickets)
          setUsers(json.users);
          // console.log(json);
        } catch (error) {
          setError(error)
          // console.log("error", error);
        }
        setLoading(false)
    };

    useEffect(() => {
        
        setLoading(true)

        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
    
        fetchData();

        // console.log(tickets)

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
            // console.log(groupTickets);
            return <TicketColumn
                    key={columnTitle} 
                    title = {columnName}
                    ticketList = {groupTickets}
                />
        })


    // console.log(groupList.STATUS)
    // console.log(tickets)

    return (
        <div className="KanbanBoard">
            {renderedColumns}
        </div>
    );

}