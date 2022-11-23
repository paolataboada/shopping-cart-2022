import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Overview from '../pages/Overview';
import Cart from '../pages/Cart';
import History from '../pages/History';
import productsData from '../data/products-data';
import { db } from '../services/firebase-config';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

const NavPage = () => {
    const [products, setProducts] = useState(productsData);
    const [records, setRecords] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [] = useState(5);

    // Update items by category
    const updatedData = (updatedList) => {
        setProducts(updatedList);
    };

    // Get items to show by pagination
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);
    const currentRecords = records.slice(indexOfFirstPost, indexOfLastPost);

    // Change page by pagination
    const paginateItems = pageNumber => setCurrentPage(pageNumber);

    // Get records
    const recordsCollectionRef = collection(db, "totalRecords");
    useEffect(() => {
        const queryOrder = query(recordsCollectionRef, orderBy("purchaseDate", "desc"));
        const fetchedRecords = onSnapshot(queryOrder, (snapshot) => {
            setRecords(snapshot.docs.map((doc) => doc.data()));
        });

        return fetchedRecords;
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Overview products={currentProducts} itemsPerPage={itemsPerPage} totalItems={products.length} paginateItems={paginateItems} updatedData={updatedData} currentPage={currentPage} />} />
            <Route path="/history" element={<History records={currentRecords} itemsPerPage={itemsPerPage} totalItems={records.length} paginateItems={paginateItems} currentPage={currentPage} />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}

export default NavPage;