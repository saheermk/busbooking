import React from 'react'
import styled from 'styled-components';
import logo from '../assets/images/logo.png'
import { NavLink, useNavigate } from 'react-router-dom';

function Nav() {
	const navigate = useNavigate()
  return (
	<Header>
		<Left>
			<Logo src={logo} onClick={()=> navigate('/')} />
			<NavItem to='/'>Bus Tickets</NavItem>
			<NavItem to='/train' >Train Tickets</NavItem>
		</Left>
		<Right>
			<NavItem to='/bookings'>Bookings</NavItem>
			<NavItem  to='/help'>Help</NavItem>
			<NavItem  to='/account'>Account</NavItem>
		</Right>
	</Header>
  )
}

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 1rem;
	max-width: 1200px;
	margin: 0 auto;
	height: 50px;
	`;
const Left = styled.div`
	display: flex;
	align-items: center;
	gap : 24px;
	font-size:1.2rem;

	@media (max-width: 768px){
		width: 100%;
		justify-content: space-evenly;
	}
	`;
const Logo = styled.img`
	height: 3.5rem;
	cursor: pointer;
	@media (max-width: 768px){
		display: none;
	}
	`;
const NavItem = styled(NavLink)`
	cursor: pointer;
	text-decoration: 0;
	color: #000;

	&:hover{
	color: #e02020;
	}
	&.active{
	color: #e02020;
	}	
	`;
const Right = styled.div`
	display: flex;
	align-items: center;
	gap : 24px;
	font-size:1.2rem;
	//responsive 
	@media (max-width: 768px) {
		display: none;
	}
	`;

export default Nav
