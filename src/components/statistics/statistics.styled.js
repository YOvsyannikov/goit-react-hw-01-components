import styled from 'styled-components';

export const Statistic = styled.section`
  width: 300px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.55) 10px 10px 5px 0px;
  margin-bottom: 16px;
  margin-left: 10px;
`;
export const Title = styled.h2`
  font-size: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  text-transform: uppercase;
`;
export const StatisticList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const StatisticItem = styled.li`
  text-align: center;
  padding: 8px;
  width: 100%;
  background-color: ${getRandomHexColor};
`;
export const Lable = styled.span`
  display: block;
  margin-bottom: 8px;
  color: rgb(34, 48, 66);
`;
export const Percentage = styled.span`
  color: rgb(34, 48, 66);
  font-weight: 700;
`;
export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
