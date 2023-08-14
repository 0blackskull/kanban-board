import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TicketsHolder from "./TicketsHolder"

export default function ByStatus({ ticketList }) {

    // const statusKeys = { "Urgent":"4", "High":"3", "Medium":"2", "Low":"1", "No Status":"0" }

    // const [statusKeys, setStatusKeys] = useState({
    //     "Backlog": [],
    //     "Todo": [],
    //     "In Progress": [],
    //     "Done": [],
    //     "Canceled": [],
    //   });

    // const { tickets } = useSelector((state) => state.ticketStore)

    // const getStatusKey = (status) => {
    //     switch (status) {
    //       case "backlog":
    //         return "Backlog";
    //       case "todo":
    //         return "Todo";
    //       case "inprogress":
    //         return "In Progress";
    //       case 3:
    //         return "done";
    //       case 4:
    //         return "canceled";
    //       default:
    //         return null;
    //     }
    // };

    // useEffect(() => {
    // // Insert objects into pkeys based on their status
    //     tickets.forEach(object => {
    //         const statusKey = getStatusKey(object.status.replace(/\s/g, '').toLowerCase());
    //         if (statusKey) {
    //         const newStatusKeys = { ...statusKeys };
    //         newStatusKeys[statusKey].push(object);
    //         setStatusKeys(newStatusKeys);
    //     }
    // });
    // }, []);

    // const renderTicketHolders = () => {
    //   return (
    //     Object.entries(statusKeys).map((statusKey) => (
    //       <TicketsHolder 
    //           title={statusKey}
    //           ticketList={statusKeys[statusKey]}
    //       />         
    //     ))
    //   )
    // };

    return (
        <div>
            {/* {renderTicketHolders()} */}
            Status
        </div>
    );
}