import React from "react";
import UserCard from '../UserCard/UserCard';
import './UserList.css';

const UserList = ({ userData }) => {
    // Handle the case where no users exist
    if (!Array.isArray(userData) || userData.length === 0) {
        return <p>No users found.</p>; 
    }

    return (
        <div className="user-list">
            {userData.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserList;
