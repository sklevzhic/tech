import s from "../Users/Users.module.css";
import {useState} from "react";

const Paginator = ({totalUsers, rowsPerPage, currentPage, onSelectPage, portionSize = 10}) => {

    let countPages = Math.ceil(totalUsers / rowsPerPage);
    let pages = [];
    for (let i = 1; i <= countPages; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(countPages / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize
    let paginationElements = pages
        .filter(el => el >= leftPortionPageNumber && el <= rightPortionPageNumber)
        .map(el => {
            return <li
                key={el}
                className={currentPage === el ? 'active' : 'waves-effect'}
                onClick={() => onSelectPage(el)}
            >
                <a href="#!">{el}</a>
            </li>
        })

    return (
        <ul className={"pagination " + s.pagination1}>
            {
                portionNumber > 1 ? <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>left</button> : null
            }
            {paginationElements}
            {
                portionNumber < portionCount ? <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>left</button> : null
            }
        </ul>
    )
}

export default Paginator