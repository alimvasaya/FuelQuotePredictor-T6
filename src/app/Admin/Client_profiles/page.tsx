// pages/client_profiles.tsx
"use client";

import React, { useState } from "react";

const ClientProfiles = () => {
  // Sample data for client users
  const [clientUsers, setClientUsers] = useState([
    {
      id: 1,
      username: "user1",
      fullName: "User One",
      password: "password1",
      address1: "123 Main St",
      address2: "",
      city: "City1",
      state: "State1",
      zipCode: "12345",
    },
    // Add more user data as needed
  ]);

  // State to track which rows are in edit mode
  const [editingRows, setEditingRows] = useState<number[]>([]);
  const [newUser, setNewUser] = useState({
    username: "",
    fullName: "",
    password: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
  });

  // Function to toggle edit mode for a specific row
  const toggleEdit = (userId: number) => {
    setEditingRows((prevRows) =>
      prevRows.includes(userId)
        ? prevRows.filter((id) => id !== userId)
        : [...prevRows, userId]
    );
  };

  // Function to save edited data for a specific user
  const saveData = (userId: number, field: string, value: string) => {
    setClientUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, [field]: value } : user
      )
    );
    toggleEdit(userId);
  };

  // Function to add a new user
  const addNewUser = () => {
    setClientUsers((prevUsers) => [
      ...prevUsers,
      { id: prevUsers.length + 1, ...newUser },
    ]);
    setNewUser({
      username: "",
      fullName: "",
      password: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
    });
  };
  // Function to delete a user
  const deleteUser = (userId: number) => {
    setClientUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== userId)
    );
  };

  return (
    <div>
      <h1 className="text-4xl text-center text-white">Client Profiles</h1>
      <table className="table-auto border-collapse border w-full my-6 text-blue-200">
        <thead>
          <tr>
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">Full Name</th>
            <th className="border px-4 py-2">Password</th>
            <th className="border px-4 py-2">Address 1</th>
            <th className="border px-4 py-2">Address 2</th>
            <th className="border px-4 py-2">City</th>
            <th className="border px-4 py-2">State</th>
            <th className="border px-4 py-2">Zip Code</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {clientUsers.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">
                {editingRows.includes(user.id) ? (
                  <input
                    type="text"
                    value={user.username}
                    onChange={(e) =>
                      saveData(user.id, "username", e.target.value)
                    }
                    className="w-full"
                  />
                ) : (
                  user.username
                )}
              </td>
              <td className="border px-4 py-2">
                {editingRows.includes(user.id) ? (
                  <input
                    type="text"
                    value={user.fullName}
                    onChange={(e) =>
                      saveData(user.id, "fullName", e.target.value)
                    }
                    className="w-full"
                  />
                ) : (
                  user.fullName
                )}
              </td>
              <td className="border px-4 py-2">
                {editingRows.includes(user.id) ? (
                  <input
                    type="password"
                    value={user.password}
                    onChange={(e) =>
                      saveData(user.id, "password", e.target.value)
                    }
                    className="w-full"
                  />
                ) : (
                  user.password
                )}
              </td>
              <td className="border px-4 py-2">
                {editingRows.includes(user.id) ? (
                  <input
                    type="text"
                    value={user.address1}
                    onChange={(e) =>
                      saveData(user.id, "address1", e.target.value)
                    }
                    className="w-full"
                  />
                ) : (
                  user.address1
                )}
              </td>
              <td className="border px-4 py-2">
                {editingRows.includes(user.id) ? (
                  <input
                    type="text"
                    value={user.address2}
                    onChange={(e) =>
                      saveData(user.id, "address2", e.target.value)
                    }
                    className="w-full"
                  />
                ) : (
                  user.address2
                )}
              </td>
              <td className="border px-4 py-2">
                {editingRows.includes(user.id) ? (
                  <input
                    type="text"
                    value={user.city}
                    onChange={(e) =>
                      saveData(user.id, "city", e.target.value)
                    }
                    className="w-full"
                  />
                ) : (
                  user.city
                )}
              </td>
              <td className="border px-4 py-2">
                {editingRows.includes(user.id) ? (
                  <input
                    type="text"
                    value={user.state}
                    onChange={(e) =>
                      saveData(user.id, "state", e.target.value)
                    }
                    className="w-full"
                  />
                ) : (
                  user.state
                )}
              </td>
              <td className="border px-4 py-2">
                {editingRows.includes(user.id) ? (
                  <input
                    type="text"
                    value={user.zipCode}
                    onChange={(e) =>
                      saveData(user.id, "zipCode", e.target.value)
                    }
                    className="w-full"
                  />
                ) : (
                  user.zipCode
                )}
              </td>
              <td className="border px-4 py-2">
                {editingRows.includes(user.id) ? (
                  <button
                    onClick={(e) =>
                      saveData(
                        user.id,
                        "username",
                        (e.target as HTMLInputElement).value
                      )
                    }
                    className="bg-green-500 text-white px-2 py-1"
                  >
                    Save
                  </button>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleEdit(user.id)}
                      className="bg-blue-500 text-white px-2 py-1 mr-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="bg-red-500 text-white px-2 py-1"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
          <tr>
            <td className="border px-4 py-2">
              <input
                type="text"
                placeholder="Username"
                value={newUser.username}
                onChange={(e) =>
                  setNewUser({ ...newUser, username: e.target.value })
                }
                className="w-full"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="text"
                placeholder="Full Name"
                value={newUser.fullName}
                onChange={(e) =>
                  setNewUser({ ...newUser, fullName: e.target.value })
                }
                className="w-full"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="password"
                placeholder="Password"
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
                className="w-full"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="text"
                placeholder="Address 1"
                value={newUser.address1}
                onChange={(e) =>
                  setNewUser({ ...newUser, address1: e.target.value })
                }
                className="w-full"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="text"
                placeholder="Address 2"
                value={newUser.address2}
                onChange={(e) =>
                  setNewUser({ ...newUser, address2: e.target.value })
                }
                className="w-full"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="text"
                placeholder="City"
                value={newUser.city}
                onChange={(e) =>
                  setNewUser({ ...newUser, city: e.target.value })
                }
                className="w-full"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="text"
                placeholder="State"
                value={newUser.state}
                onChange={(e) =>
                  setNewUser({ ...newUser, state: e.target.value })
                }
                className="w-full"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="text"
                placeholder="Zip Code"
                value={newUser.zipCode}
                onChange={(e) =>
                  setNewUser({ ...newUser, zipCode: e.target.value })
                }
                className="w-full"
              />
            </td>
            <td className="border px-4 py-2">
              <button
                onClick={addNewUser}
                className="bg-green-500 text-white px-2 py-1"
              >
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ClientProfiles;