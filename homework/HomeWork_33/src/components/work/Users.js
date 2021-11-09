import React, {useContext} from "react";
import {GlobalContext} from "./GlobalContextComponent";

const Users = () => {
    const {users, setActiveUser} = useContext(GlobalContext)

    return (
        <div className = "users">
            {
                users.map((user) => {
                    return (
                        <div
                            key={user.id}
                            className = "users__active"
                            onClick={() =>{setActiveUser(user)}}
                        >
                            {user.name}
                        </div>
                    )


                })
            }
        </div>
    )
}

export default Users;