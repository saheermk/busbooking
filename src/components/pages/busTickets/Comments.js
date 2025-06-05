import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => {
        setComments(res.data);
      });
  }, []);

  return (
    <Container>
      <Title>Comments</Title>
      {comments?.slice(0, 10).map(comment => (
        <CommentCard key={comment.id}>
          <Name>{comment.name}</Name>
          <Email>{comment.email}</Email>
          <Body>{comment.body}</Body>
        </CommentCard>
      ))}
    </Container>
  );
}
const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 32px;
  color: #333;
`;

const CommentCard = styled.div`
  background: #fff;
  padding: 20px 25px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin-bottom: 20px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Name = styled.h4`
  margin: 0 0 8px 0;
  color: #222;
`;

const Email = styled.p`
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #666;
`;

const Body = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #444;
`;

export default Comments;
