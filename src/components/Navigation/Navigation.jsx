import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css"

const Navigation = () => {

    const isAuth = useSelector(state => state.auth.isAuth)

    const navItems = [
        {
            path: "/profile",
            name: "Profile"
        },
        {
            path: "/dialog",
            name: "Messages"
        },
        {
            path: "/users",
            name: "Find Users"
        },
        {
            path: "/news",
            name: "News"
        },
        {
            path: "/music",
            name: "Music"
        },
        {
            path: "settings",
            name: "Settings"
        },
        {
            path: "login",
            name: isAuth ? "Logout" : "Login"
        },
    ]

    return (
        <nav className={s.nav}>
            {
                navItems.map(item => {
                    return <div className={s.item}>
                        <NavLink to={item.path} className={({ isActive }) => (isActive ? [s.active] : [])}>{item.name}</NavLink>
                    </div>
                })
            }
        </nav>
    )
}

export default Navigation;