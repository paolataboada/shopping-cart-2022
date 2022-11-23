import React from 'react';
import categories from '../data/categories-data';

const Categories = ({ filterByCategory }) => {
    return (
        <div className='categories-container'>
            {
                categories.map((category, index) => (
                    <button key={index} type='button' value={category.name} onClick={() => filterByCategory(category.name)} className='btn btn-outline-dark px-2 py-1 categorie-card'>
                        <span className='categorie-name'>{category.name}</span>
                        <i className={category.icon}></i>
                    </button>
                ))
            }
        </div>
    )
}

export default Categories;