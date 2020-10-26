import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    console.log(props.friend.name);
    const { name, id, email } = props.friend;
    return (
        <div className="container">
            <div className="box-style">
                <h1>{name}</h1>
                <p>{email}</p>

                <button className="Main-button"><Link to={`/friend/${id}`}>Friend Details</Link>
                </button>
            </div>
        </div>

    );
};

export default Friend;