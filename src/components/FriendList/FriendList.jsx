import React from 'react';
import FriendsListItem from './FriendsListItem';
import PropTypes from 'prop-types';
import style from './FriendList.module.css'


const FriendsList = ({ friends }) => {
    console.log(friends);
    return (
        <ul className={style.friendsList}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <FriendsListItem key={id} avatar={avatar} name={name} isOnline={isOnline} id={id}/>
                )
            
            })}
        </ul>
    );
};

export default FriendsList;

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
