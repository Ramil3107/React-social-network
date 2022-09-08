import { useState } from "react"
import s from "./FindUsers.module.css"



const Pagination = ({ usersTotalCount, pageUsersLimit, onPageChanged, currentPage, portionSize = 20 }) => {

    let pagesCount = Math.ceil(usersTotalCount / pageUsersLimit)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let portionFirstPageNumber = (portionNumber - 1) * portionSize + 1
    let portionLastPageNumber = portionNumber * portionSize


    return (
        <div className={s.paginationWrapper}>
            <button disabled={portionNumber <= 1} onClick={() => setPortionNumber(portionNumber - 1)} >Prev</button>
            <span className={s.pages}>
                {
                    pages
                        .filter(p => p >= portionFirstPageNumber && p <= portionLastPageNumber)
                        .map(p => {
                            return (
                                <span
                                    key={p}
                                    onClick={() => onPageChanged(p)}
                                    className={currentPage === p ? s.selectedPage : s.page}
                                >
                                    {p}
                                </span>
                            )
                        })
                }
            </span>
            <button disabled={portionNumber > portionCount} onClick={() => setPortionNumber(portionNumber + 1)} >Next</button>
        </div>
    )
}

export default Pagination

