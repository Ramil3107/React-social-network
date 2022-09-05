import React from "react";
import Preloader from "../common/Preloader/Preloader";
import Pagination from "./Pagination";
import Users from "./Users";
import UserSearch from "./UserSearch";


const FindUsers = ({
    usersTotalCount,
    pageUsersLimit,
    onPageChanged,
    currentPage,
    setFindUserName,
    findUserName,
    onSearchUser,
    users,
    onFollow,
    onUnfollow,
    isFollowInProgress,
    isFetching }) => {

    return <div>
        <Pagination
            usersTotalCount={usersTotalCount}
            pageUsersLimit={pageUsersLimit}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
        />

        <UserSearch
            setFindUserName={setFindUserName}
            onSearchUser={onSearchUser}
            findUserName={findUserName}
        />

        {
            isFetching ?
                <Preloader /> :
                <Users
                    users={users}
                    onFollow={onFollow}
                    onUnfollow={onUnfollow}
                    isFollowInProgress={isFollowInProgress}
                />
        }

    </div>
}

export default FindUsers