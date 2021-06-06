import React from 'react';
import style from './FriendsListItem.module.css'

const FriendsListItem = ({ id, name, avatar, isOnline }) => (
        <li className={style.item} key={id}>
            <p className={isOnline ? style.green : style.red}></p>
            <img className={style.avatar} src={avatar} alt="" width='70' />
            <h3 className={style.name}>{name}</h3>
        </li>
);

FriendsListItem.defaultProps = {
    avatar: 'no avatar'
}

export default FriendsListItem;