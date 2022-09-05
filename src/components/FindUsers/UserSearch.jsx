import s from "./FindUsers.module.css"


const UserSearch = ({ setFindUserName, onSearchUser, findUserName }) => {
    return (
        <div className={s.findUser}>
            <input
                placeholder="find user..."
                value={findUserName}
                onChange={(e) => setFindUserName(e.target.value)}
                type="text" />

            <button onClick={onSearchUser}>Find</button>
        </div>
    )
}

export default UserSearch