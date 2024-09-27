import React from 'react';
import UserCard from '../UserCard/UserCard.jsx';
import './UserList.css';

const UserList = ({ userData }) => {

    return (
        <div className="user-list">
            {userData.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserList;
