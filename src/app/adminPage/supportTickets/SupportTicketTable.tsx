import React from 'react';

interface SupportTicket {
  id: number;
  description: string;
  subject: string;
  // Add other ticket-related fields here
}

interface SupportTicketTableProps {
  tickets: SupportTicket[];
}

const SupportTicketTable: React.FC<SupportTicketTableProps> = ({ tickets }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Support ID</th>
          <th>Description</th>
          <th>Subject</th>
          {/* Add other table headers for related information */}
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <tr key={ticket.id}>
            <td>{ticket.id}</td>
            <td>{ticket.description}</td>
            <td>{ticket.subject}</td>
            {/* Add other table cells for related information */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SupportTicketTable;
