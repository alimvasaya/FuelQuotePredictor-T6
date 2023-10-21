'use client';
import React, { useState } from 'react';

const ProfileTable = () => {
  // Sample data for client users
  const [clientUsers, setClientUsers] = useState([
    {
      id: 1,
      username: 'user1',
      fullName: 'User One',
      password: 'password1',
      address1: '123 Main St',
      address2: '',
      city: 'City1',
      state: 'State1',
      zipCode: '12345',
    },
    // Add more user data as needed
  ]);

  // State to track which rows are in edit mode
  const [editingRows, setEditingRows] = useState<number[]>([]);
  const [newUser, setNewUser] = useState({
    username: '',
    fullName: '',
    password: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
  });

  // Function to toggle edit mode for a specific row
  const toggleEdit = (userId: number) => {
    setEditingRows((prevRows) =>
      prevRows.includes(userId)
        ? prevRows.filter((id) => id !== userId)
        : [...prevRows, userId],
    );
  };

  // Function to save edited data for a specific user
  const saveData = (userId: number, field: string, value: string) => {
    setClientUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, [field]: value } : user,
      ),
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
      username: '',
      fullName: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
    });
  };

  // Function to delete a user
  const deleteUser = (userId: number) => {
    setClientUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== userId),
    );
  };

  return (
    <section className="flex flex-col items-center justify-center space-y-8 pt-12">
      <h1 className="text-3xl font-semibold uppercase tracking-widest text-white">
        Client Profiles
      </h1>

      <div className="flex w-screen items-center justify-center">
        <table className="w-11/12 table-auto overflow-hidden rounded-lg text-center tracking-wide text-white">
          {/* Table Headers */}
          <thead className="border-b-2 border-slate-900 bg-sky-800/40">
            <tr>
              <th className="p-3 font-semibold">Username</th>
              <th className="p-3 font-semibold">Full Name</th>
              <th className="p-3 font-semibold">Password</th>
              <th className="p-3 font-semibold">Address 1</th>
              <th className="p-3 font-semibold">Address 2</th>
              <th className="p-3 font-semibold">City</th>
              <th className="p-3 font-semibold">State</th>
              <th className="p-3 font-semibold">Zip Code</th>
              <th className="p-3 font-semibold">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-white">
            {/* Client Data Row*/}
            {clientUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b-2 border-slate-900 bg-sky-700/60"
              >
                {/* Username or Email */}
                <td>
                  {editingRows.includes(user.id) ? (
                    <input
                      type="text"
                      value={user.username}
                      onChange={(e) =>
                        saveData(user.id, 'username', e.target.value)
                      }
                      className="admin-input"
                    />
                  ) : (
                    user.username
                  )}
                </td>

                {/* Fullname */}
                <td className="p-4">
                  {editingRows.includes(user.id) ? (
                    <input
                      type="text"
                      value={user.fullName}
                      onChange={(e) =>
                        saveData(user.id, 'fullName', e.target.value)
                      }
                      className="admin-input"
                    />
                  ) : (
                    user.fullName
                  )}
                </td>

                {/* Password */}
                <td className="p-4">
                  {editingRows.includes(user.id) ? (
                    <input
                      type="password"
                      value={user.password}
                      onChange={(e) =>
                        saveData(user.id, 'password', e.target.value)
                      }
                      className="admin-input"
                    />
                  ) : (
                    user.password
                  )}
                </td>

                {/* Address 1 */}
                <td className="p-4">
                  {editingRows.includes(user.id) ? (
                    <input
                      type="text"
                      value={user.address1}
                      onChange={(e) =>
                        saveData(user.id, 'address1', e.target.value)
                      }
                      className="admin-input"
                    />
                  ) : (
                    user.address1
                  )}
                </td>

                {/* Address 2 */}
                <td className="p-4">
                  {editingRows.includes(user.id) ? (
                    <input
                      type="text"
                      value={user.address2}
                      onChange={(e) =>
                        saveData(user.id, 'address2', e.target.value)
                      }
                      className="admin-input"
                    />
                  ) : (
                    user.address2
                  )}
                </td>

                {/* City */}
                <td className="p-4">
                  {editingRows.includes(user.id) ? (
                    <input
                      type="text"
                      value={user.city}
                      onChange={(e) =>
                        saveData(user.id, 'city', e.target.value)
                      }
                      className="admin-input"
                    />
                  ) : (
                    user.city
                  )}
                </td>

                {/* State */}
                <td className="p-4">
                  {editingRows.includes(user.id) ? (
                    <input
                      type="text"
                      value={user.state}
                      onChange={(e) =>
                        saveData(user.id, 'state', e.target.value)
                      }
                      className="admin-input"
                    />
                  ) : (
                    user.state
                  )}
                </td>

                {/* Zipcode */}
                <td className="p-4">
                  {editingRows.includes(user.id) ? (
                    <input
                      type="text"
                      value={user.zipCode}
                      onChange={(e) =>
                        saveData(user.id, 'zipCode', e.target.value)
                      }
                      className="admin-input"
                    />
                  ) : (
                    user.zipCode
                  )}
                </td>

                {/* Functionalities */}
                <td className="max-h-max px-4 py-4">
                  {editingRows.includes(user.id) ? (
                    <button
                      onClick={(e) =>
                        saveData(
                          user.id,
                          'username',
                          (e.target as HTMLInputElement).value,
                        )
                      }
                      className="bg-green-500 px-2 py-1 text-white"
                    >
                      Save
                    </button>
                  ) : (
                    <div className="flex flex-col gap-y-4">
                      <button
                        onClick={() => toggleEdit(user.id)}
                        className="admin-butoon border-yellow-500/50 bg-yellow-500/50
                       hover:border-yellow-500/70 hover:bg-yellow-500/70"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="admin-butoon border-red-500/50 bg-red-500/50
                      hover:border-red-500/70 hover:bg-red-500/70"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}

            {/* Admin Input Forms Row*/}
            <tr className="border-b-2 border-slate-900 bg-sky-700/60">
              {/* Username or Email */}
              <td className="p-4">
                <input
                  type="text"
                  placeholder="Username"
                  value={newUser.username}
                  onChange={(e) =>
                    setNewUser({ ...newUser, username: e.target.value })
                  }
                  className="admin-input"
                />
              </td>

              {/* Fullname */}
              <td className="p-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={newUser.fullName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, fullName: e.target.value })
                  }
                  className="admin-input"
                />
              </td>

              {/* Password */}
              <td className="p-4">
                <input
                  type="password"
                  placeholder="Password"
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                  className="admin-input"
                />
              </td>

              {/* Address 1 */}
              <td className="p-4">
                <input
                  type="text"
                  placeholder="Address 1"
                  value={newUser.address1}
                  onChange={(e) =>
                    setNewUser({ ...newUser, address1: e.target.value })
                  }
                  className="admin-input"
                />
              </td>

              {/* Address 2 */}
              <td className="p-4">
                <input
                  type="text"
                  placeholder="Address 2"
                  value={newUser.address2}
                  onChange={(e) =>
                    setNewUser({ ...newUser, address2: e.target.value })
                  }
                  className="admin-input"
                />
              </td>

              {/* City */}
              <td className="p-4">
                <input
                  type="text"
                  placeholder="City"
                  value={newUser.city}
                  onChange={(e) =>
                    setNewUser({ ...newUser, city: e.target.value })
                  }
                  className="admin-input"
                />
              </td>

              {/* State */}
              <td className="p-4">
                <input
                  type="text"
                  placeholder="State"
                  value={newUser.state}
                  onChange={(e) =>
                    setNewUser({ ...newUser, state: e.target.value })
                  }
                  className="admin-input"
                />
              </td>

              {/* Zipcode */}
              <td className="p-4">
                <input
                  type="text"
                  placeholder="Zip Code"
                  value={newUser.zipCode}
                  onChange={(e) =>
                    setNewUser({ ...newUser, zipCode: e.target.value })
                  }
                  className="admin-input"
                />
              </td>

              {/* Functionalities */}
              <td className="p-4">
                <button
                  onClick={addNewUser}
                  className="admin-butoon border-green-500/50 bg-green-500/50
                  hover:border-green-500/70 hover:bg-green-500/70"
                >
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProfileTable;
