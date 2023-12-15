//creating the context from the react's createContext method and that is to be linked to the componentC, componentE and componentF .js
import React from "react";
const UserContext = React.createContext('FullStack Developer');


const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserConsumer, UserProvider }
export default UserContext