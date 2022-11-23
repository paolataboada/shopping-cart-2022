import React, { useEffect } from 'react';
import OverviewBar from '../components/OverviewBar';
import Pagination from '../components/Pagination';

const History = ({ records, itemsPerPage, totalItems, paginateItems, currentPage }) => {

    useEffect(() => {
        paginateItems(1);
    }, [])
    
    
    return (
        <div className='history-container'>
            <OverviewBar />
            <section className='history-section'>
                <div className='history-header'>
                    <h3 className='mb-0'>Shopping history</h3>
                </div>
                <div className='history-table table-responsive-sm'>
                    <table className="table table-hover mt-3 mb-0">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">Product</th>
                                <th scope="col">Category</th>
                                <th scope="col" style={{textAlign: "right"}}>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                records.map((record, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{record.purchaseDate}</td>
                                        <td>{record.nameProduct} ({record.quantityProducts})</td>
                                        <td>{record.categoryProduct}</td>
                                        <td style={{textAlign: "right"}}>s/.{Number(record.totalPricePaid).toFixed(2)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className='pagination-section'>
                        <Pagination itemsPerPage={itemsPerPage} totalItems={totalItems} paginateItems={paginateItems} currentPage={currentPage} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default History;

