"use client";

import React, { useState } from "react";

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
  const [editingRows, setEditingRows] = useState<{ [key: number]: boolean }>(
    {},
  );

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
          : item,
      ),
    );
    // Turn off editing mode for the row
    toggleEdit(quoteHistoryID);
  };

  return (
    // http://localhost:3000/Admin
    <section className="flex flex-col items-center justify-center space-y-8 pt-12">
      <h1 className="text-3xl font-semibold uppercase tracking-widest text-white">
        Client Profiles
      </h1>

      <div className="flex w-screen items-center justify-center">
        <table className="w-11/12 table-auto text-center tracking-wide text-white">
          <thead className="border-b-2 border-sky-500/60 bg-sky-500/40">
            <tr>
              <th className="p-3 font-semibold">Fuel Quote History</th>
              <th className="p-3 font-semibold">Username</th>
              <th className="p-3 font-semibold">QuotehistoryID</th>
              <th className="p-3 font-semibold">Gallons Requested</th>
              <th className="p-3 font-semibold">Company Profit Margin</th>
              <th className="p-3 font-semibold">Edit</th>
            </tr>
          </thead>
          <tbody>
            {quoteHistory.map((item) => (
              <tr
                key={item.QuoteHistoryID}
                className="border-b-2 border-sky-500/60 bg-sky-500/50"
              >
                <td className="p-3">{item.QuoteHistoryID}</td>
                <td className="p-3">
                  <span className="rounded-lg bg-indigo-500/50 p-2 font-medium uppercase tracking-wider">
                    {editingRows[item.QuoteHistoryID] ? (
                      <input
                        type="text"
                        value={item.Username}
                        onChange={(e) =>
                          saveData(
                            item.QuoteHistoryID,
                            "Username",
                            e.target.value,
                          )
                        }
                      />
                    ) : (
                      item.Username
                    )}
                  </span>
                </td>
                <td>{item.QuoteHistoryID}</td>
                <td>
                  {editingRows[item.QuoteHistoryID] ? (
                    <input
                      type="number"
                      value={item.GallonsRequested}
                      onChange={(e) =>
                        saveData(
                          item.QuoteHistoryID,
                          "GallonsRequested",
                          e.target.value,
                        )
                      }
                    />
                  ) : (
                    item.GallonsRequested
                  )}
                </td>
                <td>
                  {editingRows[item.QuoteHistoryID] ? (
                    <input
                      type="number"
                      value={item.CompanyProfitMargin}
                      onChange={(e) =>
                        saveData(
                          item.QuoteHistoryID,
                          "CompanyProfitMargin",
                          e.target.value,
                        )
                      }
                    />
                  ) : (
                    item.CompanyProfitMargin
                  )}
                </td>
                <td>
                  <button onClick={() => toggleEdit(item.QuoteHistoryID)}>
                    {editingRows[item.QuoteHistoryID] ? "Save" : "Edit"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default QuoteHistoryTable;
