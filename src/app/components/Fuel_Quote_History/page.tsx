"use client";

import React, {useState} from "react";


const QuoteHistoryTable = () => {
  // Sample data for the table
  const [quoteHistory, setQuoteHistory] = useState([
    {
      QuoteHistoryID: 1,
      Username: "User1",
      GallonsRequested: 100,
      CompanyProfitMargin: 0.2,
    },
    {
      QuoteHistoryID: 2,
      Username: "User2",
      GallonsRequested: 200,
      CompanyProfitMargin: 0.15,
    },
    // Add more data as needed
  ]);

  // State to track which rows are being edited
  const [editingRows, setEditingRows] = useState<{ [key: number]: boolean }>({});


  // Function to toggle edit mode for a specific row
  const toggleEdit = (quoteHistoryID: number) => {
    setEditingRows((prevState) => ({
      ...prevState,
      [quoteHistoryID]: !prevState[quoteHistoryID],
    }));
  };

  // Function to save edited data for a specific row
  const saveData = (quoteHistoryID: number, field: string, value: string) => {
    // Update the data in the state based on the changes
    setQuoteHistory((prevData) =>
      prevData.map((item) =>
        item.QuoteHistoryID === quoteHistoryID
          ? { ...item, [field]: value }
          : item
      )
    );
    // Turn off editing mode for the row
    toggleEdit(quoteHistoryID);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Fuel Quote History</th>
          <th>Username</th>
          <th>QuotehistoryID</th>
          <th>Gallons Requested</th>
          <th>Company Profit Margin</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {quoteHistory.map((item) => (
          <tr key={item.QuoteHistoryID}>
            <td>{item.QuoteHistoryID}</td>
            <td>{editingRows[item.QuoteHistoryID] ? (
              <input
                type="text"
                value={item.Username}
                onChange={(e) =>
                  saveData(item.QuoteHistoryID, "Username", e.target.value)
                }
              />
            ) : (
              item.Username
            )}</td>
            <td>{item.QuoteHistoryID}</td>
            <td>{editingRows[item.QuoteHistoryID] ? (
              <input
                type="number"
                value={item.GallonsRequested}
                onChange={(e) =>
                  saveData(item.QuoteHistoryID, "GallonsRequested", e.target.value)
                }
              />
            ) : (
              item.GallonsRequested
            )}</td>
            <td>{editingRows[item.QuoteHistoryID] ? (
              <input
                type="number"
                value={item.CompanyProfitMargin}
                onChange={(e) =>
                  saveData(item.QuoteHistoryID, "CompanyProfitMargin", e.target.value)
                }
              />
            ) : (
              item.CompanyProfitMargin
            )}</td>
            <td>
              <button onClick={() => toggleEdit(item.QuoteHistoryID)}>
                {editingRows[item.QuoteHistoryID] ? "Save" : "Edit"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuoteHistoryTable;
