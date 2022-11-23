import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../assets/images/user-icon.jfif';
import discountPicture from '../assets/images/christmas-poster-discount.png';

const Sidebar = () => {
	const menuItem = [
		{
			path: "/",
			name: "Overview",
			icon: "bi bi-house-door"
		},
		{
			path: "/history",
			name: "History",
			icon: "bi bi-clock-history"
		}
	];

	return (
		<div className='sidebar-container'>
			<div style={{ height: "40%", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
				<figure className='sidebar-picture'>
					<img className="img-thumbnail" src={userPhoto} alt="" width="150px" />
					<strong style={{ background: "#fff" }}>User Guest</strong>
				</figure>
			</div>

			<div style={{ height: "60%" }}>
				<div className='menu-list'>
					{
						menuItem.map((item, index) => (
							<NavLink to={item.path} key={index} className='menu-item'>
								<button type="button" className="btn btn-outline-warning btn-lg px-2 py-1">
									<i className={item.icon}></i>
								</button>
								<span className='ps-2 menu-name'>{item.name}</span>
							</NavLink>
						))
					}
					<img src={discountPicture} alt="Discount offer picture" style={{ marginTop: "65px" }} />
				</div>
			</div>
		</div>
	)
}

export default Sidebar;