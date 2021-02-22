// find all the users that have not been linked
const {linked,allUsers} =require ('./users.js');

const isLinked=(user,linked)=>{
   let found= linked.find(userI=>{
       return userI.id == user.id
    })
    return found == undefined ;
}
const unlinked=(allUsers,linked)=>{
    return allUsers.filter(user=>{
         return isLinked(user,linked)
    })

}
console.log(unlinked(allUsers,linked));
