import React from 'react';

const Profile = ({ data: { name, tag, location, avatar, stats:{folowers, likes, views} } }) => (
    <div className="profile">
        <div className="description">
            <img
                src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
                alt="Аватар пользователя" width='100'
                className="avatar"
            />
            <p className="name">{name}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{folowers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{likes}</span>
            </li>
        </ul>
    </div>
);

export default Profile;