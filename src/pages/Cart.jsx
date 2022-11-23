import React, { useState } from 'react';
import CardProduct from '../components/CardProduct';
import OverviewBar from '../components/OverviewBar';
import { useLocation } from 'react-router-dom';
import { db } from '../services/firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import greenCheck from '../assets/images/check-circle.png';

const Cart = () => {
	const location = useLocation();
	const { state } = location; // Get products in cart from NavLink
	const [itemsInCart, setItemsInCart] = useState(state.cartProducts);
	const [successfulPurchase, setSuccessfulPurchase] = useState(false);

	// Increase quantity product in cart
	const increaseQuantityProduct = (indexProduct) => {
		const itemsUpdated = itemsInCart.map((item, index) => {
			return indexProduct === index ? { ...item, quantity: item.quantity + 1 } : item
		});
		setItemsInCart(itemsUpdated);
	};

	// Decrease quantity product in cart
	const decreaseQuantityProduct = (indexProduct) => {
		const itemsUpdated = itemsInCart.map((item, index) => {
			return indexProduct === index ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
		});
		setItemsInCart(itemsUpdated);
	};

	// Remove product from cart
	const removeProduct = (indexProduct) => {
		if (window.confirm('Are you sure to remove this product from the cart?')) {
			const itemsUpdated = itemsInCart.filter((item, index) => indexProduct !== index);
			setItemsInCart(itemsUpdated);
		}
	};

	const recordsCollectionRef = collection(db, "totalRecords");

	// Add new document to "records" collection
	const createRecord = async () => {
		for (let i = 0; i < itemsInCart.length; i++) {
			const purchase = itemsInCart[i];
			await addDoc(recordsCollectionRef, {
				totalPricePaid: Number(purchase.price) * purchase.quantity,
				nameProduct: purchase.name,
				categoryProduct: purchase.category,
				purchaseDate: new Date().toLocaleString('en-ES'),
				quantityProducts: purchase.quantity
			});
		}
		setSuccessfulPurchase(true)
	}

	return (
		<div className='cart-container'>
			<OverviewBar showCart={false} />
			<div className='cart-bar'>
				<h3 className='mb-0'>Cart</h3>
			</div>

			<div className='cart-items-container'>
				<section className='cart-items-section'>
					<div className='cart-items-header'>
						<h5 className='mb-0'>Items ({!successfulPurchase ? itemsInCart.length : 0})</h5>
						{/* <button type="button" className="btn btn-light px-2 py-1">
							<i className="bi bi-trash3"></i>
						</button> */}
					</div>

					<div className='cart-items-content'>
						{
							!successfulPurchase ?
								itemsInCart.length > 0 ?
									itemsInCart.map((product, index) => (
										<CardProduct key={product.id} product={product} index={index} increaseQuantityProduct={increaseQuantityProduct} decreaseQuantityProduct={decreaseQuantityProduct} removeProduct={removeProduct} />
									)) : "There are no products in the cart"
								:
								<div>
									Successful purchase!
									<img src={greenCheck} alt="" width="25px" className='ms-1' />
								</div>
						}
					</div>
				</section>

				<section className='cart-total-section'>
					{
						itemsInCart.length !== 0 && !successfulPurchase ?
							<div className='cart-total-resume'>
								<div>
									<h4>Resume</h4>
									<div className='total-amount'>
										<strong>Total to pay</strong>
										<span> s/.
											{
												itemsInCart
													.map((cartItem) => Number(cartItem.price) * cartItem.quantity)
													.reduce((total, value) => total + value, 0)
											}
										</span>
									</div>
								</div>
								<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#formPaymentModal">
									Pay now
								</button>
							</div> : ''
					}
					<div className="modal fade" id="formPaymentModal" tabindex="-1" aria-labelledby="formPaymentModalLabel" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title text-danger" id="formPaymentModalLabel">Payment Form</h5>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body" style={{ padding: "20px 30px" }}>
									<form action className="form needs-validation" novalidate>
										<div className="row">
											<div className="col-12 mb-3">
												<div>
													<input type="text" className="form-control" placeholder="XXXX-XXXX-XXXX-XXXX" required />
													<label>Card Number</label>
												</div>
											</div>
											<div className="col-6 mb-3">
												<div>
													<input type="text" className="form-control" placeholder="Ex. 05/24" required />
													<label>MM / YY</label>
												</div>
											</div>
											<div className="col-6 mb-3">
												<div>
													<input type="password" className="form-control" placeholder="123" required />
													<label>CVV code</label>
												</div>
											</div>
											<div className="col-12 mb-3">
												<div>
													<input type="text" className="form-control" placeholder="Your name" required />
													<label>Name on the card</label>
												</div>
											</div>
											<div className="col-12 mb-3">
												<div type="submit" onClick={() => createRecord()} className="btn btn-success w-100" data-bs-dismiss="modal">Submit</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Cart;