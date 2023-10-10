"use client";
import React from "react";
import SupportTicketTable from "./SupportTicketTable";

const CheckSupportTickets = () => {
  // Sample support ticket data
  const supportTickets = [
    {
      id: 1,
      description: "Issue with login",
      subject: "Login Problem",
      // Add other ticket-related data here
    },
    // Add more support tickets as needed
  ];

  return (
    <div>
      <h1>Check Support Tickets</h1>
      <SupportTicketTable tickets={supportTickets} />
    </div>
  );
};

export default CheckSupportTickets;
