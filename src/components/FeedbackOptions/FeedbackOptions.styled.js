import styled from '@emotion/styled';

export const FeedbackOptionsUl = styled.ul`
  display: flex;
  grid-gap: 30px;
  list-style: none;
`;

export const FeedbackBtn = styled.button`
  width: 200px;
  padding: 30px;
  font-size: 25px;
  border-radius: 15px;
  cursor: pointer;
  &:hover{
    background-color: pink;
    -webkit-transform: scale(1.1)
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    transition: 0.25s;
    font-size: 30px;
  }
`;
