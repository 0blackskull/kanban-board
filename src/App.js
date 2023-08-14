import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayButton from './components/DisplayButton';
import ByPriority from './components/ByPriority';
import ByStatus from './components/ByStatus';
import ByUsers from './components/ByUsers';
import { useSelector } from 'react-redux';

function App() {

  const { grouping, ordering } = useSelector((state) => state.display)
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(true)

  const client = axios.create({
    baseURL: "https://apimocha.com/quicksell/data" 
  });

  useEffect(() => {
    client.get().then((response) => {
       setTickets(response.data.tickets)
       console.log(response.data.tickets)
    });
 }, []);
 

  // useEffect(() => {
  //     axios.get(baseURL).then((response) => {
  //     setTickets(response.data.tickets);
  //   });
  //   if (tickets.length === 0) setLoading(!loading)
  //   // console.log(tickets)
  // }, [loading]);

  const renderColumns = () => {
    console.log(tickets);
    switch (grouping) {
      case "Status":
        return <ByStatus ticketList = {tickets} />
      case "Users":
        return <ByUsers ticketList = {tickets} />
      case "Priority":
        return <ByPriority ticketList = {tickets} />
      default:
        return <div></div>
    }
  };

  return (
    <div className="App">
      <DisplayButton />
      <div>{renderColumns()}</div>
    </div>
  );
}

export default App;