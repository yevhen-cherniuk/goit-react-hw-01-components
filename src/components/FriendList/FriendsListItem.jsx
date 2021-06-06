import React from 'react';


const FriendsListItem = ({ id, name, avatar, isOnline }) => (
        <li key={id}>
            <h3>{name}</h3>
            <p>{isOnline}</p>
            <img src={avatar} alt="" width='70' />
        </li>
);

FriendsListItem.defaultProps = {
    avatar: 'no avatar'
}

export default FriendsListItem;