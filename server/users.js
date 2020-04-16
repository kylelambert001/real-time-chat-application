const users = [];

const addUser = ({ name, room, id }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const userExists = users.some(
    (user) => user.name === name && user.room === room
  );

  if (userExists) {
    return { error: "Username is already taken." };
  }

  const user = {
    name,
    room,
    id,
  };

  users.push(user);
  return { user };
};

const getUser = (id) => users.find((user) => user.id === id);

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1);
  }
};

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, getUser, removeUser, getUsersInRoom };
