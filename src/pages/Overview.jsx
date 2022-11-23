import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import OverviewBar from '../components/OverviewBar';
import Products from '../components/Products';
import productsData from '../data/products-data';

const Overview = ({ products, itemsPerPage, totalItems, paginateItems, updatedData, currentPage, setProducts }) => {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        paginateItems(1);
    }, [])

    const addToCart = (event, dataProduct) => {
        event.target.classList.replace("bi-plus-circle-fill", "bi-bag-check");
        event.currentTarget.classList.replace("btn-outline-primary", "btn-success");
        event.currentTarget.classList.add("none-event");
        console.log(event.currentTarget)
        setCartProducts([...cartProducts, { ...dataProduct, quantity: 1 }]);
    };

    // Filter products
    const filterByCategory = (categoryName) => {
        const productsByCategorie = productsData.filter((product) =>
            categoryName === 'All' ? productsData : (product.category.indexOf(categoryName) !== -1)
        );
        updatedData(productsByCategorie);
        paginateItems(1);
    };

    return (
        <div className='overview-container'>
            <OverviewBar cartProducts={cartProducts} showCart={true} />
            <Categories filterByCategory={filterByCategory} />
            <Products products={products} setProducts={setProducts} addToCart={addToCart} itemsPerPage={itemsPerPage} totalItems={totalItems} paginateItems={paginateItems} currentPage={currentPage} />
        </div>
    )
}

export default Overview;