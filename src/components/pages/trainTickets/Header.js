import React from 'react'
import styled from 'styled-components'
import Banner from '../../assets/images/banner.svg'

function Header() {
  return (
	<Container >
		<HeaderText>Train Ticket Booking </HeaderText>
	</Container>
  )
}

const Container = styled.div`
	background-image: url(${Banner});
	background-size: cover;
	background-position: center;
	height: 35vh;
	margin-top: 0;
	@media (max-width: 580px) {
		background-image: none;
		background-color: #e02020;
	}
`;
const HeaderText = styled.h1`
	color: #fff;
	font-size: 2.5rem;
	padding-top: 100px;
	padding-left: 75px;
	max-width: 450px;

	@media (max-width: 580px) {
    font-size: 1.8rem;
    padding-left: 20px;
    padding-top: 80px;
  }
`;
export default Header
