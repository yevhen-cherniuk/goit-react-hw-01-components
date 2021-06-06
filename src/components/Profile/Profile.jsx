import React from 'react';
import PropTypes from 'prop-types';
import style from './Profile.module.css'

const Profile = ({ data: { name, tag, location, avatar, stats:{folowers, likes, views} } }) => (
    <div className={style.profile}>
        <div className={style.description}>
            <img
                src={avatar}
                alt="Аватар пользователя" width='100'
                className={style.avatar}
            />
            <p className={style.name}>{name}</p>
            <p className={style.tag}>@{tag}</p>
            <p className={style.location}>{location}</p>
        </div>

        <ul className={style.stats}>
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

Profile.propTypes = {
    userData: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number),
  })
};
    
export default Profile;