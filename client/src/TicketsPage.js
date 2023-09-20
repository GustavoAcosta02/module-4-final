import React, { useEffect, useState } from "react";

function TicketsPage() {
  const [backendData, setBackendData] = useState([]);
  const [newTicket, setNewTicket] = useState({
    subject: "",
    status: "",
    open_date: ""
  });

  useEffect(() => {
    fetch('/api/tickets')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data.tickets);
      });
  }, []);

  const handleCreateTicket = () => {
    fetch('/api/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTicket),
    })
      .then((response) => response.json())
      .then((data) => {
        setBackendData([...backendData, data.createdTicket]);
        setNewTicket({
          subject: "",
          status: "",
          open_date: ""
        });
      });
  };

  const handleUpdateTicket = (id) => {
    fetch(`/api/tickets/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 'closed'
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedData = backendData.map((ticket) =>
          ticket.id === id ? { ...ticket, status: 'closed' } : ticket
        );
        setBackendData(updatedData);
      });
  };

  return (
    <div className="ticketsPage">
      <h1>Ticket Management System</h1>

      <div>
        <h2>Create Ticket</h2>
        <input
          type="text"
          placeholder="Subject"
          value={newTicket.subject}
          onChange={(e) => setNewTicket({ ...newTicket, subject: e.target.value })}
        />
        <input
          type="text"
          placeholder="Status"
          value={newTicket.status}
          onChange={(e) => setNewTicket({ ...newTicket, status: e.target.value })}
        />
        <input
          type="text"
          placeholder="Open Date"
          value={newTicket.open_date}
          onChange={(e) => setNewTicket({ ...newTicket, open_date: e.target.value })}
        />
        <button onClick={handleCreateTicket}>Create</button>
      </div>

      <div className="tickets">
        <h2>Tickets</h2>
        {(backendData.length === 0) ? (
          <p>Loading...</p>
        ) : (
          backendData.map((ticket) => (
            <div key={ticket.id}>
              <p>Subject: {ticket.subject}</p>
              <p>Status: {ticket.status}</p>
              <p>Open Date: {ticket.open_date}</p>
              <button onClick={() => handleUpdateTicket(ticket.id)}>Close</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TicketsPage;
