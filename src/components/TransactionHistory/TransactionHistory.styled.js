import styled from 'styled-components';

export const Table = styled.table`
  margin-left: 10px;
  width: 600px;
  border-radius: 3px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
  text-align: center;
  table-layout: fixed;
  border: 1px solid;
`;
export const Head = styled.thead`
  color: #fff;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 800;
  line-height: 30px;
`;
export const Td = styled.td``;
export const Tr = styled.tr`
  background-color: ${getRandomHexColor};
`;
export const Th = styled.th``;
export const Tr2 = styled.tr`
  background-color: wheat;
`;
export const Body = styled.tbody`
  font-size: 15px;
  font-weight: 300;
  line-height: 30px;
`;
export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
