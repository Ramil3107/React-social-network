import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./Navigation.module.css"

const Navigation = (props) => {
    return (<nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? [s.active] : [])}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialog" className={({ isActive }) => (isActive ? [s.active] : [])}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" className={({ isActive }) => (isActive ? [s.active] : [])}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" className={({ isActive }) => (isActive ? [s.active] : [])}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="settings" className={({ isActive }) => (isActive ? [s.active] : [])}>Settings</NavLink>
        </div>
    </nav>
    )
}

export default Navigation;