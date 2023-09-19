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
    setClientUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <h1>Client Profiles</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Full Name</th>
            <th>Password</th>
            <th>Address 1</th>
            <th>Address 2</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {clientUsers.map((user) => (
            <tr key={user.id}>
              <td>
                {editingRows.includes(user.id) ? (
                  <input
                    type="text"
                    value={user.username}
                    onChange={(e) => saveData(user.id, "username", e.target.value)}
                  />
                ) : (
                  user.username
                )}
              </td>
              <td>
                {editingRows.includes(user.id) ? (
                  <input
                    type="text"
                    value={user.fullName}
                    onChange={(e) => saveData(user.id, "fullName", e.target.value)}
                  />
                ) : (
                  user.fullName
                )}
              </td>
              <td>
                {editingRows.includes(user.id) ? (
                  <input
                    type="password"
                    value={user.password}
                    onChange={(e) => saveData(user.id, "password", e.target.value)}
                  />
                ) : (
                  user.password
                )}
              </td>
              <td>
                {editingRows.includes(user.id) ? (
                  <input
                    type="text"
                    value={user.address1}
                    onChange={(e) => saveData(user.id, "address1", e.target.value)}
                  />
                ) : (
                  user.address1
                )}
              </td>
              <td>
                {editingRows.includes(user.id) ? (
                  <input
                    type="text"
                    value={user.address2}
                    onChange={(e) => saveData(user.id, "address2", e.target.value)}
                  />
                ) : (
                  user.address2
                )}
              </td>
              <td>
                {editingRows.includes(user.id) ? (
                  <input
                    type="text"
                    value={user.city}
                    onChange={(e) => saveData(user.id, "city", e.target.value)}
                  />
                ) : (
                  user.city
                )}
              </td>
              <td>
                {editingRows.includes(user.id) ? (
                  <input
                    type="text"
                    value={user.state}
                    onChange={(e) => saveData(user.id, "state", e.target.value)}
                  />
                ) : (
                  user.state
                )}
              </td>
              <td>
                {editingRows.includes(user.id) ? (
                  <input
                    type="text"
                    value={user.zipCode}
                    onChange={(e) => saveData(user.id, "zipCode", e.target.value)}
                  />
                ) : (
                  user.zipCode
                )}
              </td>
              <td>
                {editingRows.includes(user.id) ? (
                    <button onClick={(e) => saveData(user.id, "username", (e.target as HTMLInputElement).value)}>Save</button>
                ) : (
                    <div>
                    <button onClick={() => toggleEdit(user.id)}>Edit</button>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </div>
                )}
                </td>
            </tr>
            
          ))}
          <tr>
            <td>
              <input
                type="text"
                placeholder="Username"
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Full Name"
                value={newUser.fullName}
                onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })}
              />
            </td>
            <td>
              <input
                type="password"
                placeholder="Password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Address 1"
                value={newUser.address1}
                onChange={(e) => setNewUser({ ...newUser, address1: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Address 2"
                value={newUser.address2}
                onChange={(e) => setNewUser({ ...newUser, address2: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="City"
                value={newUser.city}
                onChange={(e) => setNewUser({ ...newUser, city: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="State"
                value={newUser.state}
                onChange={(e) => setNewUser({ ...newUser, state: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Zip Code"
                value={newUser.zipCode}
                onChange={(e) => setNewUser({ ...newUser, zipCode: e.target.value })}
              />
            </td>
            <td>
              <button onClick={addNewUser}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ClientProfiles;
