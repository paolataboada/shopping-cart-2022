import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginateItems, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div aria-label="Page navigation example">
            <ul className="pagination mb-0">
                <li className="page-item">
                    <a className="page-link" aria-label="Previous" onClick={() => paginateItems(currentPage > 1 ? currentPage - 1 : 1)}>
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {
                    pageNumbers.map((number) => (
                        <li key={number} className="page-item">
                            <a onClick={() => paginateItems(number)} className="page-link">{number}</a>
                        </li>
                    ))
                }
                <li className="page-item">
                    <a className="page-link" aria-label="Next" onClick={() => paginateItems(currentPage === pageNumbers.length ? currentPage : currentPage + 1)}>
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Pagination;