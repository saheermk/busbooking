import React, { useState } from 'react';
import styled from 'styled-components';

function BookBus() {
  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata',
    'Hyderabad', 'Pune', 'Ahmedabad', 'Surat', 'Jaipur'
  ];

  const mockBuses = [
    {
      id: 1,
      operator: 'VRL Travels',
      busType: 'AC Sleeper',
      departure: '22:30',
      arrival: '06:00+1',
      duration: '7h 30m',
      price: 1200,
      rating: 4.2,
      reviews: 1250,
      amenities: ['wifi', 'charging', 'blanket', 'water'],
      seats: 40,
      availableSeats: 12
    },
    {
      id: 2,
      operator: 'SRS Travels',
      busType: 'AC Semi Sleeper',
      departure: '23:00',
      arrival: '06:30+1',
      duration: '7h 30m',
      price: 980,
      rating: 4.0,
      reviews: 890,
      amenities: ['charging', 'water'],
      seats: 35,
      availableSeats: 8
    },
    {
      id: 3,
      operator: 'Orange Travels',
      busType: 'AC Seater',
      departure: '08:00',
      arrival: '15:30',
      duration: '7h 30m',
      price: 750,
      rating: 3.8,
      reviews: 567,
      amenities: ['wifi', 'charging'],
      seats: 45,
      availableSeats: 20
    }
  ];

  const [ fromCity , setFromCity] = useState('');
  const [toCity, setToCity ] = useState('');
  const [travelDate,setTravelDate] = useState('');
  const [buses, setBuses] = useState([]);

  const handleSearch = () => {
    if (fromCity && toCity && travelDate) {
      setBuses(mockBuses);
    } else {
      alert("Please select all fields.");
    }
  };

  return (
    <Container>
      <Title>Bus Booking</Title>
      <Form>
        <Select value={fromCity} onChange={e => setFromCity(e.target.value)}>
          <option value="">From City</option>
          {cities.map(city => <option key={city} value={city}>{city}</option>)}
        </Select>

        <Select value={toCity} onChange={e => setToCity(e.target.value)}>
          <option value="">To City</option>
          {cities.map(city => <option key={city} value={city}>{city}</option>)}
        </Select>

        <Input type="date" value={ travelDate} onChange={e => setTravelDate(e.target.value)} />

        <Button onClick={handleSearch}>Search</Button>
      </Form>

      {buses.map(bus => (
        <BusCard key={ bus.id}>
          <Operator>{bus.operator }</Operator>
          <BusInfo>
            <div>{bus.busType }</div>
            <div>{bus.departure} → {bus.arrival}</div>
            <div>{bus.duration}</div>
          </BusInfo>
          <Extras>
            <Price>₹{bus.price}</Price>
            <Seats>{bus.availableSeats} seats left</Seats>
            <Rating>⭐ {bus.rating} ({bus.reviews})</Rating>
            <Amenities>{ bus.amenities.join(', ')}</Amenities>
          </Extras>
        </BusCard>
      ))}
    </Container>
  );
}

export default BookBus;


const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 32px;
  color: #2c3e50;
`;

const Form = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #2980b9;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #1f6391;
  }
`;
//Booking
const BusCard = styled.div`
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
   
  @media (max-width:412px) {
	line-height: 20px;
  }

`;

const Operator = styled.h3`
  margin-bottom: 10px;
  color: #2c3e50;

  @media (max-width: 412px) {
	text-align: center;
  }
`;

const BusInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: #555;
  margin-bottom: 10px;

  @media (max-width: 412px) {
	flex-direction: column;
	align-items: center;
  }
`;

const Extras = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 412px) {
	align-items: center;
	text-align: center;
  }
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #27ae60;
`;

const Seats = styled.div`
  color: #e67e22;
`;

const Rating = styled.div`
  color: #f39c12;
`;

const Amenities = styled.div`
  font-size: 14px;
  color: #7f8c8d;
`;
