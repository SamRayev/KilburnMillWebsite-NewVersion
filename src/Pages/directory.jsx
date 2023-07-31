import React, { useState } from "react";

// Component for individual rooms
const Room = ({ id, position, size, isSelected, onSelect }) => {
  const roomStyle = {
    position: "absolute",
    top: position.y,
    left: position.x,
    width: size.width,
    height: size.height,
    border: isSelected ? "2px solid red" : "1px solid black",
    background: isSelected ? "red" : "#e8e8e8",
    transition: isSelected ? ".1s" : ".1s",
    cursor: "pointer",
  };

  return <div style={roomStyle} onClick={() => onSelect(id)}></div>;
};

// Component for the floor plan containing all rooms
const FloorPlan = ({ rooms, selectedRoomId, onRoomSelect }) => {
  return (
    <div style={{ position: "relative", width: "500px", height: "500px" }}>
      {rooms.map((room) => (
        <Room
          key={room.id}
          id={room.id}
          position={room.position}
          size={room.size}
          isSelected={selectedRoomId === room.id}
          onSelect={onRoomSelect}
        />
      ))}
    </div>
  );
};

// Component for the room list
const RoomList = ({ rooms, onRoomSelect }) => {
  return (
    <ul>
      {rooms.map((room) => (
        <li key={room.id} onClick={() => onRoomSelect(room.id)}>
          Room {room.id}
        </li>
      ))}
    </ul>
  );
};

const Directory = () => {
  const [rooms, setRooms] = useState([
    { id: 1, position: { x: 51, y: 50 }, size: { width: 40, height: 130 } },
    { id: 2, position: { x: 90, y: 50 }, size: { width: 80, height: 140 } },
    { id: 3, position: { x: 158, y: 50 }, size: { width: 12, height: 90 } },
    { id: 4, position: { x: 158, y: 50 }, size: { width: 12, height: 45 } },
    { id: 5, position: { x: 169, y: 50 }, size: { width: 12, height: 90 } },
    { id: 6, position: { x: 169, y: 50 }, size: { width: 12, height: 45 } },
    { id: 7, position: { x: 200, y: 50 }, size: { width: 20, height: 30 } },
    { id: 8, position: { x: 200, y: 79 }, size: { width: 20, height: 40 } },
    { id: 9, position: { x: 200, y: 118 }, size: { width: 20, height: 40 } },
    { id: 10, position: { x: 200, y: 157 }, size: { width: 20, height: 20 } },
    { id: 11, position: { x: 219, y: 50 }, size: { width: 50, height: 127 } },
    { id: 12, position: { x: 268, y: 50 }, size: { width: 120, height: 127 }},
    { id: 13, position: { x: 268, y: 127 }, size: { width: 20, height: 50 }},
    { id: 14, position: { x: 287, y: 147 }, size: { width: 70, height: 30 }},
    { id: 15, position: { x: 387, y: 50 }, size: { width: 108, height: 50 }},
    { id: 16, position: { x: 387, y: 99 }, size: { width: 30, height: 78 }},
    { id: 17, position: { x: 416, y: 99 }, size: { width: 22, height: 58 }},
    { id: 18, position: { x: 437, y: 99 }, size: { width: 22, height: 58 }},
    { id: 19, position: { x: 458, y: 99 }, size: { width: 30, height: 58 }},
    { id: 20, position: { x: 487, y: 99 }, size: { width: 8, height: 58 }},
    { id: 21, position: { x: 416, y: 156 }, size: { width: 22, height: 21 }},
    { id: 22, position: { x: 437, y: 156 }, size: { width: 22, height: 21 }},
    { id: 23, position: { x: 458, y: 156 }, size: { width: 37, height: 21 }},
  ]);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const handleRoomSelect = (roomId) => {
    setSelectedRoomId(roomId);
  };

  return (
    <div className="directory">
      <div style={{ display: "flex", flexDirection: "column"}}>
        <FloorPlan rooms={rooms} selectedRoomId={selectedRoomId} onRoomSelect={handleRoomSelect} />
        <RoomList rooms={rooms} onRoomSelect={handleRoomSelect} />
      </div>
    </div>
  );
};

export default Directory;