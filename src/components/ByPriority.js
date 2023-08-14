import React, { useState } from "react";
import TicketsHolder from "./TicketsHolder"

export default function ByPriority({ ticketList }) {

    // const priorityKeys = { "Urgent":"4", "High":"3", "Medium":"2", "Low":"1", "No Priority":"0" }

    const [priorityKeys, setPriorityKeys] = useState({
        "Urgent": [],
        "High": [],
        "Medium": [],
        "Low": [],
        "No Priority": [],
      });

    const populatePriorityMap = (priority, ticketObject) => {
        var newPriorityKeys = priorityKeys
        switch (priority) {
          case 0:
            newPriorityKeys["No Priority"].push(ticketObject)
            break
          case 1:
            newPriorityKeys["High"].push(ticketObject)
            break
            // return "Low";
          case 2:
            newPriorityKeys["Medium"].push(ticketObject)
            // return "Medium";
            break
          case 3:
            newPriorityKeys["Low"].push(ticketObject)
            // return "High";
            break
          case 4:
            newPriorityKeys["Urgent"].push(ticketObject)
            // return "Urgent";
            break
          default:
            return null;
        }
        setPriorityKeys(newPriorityKeys)
    };

    // useEffect(() => {
    // // Insert objects into pkeys based on their priority
    //   console.log("tickets " + tickets)
    //   tickets.forEach(object => {
    //       const priorityKey = getPriorityKey(object.priority);
    //       if (priorityKey) {
    //       const newPriorityKeys = priorityKeys;
    //       newPriorityKeys[priorityKey].push(object);
    //       setPriorityKeys(newPriorityKeys);
    //   }
    // });
    // }, [tickets]);

    const renderTicketHolders = () => {

      console.log("tickets " + ticketList)

      ticketList.map(ticketObject => {
        populatePriorityMap(ticketObject.priority, ticketObject);
      })

      return (
        Object.entries(priorityKeys).map((priorityKey, val) => (
          <TicketsHolder 
              title={priorityKey}
              ticketList={val}
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