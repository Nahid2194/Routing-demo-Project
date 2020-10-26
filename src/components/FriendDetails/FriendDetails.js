import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './FriendDetails.css';

const FriendDetails = () => {
    const [friend, setFriendDetails] = useState({});
    let { friendId } = useParams();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriendDetails(data))
    }, [])

    return (
        <div className="main-container">
            <h1 className="count">Friend Details and his ID :  {friendId}</h1>
            <div className="container details-boxing">
                <h1>Name : {friend.name}</h1>
                <h2>Email : {friend.email}</h2>
                <h2>Website : {friend.website}</h2>
                <h2>Contact Number : {friend.phone}</h2><br />
                <br />
                <button className="Main-button"><Link to="/">Main Page</Link></button>
            </div>

        </div>
    );
};

export default FriendDetails;