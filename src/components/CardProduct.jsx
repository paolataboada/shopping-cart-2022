import React from 'react';

const CardProduct = ({ product, addToCart, index, increaseQuantityProduct, decreaseQuantityProduct, removeProduct }) => {
    return (
        <div className='card-product-container'>
            <figure className='card-product-picture'>
                <img src={product.image} alt="" width="120px" />
            </figure>
            <div className='card-product-description'>
                <div>
                    <h6 className='mb-0 pb-1 pt-2'>{product.name}</h6>
                    <span className='description'>{product.description.slice(0, 40)}...</span>
                    <span className='details'>
                        {product.description.slice(0, 20)}...
                    </span>
                </div>
                <div className='card-product-buttons'>
                    <span className='price'>s/.{Number(product.price).toFixed(2)}</span>
                    <span className='total-price'>s/.{Number(product.price) * product.quantity}</span>
                    <button type='button' onClick={(e) => addToCart(e, product)} className='btn btn-outline-primary border border-0 px-1 py-0'>
                        <i className="bi bi-plus-circle-fill"></i>
                    </button>
                </div>
            </div>
            <div className='card-product-in-cart'>
                <div className='checkbox-cart'>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => removeProduct(index)}>
                        <i className="bi bi-trash3"></i>
                    </button>
                </div>
                <div className='add-remove-cart'>
                    <button type='button' onClick={() => increaseQuantityProduct(index)} className='btn btn-outline-success border border-0 rounded-circle px-1 py-0'>
                        <i className="bi bi-plus-circle fs-4"></i>
                    </button>
                    <span className="fs-5 pb-1">{product.quantity}</span>
                    <button type='button' onClick={() => decreaseQuantityProduct(index)} className={`btn btn-outline-danger border border-0 rounded-circle px-1 py-0 ${product.quantity === 1 ? 'disabled' : ''}`}>
                        <i className="bi bi-dash-circle fs-4"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardProduct;