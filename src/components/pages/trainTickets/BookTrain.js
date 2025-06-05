import React, { useState } from 'react';
import styled from 'styled-components'

function BookTrain() {
  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata',
    'Hyderabad', 'Pune', 'Ahmedabad', 'Surat', 'Jaipur'
  ];

  const mockTrains = [
    {
      id: 1,
      trainName: 'Rajdhani Express',
      trainNumber: '12301',
      departure: '18:00',
      arrival: '08:00+1',
      duration: '14h',
      price: 1450,
      class: 'AC 2 Tier',
      seatsAvailable: 20,
      rating: 4.5
    },
    {
      id: 2,
      trainName: 'Duronto Express',
      trainNumber: '12247',
      departure: '20:30',
      arrival: '11:00+1',
      duration: '14h 30m',
      price: 1300,
      class: 'Sleeper',
      seatsAvailable: 50,
      rating: 4.0
    },
    {
      id: 3,
      trainName: 'Shatabdi Express ',
      trainNumber: '12009',
      departure: '06:00',
      arrival: '14:00',
      duration: '8h',
      price: 950,
      class: 'AC Chair Car',
      seatsAvailable: 35,
      rating: 4.2
    }
  ];

  const [fromCity, setFromCity ] = useState('')
  const [ toCity,setToCity] = useState('')
  const [travelDate , setTravelDate] = useState('');
  const [ trains, setTrains ] = useState([])

  const handleSearch = () => {
    if ( fromCity && toCity && travelDate ) {
      setTrains(mockTrains);

    } else {
      alert('Please select all fields.')
    }
  };

  return (
    <Container>
      <Title> Train Tickets Booking</Title>
      <Form>
        <Select value={fromCity} onChange={e => setFromCity(e.target.value)}>
          <option value="">From Station</option>
          {cities.map(city => <option key={city} value={city}>{city}</option>)}
        </Select>

        <Select value={toCity} onChange={e => setToCity(e.target.value)}>
          <option value="">To Station</option>
          {cities.map(city => <option key={city} value={city}>{city}</option>)}
        </Select>

        <Input type="date" value={travelDate} onChange={e => setTravelDate(e.target.value)} />

        <Button onClick={handleSearch}>Search</Button>
      </Form>

      {trains.map( train => (
        <TrainCard key={ train.id}>
          <TrainName>{ train.trainName} ({ train.trainNumber})</TrainName>
          <TrainInfo>
            <div>{ train.class}</div>
            <div>{ train.departure} → {train.arrival}</div>
            <div>{train.duration}</div>
          </TrainInfo>
          <Extras>
            <Price>₹{train.price}</Price>
            <Seats>{train.seatsAvailable } seats available</Seats>
            <Rating>⭐ {train.rating}</Rating>
          </Extras>
        </TrainCard>
      ))}
    </Container>
  );
}



const Container = styled.div`
  max-width: 900px ;
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
  border: 1px solid #ccc;`;

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
  background-color: #e02020;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #1f6391;
  }
`;
//cards
const TrainCard = styled.div`
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px ;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width:412px) {
	line-height: 20px;
  }
`;

const TrainName = styled.h3`
  margin-bottom: 10px;
  color: #2c3e50;

  @media (max-width: 412px) {
	text-align: center;
  }
`;

const TrainInfo = styled.div`
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
export default BookTrain;