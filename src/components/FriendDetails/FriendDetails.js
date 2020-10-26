import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div>
            <h1>Friend Details : {friendId}</h1>
            <div className="container">
                <h1>Name : {friend.name}</h1>
                <h2>Email : {friend.email}</h2>
                <h2>Email : {friend.website}</h2>
                <h2>Email : {friend.phone}</h2>
            </div>

        </div>
    );
};

export default FriendDetails;