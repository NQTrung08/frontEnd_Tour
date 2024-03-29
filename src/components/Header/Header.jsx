import React, { useContext } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";

import { AuthContext } from "../../context/AuthContext";

const nav_links = [
	{
		path: "/home",
		display: "Home",
	},
	{
		path: "/about",
		display: "About",
	},
	{
		path: "/tours",
		display: "Tours",
	},
];

const Header = () => {
	const navigate = useNavigate();
	const { user, dispatch } = useContext(AuthContext);
	console.log(user);

	const logout = () => {
		dispatch({ type: "LOGOUT" });
		navigate("/");
	};
	return (
		<header className="header sticky__header">
			<Container>
				<Row>
					<div className="nav_wrapper d-flex align-items-center justify-content-between ">
						{/*----------- Logo------------ */}
						<div className="logo">
							<img src={logo} alt="" />
						</div>

						{/*----------------- Menu------------------ */}
						<div className="navigation">
							<ul className="menu d-flex align-items-center gap-5">
								{nav_links.map((link, index) => {
									return (
										<li className="nav__item" key={index}>
											<NavLink
												to={link.path}
												className={(navClass) => {
													return navClass.isActive ? "active__link" : "";
												}}
											>
												{link.display}
											</NavLink>
										</li>
									);
								})}
							</ul>
						</div>

						{/* Button Login/ Register */}

						<div className="nav__right d-flex align-items-center gap-4">
							<div className="nav__btns d-flex align-items-center gap-4">
								{user ? (
									<>
										<h5 className="mb-0">{user.data.userName}</h5>
										<Button className="btn btn-dark" onClick={logout}>
											Logout
										</Button>
									</>
								) : (
									<>
										<Button className="btn secondary__btn">
											<Link to="/login">Login</Link>
										</Button>
										<Button className="btn primary__btn">
											<Link to="/register">Register</Link>
										</Button>
									</>
								)}
							</div>

							<span className="mobile__menu">
								<i className="ri-menu-line"></i>
							</span>
						</div>
					</div>
				</Row>
			</Container>
		</header>
	);
};
export default Header;
