import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TicketsHolder from "./TicketsHolder"

export default function ByUsers({ ticketList }) {

    // const priorityKeys = { "Urgent":"4", "High":"3", "Medium":"2", "Low":"1", "No Priority":"0" }

    const [priorityKeys, setPriorityKeys] = useState({
        "Urgent": [],
        "High": [],
        "Medium": [],
        "Low": [],
        "No Priority": [],
      });

    const { tickets } = useSelector((state) => state.ticketStore)

    const getPriorityKey = (priority) => {
        switch (priority) {
          case 0:
            return "No Priority";
          case 1:
            return "Low";
          case 2:
            return "Medium";
          case 3:
            return "High";
          case 4:
            return "Urgent";
          default:
            return null;
        }
    };

    useEffect(() => {
    // Insert objects into pkeys based on their priority
        tickets.forEach(object => {
            const priorityKey = getPriorityKey(object.priority);
            if (priorityKey) {
            const newPriorityKeys = { ...priorityKeys };
            newPriorityKeys[priorityKey].push(object);
            setPriorityKeys(newPriorityKeys);
        }
    });
    }, []);

    const renderTicketHolders = () => {
      return (
        Object.entries(priorityKeys).map((priorityKey) => (
          <TicketsHolder 
              title={priorityKey}
              ticketList={priorityKeys[priorityKey]}
          />         
        ))
      )
    };

    return (
        <div>
            {renderTicketHolders()}
        </div>
    );
}