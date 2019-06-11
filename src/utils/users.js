const users = []

//addUser, removeUser getUser getUsersInRoom

const addUser = ({id, username, room}) => {
    //clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate the data
    if(!username || !room){
        return {
            error: 'Username and room is necessasry!'
        }
    }

    //check for existing user
    const existingUSer = users.find((user) => {
        return user.username === username && user.room === room
    }) 
    // validate username
    if(existingUSer){
        return {
            error: 'Username is in use!'
        }
    }
    //store the user
    const user = {id, username, room} 
    users.push(user)
    return {
        user
    }
}

const removeUser = (id) => {
    //find index of user to be removed
    const index = users.findIndex((user) => {
        return user.id === id
    })

    //removing a user
    if(index !== -1){
        return users.splice(index, 1)[0]
    }

}

const getUser = (id) => {
    //find user
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    
    room = room.trim().toLowerCase()
    //find users in room
    const userInRoom = users.filter((user) => {
        return user.room === room
    })

    return userInRoom
}
// addUser({
//     id:22,
//     username:'h',
//     room:'l'
// })
// const res = getUser(22)
// console.log(res.room)

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}