import styled from 'styled-components';

export const List = styled.ul`
  margin-left: 10px;
  list-style: none;
  padding: 0;
  width: 300px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid;

  box-shadow: rgba(0, 0, 0, 0.55) 10px 10px 5px 0px;
  border-radius: 5px;
`;
export const UserName = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`;
export const Img = styled.img`
  margin-right: 32px;
`;

export const Marker = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 32px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
