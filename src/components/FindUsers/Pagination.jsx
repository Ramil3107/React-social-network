import s from "./FindUsers.module.css"



const Pagination = ({ usersTotalCount, pageUsersLimit, onPageChanged, currentPage }) => {

    let pagesCount = Math.ceil(usersTotalCount / pageUsersLimit)
    let pages = []
    for (let i = 1; i <= pagesCount && i <= 30; i++) {
        pages.push(i)
    }

    return (
        <div className={s.pages}>
            {
                pages.map(p => <span
                    key={p}
                    onClick={() => onPageChanged(p)}
                    className={currentPage === p ? s.selectedPage : s.page}>
                    {p}
                </span>)
            }
        </div>
    )
}

export default Pagination

