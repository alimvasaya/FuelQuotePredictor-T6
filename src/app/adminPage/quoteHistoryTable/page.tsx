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
    toggleEdit(quoteHistoryID); // Turn off editing mode for the row
  };

  return (
    <section className="flex flex-col items-center justify-center space-y-8 pt-12">
      <h1 className="text-3xl font-semibold uppercase tracking-widest text-white">
        Client Quote Histories
      </h1>

      <div className="flex w-screen items-center justify-center">
        <table className="w-11/12 table-auto overflow-hidden rounded-lg text-center tracking-wide text-white">
          {/* Table Headers */}
          <thead className="border-b-2 border-slate-900 bg-sky-800/40">
            <tr>
              <th className="p-3 font-semibold">Fuel Quote History</th>
              <th className="p-3 font-semibold">Username</th>
              <th className="p-3 font-semibold">QuotehistoryID</th>
              <th className="p-3 font-semibold">Gallons Requested</th>
              <th className="p-3 font-semibold">Company Profit Margin</th>
              <th className="p-3 font-semibold">Edit</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {quoteHistory.map((item) => (
              <tr
                key={item.QuoteHistoryID}
                className="border-b-2 border-slate-900 bg-sky-700/60"
              >
                <td className="p-3">{item.QuoteHistoryID}</td>

                {/* Username or Email */}
                <td className="p-3">
                  <div
                    className="w-full rounded-lg bg-sky-500/50 p-2 text-sm font-medium uppercase
                    tracking-wider"
                  >
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
                  </div>
                </td>

                {/* Quote History ID */}
                <td className="p-2">{item.QuoteHistoryID}</td>

                {/* Gallons */}
                <td className="p-2">
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

                {/* Profit */}
                <td className="p-2">
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

                {/* Functionalities */}
                <td className="p-2">
                  <button
                    onClick={() => toggleEdit(item.QuoteHistoryID)}
                    className="admin-butoon border-yellow-500/50 bg-yellow-500/50
                    hover:border-yellow-500/70 hover:bg-yellow-500/70"
                  >
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
