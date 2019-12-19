import React from 'react';
import Proptypes from 'prop-types';
import duck from "../../img/duck.jpg";
import wolf from "../../img/wolf.png";
import panda from "../../img/panda.png";
const imgArray = [panda, duck,wolf]

const RoomList = props => {
  const { rooms, currentRoom, connectToRoom, currentUser } = props;
  const roomList = rooms.map(room => {
    const roomIcon = !room.isPrivate ? '🌐' : '🔒';
    const isRoomActive = room.id === currentRoom.id ? 'active' : '';

    return (
      <li
        className={isRoomActive}
        key={room.id}
        onClick={() => connectToRoom(room.id)}
      >
        <span className="room-icon"> <img src={imgArray[Math.floor((Math.random() * 3) )]} width="40" alt="duck" title="duck"/></span>
        {room.customData && room.customData.isDirectMessage ? (
          <span className="room-name">
            {room.customData.userIds.filter(id => id !== currentUser.id)[0]}
          </span>
        ) : (
          <span className="room-name">{room.name}</span>
        )}
      </li>
    );
  });
  return (
    <div className="rooms">
      <ul className="chat-rooms">{roomList}</ul>
    </div>
  );
};

RoomList.propTypes = {
  rooms: Proptypes.array.isRequired,
  currentRoom: Proptypes.object.isRequired,
  connectToRoom: Proptypes.func.isRequired,
  currentUser: Proptypes.object.isRequired,
};

export default RoomList;
