import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
    const [friend, setFriend] = useState([]);
    //console.log(friend.length);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users/';
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, []);
    return (
        <div>
            <h1>Number of Friend :{friend.length} </h1>
            {
                friend.map(fd => <Friend friend={fd}></Friend>)
            }
        </div>

    );
};

export default Home;