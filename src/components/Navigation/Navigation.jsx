import React from "react";
import s from "./Navigation.module.css"

const Navigation = () => {
    return (<nav className={s.nav}>
        <div className={s.item}><a href="/profile">Profile</a></div>
        <div><a href="/dialog">Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
    </nav>
    )
}

export default Navigation;