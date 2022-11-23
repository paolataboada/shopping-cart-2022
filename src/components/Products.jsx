import React from 'react';
import CardProduct from './CardProduct';
import HeaderSection from './HeaderSection';
import Pagination from './Pagination';

const Products = ({ products, addToCart, itemsPerPage, totalItems, paginateItems, currentPage }) => {
    return (
        <div className='products-container pt-0'>
            <section className='header-section'>
                <HeaderSection />
            </section>
            <section className='cards-section'>
                {
                    products.length !== 0 ?
                        products.map((product) => (
                            <CardProduct key={product.id} product={product} addToCart={addToCart} />
                        )) : 'There are no products in this category'
                }
            </section>
            <section className='pagination-section'>
                <Pagination itemsPerPage={itemsPerPage} totalItems={totalItems} paginateItems={paginateItems} currentPage={currentPage} />
            </section>
        </div>
    )
}

export default Products;