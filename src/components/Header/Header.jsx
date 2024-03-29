import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = ({ isAuth, login, id }) => {
    return (
        <header className={s.header}>
            <img src='https://seeklogo.com/images/P/populous-logo-DBFF63BC36-seeklogo.com.png' />

            {
                isAuth ?
                    <p className={s.login}><b>Current User ID: </b>{id}</p> :
                    <NavLink className={s.login} to={"/login"}>Login</NavLink>
            }

        </header>
    )
}

export default Header;