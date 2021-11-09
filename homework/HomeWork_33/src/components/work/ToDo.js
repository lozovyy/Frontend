import React, {useContext} from "react";
import {GlobalContext} from "./GlobalContextComponent";
import Users from "./Users";

const ToDo = () => {

    const {todos} = useContext(GlobalContext)
    const {activeUser} = useContext(GlobalContext)
    return (
        <div style={{display: 'flex'}}>
            <Users/>
            <div>
                <div className = "active-user">
                ToDo from {!activeUser ? "Select User" : activeUser.name}
                </div>
                {
                    todos.map((todo) => (
                            <div
                                key={todo.id}
                                className={todo.completed ? "completed" : ""}
                            >
                                {todo.title}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default ToDo;