import React, { useState, useEffect } from "react";
import axios from "axios";

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null); // Track user being edited
    const [formData, setFormData] = useState({}); // Form data for editing
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [currentPage, setCurrentPage] = useState(1); // Track current page
    const [totalPages, setTotalPages] = useState(1); // Track total pages

    // Fetch Users for the current page
    useEffect(() => {
        fetchUsers(currentPage);
    }, [currentPage]);

    const fetchUsers = async (page) => {
        try {
            const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
            setUsers(response.data.data);
            setTotalPages(response.data.total_pages); // Set total pages for pagination
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    // Handle Delete User
    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://reqres.in/api/users/${id}`);
            setUsers(users.filter((user) => user.id !== id)); // Remove user locally
            setSuccessMessage("User deleted successfully.");
        } catch (error) {
            setErrorMessage("Failed to delete user.");
        }
    };

    // Handle Edit User
    const handleEdit = (user) => {
        setEditingUser(user.id); // Set the user being edited
        setFormData({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
        });
    };

    // Handle Update User
    const handleUpdate = async () => {
        try {
            await axios.put(`https://reqres.in/api/users/${editingUser}`, formData);
            setUsers(
                users.map((user) =>
                    user.id === editingUser
                        ? { ...user, ...formData }
                        : user
                )
            );
            setEditingUser(null); // Exit editing mode
            setSuccessMessage("User updated successfully.");
        } catch (error) {
            setErrorMessage("Failed to update user.");
        }
    };

    // Handle Form Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Pagination Navigation
    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page); // Set the current page
        }
    };

    return (
        <div className="users-list">
            <h1>User Management</h1>
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            {editingUser ? (
                // Edit Form
                <div>
                    <h2>Edit User</h2>
                    <form>
                        <input
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            placeholder="Last Name"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        <button type="button" onClick={handleUpdate}>
                            Save
                        </button>
                        <button type="button" onClick={() => setEditingUser(null)}>
                            Cancel
                        </button>
                    </form>
                </div>
            ) : (
                // User List
                <div>
                    <h2>Users</h2>
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>
                                <img src={user.avatar} alt={`${user.first_name} avatar`} />
                                <p>{`${user.first_name} ${user.last_name}`}</p>
                                <button onClick={() => handleEdit(user)}>Edit</button>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>

                    {/* Pagination Controls */}
                    <div className="pagination">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UsersList;