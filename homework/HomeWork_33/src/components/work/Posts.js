import React, {useContext} from "react";
import {GlobalContext} from "./GlobalContextComponent";
import Users from "./Users";

const Posts = () => {

    const {posts} = useContext(GlobalContext)
    const {activeUser} = useContext(GlobalContext)
    return (
        <div style={{display: 'flex'}}>
            <Users/>
            <div>
            <div className = "active-user">
            Post from {!activeUser ? "Select User" : activeUser.name}
                </div>
                {
                    posts.map((post) => (
                            <div
                                key={post.id}
                            >
                                {post.title}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Posts;