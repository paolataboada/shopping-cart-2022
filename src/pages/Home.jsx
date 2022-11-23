import React from 'react';
import NavPage from '../router/NavPage';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <div className='home-container'>
            <Sidebar />
            <NavPage />
        </div>
    )
}

export default Home;