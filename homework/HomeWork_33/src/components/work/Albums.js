import React, {useContext} from "react";
import {GlobalContext} from "./GlobalContextComponent";
import Users from "./Users";

const Albums = () => {

    const {albums} = useContext(GlobalContext)
    const {activeUser} = useContext(GlobalContext)
    return (
        <div style={{display: 'flex'}}>
            <Users/>
            <div>
            <div className = "active-user">
                Album from {!activeUser ? "Select User" : activeUser.name}
                </div>
                {
                    albums.map((album) => (
                            <div
                                key={album.id}
                            >
                                {album.title}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Albums;